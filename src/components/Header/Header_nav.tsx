import NavLinks from "./Header_nav_links";

function Navigation(props: { onStateFormChange: Function }) {

  function handleShowForm() {
    props.onStateFormChange();
  }

  return (
    <nav className="navigation">
      <ul className="nav_link_wrapper">
        <li className="nav_item">
          <button id="buttonSearchNav" className="nav_button_search" onClick={handleShowForm}>
            <img className="nav_button_img" src="/img/Search_button.png" alt="Search" />
          </button>
        </li>

        <NavLinks links=
          {
            [
              { link: "#", title: "Home" },
              { link: "#", title: "Live" },
              { link: "#", title: "Music" },
              { link: "#", title: "Charts" },
              { link: "#", title: "Events" },
              { link: "#", title: "Features" },
            ]
          }
        />


        <li className="nav_item">
          <a className="link nav_user_link" href="#">
          <img className="nav_user_img" src="/img/User.png" alt="User" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;