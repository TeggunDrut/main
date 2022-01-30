gcanv.width = window.innerWidth;
gcanv.height = window.innerHeight;
startGame();
mainmenuBtnPlay.onclick = () => {
  // if (fadeOut(1)) {
  //   setTimeout(() => {
  //     startGame();
  //   }, 1500)
  // }
  // startGame();
}
setInterval(loop, 10);