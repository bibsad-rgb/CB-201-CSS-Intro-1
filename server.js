// Get the element to animate
    const box = document.getElementById('falling-box');
    
    // Set initial properties for the animation
    let positionY = 0;
    let velocityY = 0; // The element's downward speed
    const gravity = 0.5; // Controls the acceleration
    const ground = window.innerHeight; // The "ground" is the bottom of the window
    
    // Animation loop using requestAnimationFrame for smooth visuals
    function animate() {
      // Add gravity to the velocity to simulate acceleration
      velocityY += gravity; 
      
      // Update the element's position based on its velocity
      positionY += velocityY;
      
      // If the box hits the ground, stop its movement
      if (positionY + box.clientHeight > ground) {
        positionY = ground - box.clientHeight; // Snap to the ground
        velocityY = 0; // Stop vertical movement
      }

      // Apply the new Y position to the element
      box.style.transform = `translate(-50%, ${positionY}px)`;
      
      // Keep the animation running
      requestAnimationFrame(animate);
    }
    
    // Start the animation
    animate()