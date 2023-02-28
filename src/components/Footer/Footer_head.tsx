import FooterHeadLinks from "./Footer_head_links";

function FooterHead() {
  return (
    <section className="footer_head">
      <FooterHeadLinks title="COMPANY" links={
        [{ link: 'https://www.last.fm/about', title: 'About Last.fm' },
        { link: 'https://www.last.fm/about/contact', title: 'Contact Us' },
        { link: 'https://www.last.fm/about/jobs', title: 'Jobs' }]}
      />

      <FooterHeadLinks title="HELP" links={
        [{ link: 'https://www.last.fm/about/trackmymusic', title: 'Track My Music' },
        { link: 'https://support.last.fm/', title: 'Community Support' },
        { link: 'https://www.last.fm/help/guidelines', title: 'Community Guidelines' },
        { link: 'https://www.last.fm/help/faq', title: 'Help' }]}
      />

      <FooterHeadLinks title="GOODIES" links={
        [{ link: 'https://www.last.fm/about/trackmymusic', title: 'Dowland Scrobbler' },
        { link: 'https://www.last.fm/api', title: 'Dowland API' },
        { link: 'https://www.last.fm/music/+free-music-downloads', title: 'Free Music Downloads' },
        { link: 'https://store.last.fm/', title: 'Merchandise' }]}
      />

      <FooterHeadLinks title="ACCOUNT" links={
        [{ link: 'https://www.last.fm/inbox', title: 'Inbox' },
        { link: 'https://www.last.fm/settings', title: 'Settings' },
        { link: 'https://www.last.fm/pro', title: 'Last.fm Pro' },
        { link: '#', title: 'Logout' }]}
      />

      <FooterHeadLinks title="FOLLOW US" links={
        [{ link: 'https://www.facebook.com/lastfm', title: 'Facebook' },
        { link: 'https://twitter.com/lastfm', title: 'Twitter' },
        { link: 'https://www.instagram.com/last_fm', title: 'Instagram' },
        { link: 'https://www.youtube.com/user/lastfm', title: 'YouTube' }]}
      />
    </section>
  );
}

export default FooterHead;