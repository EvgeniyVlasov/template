import React from "react";
import { Artist, FetchArtist } from "../../ts_files/Music";
import HotMusic from "./Music_hot";

class HotMusicSection extends React.Component<{}, { hotMusic: Artist[] }> {
  private apiKey = '5fa6bc5a3640d53b276a3732b96e7f1a';

  constructor(props: {}) {
    super(props);
    this.state = { hotMusic: [] };
  }

  async addTagsArtists(artists: FetchArtist[]):Promise<Artist[]> {
    const artistsWithTags: Artist[] = [];

    for (const artist of artists) {
      const urlTrack = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${artist.name}&api_key=${this.apiKey}&format=json`;
      const response = await fetch(urlTrack);
      const tags = await response.json();
      const artitsWithTag = { ...artist } as Artist;
      try {
        artitsWithTag.tags = tags['toptags']['tag'].slice(0, 3);
      } catch {
        artitsWithTag.tags = []
      }
      artistsWithTags.push(artitsWithTag);
    }

    return artistsWithTags;
  }

  async fetchTopArtists(): Promise<FetchArtist[]> {
    const urlTopArtists = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${this.apiKey}&format=json&limit=12`;
    const response = await fetch(urlTopArtists);
    const artistsJson = await response.json();
    return artistsJson['artists']['artist'];
  }

  async componentDidMount() {
    const topArtists = await this.fetchTopArtists();
    const artistsWithTags = await this.addTagsArtists(topArtists);
    this.setState({ hotMusic: artistsWithTags });
  }

  render() {
    return (
      <section className="section">
        <h2 className="title_center_hot">Hot right now</h2>
        <div className="section_hot_music">
          {
            this.state.hotMusic.map(item => {
              return <HotMusic key={item.name} artist={item} />
            })
          }
        </div>
      </section>
    );
  }

}
export default HotMusicSection;