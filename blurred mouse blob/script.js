const box = document.querySelector('.box');
document.querySelector('.container').onmousemove = (event) => {
  const { x, y } = event;
  box.animate(
    { left: x + 'px', top: y + 'px' },
    { duration: 400, fill: 'forwards' }
  );
  // box.style.left=x+'px'
  // box.style.top=y+'px'
};
