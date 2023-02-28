import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSearch() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function handleNameMusic(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trackName = inputValue.trim();

    if (trackName) {
      navigate(`/search/${trackName}`);
      window.location.reload();
    }

  }

  function handleClear() {
    setInputValue('');
  }

  return (
    <form className="main_form" action="#" onSubmit={handleSubmitForm}>
      <input className="main_form_input" type="text" placeholder="Search for music..."
        value={inputValue} onChange={handleNameMusic} tabIndex={1} />

      <button className="main_form_button" type="button" onClick={handleClear}>
      <img className="main_form_button_img" src="/img/Search_close.png" alt="Search close" />
      </button>

      <span className="form_separator"></span>

      <button className="main_form_button" type="submit">
      <img className="main_form_button_img" src="/img/Search.png" alt="Search" />
      </button>
    </form>
  );
}

export default FormSearch;