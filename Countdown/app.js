const count = document.querySelector('.count');

let countDown = setInterval(()=>{

    const final = new Date("aug 22,2022 09:00:00").getTime();
    console.log(final);
    const currentTime = new Date().getTime();
    console.log(currentTime);

    const diff = final - currentTime;
    console.log(diff);

    const days = Math.floor(diff / (1000 * 24 * 60 * 60));
    console.log(days);
    const hours = Math.floor(diff % (1000 * 24 * 60 * 60) / (1000 * 60 * 60));
    console.log(hours);
    const mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    console.log(mins);
    const secs = Math.floor(diff % (1000 * 60) / 1000);
    console.log(secs);

    count.innerHTML= `${days}d : ${hours}h : ${mins}m : ${secs}s`;

});