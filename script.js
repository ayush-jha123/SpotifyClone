console.log("Welcome to spotify")
let songindex = 1
let audioElement = new Audio('songs/1.mp3')
let masterplay = document.getElementById('masterplay')
let gif = document.getElementById('gif')
let progressbar = document.getElementById('progressbar')
let songItems = Array.from(document.getElementsByClassName("songs"))
let mastersong = document.getElementById('mastersongname')
let songs = [
  { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
  { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
  { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" }
  // { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
  //{ songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" }
]
// songItems.forEach((element, i) => {
//   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   element.getElementsByClassName("songname")[0].innertext = songs[i].songName;
// }) g

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById(`${songindex}`).classList.remove('fa-play-circle')
    document.getElementById(`${songindex}`).classList.add('fa-pause-circle')
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    document.getElementById(`${songindex}`).classList.remove('fa-pause-circle')
    document.getElementById(`${songindex}`).classList.add('fa-play-circle')
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
  document.getElementById('time').innertext = audioElement.currentTime
})

// audioElement.addEventListener('timeupdate', () => {
//   progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//   progressbar.value = progress;
// })

// progressbar.addEventListener('change', () => {
//   audioElement.currentTime = (progressbar.value * audioElement.duration) / 100
// })

audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressbar.value = progress;
  document.getElementById('time').innertext = audioElement.currentTime
})

progressbar.addEventListener('change', () => {
  audioElement.currentTime = progressbar.value * audioElement.duration / 100;
  document.getElementById('time').innertext = audioElement.currentTime
})

document.getElementById('next').addEventListener('click', () => {
  document.getElementById(`${songindex}`).classList.remove('fa-pause-circle');
  document.getElementById(`${songindex}`).classList.add('fa-play-circle');
  if (songindex == 8) {
    songindex = 1
  }
  else {
    songindex += 1
  }
  audioElement.currentTime = 0;
  progressbar.value = 0;
  audioElement.src = `songs/${songindex}.mp3`;
  audioElement.play();
  mastersong.innerText = songs[songindex - 1].songName;
  document.getElementById(`${songindex}`).classList.remove('fa-play-circle');
  document.getElementById(`${songindex}`).classList.add('fa-pause-circle');
  document.getElementById('time').innertext = audioElement.currentTime
})

document.getElementById('previous').addEventListener('click', () => {
  document.getElementById(`${songindex}`).classList.remove('fa-pause-circle');
  document.getElementById(`${songindex}`).classList.add('fa-play-circle');
  if (songindex == 1) {
    songindex = 8
  }
  else {
    songindex -= 1
  }
  audioElement.currentTime = 0;
  progressbar.value = 0;
  audioElement.src = `songs/${songindex}.mp3`;
  audioElement.play();
  mastersong.innerText = songs[songindex - 1].songName;
  document.getElementById(`${songindex}`).classList.remove('fa-play-circle');
  document.getElementById(`${songindex}`).classList.add('fa-pause-circle');
  document.getElementById('time').innertext = `${parseInt(audioElement.currentTime)}:00`
})

function makeallplays() {
  Array.from(document.getElementsByClassName('songicon')).forEach((e) => {
    e.classList.remove('fa-pause-circle')
    e.classList.add('fa-play-circle')
  }
  )
}
Array.from(document.getElementsByClassName('songicon')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeallplays()
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    songindex = e.target.id
    audioElement.currentTime = 0;
    progressbar.value = 0;
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.play();
    gif.style.opacity = 1;
    mastersong.innerText = songs[songindex-1].songName;
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
  })
})


