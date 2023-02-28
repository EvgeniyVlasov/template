import { Link } from "../../ts_files/Component";

function HeadNav(props: { links: Link[] }) {
  return (
    <ul className="main_nav">
      {
        props.links.map(link => {
          const classes = `main_nav_item ${ link.title === 'Top Results' ? 'main_nav_link_active' : ''}`
          return <li key={link.title} className={classes}>
            <a className="link main_nav_link" href={link.link}>
              {link.title}
            </a>
          </li>
        })
      }
    </ul>
  );
}

export default HeadNav;