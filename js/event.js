// option one On Html file

// option two : add onclick function 
function makeTeal() {
    document.body.style.backgroundColor = "teal";
};

// option three 
const makeTanButton = document.getElementById("make-tan");
makeTanButton.onclick = makeTan;

function makeTan() {
    document.body.style.backgroundColor = "tan";
};
// option three other 
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick =function makePurple(){
    document.body.style.backgroundColor = "purple";
};

// option four 
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink)

function makePink() {
 document.body.style.backgroundColor = "pink";   
}
// option four another
const greenButton = document.getElementById("make-green"); 
greenButton.addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
});
// oftion four final
document.getElementById("make-goldenrod").addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
});
