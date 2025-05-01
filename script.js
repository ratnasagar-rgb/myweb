// Array of 50 couple quotes starting with "We Both"
const coupleQuotes = [
    "We both are two imperfect people who refuse to give up on each other.",
    "We both are each other's today and all of our tomorrows.",
    "We both have found the love of our lives and our truest friends in each other.",
    "We both know that together is our favorite place to be.",
    "We both don’t just live with each other—we live for each other.",
    "We both loved with a love that was more than love. - Edgar Allan Poe",
    "We both love each other not only for what we are, but for what we become together. - Roy Croft",
    "We both are each other's heart, life, and one and only thought. - Arthur Conan Doyle",
    "We both know the best thing to hold onto in life is each other. - Audrey Hepburn",
    "We both are each other's greatest adventure.",
    "We both believe every love story is beautiful, but ours is our favorite.",
    "We both are the butter to each other's bread and the breath to each other's life. - Julia Child",
    "We both would rather spend one lifetime together than face all the ages of this world alone. - J.R.R. Tolkien",
    "We both are each other's sun, moon, and all the stars. - E.E. Cummings",
    "We both feel that when we’re together, hours feel like seconds. When we’re apart, days feel like years.",
    "We both are each other's greatest joy and deepest comfort.",
    "We both love each other more than yesterday, but not as much as tomorrow.",
    "We both are each other's home and adventure all at once.",
    "We both look at each other and see the rest of our lives in front of our eyes.",
    "We both are each other's favorite notification.",
    "We both are each other's person, love, and life.",
    "We both never want to stop making memories together. - Pierre Jeanty",
    "We both are each other's happy place.",
    "We both are the ones we want to grow old with.",
    "We both are each other's today and all of our tomorrows.",
    "We both are the reason we believe in love.",
    "We both are each other's dream come true.",
    "We both are each other's forever and always.",
    "We both are each other's everything.",
    "We both are soulmates, partners, and best friends.",
    "We both are each other's heart and soul.",
    "We both are each other's love, life, and everything.",
    "We both are each other's reason for living.",
    "We both are each other's light in the dark.",
    "We both are each other's strength and weakness.",
    "We both are each other's hope and joy.",
    "We both are each other's peace and comfort.",
    "We both are each other's love and life.",
    "We both are each other's everything and more.",
    "We both are each other's reason for being.",
    "We both are each other's heart and home.",
    "We both are each other's love and light.",
    "We both are each other's everything and all.",
    "We both are each other's reason for smiling.",
    "We both are each other's heart and happiness.",
    "We both are each other's love and laughter.",
    "We both are each other's everything and forever.",
    "We both are each other's reason for dreaming.",
    "We both are each other's heart and hope."
];

// Function to get a random quote
function getRandomQuote() {
    return coupleQuotes[Math.floor(Math.random() * coupleQuotes.length)];
}

// Step 1 Form Submission
document.getElementById('step1Form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('step1Form').style.display = 'none';
    document.getElementById('step2Form').style.display = 'block';
});

// Step 2 Form Submission
document.getElementById('step2Form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('step2Form').style.display = 'none';
    document.getElementById('step3Form').style.display = 'block';
});

// Step 3 Form Submission
document.getElementById('step3Form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const crushName = document.getElementById('crushNameInput').value;

    // Show the loading spinner
    document.getElementById('step3Form').style.display = 'none';
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';

    // Simulate a delay for loading
    setTimeout(() => {
        loadingSpinner.style.display = 'none';

        // Save data to localStorage
        const searches = JSON.parse(localStorage.getItem('searches')) || [];
        searches.push({ name, crushName, timestamp: new Date().toISOString() });
        localStorage.setItem('searches', JSON.stringify(searches));

        // Generate a mixed quote
        const userQuote = getRandomQuote();
        const crushQuote = getRandomQuote();
        const mixedQuote = `${userQuote} And remember: ${crushQuote}`;

        // Display the final message with the mixed quote
        const finalMessage = `Thank you, ${name}! Your data has been saved. Here's something to think about: "${mixedQuote}"`;
        document.getElementById('finalMessage').textContent = finalMessage;
        document.getElementById('finalMessage').style.display = 'block';

        // Add a thank-you message
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = "Thank you for using our service!";
        thankYouMessage.style.marginTop = '20px';
        thankYouMessage.style.fontSize = '1.2em';
        thankYouMessage.style.color = '#333';
        document.body.appendChild(thankYouMessage);

        // Add a retry button
        const retryButton = document.createElement('button');
        retryButton.textContent = 'Retry';
        retryButton.style.marginTop = '20px';
        retryButton.style.padding = '10px 15px';
        retryButton.style.backgroundColor = '#ff6f61';
        retryButton.style.color = 'white';
        retryButton.style.border = 'none';
        retryButton.style.borderRadius = '5px';
        retryButton.style.cursor = 'pointer';

        document.body.appendChild(retryButton);

        retryButton.addEventListener('click', () => {
            // Reload the page to restart the form
            location.reload();
        });
    }, 2000); // 2-second delay
});