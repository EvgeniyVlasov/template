import { TrackInfo } from "../../ts_files/Search";

function Track(props: { track: TrackInfo }) {
  const path = props.track.album !== undefined && props.track.album.image[0]['#text'] !== ''
    ? props.track.album.image[0]['#text']
    : '/img/Note.png';

  function getTime(duration: number) {
    const durationSeconds = duration / 1000;

    let seconds = (durationSeconds % 60).toString();
    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }
    const time = `${Math.trunc(durationSeconds / 60)}:${seconds}`;
    if (time !== '0:00') {
      return time;
    } else {
      return '';
    }
  }

  return (
    <li className="list_track_item">
      <div className="list_track_content">
        <a className="list_track_img" href="#">
        <img className="track_img" src="/img/Play_button.png" alt="Play" />
        </a>
        <img className="list_track_img" src={path} alt="Preview" />
        <a className="list_track_img" href="#">
        <img className="track_img_fav" src="/img/Favourite_button.png" alt="Add to favourites" />
        </a>
        <h3 className="list_track_music_name"><a className="link" href={props.track.url}>{props.track.name}</a></h3>
      </div>
      <span className="list_track_author"><a className="link" href={props.track.artist.url}>{props.track.artist.name}</a></span>
      <time className="list_track_time">{getTime(+props.track.duration)}</time>
    </li>
  );
}

export default Track;