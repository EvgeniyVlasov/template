import { Link } from "../../ts_files/Component";

function NavLinks(props: { links: Link[] }) {
  return (
    <>
      {
        props.links.map(item => {
          return <li key={item.title} className="nav_item">
            <a className="link nav_link" href={item.link}>
              {item.title}
            </a>
          </li>
        })
      }
    </>
  );
}

export default NavLinks;