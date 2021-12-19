const skipAdButtonClass = "ytp-ad-skip-button ytp-button";
const bannerClass = "video-ads ytp-ad-module";

function skipAds() {

    // skip Ads
    let skipAdButtons = document.getElementsByClassName(skipAdButtonClass);
    for (let index = 0; index < skipAdButtons.length; index++) {
        console.log("skip Ads");
        skipAdButtons[index].click();
    }

    // hide banner
    let banners = document.getElementsByClassName(bannerClass);
    for (let index = 0; index < banners.length; index++) {
        if (!isHidden(banners[index])) {
            console.log("hide banner");
            banners[index].style.display = 'none';
        }
    }
}

let timeoutId = 0;

function init() {
    timeoutId = setTimeout(function () {
        skipAds();
        init();
    }, 1500);
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

init();