import HotMusicSection from "./Music_hot_section";
import PopularMusicSection from "./Music_section_popular";

function Music() {
  return (
    <main className="main">
      <div className="wrapper">
        <h1 className="main_title title_center">Music</h1>
        <HotMusicSection />

        <PopularMusicSection />
      </div>
    </main>
  );
}

export default Music;
