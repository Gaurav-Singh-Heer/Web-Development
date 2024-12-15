// Retrieve car details from localStorage
const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));

if (selectedCar) {
    // Display car details on checkout page
    document.getElementById('car-title').textContent = selectedCar.name;
    document.getElementById('car-image').src = selectedCar.imgSrc;
    document.getElementById('car-price').textContent = selectedCar.price;

    // Log the selectedCar object to check for gst value
    console.log(selectedCar);

    document.getElementById('GST').innerText = `₹${(4.5 / 100) * selectedCar.price}`;
    let totalPrice = (4.5 / 100) * selectedCar.price;
    document.getElementById('total').innerText = `₹${10000 + totalPrice + selectedCar.price}`;

} else {
    console.error('No car details found');
}

// Get elements
const proceedButton = document.querySelector(".total-price .update");
const modal = document.getElementById("paymentModal");
const closeModal = document.querySelector(".close");
const confirmPayment = document.getElementById("confirmPayment");

// Show confirmation alert and display the modal if confirmed
proceedButton.addEventListener("click", () => {
    const isConfirmed = confirm("Are you sure you want to proceed?");
    if (isConfirmed) {
        modal.style.display = "block";
    }
});

// Close modal when 'x' is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Handle payment confirmation
confirmPayment.addEventListener("click", () => {
    alert("Payment completed successfully!");
    modal.style.display = "none"; // Close the modal after payment confirmation
});

// Function to switch between Card and UPI forms
function selectOption(option) {
    const cardForm = document.getElementById('cardForm');
    const upiForm = document.getElementById('upiForm');
    const cardOption = document.querySelector('.option:first-child');
    const upiOption = document.querySelector('.option:last-child');
    
    if (option === 'card') {
        cardForm.style.display = 'block';
        upiForm.style.display = 'none';
        cardOption.classList.add('active');
        upiOption.classList.remove('active');
    } else {
        cardForm.style.display = 'none';
        upiForm.style.display = 'block';
        cardOption.classList.remove('active');
        upiOption.classList.add('active');
    }
}

// Show modal on load (for testing purposes)
window.onload = () => {
    document.getElementById("paymentModal").style.display = "block";
};
