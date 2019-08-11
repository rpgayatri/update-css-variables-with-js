window.onload = function() {
  var inputs = document.querySelectorAll(".control input");

  function handleEvent() {
    const suffix = this.dataset.type || "";

    document.documentElement.style.setProperty(
      `--${this.name}`,
      `${this.value}${suffix}`
    );
  }

  inputs.forEach(input => {
    input.addEventListener("change", handleEvent);
    input.addEventListener("mousemove", handleEvent);
  });
};
