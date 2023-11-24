import Container from "components/container";
import Hero from "components/hero";
import Meta from "components/meta";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="About development activities" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
}
