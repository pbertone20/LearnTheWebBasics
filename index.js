// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the button and the element where the joke will be displayed
    const getJokeBtn = document.getElementById("getJokeBtn");
    const jokeText = document.getElementById("jokeText");

    const getSyncBtn = document.getElementById("getSyncBtn");
    const syncText = document.getElementById("syncText");


    // Add a click event listener to the button
    getJokeBtn.addEventListener("click", () => {
        jokeText.textContent = "Fetching a joke...";

        // Fetch a joke from joke api
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

    // Add a click event listener to the button
    getSyncBtn.addEventListener("click", () => {
        syncText.textContent = "Fetching a message...";
    
        // MISSING THIS
        const bearerToken = "5zX/2VXijNuKmwQIwaM2mTxLIUcrMw/l8djfBMZyBOklB5bXVUH6+fd+qV8hA0QG0cMfuZKeddg0zztf2o72KCfkU3U+npM8xcBKwFSXdFXMDvzqQ8xx+XlowQzNckqUA5J9MIyiI+GIhoG0/WW6u9dDT/f7EfAkJQzWiC9zEnLnSadBbpxRGy3QZFJE1eyRy5lJHInkgI81smnt+MZvZrAD65O1VEVbwM+ueUpsMs75wgEPgpkBqUPaB1Yn3wlSJr5CnhvGOvlDDaQSDqdf/jVdxpLVPjIMCrB+AHRadiOJKCC1WA+Xs4ewuzraZ5P5HpA3DcCuYcERBhFLNieSKdIf0esG7Bu7Sl37TwnlU3XySYF0ZL5SKJcSCfH3OdRUnRhjn0D5ZGhI4e2FOIEPmqQuFjxwULpAL8MTPAAYcVpA+tLoegjdR29nFsufl24zmyxezbVqSKqPx97aIc/XTIfJVCpnul74m01Tw3UUG3WKZ8BbSaE4Y/D+5ycZEpIHzvxRQrotHgj8/A/zxkF+RQ==";


        // Fetch a message from the API
        fetch("https://cloud.syncloop.com/tenant/AmDiTosto/packages.intoToSync.api.helloWorldAPI.main", {
                
                headers: {
                    Authorization: `Bearer ${bearerToken}` // include token in API header
                }
            })

            .then((response) => {
                // Check if the network response is successful; otherwise, throw an error
                if (response.ok) {
                    return response.json(); // Parse the response as JSON
                } else {
                    throw new Error("Network response was not ok");
                }
            })
            .then((data) => {
                // Assuming the response contains a 'message' field
                syncText.textContent = data.message;
            })
            .catch((error) => {
                // Log the error and display an error message
                console.error("Error fetching message:", error);
                syncText.textContent = "An error occurred while fetching the message.";
            });
        });
                
});


    
