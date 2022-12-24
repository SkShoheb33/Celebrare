let flag = true,
    flag1 = false,
    flag2 = false,
    flag3 = false,
    flag4 = false;
changeToOriginal = () => {
    document.getElementById("pic1").style.clipPath = "none";
    flag = true;
    flag1 = flag2 = flag3 = flag4 = false;
}
changeToHeart = () => {
    // let path = "M150 43.4375C125.138 -24.05 0 -14.025 0 88.0375C0 138.887 38.25 206.55 150 275.5C261.75 206.55 300 138.887 300 88.0375C300 -13.4375 175 -24.45 150 43.4375V43.4375Z";
    document.getElementById("pic1").style.clipPath = "path(var(--heart))";
    flag1 = true;
    flag = flag2 = flag3 = flag4 = false;
}
changeToSquare = () => {
    document.getElementById("pic1").style.clipPath = "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)";
    flag2 = true;
    flag1 = flag = flag3 = flag4 = false;
}
changeToCircle = () => {
    // document.getElementById("pic1").style.clipPath = "circle(50%)"
    document.getElementById("pic1").style.clipPath = "circle(50%)";
    flag3 = true;
    flag1 = flag2 = flag = flag4 = false;
}
changeToRectangle = () => {
    document.getElementById("pic1").style.clipPath = "polygon(0 25%, 100% 25%, 100% 75%, 0 75%)";
    flag4 = true;
    flag1 = flag2 = flag3 = flag = false;
}