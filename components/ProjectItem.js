import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  margin: 10px;
  z-index: 1;
  @media (max-width: 420px) {
    margin: 10px 0px 10px 0px;
  }
`;

const ImageContainerOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background-color: rgb(24, 23, 23, 0);

  ${ImageContainer}:hover, ${ImageContainer}:active & {
    background-color: rgb(24, 23, 23, 0.8);
    cursor: pointer;
  }
`;

const Title = styled.h1`
  color: white;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
  opacity: 0;
  transition: 0.5s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const Tagline = styled.p`
  color: white;
  margin-left: 30px;
  margin-top: -5px;
  font-size: 12px;
  opacity: 0;
  transition: 0.5s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

export default function projectItem({ project }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <ImageContainer>
        <Image
          src={project.thumbnail}
          layout="fill"
          objectFit="cover"
          prioirty="true"
        />
        <ImageContainerOverlay>
          <Title>{project.tagline}</Title>
          <Tagline>{project.tagline2}</Tagline>
        </ImageContainerOverlay>
      </ImageContainer>
    </Link>
  );
}
