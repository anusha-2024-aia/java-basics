const light = document.querySelector('.status-light');
const statusText = document.querySelector('.status-text');

if (light && statusText) {
  setInterval(() => {
    light.classList.toggle('is-on');
    statusText.textContent = light.classList.contains('is-on') ? 'Operational' : 'Standby';
  }, 1000);
}
