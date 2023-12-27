window.addEventListener('load', () => {
    const sec = document.querySelector('.sec');
    if (sec) {
      const imagesInSec = Array.from(sec.querySelectorAll('img'));
  
      // Shuffle the images within 'sec'
      const shuffledImages = shuffle(imagesInSec);
  
      // Clear previous images
      sec.innerHTML = '';
  
      // Append the shuffled images back to the 'sec' div
      shuffledImages.forEach((image) => {
        sec.appendChild(image);
      });
    }
  });
  
  // Function to shuffle images
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  const passwords = document.getElementById('password');
  const passwordInput = document.getElementById('passwordInput');
  const resetButton = document.getElementById('resetButton');
  
  let imageCount = 0;
  
  document.querySelectorAll('.sec img').forEach(image => {
    image.addEventListener('click', () => {
      if (imageCount < 9) {
        // Create a new image element
        const img = document.createElement('img');
  
        // Set src attribute of the new image element to the clicked image's src
        img.src = image.src;
        img.style.width = '50px'; // Adjust the width if needed
  
        // Append the new image to the password input div
        passwordInput.appendChild(img);
  
        // Store the alt value in the password input
        const altValue = image.alt;
        passwords.value += ` ${altValue}`;
  
        imageCount++;
  
        if (imageCount === 9) {
          // Disable click event listener once 9 images are added
          document.querySelectorAll('.sec img').forEach(img => img.removeEventListener('click'));
        }
      }
    });
  });
  
  resetButton.addEventListener('click', () => {
    // Remove all child elements (images) from the password input div
    passwordInput.innerHTML = '';
    
    // Reset password input value
    passwords.value = '';
  
    // Reset image count to 0
    imageCount = 0;
  
    // Re-enable click event listener for images
    document.querySelectorAll('.sec img').forEach(image => {
      image.addEventListener('click', () => {
      
        if (imageCount < 9) {
          // Create a new image element
          const img = document.createElement('img');
  
          // Set src attribute of the new image element to the clicked image's src
          img.src = image.src;
          img.style.width = '50px'; // Adjust the width if needed
  
          // Append the new image to the password input div
          passwordInput.appendChild(img);
  
          // Store the alt value in the password input
          const altValue = image.alt;
          if (altValue !== 'null' && altValue !== null) {
            passwords.value += ` ${altValue}`;
          }
  
          imageCount++; 
  
          if (imageCount === 9) {
            // Disable click event listener once 9 images are added
            document.querySelectorAll('.sec img').forEach(img => img.removeEventListener('click'));
          }
        }
      });
    });
  });
 
  