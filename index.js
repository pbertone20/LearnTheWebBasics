
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("jokeText");

const getSyncBtn = document.getElementById("getSyncBtn");
const syncText = document.getElementById("syncText");


getJokeBtn.addEventListener("click", () => {
    jokeText.textContent = "Fetching a joke...";

    fetch("https://v2.jokeapi.dev/joke/Programming")
        .then((response) => {

            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })

        .then((data) => {
            if (data.type === "single") jokeText.textContent = data.joke;
            else if (data.type === "twopart") jokeText.innerHTML = `<p>${data.setup}</p><p> ${data.delivery}</p>`;
            else jokeText.textContent = "An error occurred while fetching the joke.";
                
        })

        .catch((error) => {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        });
            
    });




    
