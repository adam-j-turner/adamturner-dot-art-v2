import ProjectLink from "../components/ProjectLink";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <a className="nostyle" href="/">
          Adam Turner
        </a>
      </h1>
      <div className="project-list">
        <ProjectLink path="/ibib">I Believe in Bugs</ProjectLink>
        <ProjectLink path="/About">About</ProjectLink>
      </div>
    </div>
  );
}
