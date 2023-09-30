
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("jokeText");

const getSyncBtn = document.getElementById("getSyncBtn");
const syncText = document.getElementById("syncText");


getJokeBtn.addEventListener("click", () => {
    jokeText.textContent = "Fetching a joke...";

    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
        headers: { 'X-Api-Key': 'p27En2Xor53jGo/LeOd8SQ==YDK8drrLAPYK7BHb' }
    })
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {

            jokeText.textContent = data[0].joke;

        })
        .catch((error) => {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        });
});

