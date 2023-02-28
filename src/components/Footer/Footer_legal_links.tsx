import { Link, LinkCopyright } from "../../ts_files/Component";

function LegalLinks(props: {
  copyright: LinkCopyright,
  legalLinks: Link[]
}) {
  return (
    <ul className="footer_legal footer_list">
      <li className="footer_list_item">
        <a className="link footer_list_link" href={props.copyright.link}>
          {props.copyright.title}
        </a>
        © {props.copyright.copyright}
      </li>
      {
        props.legalLinks.map(item => {
          return <li key={item.title} className="footer_list_item">
            <a className="link footer_list_link" href={item.link}>
              {item.title}
            </a>
          </li>
        })
      }
    </ul>
  );
}

export default LegalLinks;