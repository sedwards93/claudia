import Layout from "../../components/Layout";
import Cards from "../../components/Cards";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;
export default function Work() {
  const data = require("../api/work/data.json");
  return (
    <Layout hero={false}>
      <Container>
        <Cards data={data} />
      </Container>
    </Layout>
  );
}
