import Header from "../components/Header";
import ProjectDescription from "../components/ProjectDescription";

export default function About() {
  return (
    <>
      <div className="main">
        <div className="nav-desc">
          <Header />
          <ProjectDescription>
            Adam Turner (b. 1994, Missouri) is a photographer and artist working primarily in the Midwestern United States. His work intends to blur the lines between fiction vs. nonfiction, staged vs. candid, and constructed vs. found.
          </ProjectDescription>
        </div>
      </div>
    </>
  );
}
