
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('play-pause-btn');
playPauseBtn.innerHTML = "<i class='material-icons'> &#xe037;</i>"

//Play or Pause audio
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


