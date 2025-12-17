// Wishlist toggle
document.querySelectorAll('.wishlist').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  });
});

// Review carousel
const reviews = document.querySelectorAll('.review');
let current = 0;

setInterval(() => {
  reviews[current].classList.remove('active');
  current = (current + 1) % reviews.length;
  reviews[current].classList.add('active');
}, 3500);

// Keyboard accessibility
document.querySelectorAll('.product').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      alert('Product clicked');
    }
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {

    // Active state
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');

    const category = filter.dataset.filter;

    // Show / hide cards
    cards.forEach(card => {
      if (card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
