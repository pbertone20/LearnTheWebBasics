/*Step 17: obtain DOM objects */
const getJokeBtn = document.getElementById("getJokeBtn"); // add id
const jokeText = document.getElementById("jokeText"); // add id

function apiCall() {

    jokeText.textContent = "Fetching a joke...";

    /*Step 19: Create account with api-ninjas (https://api-ninjas.com/) */
    /*Step 20: Get API url and API Key */

    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", { // add event request url
        headers: { 'X-Api-Key': '4GuW2CmGeQDc6OvX3hKa9g==tCQeI4gkI6VNnUzO' } // add api key
    })
        // Checks the network response 
        .then(function (response) {

            // If network response was not a success
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(function (data) {

            // Update the HTML tag with the joke fetched from the response
            jokeText.textContent = data[0].joke;

        })

        // Handles any errors that occur during the fetch operation
        .catch(function (error) {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        });
};


/*Step 18: Create event listener for button click */
getJokeBtn.addEventListener("click", apiCall)





