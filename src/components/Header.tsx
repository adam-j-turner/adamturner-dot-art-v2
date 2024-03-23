import ProjectLink from "../components/ProjectLink";

export default function Header() {

  return (
    <div className="header">
      <h1>Adam Turner</h1>
        <div className="project-list">
          <ProjectLink path="/ibib">I Believe in Bugs</ProjectLink>
          <ProjectLink path="/">Something</ProjectLink>
        </div>
    </div>
  )
}
