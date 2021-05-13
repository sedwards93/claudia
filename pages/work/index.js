import Layout from "../../components/Layout";
import ProjectItem from "../../components/ProjectItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Work() {
  const data = require("../api/work/data.json");
  return (
    <Layout hero={false}>
      <Container>
        {data.projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
}
