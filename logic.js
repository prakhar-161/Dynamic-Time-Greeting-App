const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
const btn = document.querySelector('button');
const msg = document.querySelector('#message');
const showTime = document.querySelector('p');

btn.addEventListener('click',() => {
    if(hour > 17){
        msg.innerHTML = `<h1>Good Evening, Mate!</h1>`;
        showTime.innerHTML = `<p>The time is ${hour}:${minutes}`;
    }
    else if(hour > 12){
        msg.innerHTML = `<h1>Good Evening, Mate!</h1>`;
        showTime.innerHTML = `<p>The time is ${hour}:${minutes}`;
    }
    else{
        msg.innerHTML = `<h1>Good Evening, Mate!</h1>`;
        showTime.innerHTML = `<p>The time is ${hour}:${minutes}`;
    }
});