import Header from "../components/Header";
import ProjectDescription from "../components/ProjectDescription";

export default function About() {
  return (
    <>
      <div className="main">
        <div className="nav-desc">
          <Header />
          <ProjectDescription>
            Adam Turner (b. 1994, Missouri) is a photographer and artist working primarily in the Midwestern United States. He has recently participated in Magnum's hybrid long-term workshop on visual storytelling, and is a 2025 participant in Penumbra Foundation's Long Term Program (LTP). As a visual storyteller, he intends to blur the lines between fiction and nonfiction, and to challenge the viewer's inherent preconceptions of photography.
          </ProjectDescription>
          <p className="email">
            adamturner@protonmail.com
          </p>
        </div>
      </div>
    </>
  );
}
