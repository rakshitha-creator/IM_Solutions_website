const words = ['VENTURE', 'RISE', 'DARE'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typeSpeed = 120;
const deleteSpeed = 80;
const delayAfterWord = 1000;

function typeWord() {
  const el = document.getElementById('changing-word');
  if (!el) return;

  const word = words[wordIndex];

  if (isDeleting) {
    el.textContent = word.substring(0, letterIndex--);
  } else {
    el.textContent = word.substring(0, letterIndex++);
  }

  let timeout = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && letterIndex === word.length + 1) {
    isDeleting = true;
    timeout = delayAfterWord;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeWord, timeout);
}

window.addEventListener('DOMContentLoaded', typeWord);
