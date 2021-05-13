import Image from "next/image";
import styles from "../styles/ProjectItem.module.css";

export default function projectItem({ project }) {
  console.log(project);
  return (
    <div className={styles.imageContainer}>
      <Image className={styles.image} src={project.thumbnail} layout="fill" />
    </div>
  );
}
