async function myFunc() {
    try {
        let trackName = document.getElementById("inputField");
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName.value}&api_key=193c5662a2e632181c0f8a89984bdf7c&format=json`);
        let artist;
        if (response.status === 200) {
            const data = await response.json();
            artist = data.results.trackmatches.track[0].artist;
        } else {
            throw new Error('Something went wrong');
        }

        let item = document.createTextNode(artist);
        body.appendChild(item);
    } catch(err) {
        console.error(err);
    }
}