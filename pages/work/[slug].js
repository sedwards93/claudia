import Layout from "../../components/Layout";
import projects from "../api/work/data.json";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  margin: 10px;
  height: 470px;
  width: 830px;
  @media (max-width: 840px) {
    height: 340px;
    width: 600px;
  }
  @media (max-width: 610px) {
    height: 225px;
    width: 400px;
  }
  @media (max-width: 410px) {
    height: 170px;
    width: 300px;
  }
`;

const TextContainer = styled.div`
  color: white;
  width: 830px;
  font-size: 12px;
  line-height: 0.6;
  @media (max-width: 830px) {
    width: 600px;
  }
  @media (max-width: 610px) {
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 300px;
  }
`;
export default function ProjectPage({ project }) {
  return (
    <Layout hero={false}>
      <Container>
        <VideoContainer>
          <iframe
            src={project.videoUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p></p>
        </VideoContainer>
        <TextContainer>
          {project.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </TextContainer>
      </Container>
    </Layout>
  );
}

ProjectPage.getInitialProps = ({ query }) => {
  let project;
  for (let i = 0; i < projects.projects.length; i++) {
    if (projects.projects[i].slug === query.slug) {
      project = projects.projects[i];
    }
  }
  return {
    project: project,
  };
};
