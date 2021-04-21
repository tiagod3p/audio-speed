const headerInterval = setInterval(() => {
  const header = document.querySelector("._3LtPa");

  if (header) {
    clearInterval(headerInterval);

    const speedContainer = document.createElement("div");
    speedContainer.classList.add("speed-container");
    header.appendChild(speedContainer);

  }
}, 1000);
