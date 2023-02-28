import { Link } from "../../ts_files/Component"

function FooterHeadLinks(props: { title: string; links: Link[] }) {
  return (
    <div className="footer_col">
      <h4 className="footer_col_title">{props.title}</h4>
      {props.links.map(
        item => {
          return <a key={item.title}
            className="link footer_col_link"
            href={item.link}>
            {item.title}
          </a>
        }
      )}
    </div>
  );
}

export default FooterHeadLinks;