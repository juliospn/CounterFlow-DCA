var zoomed = false;

document.querySelectorAll('.image-zoom').forEach(function (element) {
  element.addEventListener('click', function () {
    if (zoomed) {
      this.classList.remove('zoomed');
    } else {
      this.classList.add('zoomed');
    }
    zoomed = !zoomed;
  });
});
