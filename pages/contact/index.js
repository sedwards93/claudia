import Layout from "../../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  padding: 40px;
`;

const Title = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 30px;
`;

const Text = styled.p`
  color: white;
  font-size: 10px;
  margin-top: -15px;
`;
export default function Contact() {
  return (
    <Layout hero={false}>
      <Container>
        <TextContainer>
          <Title>CONTACT</Title>
          <Text>
            <a href="mailto:claudialee72@icloud.com">claudialee72@icloud.com</a>
          </Text>
          <Title>INSTA</Title>
          <Text>
            <a
              href="https://www.instagram.com/claudstagramer/?hl=en-gb"
              target="_blank"
            >
              @claudstagramer
            </a>
          </Text>
        </TextContainer>
      </Container>
    </Layout>
  );
}
