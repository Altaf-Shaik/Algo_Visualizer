//array size (Actual array size and range controller)
let array_slider_val = document.getElementById("array_size");
let actual_array_size = array_slider_val.value;

// value of range slider
let value_of_range = document.querySelector(".range-val");
value_of_range.innerHTML = actual_array_size;

//speed (Actual speed and range controller)
let speed_val = document.getElementById("array_speed");
let actual_speed = speed_val.value;

// value of speed slider
let value_of_speed_slider = document.querySelector(".time-range-val");
value_of_speed_slider.innerHTML = "0.1 sec";

//generate array
let generate_array_btn = document.getElementById("array_generate");

// To disable buttons while algo is playing
let which_algo = document.querySelectorAll(".all-algorithms button");


// Bars (Divs)
let bars_container = document.getElementById("array_container");
let bar_height = [];  // Actual height of each bar will be stored here
// let bars = []; // collection of bars will be stored in this array

array_slider_val.addEventListener("input", updateArraySize);
generate_array_btn.addEventListener("click", generateArray);
generateArray(); // This is initial function call

function generateArray() {
    for (let i = 0; i < actual_array_size; ++i) {
        bar_height[i] = Math.floor(Math.random() * 15) + 1;
    }
    generateBars();
}

function generateBars(move) {
    bars_container.innerHTML = "";
    for (let i = 0; i < actual_array_size; ++i) {
        const bars = document.createElement("div");
        bars.style.height = bar_height[i] * 24 + "px";
        bars.classList.add("bars");
        bars_container.appendChild(bars);
        if (actual_array_size <= 20) {
            bars.innerHTML = Math.floor(bar_height[i]);
        }
        if(move && move.indices.includes(i)) {
            bars.style.backgroundColor = 
                move.type === "swap" ? "red" : "blue";
        }
    }
}

function updateArraySize() {
    actual_array_size = array_slider_val.value;
    value_of_range.innerHTML = actual_array_size;
    generateArray();
}


//To block the button clicks
function disableButtons() {
    for (let i = 0; i < to_disable.length; ++i) {
        to_disable[i].classList = [];
        to_disable.disabled = true;
        array_slider_val.disabled = true;
        speed_val.disabled = true;
        generate_array_btn.disabled = true;
    }
}

// Calling the actual sorting function
for (let i = 0; i < which_algo.length; ++i) {
    which_algo[i].addEventListener("click", callAlgo);
}
function callAlgo() {
    // disableButtons();
    const copy = [...bar_height];
    switch (this.innerHTML) {
        case "Bubble":
            let moves_of_bubble = Bubble(copy);
            animateBars(moves_of_bubble);
            break;
        case "Selection":
            let moves_of_selection = SelectionSort(copy);
            animateBars(moves_of_selection);
            break;
        case "Insertion":
            let moves_of_insertion = Insertion(copy);
            animateBars(moves_of_insertion);
            break;
    }
}