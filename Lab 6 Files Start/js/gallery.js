// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

/* STEP 2: Loop 5 times to create the <img> elements */
for (var i = 1; i < 6; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    /* STEP 3: Build event handler for each <img>
       (Commented out because we are using event delegation in STEP 5)

       // newImage.onclick = function(event) {
       //     var imgSrc = event.target.getAttribute('src');
       //     displayImage(imgSrc);
       // }
    */
}

/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
    displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation
Build a click handler on the parent element and capture each target from the event object. */
thumbBar.onclick = function(event) {
    // event.target is the element that was clicked
    if (event.target && event.target.nodeName === 'IMG') {
        var imgSrc = event.target.getAttribute('src');
        displayImage(imgSrc);

        // Lab 6 STEP G: Call the clearWayfinding() function
        clearWayfinding();

        // Lab 6 STEP A: Change the event.target CSS outline property to "5px solid red"
        event.target.style.outline = "5px solid red";

        // Lab 6 STEP B: Change the event.target CSS position property to "relative"
        // Position must be non-static for z-index/top to work.
        event.target.style.position = "relative";

        // Lab 6 STEP C: Set the CSS z-index property to "10"
        event.target.style.zIndex = "10";

        // Additional: lift the clicked thumbnail up slightly and enlarge it a bit
        // so that it clearly appears above the others even if they don't fully overlap.
        event.target.style.transform = "scale(1.08)";
        event.target.style.top = "-6px";
        event.target.style.transition = "all 0.18s ease";
    }
};

// Lab 6 STEP D: Initialize and declare 'thumbImgs' using querySelectorAll to grab all IMG elements inside .thumb-bar
var thumbImgs = document.querySelectorAll('.thumb-bar img');

// Lab 6 STEP E: Build the clearWayfinding() function
function clearWayfinding() {

    // Lab 6 STEP F: Loop through thumbImgs and reset outline and z-index (and other styles)
    for (var i = 0; i < thumbImgs.length; i++) {
        // remove outline completely
        thumbImgs[i].style.outline = "none";

        // reset z-index
        thumbImgs[i].style.zIndex = "0";

        // reset position (clear inline style so stylesheet or default apply)
        thumbImgs[i].style.position = "";

        // reset transform and top so no leftover lift/scale remains
        thumbImgs[i].style.transform = "";
        thumbImgs[i].style.top = "";

        // keep smooth transitions for visual polish
        thumbImgs[i].style.transition = "all 0.18s ease";
    }
}