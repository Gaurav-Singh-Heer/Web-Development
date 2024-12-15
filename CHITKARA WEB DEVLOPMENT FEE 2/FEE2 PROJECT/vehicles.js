const purchaseButtons = document.querySelectorAll('.purchase button');

purchaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const carItem = button.closest('.car-item');
        const carName = carItem.querySelector('.car-title').textContent;
        const carPrice = carItem.querySelector('.car-price').textContent;

        window.location.href = `checkout.html?car=${encodeURIComponent(carName)}&price=${encodeURIComponent(carPrice)}`;
    });
});