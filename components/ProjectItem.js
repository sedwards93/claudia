import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  margin: 10px;
  @media (max-width: 420px) {
    margin: 10px 0px 10px 0px;
  }
`;

const ImageContainerOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background-color: rgb(24, 23, 23, 0);

  ${ImageContainer}:hover & {
    background-color: rgb(24, 23, 23, 0.8);
  }
`;

const Title = styled.h1`
  color: white;
  opacity: 0;
  transition: 0.5s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const Tagline = styled.p`
  color: white;
  opacity: 0;
  transition: 0.5s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

export default function projectItem({ project }) {
  return (
    <ImageContainer>
      <Image src={project.thumbnail} layout="fill" objectFit="cover" />
      <ImageContainerOverlay>
        <Title>{project.title}</Title>
        <Tagline>{project.tagline}</Tagline>
      </ImageContainerOverlay>
    </ImageContainer>
  );
}
