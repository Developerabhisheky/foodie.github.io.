 // Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Reservation Form
    document.getElementById('reservation-form').addEventListener('submit', (e)=>{
      e.preventDefault();
      alert("Your table has been reserved successfully!");
      e.target.reset();
    });
