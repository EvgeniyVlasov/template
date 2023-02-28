import FooterBodyLinks from "./Footer_body_links";
import FooterLogo from "./Footer_logo";

function FooterBody() {
  return (
    <section className="footer_body">
      <div className="wrapper">
        <div className="footer_body_content">
          <FooterBodyLinks />
          <FooterLogo />
        </div>
      </div>
    </section>
  );
}

export default FooterBody;