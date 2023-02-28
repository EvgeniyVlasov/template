import Music from "./Header_music";
import Audio from "./Header_audio"
import FormSearch from "./Header_form_search";
import HeaderFolded from "./Header_folded";
import Navigation from "./Header_nav";
import Controls from "./Header_controls";

import { Link } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);


  function handleHideForm() {
    setIsShowForm(false);
  }

  function handleShowForm() {
    setIsShowForm(true);
  }

  return (
    <header className="header">
      <Audio />

      <Music />

      <div className="header_body">
        <Controls />

        <a className="header_logo" href="#">
          <img className="logo_img" src="/img/LastFM_logo.png" alt="Home" />
        </a>

        <Navigation onStateFormChange={handleShowForm} />

        <HeaderFolded />
      </div>

      <FormSearch stateForm={isShowForm} onStateFormChange={handleHideForm} />
    </header>
  );
}

export default Header;