import { FetchArtist } from "../../ts_files/Search";

function Artist(props: { artist: FetchArtist }) {
  const path = props.artist.image[3]['#text']
    ? props.artist.image[3]['#text']
    : '/img/None_artist.jpg';

  return (
    <a className="link" href={props.artist.url}>
      <article className="about_music">
        <img className="about_music_img" src={path} alt="Preview" />
          <h3 className="about_music_title">{props.artist.name}</h3>
          <span className="about_music_description">{props.artist.listeners} listeners</span>
      </article>
    </a>
  );
}

export default Artist;