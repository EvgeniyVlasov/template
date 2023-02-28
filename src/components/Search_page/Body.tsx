import { useContext } from "react";
import FormSearch from "./Form_search";
import { NameTrackContext } from "./Search";
import SectionAlbums from "./Section_albums";
import SectionArtists from "./Section_artists";
import SectionTracks from "./Section_tracks";

function Body() {
  const nameTrack = useContext(NameTrackContext);

  return (

    <div className="main_content">
      <FormSearch />

      <SectionArtists />

      <SectionAlbums />

      <SectionTracks />
    </div>


  );
}

export default Body;
