import * as React from "react";

import OneColumnLayout from "src/templates/mdx/components/OneColumnLayout";

import PageLayout from "src/components/PageLayout";
import { graphql } from "gatsby";
import SEO from "src/components/SEO";
import Section from "src/components/Section";
import { TypographyContainer } from "src/components/Typography";
import MDX from "src/components/MDX";
import styled from "styled-components";

const PostMeta = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 0 0 ${(props) => props.theme.spacing.md};
`;

const UserStoriesMdxTemplate = ({ data, children }) => {
  const { frontmatter = {} } = data.mdx;
  const { title, author } = frontmatter;

  const renderPostMeta = () => <PostMeta>{author}</PostMeta>;

  return (
    <PageLayout>
      <OneColumnLayout>
        <Section
          title={title}
          primary
          container={false}
          subtitle={renderPostMeta}
        >
          <TypographyContainer>
            <MDX>{children}</MDX>
          </TypographyContainer>
        </Section>
      </OneColumnLayout>
    </PageLayout>
  );
};

export const Head = ({ data }) => {
  const { frontmatter = {}, fields } = data.mdx;
  const { title, description, thumbnail } = frontmatter;
  const { slug } = fields;

  return (
    <SEO
      title={title}
      description={description}
      slug={slug}
      thumbnailPath={
        thumbnail?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
      }
    />
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default UserStoriesMdxTemplate;
