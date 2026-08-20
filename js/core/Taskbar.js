OS.taskbar = {
  clock: document.querySelector('#dock-clock'),

  updateClock() {
    const now = new Date();
    this.clock.dateTime = now.toISOString();
    this.clock.textContent = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  },

  start() {
    this.updateClock();
    window.setInterval(() => this.updateClock(), 1000);
  }
};
