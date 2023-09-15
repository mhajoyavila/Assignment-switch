var numberOfAnimalButtons = document.querySelectorAll(".machina").length;

for (var i = 0; i <numberOfAnimalButtons; i++) {

    document.querySelectorAll(".machina")[i].addEventListener("click", function() {

        var buttons = this.innerText;

        switch (buttons) {

            case "Hugh":
                var hugh = new Audio ("music/hugh.mp3");
                hugh.play();
                break;
            
            case "Fahb":
                var fahb = new Audio ("music/fahb.mp3");
                fahb.play();
                break;
            case "Ben":
                var ben = new Audio ("music/ben.mp3");
                ben.play();
                break;
            case "Ian":
                var ian = new Audio ("music/ian.mp3");
                ian.play();
                break;
            case "Pete":
                var pete = new Audio ("music/pete.mp3");
                pete.play();
                break;
            case "Mark":
                var mark = new Audio ("music/mark.mp3");
                mark.play();
            case "Daiben":
                var daiben = new Audio ("music/daiben.mp3");
                daiben.play();
                break;
            case "Sam":
                var ian = new Audio ("music/ian.mp3");
                ian.play();
                break;
            default:
                break;
        }

});
}