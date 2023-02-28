import { useContext } from "react";
import HeadNav from "./Head_nav";
import { NameTrackContext } from "./Search";

function Head() {
  const contex = useContext(NameTrackContext);

  return (
    <div className="main_head">
      <h1 className="main_title title">Search results for "{contex.nameTrack}"</h1>
      <HeadNav links=
        {
          [
            { link: '#', title: 'Top Results' },
            { link: '#', title: 'Artists' },
            { link: '#', title: 'Albums' },
            { link: '#', title: 'Tracks' }
          ]
        }
      />
    </div>
  );
}

export default Head;