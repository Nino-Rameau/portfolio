import { Title, Meta, Link as MetaLink } from "react-head";

function SEO({ title, description, keywords, canonical }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {description && <Meta name="description" content={description} />}
      {<Meta name="author" content="Nino Rameau" />}
      {keywords && <Meta name="keywords" content={keywords} />}
      {canonical && <MetaLink rel="canonical" href={canonical} />}
    </>
  );
}

export default SEO;
