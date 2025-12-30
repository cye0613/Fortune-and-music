const container = document.getElementById('container');
let page = 0;

fetch('content.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('fortune-title').innerText =
      `${data.date}  Today’s Fortune`;

    document.getElementById('fortune-text').innerText =
      data.fortune;

    document.getElementById('music-title').innerText =
      `${data.date}  Today’s Music`;

    document.getElementById('song-info').innerText =
      `${data.music.title} – ${data.music.artist}`;

    document.getElementById('lyrics').innerText =
      data.music.lyrics;

    document.getElementById('album-img').src =
      data.music.image;

    document.getElementById('music-link').href =
      data.music.youtube;
  });

document.addEventListener('click', () => {
  page = page === 0 ? 1 : 0;
  container.style.transform = `translateX(-${page * 100}vw)`;
});
