// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the button and the element where the joke will be displayed
    const getJokeBtn = document.getElementById("getJokeBtn");
    const jokeText = document.getElementById("jokeText");

    // Add a click event listener to the button
    getJokeBtn.addEventListener("click", () => {
        jokeText.textContent = "Fetching a joke...";

        // Fetch a joke from an API
        fetch("https://v2.jokeapi.dev/joke/Programming")
            .then((response) => {

                // Check if the network response is successful; otherwise, throw an error
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })

            .then((data) => {
                // Check the type of joke (single or twopart) and display accordingly
                if (data.type === "single") jokeText.textContent = data.joke;
                else if (data.type === "twopart") jokeText.innerHTML = `<p>${data.setup}</p><p> ${data.delivery}</p>`;
                else jokeText.textContent = "An error occurred while fetching the joke.";
                
            })

            .catch((error) => {
                // Log the error and display an error message
                console.error("Error fetching joke:", error);
                jokeText.textContent = "An error occurred while fetching the joke.";
            });
            
    });
});
