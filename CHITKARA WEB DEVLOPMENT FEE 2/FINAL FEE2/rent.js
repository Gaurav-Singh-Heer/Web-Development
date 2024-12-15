// Initial values
const basePricePerHour = 500;
let rentalHours = 1;

// Update price based on rental hours
function updatePrice() {
    rentalHours = parseInt(document.getElementById("rental-hours").value);
    document.getElementById("selected-hours").innerText = rentalHours;

    const totalPrice = basePricePerHour * rentalHours;
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("modal-total-price").innerText = totalPrice;
}

// Open Payment Modal
function openPaymentModal() {
    document.getElementById("paymentModal").style.display = "block";
}

// Close Payment Modal
function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}

// Select Payment Option
function selectOption(option) {
    if (option === 'card') {
        document.getElementById("cardForm").style.display = "block";
        document.getElementById("upiForm").style.display = "none";
    } else if (option === 'upi') {
        document.getElementById("cardForm").style.display = "none";
        document.getElementById("upiForm").style.display = "block";
    }
}

// Initialize the default price
document.addEventListener("DOMContentLoaded", updatePrice);


// Update the price based on the rental days
function updatePrice() {
    const rentalDays = document.getElementById('rental-hours').value;
    const basePrice = 7500; // Base price per day in INR
    const totalPrice = rentalDays * basePrice;
    document.getElementById('rental-days').textContent = rentalDays;
    document.getElementById('total-price').textContent = `₹${totalPrice}`;
}

// Open the payment modal
function openPaymentModal() {
    document.getElementById('payment-modal').style.display = 'flex';
}

// Close the payment modal
function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Select payment option and display corresponding form
function selectPaymentOption(paymentMethod) {
    const formContainer = document.getElementById('payment-form-container');
    formContainer.innerHTML = '';  // Clear previous forms

    let formHtml = '';

    if (paymentMethod === 'Credit Card') {
        formHtml = `
            <div class="payment-form">
                <input type="text" placeholder="Card Number" required>
                <div class="expiry-cvv">
                    <input type="text" placeholder="MM/YY" required>
                    <input type="text" placeholder="CVV" required>
                </div>
            </div>
        `;
    } else if (paymentMethod === 'UPI') {
        formHtml = `
            <div class="payment-form">
                <input type="text" placeholder="UPI ID" required>
            </div>
        `;
    }

    formContainer.innerHTML = formHtml;
    document.querySelectorAll('.option').forEach(option => option.classList.remove('active'));
    event.target.classList.add('active');
}

// Process the payment
function processPayment() {
    alert('Payment processed successfully!');
    closePaymentModal();
}

// Open the payment modal
function openPaymentModal() {
    document.getElementById('payment-modal').style.display = 'flex';
}

// Close the payment modal
function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Select payment option and display the corresponding form
function selectOption(option) {
    document.getElementById("cardForm").style.display = option === 'card' ? "block" : "none";
    document.getElementById("upiForm").style.display = option === 'upi' ? "block" : "none";
}

// Generate UPI Payment Link
function generateUPILink() {
    const upiID = document.getElementById('upi-id').value;
    const amount = document.getElementById('total-price').innerText.replace('₹', ''); // Get the total price

    if (upiID) {
        const upiLink = `upi://pay?pa=${upiID}&pn=Car%20Rental&am=${amount}`;
        document.getElementById('upi-link').href = upiLink;
        document.getElementById('upi-link-container').style.display = 'block';
    } else {
        alert("Please enter a valid UPI ID.");
    }
}

// Update price based on rental days
function updatePrice() {
    const rentalDays = document.getElementById('rental-hours').value;
    const basePrice = 7500; // Base price per day in INR
    const totalPrice = rentalDays * basePrice;
    document.getElementById('rental-days').textContent = rentalDays;
    document.getElementById('total-price').textContent = `₹${totalPrice}`;
    document.getElementById('modal-total-price').textContent = totalPrice;
}

// Initialize the default price
document.addEventListener("DOMContentLoaded", updatePrice);

