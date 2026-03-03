const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins= document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime =(time) => {
    return time<10 ?`0${time}`: time;
}

const updateCountDown = (deadline) => {//here deadline is a local variable
    const currentrTime = new Date();
    const timeDifference = deadline - currentrTime; //millisecond

    //calculate days, hours,mins,secs from timeDifference
    let calSecs = Math.floor(timeDifference/1000)%60;//here hm divide by thousand kr rhe miilisecond ko second me covert krne ke liye and later modulus by 60 kiya jisse hme sirf seconds mile otherwise usme second,min or hour or days sb aate
    let calMins = Math.floor(timeDifference/1000/60)%60;
    let calHours = Math.floor(timeDifference/1000/60/60)%60;
    let calDays= Math.floor(timeDifference/1000/60/60/24)%60;
    
    days.textContent = formatTime(calDays);
    mins.textContent = formatTime(calMins);
    hours.textContent = formatTime(calHours);
    secs.textContent = formatTime(calSecs);
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("March 02 2026 05:00");
countDown(targetDate);

