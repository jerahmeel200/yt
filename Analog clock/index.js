// script.js
function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    // Calculate Degrees
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6; 
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    // Apply Rotation
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Add clock numbers to the face
function createClockNumbers() {
    const container = document.getElementById('numbers-container');
    for (let i = 1; i <= 12; i++) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');

        const rotation = i * 30; // 360 degrees / 12 hours
        numberElement.style.transform = `rotate(${rotation}deg)`;
        numberElement.innerHTML = `<div style="transform: translateX(-50%) rotate(-${rotation}deg);">${i}</div>`;

        container.appendChild(numberElement);
    }
}

createClockNumbers();

// Run the clock every second
setInterval(updateClock, 1000);

// Initialize immediately so there is no 1-second delay
updateClock();