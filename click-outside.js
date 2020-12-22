const cardButtons = document.querySelectorAll('.card button');
const modal = document.querySelector('.modal-outer');

function openModal(e) {
  console.log(e.currentTarget);
  const btn = e.currentTarget;
  const card = btn.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;

  const myHtml = `
    <div>
        <img src=${imgSrc} alt=${desc} />
        <h2>${desc}</h2>
    </div>
  `;

  const modalInner = modal.querySelector('.modal-inner');
  modalInner.innerHTML = myHtml;
  modal.classList.add('active');
}

function closeModal(e) {
  //   console.log(e.key);
  console.log(!e.target.closest('.modal-inner'));
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside || e.key === 'Escape') {
    modal.classList.remove('active');
  }
}

cardButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

modal.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModal);
