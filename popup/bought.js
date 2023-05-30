

window.addEventListener("load", function(){
    setTimeout(
        function open (event){
        document.querySelector(".popup").style.display = "block"; // Visar popup-elementet genom att ändra dess display-egenskap till "block"
        },
        1000 // Fördröjning på 1000 ms (1 sekund)
    )
});


document.querySelector(".close").addEventListener("click"
, function(){
    document.querySelector(".popup").style.display =
    "none"; // Döljer popup-elementet när ".close"-elementet klickas på genom att ändra dess display till " none "
});


document.querySelector(".linke").addEventListener("click"
, function(){
    document.querySelector(".popup").style.display =
    "none"; // Döljer popup-elementet när ".linke"-elementet klickas på genom att ändra dess display till "none"
});


document.querySelector(".overlay").addEventListener("click"
, function(){
    document.querySelector(".overlay").style.display =
    "none"; // Döljer overlay-elementet när det klickas på genom att ändra dess display till "none"
});