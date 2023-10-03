/*Step 17: obtain DOM objects */
const getJokeBtn = document.getElementById(""); // add id
const jokeText = document.getElementById(""); // add id

/*Step 18: Create event listener for button click */
getJokeBtn.addEventListener("", () => { // add event listener type
    jokeText.textContent = "Fetching a joke...";

    /*Step 19: Create account with api-ninjas (https://api-ninjas.com/) */
    /*Step 20: Get API url and API Key */

    fetch("request-url", { // add event request url
        headers: { 'X-Api-Key': 'your-api-key' } // add api key
    })
        // Checks the network response 
        .then((response) => {

            // If network response was not a success
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {

            // Update the HTML tag with the joke fetched from the response
            jokeText.textContent = data[0].joke;

        })

        // Handles any errors that occur during the fetch operation
        .catch((error) => {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        });
});



