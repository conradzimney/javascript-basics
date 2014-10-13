"use strict";

var name = 'Conrad Zimney';
//alert('Hello '+ name);
var fruits = ['Apple', 'Pear', 'Kiwi', 'Banana'];


function sayHello() {
    alert('Hello '+ name);
}

document.addEventListener('DOMContentLoaded', function() {
    var i;
    var fruitListElem = document.getElementById('fruit-list');
    var fruitLi;
    var animalSound = document.getElementById('animalSound');

    var msgElem = document.getElementById('message');
    msgElem.innerHTML = "Hello " + name;

    for (i = 0; i < fruits.length; ++i) {
        console.log(fruits[i]);

        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[i];
        fruitListElem.appendChild(fruitLi);
    }

    var animalPic = document.getElementById('animal-picture');
    animalPic.addEventListener('click', function() {
        msgElem.innerHTML = 'Woof!';
        animalSound.play();
    });

    animalSound.addEventListener('ended', function() {
       msgElem.innerHTML = '&nbsp';
    });
    
    window.setInterval(function() {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();
    }, 1000);
});
