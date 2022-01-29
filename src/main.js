gcanv.width = window.innerWidth;
gcanv.height = window.innerHeight;

mainmenuBtnPlay.onclick = () => {
  if (fadeOut(1)) {
    setTimeout(() => {
      startGame();
    }, 1500)
  }
}
setInterval(loop, 10);