import { Link, useLocation } from 'react-router-dom';

export default function ProjectLink({ path, children }) {
  let className = 'project-link';
  if (useLocation().pathname == path) {
    className += ' project-link-selected'
  }

  return (
    <>
      <Link to={path} className={className}>
        {children}
      </Link>
    </>
  )
}
