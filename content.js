const headerInterval = setInterval(() => {
  const header = document.querySelector("._3LtPa");

  if (header) {
    clearInterval(headerInterval);

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
  }
}, 1000);
