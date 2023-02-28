import { FetchAlbum } from "../../ts_files/Search";

function Album(props: { album: FetchAlbum }) {
  const path = props.album.image[3]['#text']
    ? props.album.image[3]['#text']
    : '/img/track.png';

  return (
    <a className="link" href={props.album.url}>
      <article className="about_music">
        <img className="about_music_img" src={path} alt="Preview" />
          <h3 className="about_music_title">{props.album.name}</h3>
          <span className="about_music_description">{props.album.artist}</span>
      </article>
    </a>
  );
}

export default Album;