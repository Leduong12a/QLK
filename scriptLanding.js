const startButton = document.getElementById("start_button");


startButton.addEventListener("click", () => {
    document.head.innerHTML = "<meta charset='UTF-8'>"+
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
    "<title>Do You Love Me?</title>"+
    "<link rel='stylesheet' href='styleMain.css'/>"

    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Will you go out with me?</h2>"+
    "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>"+
    "<div class='btn-group'><button class='yes-btn'>Yes</button>"+
    "<button class='no-btn'>No</button></div></div><script src='scriptMain.js'></script>"
});