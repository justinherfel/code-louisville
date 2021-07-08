var bDay;
var presents;

function submitForm() {
    bDay = document.getElementById(yourBday).value;
    alert("You are " + calculateAge() + " years old!");
    presents = document.getElementById("numOfPresents").value;
    alert(quickMaths());
}

var bDay;
function calculateAge() {
    var your_birthday = new Date(bDay);
    var today = new Date();
    return today.getFullYear-your_birthday.getFullYear();
}

function quickMaths() {
    var morePresents = presents+1;
return presents + " " +  morePresents;
}