// 1. Select the HTML elements from the DOM (Hint 2)
const fetchBtn = document.getElementById('fetch-btn');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const loader = document.getElementById('loader');

/**
 * 2. Asynchronous function to fetch a random quote (Hint 3 & 9)
 * We use async/await for cleaner asynchronous logic.
 */
async function getRandomQuote() {
    // Show the loading indicator while data is being fetched (Hint 7)
    loader.style.display = 'block';
    quoteText.textContent = "Fetching your inspiration...";
    quoteAuthor.textContent = "";

    try {
        // 3. Send HTTP request to a reliable public API (Hint 1)
        // Note: Using dummyjson.com as it is more stable than quotable.io
        const response = await fetch('https://dummyjson.com/quotes/random');
        
        // 4. Check if the response is successful (Hint 6)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 5. Convert the response to JSON format (Hint 4)
        const data = await response.json();

        // 6. Update the UI with the fetched data (Hint 5)
        // DummyJSON returns an object with 'quote' and 'author'
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `- ${data.author}`;
        
        // Log to console for debugging (Hint 8)
        console.log("Data successfully fetched:", data);

    } catch (error) {
        // 7. Handle errors like network failure or invalid URLs (Hint 6)
        quoteText.textContent = "Error: Could not load data. Please check your internet.";
        console.error("Fetch error details:", error);
    } finally {
        // 8. Hide the loader once the request is finished
        loader.style.display = 'none';
    }
}

// 9. Add event listener for the button click (Hint 4)
fetchBtn.addEventListener('click', getRandomQuote);
