// Toggle Gallery Visibility
document.getElementById('view-gallery').addEventListener('click', () => {
    const photoGrid = document.querySelector('.photo-grid');
    photoGrid.classList.toggle('active');
  });
  
  // Load Games
  document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
      const game = button.parentElement.getAttribute('data-game');
      const gameContainer = document.getElementById('game-container');
  
      // Clear previous game content
      gameContainer.innerHTML = '';
  
      // Load the selected game
      switch (game) {
        case 'blackjack':
          gameContainer.innerHTML = `
            <iframe src="https://vcjhwebdev.github.io/blackjack" width="100%" height="500" frameborder="0"></iframe>
          `;
          break;
        case 'tictactoe':
          gameContainer.innerHTML = `
            <iframe src="https://codepen.io/your-username/embed/your-pen-id?default-tab=result" width="100%" height="500" frameborder="0"></iframe>
          `;
          break;
        case 'memory':
          gameContainer.innerHTML = `
            <iframe src="https://codepen.io/your-username/embed/your-pen-id?default-tab=result" width="100%" height="500" frameborder="0"></iframe>
          `;
          break;
        default:
          alert('Game not available yet!');
      }
  
      // Show the game container
      gameContainer.style.display = 'block';
    });
  });


  // script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
  
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
  
      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start' // Align to the top of the section
        });
      }
    });
  });