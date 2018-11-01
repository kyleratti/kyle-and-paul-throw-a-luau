var objPic = document.getElementById("action-pic");

var tblBorderTypes = [
    "dotted",
    "inset",
    "dashed",
    "solid",
    "double",
    "groove"
]

function getRandomBorderStyle() {
    return tblBorderTypes[Math.floor(Math.random() * tblBorderTypes.length)];
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`; // lifted from https://stackoverflow.com/a/5365036
}

function randomizeBorderStyles() {
    objPic.style["border-top-style"] = getRandomBorderStyle();
    objPic.style["border-top-color"] = getRandomColor();

    objPic.style["border-bottom-style"] = getRandomBorderStyle();
    objPic.style["border-bottom-color"] = getRandomColor();

    objPic.style["border-left-style"] = getRandomBorderStyle();
    objPic.style["border-left-color"] = getRandomColor();

    objPic.style["border-right-style"] = getRandomBorderStyle();
    objPic.style["border-right-color"] = getRandomColor();

    objPic.style["background-color"] = getRandomColor();
}

setInterval(randomizeBorderStyles, 500);
