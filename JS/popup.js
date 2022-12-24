let poped = false;
popup = () => {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("main").style.background = "rgba(0,0,0,1)";
    document.getElementById("pic").style.visibility = "hidden";
    poped = true;
}
popdown = () => {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("main").style.background = "none";
    document.getElementById("pic").style.visibility = "visible";
    poped = false;
}

output = (event) => {
    popdown();
    if (flag) {
        document.getElementById("pic").style.clipPath = "none";
    } else if (flag1) {
        document.getElementById("pic").style.clipPath = "path(var(--heart))";
    } else if (flag2) {
        document.getElementById("pic").style.clipPath = "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)";
    } else if (flag3) {
        document.getElementById("pic").style.clipPath = "circle(50%)";
    } else if (flag4) {
        document.getElementById("pic").style.clipPath = "polygon(0 25%, 100% 25%, 100% 75%, 0 75%)";
    }
    flag = true;
    flag1 = flag2 = flag3 = flag4 = false;
}