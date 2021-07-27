export const videos = [
  {
    title: "Beyond Lambda: Introducing Delta Architecture",
    description:
      "Online Tech Talk with Denny Lee, Developer Advocate @ Databricks Lambda architecture is a popular technique where records are processed by a batch system and streaming system in parallel. The results are then combined during query time to provide a complete answer.",
    thumbnail:
      "/images/videos/beyond-lambda-introducing-delta-architecture.jpg",
    url: "https://www.youtube.com/watch?v=FePv0lro0z8",
  },
  {
    title: "Getting Data Ready for Data Science with Delta Lake and MLflow",
    description:
      "Online Tech Talk with Denny Lee, Developer Advocate @ Databricks One must take a holistic view of the entire data analytics realm when it comes to planning for data science initiatives. Data engineering is a key enabler of data science helping furnish reliable, quality data in a timely fashion.",
    thumbnail:
      "/images/videos/getting-data-ready-for-data-science-with-delta-lake-and-mlflow.jpg",
    url: "https://www.youtube.com/watch?v=hQaENo78za0",
  },
  {
    title: "The Genesis of Delta Lake: An Interview with Burak Yavuz",
    description:
      "We're re-igniting the Spark Online Meetup! In this live meetup, Denny Lee (Engineer and Developer Advocate at Databricks) interviews Delta Lake engineer Burak Yavuz.",
    thumbnail:
      "/images/videos/the-genesis-of-delta-lake-an-interview-with-burak-yavuz.png",
    url: "https://www.youtube.com/watch?v=F-5t3QCI96g",
  },
  {
    title:
      "Reliability and Data Quality for Data Lakes and Apache Spark by Michael Armbrust",
    description:
      "Delta Lake is an open source storage layer that brings reliability to data lakes. Delta Lake offers ACID transactions, scalable metadata handling, and unifies streaming and batch data processing. It runs on top of your existing data lake and is fully compatible with Apache Spark APIs.",
    thumbnail:
      "/images/videos/reliability-and-data-quality-for-data-lakes-and-apache-spark-by-michael-armbrust.jpg",
    url: "https://www.youtube.com/watch?v=GGkRwVHq-Zc",
  },
  {
    title:
      "LoyaltyOne Simplifies and Scales Data & Analytics Pipelines With Delta Lake",
    description:
      "Learn how LoyaltyOne uses Data Lake to simplify and scale data and analytics pipelines.",
    thumbnail:
      "/images/videos/loyaltyone-simplifies-and-scales-data-and-analytics-pipelines-with-delta-lake.jpg",
    url: "https://vimeo.com/369681277",
  },
  {
    title:
      "Petabytes, Exabytes, and Beyond Managing Delta Lakes for Interactive Queries at Scale",
    description:
      "Data production continues to scale up and the techniques for managing it need to scale too. Building pipelines that can process petabytes per day in turn create data lakes with exabytes of historical data. At Databricks, we help our customers turn these data lakes into gold mines of valuable information using Apache Spark.",
    thumbnail:
      "/images/videos/petabytes-exabytes-and-beyond-managing-delta-lakes-for-interactive-queries-at-scale.jpg",
    url: "https://www.youtube.com/watch?v=k8ERCB5ThrI",
  },
  {
    title: "Training: Building Reliable Data Lakes at Scale with Delta Lake",
    description:
      "Most data practitioners grapple with data reliability issues—it's the bane of their existence. Data engineers, in particular, strive to design, deploy, and serve reliable data in a performant manner so that their organizations can make the most of their valuable corporate data assets.",
    thumbnail:
      "/images/videos/training-building-reliable-data-lakes-at-scale-with-delta-lake.jpg",
    url: "https://www.youtube.com/watch?v=KUANuag9s40",
  },
  {
    title: "Designing ETL Pipelines with Structured Streaming and Delta Lake",
    description:
      "Structured Streaming has proven to be the best platform for building distributed stream processing applications. Its unified SQL/Dataset/DataFrame APIs and Spark's built-in functions make it easy for developers to express complex computations. Delta Lake, on the other hand, is the best way to store structured data because it is a open-source storage layer that brings",
    thumbnail:
      "/images/videos/designing-etl-pipelines-with-structured-streaming-and-delta-lake.jpg",
    url: "https://www.youtube.com/watch?v=eOhAzjf__iQ",
  },
  {
    title: "ACID ORC, Iceberg, and Delta Lake",
    description:
      "The reality of most large scale data deployments includes storage decoupled from computation, pipelines operating directly on files and metadata services with no locking mechanisms or transaction tracking. For this reason, attempts at achieving transactional behavior, snapshot isolation, safe schema evolution or performant support for CRUD operations has always been marred with tradeoffs.",
    thumbnail: "/images/videos/acid-orc-iceberg-and-delta-lake.jpg",
    url: "https://www.youtube.com/watch?v=iRXNtsayENg",
  },
  {
    title: "Building an AI Powered Retail Experience with Delta Lake",
    description:
      "Zalando SE is Europe's leading online fashion platform and connects customers, brands and partners. With millions of visitors each month, we have petabytes of purchase, click-stream, product and other data in our data lake. This data is crucial to powering insights on shopper behavior and driving an AI-first strategy to improve site engagement.",
    thumbnail:
      "/images/videos/building-an-ai-powered-retail-experience-with-delta-lake.jpg",
    url: "https://www.youtube.com/watch?v=YmG7bYMJVg4",
  },
  {
    title:
      "Winning the Audience with AI: How Comcast Built An Agile Data And Ai Platform At Scale",
    description:
      "Comcast is the largest cable and internet provider in the US, reaching more than 30 million customers. Over the last couple years, Comcast has transformed the customer experience using machine learning. For example, Comcast uses machine learning to power the X1 voice remote, which was used over 8B times in 2018 by our customers to...",
    thumbnail:
      "/images/videos/winning-the-audience-with-ai-how-comcast-built-an-agile-data-and-ai-platform-at-scale.jpg",
    url: "https://www.youtube.com/watch?v=5sDH_dJqoYo",
  },
  {
    title: "Building Data Pipelines Using Structured Streaming and Delta Lake",
    description:
      "Given the rise of IoT and other real-time sources and businesses’ desire to draw fast insights, there is a growing imperative for data professionals to build streaming data pipelines. Given the plethora of different tools and frameworks in the big data community, it is challenging to architect such pipelines correctly that achieve the desired performance...",
    thumbnail:
      "/images/videos/building-data-pipelines-using-structured-streaming-and-delta-lake.jpg",
    url: "https://vimeo.com/359601962",
  },
  {
    title: "Simplify and Scale Data Engineering Pipelines",
    description:
      "A common data engineering pipeline architecture uses tables that correspond to different quality levels, progressively adding structure to the data: data ingestion (“Bronze” tables), transformation/feature engineering (“Silver” tables), and machine learning training or prediction (“Gold” tables). Combined, we refer to these tables as a “multi-hop” architecture. It allows data engineers to build a pipeline that...",
    thumbnail:
      "/images/videos/simplify-and-scale-data-engineering-pipelines.jpg",
    url: "https://vimeo.com/356260747",
  },
  {
    title: "Delta Architecture, a Step Beyond Lambda Architecture",
    description:
      "Lambda architecture is a popular technique where records are processed by a batch system and streaming system in parallel. The results are then combined during query time to provide a complete answer. Strict latency requirements to process old and recently generated events made this architecture popular. The key downside to this architecture is the development...",
    thumbnail:
      "/images/videos/delta-architecture-a-step-beyond-lambda-architecture.jpg",
    url: "https://vimeo.com/352555281",
  },
  {
    title: "Making Apache Spark™ Better with Delta Lake",
    description:
      "Apache Spark™ is the dominant processing framework for big data. Delta Lake adds reliability to Spark so your analytics and machine learning initiatives have ready access to quality, reliable data. This webinar covers the use of Delta Lake to enhance data reliability for Spark environments. Topics areas include: The role of Apache Spark in big...",
    thumbnail: "/images/videos/making-apache-spark-better-with-delta-lake.jpg",
    url: "https://vimeo.com/349735743",
  },
  {
    title: "Getting Data Ready for Data Science",
    description:
      "One must take a holistic view of the entire data analytics realm when it comes to planning for data science initiatives. Data engineering is a key enabler of data science helping furnish reliable, quality data in a timely fashion. Delta Lake, an open source storage layer that brings reliability to data lakes can help take...",
    thumbnail: "/images/videos/getting-data-ready-for-data-science.jpg",
    url: "https://vimeo.com/344418211",
  },
  {
    title: "Delta Lake - Open Source Reliability for Data Lakes",
    description:
      "Delta Lake is an open source storage layer that brings reliability to data lakes. Delta Lake provides ACID transactions, scalable metadata handling, and unifies streaming and batch data processing. Delta Lake runs on top of your existing data lake and is fully compatible with Apache Spark APIs. Specifically, Delta Lake offers: ACID transactions on Spark...",
    thumbnail:
      "/images/videos/delta-lake-open-source-reliability-for-data-lakes.jpg",
    url: "https://vimeo.com/338100834",
  },
];
