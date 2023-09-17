var numberOfMachinaButtons = document.querySelectorAll(".machina").length;

for (var i = 0; i <numberOfMachinaButtons; i++) {

    document.querySelectorAll(".machina")[i].addEventListener("click", function() {

        var buttons = this.innerText;
        buttonAnimation(buttons)
        playSound(buttons);
    })
}
    document.addEventListener("keydown", function (e) {
    buttonAnimation(e.key)
    playSound(e.key)
    })

    function playSound(key){
        switch (key) {
            case "h":
                var hugh = new Audio ("music/hugh.mp3");
                hugh.play();
                break;
            
            case "f":
                var fahb = new Audio ("music/fahb.mp3");
                fahb.play();
                break;
            case "b":
                var ben = new Audio ("music/ben.mp3");
                ben.play();
                break;
            case "i":
                var ian = new Audio ("music/ian.mp3");
                ian.play();
                break;
            case "p":
                var pete = new Audio ("music/pete.mp3");
                pete.play();
                break;
            case "m":
                var mark = new Audio ("music/mark.mp3");
                mark.play();
                break;
            case "d":
                var daiben = new Audio ("music/daiben.mp3");
                daiben.play();
                break;
            case "s":
                var ian = new Audio ("music/ian.mp3");
                ian.play();
                console.log(key);
                break;
            default:
                break;
        }
    }
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function() {
        activeButton.classList.remove("pressed");
        }, 5000);
    }

