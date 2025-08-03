'use strict'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const workouts = ["Running", "Swimming", "Dancing", "Fencing", "Cycling","Yoga", "Pilates"];

const button = document.querySelector("#cycle");
const input = document.getElementById("display");

function workoutOfTheDay() {
    let dayCycle = -1;
    let workout =-1;

    return function() {
        dayCycle = (dayCycle + 1) % days.length;
        workout = (workout + 1) % workouts.length;

        let message = `Today's exercise for ${days[dayCycle]}: ${workouts[workout]}`;
        console.log(message);
        input.value = message;
        input.innerHTML = message;
        //return message;
    };
};

const featureWorkout = workoutOfTheDay();

button.onclick = featureWorkout;