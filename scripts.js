// Responsive Navigation Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('.navbar');

    menuBar.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

// Dynamic Content Loading
const loadMoreButton = document.createElement('button');
loadMoreButton.textContent = 'Load More';
loadMoreButton.classList.add('btn');
document.querySelector('.popular').appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `
        <span class="price">$20</span>
        <img src="New_Event.jpeg" alt="NEW EVENT">
        <h3>NEW EXCITING EVENT</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">BOOK NOW</a>
    `;
    document.querySelector('.box_container').appendChild(newBox);
});

// Simple Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Add your form submission logic here
    }
});
