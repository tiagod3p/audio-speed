const headerInterval = setInterval(() => {
  const header = document.querySelector("._1R3Un");

  if (header) {
    clearInterval(headerInterval);

    const subtractSpeed = (speed, display) => {
      if (speed > 0) {
        const newSpeed = speed - 0.25;
        display.innerHTML = newSpeed.toFixed(2);
        updateSpeed(newSpeed);
      }
    };

    const addSpeed = (speed, display) => {
      const newSpeed = speed + 0.25;
      display.innerHTML = newSpeed.toFixed(2);
      updateSpeed(newSpeed);
    };

    const updateSpeed = (speed) => {
      const audios = document.querySelectorAll("audio");
      if (!audios) return;

      audios.forEach((audio) => (audio.playbackRate = speed));
    };

    const INITIAL_SPEED = 1;

    const speedContainer = document.createElement("div");
    speedContainer.classList.add("speed-container");
    header.appendChild(speedContainer);

    const subtractButton = document.createElement("button");
    subtractButton.innerHTML = "-";
    subtractButton.classList.add("speed-button");
    speedContainer.appendChild(subtractButton);

    const speedDisplay = document.createElement("span");
    speedDisplay.innerHTML = INITIAL_SPEED.toFixed(2);
    speedDisplay.classList.add("speed-display");
    speedContainer.appendChild(speedDisplay);

    const addButton = document.createElement("button");
    addButton.innerHTML = "+";
    addButton.classList.add("speed-button");
    speedContainer.appendChild(addButton);

    subtractButton.addEventListener("click", () =>
      subtractSpeed(Number(speedDisplay.innerText), speedDisplay)
    );
    addButton.addEventListener("click", () =>
      addSpeed(Number(speedDisplay.innerText), speedDisplay)
    );
  }
}, 1000);
