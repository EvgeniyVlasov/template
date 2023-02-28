import { Tag } from "../../ts_files/Music";

function PopularTags(props: { tags: Tag[] }) {
  return (
    <ul className="popular_tags">
      {
        props.tags.map(tag => {
          return <li key={tag.name} className="popular_tags_item">
            <a href={tag.url} className="link tag_music">{tag.name}</a>
          </li>
        })
      }
    </ul>
  );
}

export default PopularTags;
