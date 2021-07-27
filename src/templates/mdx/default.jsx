import * as React from "react";
import { graphql } from "gatsby";
import SEO from "src/components/SEO";
import PageLayout from "src/components/PageLayout";
import MDX from "src/components/MDX";

const DefaultMdxTemplate = ({ data }) => {
  const { frontmatter = {}, body } = data.mdx;

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <PageLayout>
        <h1>{frontmatter.title}</h1>
        <MDX>{body}</MDX>
      </PageLayout>
    </>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
      }
    }
  }
`;

export default DefaultMdxTemplate;
