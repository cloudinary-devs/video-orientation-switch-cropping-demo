const videos = [
  {
    id: "video1",
    landscape:
      "https://res.cloudinary.com/demo/video/upload/w_800/dog_orig_qflwce.mp4",
    portrait:
      "https://res.cloudinary.com/demo/video/upload/h_300,w_183,c_fill,g_auto/dog_orig_qflwce.mp4"
  }
];

let orientation = "";

$(document).ready(function () {
  loadSource();
  $(window).on("orientationchange", changeSources);
});

function toggleOrientation() {
  $(window).trigger("orientationchange");
}

function changeVideoSource(video) {
  const domVideo = document.getElementById(video.id);
  const { paused, currentTime } = domVideo;

  domVideo.src = video[orientation];
  domVideo.load();
  domVideo.currentTime = currentTime;
  if (paused) {
    domVideo.pause();
  } else {
    domVideo.play();
  }
}

function changeSources() {
  orientation = orientation === "portrait" ? "landscape" : "portrait";
  videos.forEach((video) => {
    changeVideoSource(video);
  });
}

function loadSource() {
  orientation = window.orientation == 0 ? "portrait" : "landscape";
  videos.forEach((video) => {
    changeVideoSource(video);
  });
}
