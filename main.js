//Songs metadeta
let songs = [
    {
        index : 0,
        name : "Main agar kahoon",
        coverImg : "https://1.bp.blogspot.com/-MZ_o87Skz4Y/XeaUxxGmjEI/AAAAAAAABno/4zX_BwzH0FYSE0YKLGikD-mzxtcz2mAdACLcBGAsYHQ/s1600/main%2Bagar%2Bkahoon%2Bom%2Bsanti%2Bom.jpg",
        src : "Songs/main_agar_kahoon.mp3",
        length : 310,
        artists : "Sonu Nigam | Shreya Ghoshal"
    },
    {
        index : 1,
        name : "Tum sath ho",
        coverImg : "https://i.cdn.newsbytesapp.com/images/l141_24231543313987.jpg",
        src : "Songs/tum_sath_ho.mp3",
        length : 341,
        artists : "Arjit Singh | Alka Yagnik"
    },
    {
        index : 2,
        name : "You Are My Soniya ",
        coverImg : "https://i.ytimg.com/vi/0VWtJqig6bk/maxresdefault.jpg",
        src : "Songs/you_are_my_sonia.mp3",
        length : 345,
        artists : "Sandesh Shandilya | Alka Yagnik | Sonu Nigam"
    }
]

//current playing song
let currentSong = songs[0];
//get music player container
let musicPlayer = document.querySelector(".music-player");
//set song cover photo src to current song (first song)
musicPlayer.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, 0.62), rgba(0, 0, 0, 0.58)), url('${currentSong.coverImg}')`;
//get audio container
let audio = document.getElementById('audio');
//set audio song src to current song (first song)
audio.src = currentSong.src;
//get play and pause button
let playPauseBtn = document.getElementById('play-pause-btn');
playPauseBtn.innerHTML = "<i class='material-icons'> &#xe037;</i>"
//get next song button
let nextSongBtn = document.getElementById('next-btn');
//get previos song button
let previousSongBtn = document.getElementById('previous-btn')

//////Play or Pause audio/////
let isPlaying = false;
playPauseBtn.addEventListener('click',()=>{
    if(!isPlaying){
        isPlaying = true
        playPauseBtn.innerHTML = "<i class='material-icons'>&#xe034;</i>"
        audio.play()
    }else{
        isPlaying = false
        playPauseBtn.innerHTML = "<i class='material-icons'> &#xe037;</i>"
        audio.pause()
    }
})

/////Play next song/////
nextSongBtn.addEventListener('click',()=>{
    //change scr index to next element
    if(currentSong.index < songs.length-1){
        currentSong = songs[currentSong.index+1];
    }else{
        currentSong = songs[0]
    }

    //change src of audio
    audio.src = currentSong.src;
    //change cover photo of songs
    musicPlayer.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, 0.62), rgba(0, 0, 0, 0.58)), url('${currentSong.coverImg}')`;
    //if music player is playing song then play song
    if(isPlaying) audio.play()
})

/////Play previous song/////
previousSongBtn.addEventListener('click',()=>{
    //change scr index to previos element
    if(currentSong.index > 0){
        currentSong = songs[currentSong.index-1];
    }else if(currentSong.index == 0){
        currentSong = songs[songs.length-1]
    }

    console.log(currentSong.index)
    //change src of audio
    audio.src = currentSong.src;
    //change cover photo of songs
    musicPlayer.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, 0.62), rgba(0, 0, 0, 0.58)), url('${currentSong.coverImg}')`;
    //if music player is playing song then play song
    if(isPlaying) audio.play()
})

