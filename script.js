const pages = document.querySelectorAll('.page');
let current = 0;
let startX = 0;

/* 날짜 */
function setDate() {
  const d = new Date();
  const text = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
  document.getElementById('fortune-date').innerText = text;
  document.getElementById('music-date').innerText = text;
}

/* 콘텐츠 로드 */
fetch('./content.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('fortune-text').innerText = data.fortune;

    document.getElementById('music-link').href =
      `https://www.youtube.com/watch?v=${data.music.youtubeId}`;

    document.getElementById('music-thumb').src =
      `https://img.youtube.com/vi/${data.music.youtubeId}/hqdefault.jpg`;

    document.getElementById('song-info').innerText =
      `${data.music.title} – ${data.music.artist}`;

    document.getElementById('lyrics').innerText = data.music.lyrics;
  })
  .catch(err => {
    console.error('content.json 로드 실패', err);
  });

setDate();

/* 스와이프 */
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    const next = (current + 1) % pages.length;
    pages[current].classList.remove('active');
    pages[current].classList.add('prev');
    pages[next].classList.remove('prev');
    pages[next].classList.add('active');
    current = next;
  }
}, { passive: true });