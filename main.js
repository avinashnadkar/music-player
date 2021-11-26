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
//get fast forward btn
let fastForwardBtn = document.getElementById('fast-forward-btn')


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
    //draw bars after changing song
    drawBars()
})

/////Play previous song/////
previousSongBtn.addEventListener('click',()=>{
    //change scr index to previos element
    if(currentSong.index > 0){
        currentSong = songs[currentSong.index-1];
    }else if(currentSong.index == 0){
        currentSong = songs[songs.length-1]
    }

    //change src of audio
    audio.src = currentSong.src;
    //change cover photo of songs
    musicPlayer.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, 0.62), rgba(0, 0, 0, 0.58)), url('${currentSong.coverImg}')`;
    //if music player is playing song then play song
    if(isPlaying) audio.play()
    //draw bars after changing song
    drawBars()
})

//Fast forward song by 15 seconds
fastForwardBtn.addEventListener('click',()=>{
    changeTime(audio.currentTime + 15)
})

//change time to current bar
function changeTime(time){
    audio.currentTime = time;
}

////////////////////////Canvas//////////////////////
//create canvas to draw graphics
let canvas = document.getElementById('canv');
//give height and width to canvas

let barCtx = canvas.getContext('2d')
// let midLine = canvas.getContext('2d');
// midLine.beginPath();
// midLine.lineCap = "round";
// midLine.moveTo( 0,canvas.height/2);
// midLine.lineTo(canvas.width, canvas.height/2);
// midLine.stroke();

//Get random number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
 }

//draw bars
//construct bar
class bar {
    constructor(x,y,w,h){
       this.x = x
       this.y = y
       this.w = w
       this.h = h
   }
}

let bars;

function drawBars(){
    //save all bars in array
    bars = [];
    //set bar numbers to current song length (seconds)
    let barsLength = currentSong.length
    //draw bars
    for (let i = 0; i < barsLength; i+=2) {
        let barHeight = getRandomNum(30,50)
        let bar_y_position
    
        if(i <= (barsLength/2)/2 && i > 20){
            bar_y_position = getRandomNum((canvas.height/2)/3,(canvas.height/2)/1.5)
        }else if(i <= barsLength/2 && i >= (barsLength/2)/2){
            bar_y_position = canvas.height/2 - barHeight
        }else if(i >= ((barsLength/2) + ((barsLength/2)/2)) && i <= barsLength){
            bar_y_position = canvas.height/2 - barHeight
        }else{
            bar_y_position = getRandomNum((canvas.height/2)/3,(canvas.height/2)/1.5)
        }
        
       // let newBar = 
        bars.push(new bar(i, bar_y_position, 1, barHeight))
    }
}
 
drawBars()


//Update context
pointerCtx = canvas.getContext('2d');
let pointer = {
    x_position : bars[0].x,
    y_position : 20,
    height : canvas.height/2,
    width : 1,
}

let j = 0
let updateLoop = setInterval(()=>{
        //clear previous context
        //barCtx.clearRect(0, 0, canvas.width, canvas.height)
    if(j <= bars.length-1){
        // barCtx.fillStyle = 'rgb(65, 10, 102)'
        barCtx.fillRect(bars[j].x, bars[j].y, bars[j].w, bars[j].h);
        if(bars[j].x <= pointer.x_position){
            barCtx.fillStyle = 'grey'
        }else{
            barCtx.fillStyle = 'purple'
        }
    }

    if(isPlaying == true){
        barCtx.fillStyle = 'red'
    }

    pointerCtx.fillRect(pointer.x_position,pointer.y_position,pointer.width,pointer.height)
    // pointerCtx.fillStyle = "green"

    //  console.log(bars[j].x, bars[j].y, bars[j].w, bars[j].h)
    if(j>=bars.length-1){
      j= 0
    }else{
        j++
    }

},30)

//Start song from bar position
canvas.addEventListener('click',(event)=>{
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x, 
                    "Coordinate y: " + y);
        let playTime = x/4
        changeTime(playTime )

})
