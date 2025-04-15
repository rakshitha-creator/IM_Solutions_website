document.addEventListener('DOMContentLoaded', function() {
    const words = ['VENTURE.', 'RISE.', 'DARE.'];
    let index = 0;
    
    // Change text content every 2 seconds
    setInterval(function() {
      index = (index + 1) % words.length;
      document.getElementById('changing-word').textContent = words[index];
    }, 2000); // Change every 2 seconds
  });
  