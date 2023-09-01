const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
let intervals = [];
document.querySelector('.text').onmouseover = (event) => {
  const pTextColor = 'white';
  event.target.style.color = 'black';
  event.target.style.backgroundColor = 'white';
  let iteration = 0,
    letr;
  if (intervals.length > 0) {
    clearInterval(intervals[0]);
    intervals.length = 0;
  }
  intervals.push(
    setInterval(() => {
      if (iteration >= event.target.innerText.length) {
        clearInterval(intervals[0]);
        setTimeout(() => {
          event.target.style.color = 'white';
          event.target.style.backgroundColor = 'black';
        }, 100);
      }

      event.target.innerText = event.target.innerText
        .split('')
        .map((letter, i) => {
          if (i < iteration) {
            return (letr = event.target.dataset.text[i]);
          }
          return (letr = letters[Math.floor(Math.random() * 36)]);
        })
        .join('');

      iteration += 1 / 3;
    }, 40)
  );
};
