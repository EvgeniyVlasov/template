import TimeZone from "./Footer_time_zone";
import LanguageLinks from "./Footer_language_links";
import LegalLinks from "./Footer_legal_links";

function FooterBodyLinks() {
  return (
    <div className="footer_body_links">
      <LanguageLinks languageLinks={
        [
          { link: '#', title: 'English' },
          { link: '#', title: 'Deutsch' },
          { link: '#', title: 'Español' },
          { link: '#', title: 'Français' },
          { link: '#', title: 'Italiano' },
          { link: '#', title: '日本語' },
          { link: '#', title: 'Polski' },
          { link: '#', title: 'Português' },
          { link: '#', title: 'Русский' },
          { link: '#', title: 'Svenska' },
          { link: '#', title: 'Türkçe' },
          { link: '#', title: '简体中文' },
        ]
      } />

      <TimeZone />

      <LegalLinks
        copyright={{ copyright: '2022 Last.fm Ltd. All rights reserved', link: 'http://www.cbsinteractive.com/', 
        title: 'CBS Interactive' }}
        legalLinks={
          [
            { link: 'https://www.last.fm/legal/terms', title: 'Terms of Use' },
            { link: 'https://www.last.fm/legal/privacy', title: 'Privacy Policy' },
            { link: 'https://www.last.fm/legal', title: 'Legal Policies' },
            { link: '#', title: 'Cookies Details' },
            { link: 'https://careers.viacomcbs.com/', title: 'Jobs at ViacomCBS' },
            { link: 'http://www.last.fm/', title: 'Last.fm Music' }
          ]
        } />
    </div>
  );
}

export default FooterBodyLinks;