const currentTime = () => {
    const timeEle = document.querySelector('[data-testid="currentTime"]');
    const time = new Date();
    timeEle.textContent = time.toUTCString();
}

currentTime();
setInterval(currentTime, 1000);