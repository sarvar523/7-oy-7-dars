
let input = document.querySelector("input");
let button = document.querySelector("button");

let cardContainer = document.createElement('div');
cardContainer.id = 'card-container';
document.body.appendChild(cardContainer);

function renderCards() {
    fetch("https://68d3bc35214be68f8c670357.mockapi.io/sarvar/api/users")
    .then(res => res.json())
    .then(data => {
        cardContainer.innerHTML = '';
        data.forEach(user => {
            let card = document.createElement('div');
            card.setAttribute('id', `card-${user.id}`);
            card.style.border = '2px solid #1976d2';
            card.style.padding = '16px';
            card.style.margin = '12px 0';
            card.style.borderRadius = '0'; // To'rtburchak
            card.style.background = '#e3f2fd';
            card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            card.style.width = '300px';
            card.style.fontFamily = 'Arial, sans-serif';
            card.innerHTML = `<strong>${user.name}</strong><br>ID: ${user.id}`;
            cardContainer.appendChild(card);
        });
    });
}

window.addEventListener('DOMContentLoaded', renderCards);

button.addEventListener('click', () => {
    let value = input.value.trim();
    if (value) {
        fetch("https://68d3bc35214be68f8c670357.mockapi.io/sarvar/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: value })
        })
        .then(res => res.json())
        .then(newUser => {
            renderCards();
        });
        input.value = '';
    }
});