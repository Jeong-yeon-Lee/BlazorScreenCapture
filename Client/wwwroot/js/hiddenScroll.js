var isScrolling;

function scrollTest() {
window.addEventListener('scroll', this.handleScroll, true);
handleScroll = (e) => {
    if (e.target.classList.contains("custom-scroll-hidden") === false) {
        e.target.classList.add("custom-scroll-hidden");
    }
    }
    console.log("스크로로로롤");


    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

     //Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

         //Run the callback
        clearScroll();
        console.log('Scrolling has stopped.');

    }, 66);
  
}

function clearScroll() {
    document.getElementById("scrollBox").classList.remove("custom-scroll-hidden");
    console.log("숨겼당!");
}