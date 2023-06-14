console.log("Hello")


var submitBtn = document.getElementById("submitBtn");
var gifResults = document.getElementById("gifResults");
var searchInput = document.getElementById("searchInput");

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // prevents form submission

    try {
        const apiKey = "yRJNxvi54voD8dKK37jMFWDlZCRCp0oF";
        const searchResult = searchInput.value;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchResult)}`;
    
        const response = await fetch(url);
        const data = await response.json();
        const images = data.data;

        gifResults.innerHTML = "";
        images.forEach(gif => {
            const img = document.createElement("img");
            img.src = gif.images.original.url;
            gifResults.appendChild(img); // Step 3: Add the image url to the gifsDiv
        });

        console.log(data.data[0]);
        console.log(data.data[0].images.original.url);
        // Process the data returned from the API
        // console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }

    // Perform your desired action here
    console.log("Button clicked!");
});

// api.giphy.com/v1/gifs/search?api_key=yRJNxvi54voD8dKK37jMFWDlZCRCp0oF&q="hello"