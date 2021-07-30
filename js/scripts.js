window.onload = function() {

    // Video player
    var video = document.getElementById("the-player");

    // The buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute-unmute");
    var fullScreenButton = document.getElementById("full-screen");

    // The slider bars
    var timeSlider = document.getElementById("time");
    var volumeSlider = document.getElementById("volume");

    // Event listener for the play-pause button
    playButton.addEventListener("click" , function() {
        if (video.paused == true) {
          video.play();
          playButton.innerHTML = "Pause";
          playButton.setAttribute("src", "video/pause.png");
        } else {
          video.pause();
          playButton.innerHTML = "Play";
          playButton.setAttribute("src", "video/play.png");
        }
    });
    
    // Event listener for the mute-unmute button
    muteButton.addEventListener("click", function() {
        if (video.muted == false) {
            video.muted = true;
            muteButton.setAttribute("src", "video/unmute.png");
        } else {
            video.muted = false;
            muteButton.setAttribute("src", "video/mute.png");
        };
    });

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } 
    });

    // Event listener for the timeslider bar
    timeSlider.addEventListener("change" , function() {
        // New time calculation
        var time = video.duration * (timeSlider.value / 100);
        // Vide time update
        video.currentTime = time;
    });

    // Update the timeslider bar as the video plays
    video.addEventListener("timeupdate", function() {
        // Slider value calculation
        var value = (100 / video.duration) * video.currentTime;
        // Slider value update
        timeSlider.value = value;
    })

    // Video pause when time slider handle is being moved
    timeSlider.addEventListener("mousedown", function() {
        video.pause();
    })

    // Event listener for the volumeslider bar  
    volumeSlider.addEventListener("change" , function() {
        video.volume = volumeSlider.value;
    })
 }
