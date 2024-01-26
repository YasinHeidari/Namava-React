let soundBtn = document.querySelector(".soundBtn");
let heroSectionVideo = document.querySelector(".heroSectionSlideVideo");
export default function muteVideo(){
    if (soundBtn.src.match("soundOn")){
            soundBtn.src = "./assets/images/soundOffHeroSection.svg";
            heroSectionVideo.muted = true;
    }else{
        soundBtn.src = "./assets/images/soundOnHeroSection.svg";
        heroSectionVideo.muted = false;
    }
}