import { Artist } from "../../ts_files/Music";
import PopularTags from "./Music_popular_tags";

function HotMusic(props: {artist: Artist}) {
  return (
    <article className="hot_music">
      <a className="link hot_music_link" href={props.artist.url}>
        <img className="hot_music_img" src={props.artist.image[3]["#text"]} />   
        <h3 className="hot_music_title">{props.artist.name}</h3>
      </a>
      <PopularTags tags={props.artist.tags}/>
    </article>
  );
}

export default HotMusic