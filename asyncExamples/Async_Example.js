var array = [1,2,3,4,5]

//get a random integer between 0 and 1000
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

for (let i=0; i<array.length; i++)
{
    let time = getRandomInt(1000); //set the random timeout in each loop;
    setTimeout( function(){
        console.log(`Delayed ${time} milliseconds to show ${array[i]}`)
    }, time);
}

/*
Output

>Delayed 188 milliseconds to show 5
>Delayed 260 milliseconds to show 2
>Delayed 721 milliseconds to show 4
>Delayed 751 milliseconds to show 1
>Delayed 837 milliseconds to show 3

*/