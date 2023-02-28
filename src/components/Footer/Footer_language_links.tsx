import { Link } from "../../ts_files/Component";

function LanguageLinks(props: { languageLinks: Link[] }) {
  return (
    <ul className="footer_list">
      {
        props.languageLinks.map(item => {
          const classes = `footer_list_item ${item.title === 'English' ? 'footer_list_link_active' : ''}`
          return <li key={item.title} className={classes}>
            <a className="link footer_list_link" href={item.link}>
              {item.title}
            </a>
          </li>
        })
      }
    </ul>
  );
}

export default LanguageLinks;