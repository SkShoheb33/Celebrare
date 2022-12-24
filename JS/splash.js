stay = () => {
    document.getElementById('splash').style.display = 'none';
}
const splashTime = setTimeout(stay, 2500);
show = () => {
    document.getElementById('main').style.display = 'block';
}
const showTime = setTimeout(show, 2500);