import { Helmet } from "react-helmet";

const MetaTags = ({ metaTitle, metaDesc, metaKey }) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKey} />
    </Helmet>
  );
};

export default MetaTags;
