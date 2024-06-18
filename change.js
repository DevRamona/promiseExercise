function changeBackground() {
    const colors = ["blue", "red", "green", "yellow", "purple", "orange"];
    const newChange = Math.floor(Math.random()* colors.length);
    const randomly = colors[newChange];
    document.body.style.backgroundColor = randomly;
}
changeBackground();
setInterval(changeBackground, 1000)