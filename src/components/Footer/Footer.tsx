import FooterBody from "./Footer_body";
import FooterHead from "./Footer_head";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <FooterHead />
      </div>

      <FooterBody />
    </footer>
  );
}

export {Footer};