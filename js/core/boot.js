OS.boot = {
  start() {
    if (OS.state.booted) return;

    OS.state.booted = true;
    document.querySelector('#boot-screen').classList.add('is-leaving');
    OS.desktop.show();
  },

  listen() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        event.preventDefault();
        this.start();
      }
    });
  }
};