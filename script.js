const pages = document.querySelectorAll('.page');
let current = 0;

function updateDate() {
  const today = new Date();
  const text = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
  document.getElementById('date1').innerText = text;
  document.getElementById('date2').innerText = text;
}

updateDate();

document.addEventListener('click', () => {
  pages[current].classList.remove('active');
  current = (current + 1) % pages.length;
  pages[current].classList.add('active');
});