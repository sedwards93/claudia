import Layout from "../../components/Layout";
import Cards from "../../components/Cards";
import projects from "../api/work/data.json";

export default function ProjectPage({ project }) {
  console.log(project);
  return <Layout hero={false}></Layout>;
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
