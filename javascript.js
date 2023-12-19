var name = prompt("Введи имя:");
var age = +prompt("Введи возраст:")

if(age >= 0 && age < 18){

    alert( name + " ты ещё молодой иди гуляй! Тебе только " + age + "!")

}else if(age >= 18 && age < 50){

    alert( name + " ты че сидишь иди работай! Тебе уже " + age + "!")

}else if(age >= 50 && age < 59){

    alert( name + " тебе бы на пенсию старик! Тебе уже целых " + age + "!")

}else if(age >= 59 && age < 100){

    alert( name + " ты ещё жив! А как? Тебе же " + age + " лет!")

}else{
    alert("Иди отсюда чушпан!")
}

alert("Давай чушпан ещё увидемся!")