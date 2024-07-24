document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const likeSection = button.parentElement;
      const likeCountSpan = likeSection.querySelector('.like-count');
      let currentLikes = parseInt(likeCountSpan.textContent);
      currentLikes++;
      likeCountSpan.textContent = currentLikes;
    });
  });
});
