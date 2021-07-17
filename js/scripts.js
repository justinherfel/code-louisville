window.onload = function() {

    // Video player
    var video = document.getElementById("the-player");

    // The buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // The slider bars
    var timeSlider = document.getElementById("time");
    var volumeSlider = document.getElementById("volume");

    // Event listener for the play-pause button
    playButton.addEventListener("click" , function() {
        if (video.paused == true) {
          video.play();
          playButton.innerHTML = "Pause";
          playButton.setAttribute("src", "images/play.svg");
        } else {
          video.pause();
          playButton.innerHTML = "Play";
          playButton.setAttribute("src", "images/pause.svg");
        }
    });
    
    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
        if (video.muted == false) {
            video.muted = true;
            muteButton.innerHTML = "Unmute";
        } else {
            video.muted = false;
            muteButton.innerHTML = "Mute";
        };
    });

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }   
        // Do I need to include moz and webkit?
    });

    // Event listener for the timeslider bar
    timeSlider.addEventListener("change" , function() {
        var time = video.duration * (timeSlider.value / 100);
        video.currentTime = time;
    });

    // Event listener for the volumeslider bar  
    volumeSlider.addEventListener("change" , function() {
        video.volume = volumeSlider.value;
    })
 }

 // https://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
 // notes on how to set up a custom video player



// var bDay;
// var presents;

// function submitForm() {
//     bDay = document.getElementById(yourBday).value;
//     alert("You are " + calculateAge() + " years old!");
//     presents = document.getElementById("numOfPresents").value;
//     alert(quickMaths());
// }

// var bDay;
// function calculateAge() {
//     var your_birthday = new Date(bDay);
//     var today = new Date();
//     return today.getFullYear-your_birthday.getFullYear();
// }

// function quickMaths() {
//     var morePresents = presents+1;
// return presents + " " +  morePresents;
// }