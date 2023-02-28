import { Track } from "../../ts_files/Music";
import PopularTags from "./Music_popular_tags";

function PopularTrack(props: { track: Track }) {
  return (
    <article className="popular_music">
      <img className="popular_music_img" src={props.track.image[1]['#text']} />
      <div className="popular_music_body">
        <a className="link popular_music_link" href={props.track.url}>
          <h3 className="popular_music_title">{props.track.name}</h3>
        </a>
        <a className="link popular_music_link" href={props.track.artist.url}>
          <h4 className="popular_music_author">{props.track.artist.name}</h4>
        </a>
        <PopularTags tags={props.track.tags} />
      </div>
    </article>
  );
}

export default PopularTrack;