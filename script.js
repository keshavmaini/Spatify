console.log("Welcome To Spatify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');

let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songsName: "Na Ji Na - Khan Bhaini  ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songsName: "Ishq - Nirvair Pannu ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songsName: "Andaaz - Nirvair Pannu", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songsName: "Bandook - Nirvair Pannu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songsName: "City of Gold - Nirvair Pannu", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songsName: "Distance Love - Zehr Vibe", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songsName: "Satisfy - Sidhu Moose Wala", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songsName: "Pyar Bolda - Jassa Dhillon", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songsName: "Sifat - Nirvair Pannu", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songsName: "Sun Fer - Khan Bhaini", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songsName;
})

// audio ElemntPLAy ();

// handle play/pause button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

// listen to evwnts

audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle")
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})


