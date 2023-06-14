console.log("Hello")


var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // prevents form submission

    console.log("button clicked!");
})