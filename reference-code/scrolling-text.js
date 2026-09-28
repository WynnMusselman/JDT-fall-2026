
// LINES OF SCROLLING TEXT

const scrolling_wrapper = document.getElementById("scrolling-wrapper");
const NUM_LINES = 15; //number of lines of text

const TEXT_OPTIONS = ["HELLO WORLD", "WELCOME TO MY SITE", "MY PROJECTS"];
const COLOR_OPTIONS = ["pink", "cyan", "orange"];

// picks a random number 0-2 for both the binary string and color option arrays
function get_rand_number(){
    let rand_num = Math.floor(Math.random() * 3);
    return rand_num;
}

function create_scrolling_str(){
    for (let i = 0; i < NUM_LINES; i++){
        const scrolling_str = document.createElement("p");
        scrolling_str.className = "scrolling-line";

        //controls the random color and random text for the scrolling lines
        scrolling_str.textContent = TEXT_OPTIONS[get_rand_number()];
        scrolling_str.style.color = COLOR_OPTIONS[get_rand_number()];

        //randomizes animation duration
        scrolling_str.style.animationDuration = `${Math.floor(Math.random() * 40) + 10}s`;
       
        scrolling_wrapper.appendChild(scrolling_str); //adds to existing class
    }
}
create_scrolling_str();