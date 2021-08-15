// All h2 lightblue color. 2
const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
    h2.style.color = "lightblue"
}
// Backpack section background color set. 3
document.getElementById("Backpack-section").style.backgroundColor = "tomato";
// Card border radious add. 4
const allCard = document.getElementsByClassName("card");
for (const card of allCard) {
    card.style.borderRadius = "30px"
};
// Huda log korlam. 5
document.getElementById("huda-log").addEventListener("click", function () {
    console.log("Huda log korlam");
})
// remove-btn. 6
const removeBtn = document.getElementsByClassName("remove-btn")
for (const btn of removeBtn) {
    btn.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

//email-input, submit-btn, disabled
// input @email then enable submit btn. 7
const emailImput = document.getElementById("email-input");

emailImput.addEventListener("keyup", function (event) {
    const submitBtn = document.getElementById("submit-btn");
    if (event.target.value == "@email") {
        submitBtn.removeAttribute("disabled");
    }
    else {
        submitBtn.setAttribute("disabled", true)
    }
})
emailImput.addEventListener("change", function (event) {
    console.log(event.target);
});

//Enter mouse on bag 2 and change image and out mouse on bag to and change bag again. 8
function changeImg() {
    const changeImg = document.getElementById("img2");
    changeImg.src = "images/bags/bag-1.png";
};
function reChangeImg() {
    document.getElementById("img2").src = "images/bags/bag-2.png"
}

//bubble and stopPropagetion add. 9
const notClick = document.getElementsByClassName("no-click");
for (const element of notClick) {
    element.addEventListener("click", function (event) {

        event.stopPropagation()
    })
}

document.getElementById("Subscribe").addEventListener("click", function () {
    document.getElementById("Subscribe").style.backgroundColor = "hotpink"

})