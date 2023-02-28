import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSearch(props: { stateForm: boolean; onStateFormChange: Function }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();


  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trackName = inputValue.trim();

    if (trackName) {
      navigate(`/search/${trackName}`);
      handleHideForm();
    }
    
    setInputValue('');
  }

  function handleHideForm() {
    setInputValue('');
    props.onStateFormChange();
  }

  function handleNameMusic(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const buttonClass = `form_search ${props.stateForm ? 'shown_form' : ''}`;

  return (
    <form className={buttonClass} action="#" onSubmit={handleSubmitForm}>
      <input className="form_search_input" type="text" placeholder="Search for music..."
        value={inputValue} onChange={handleNameMusic} />

      <button className="form_search_button" type="button" onClick={handleHideForm}>
      <img className="form_search_button_img" src="/img/Search_cancel.png" alt="Cancel search" />
      </button>

      <button className="form_search_button" type="submit">
      <img className="form_search_button_img" src="/img/Search_submit.png" alt="Submit search" />
      </button>
    </form>
  );
}

export default FormSearch;
