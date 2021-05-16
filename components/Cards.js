import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";

const MainContainer = styled.div`
  display: flex;
  background: yellow;

  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function Cards({ data }) {
  return (
    <MainContainer>
      <CardsContainer>
        <CardsWrapper>
          {data.projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </CardsWrapper>
      </CardsContainer>
    </MainContainer>
  );
}

export default Cards;
