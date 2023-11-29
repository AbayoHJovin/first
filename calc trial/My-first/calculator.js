function updateClock(){
    let now= new Date();
    let hours = now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let when='AM';

    if(hours>12){
        hours-=12;
        when='PM';
    }
    if(hours===0){
        hours=12;
    }
    if(minutes<10){
        minutes='0'+minutes;
    }
    if(seconds<10){
        seconds='0'+seconds;
    }
    var allTime=(`${hours} : ${minutes} : ${seconds} ${when}`);
    document.getElementById('hello').innerText=allTime;
}
setInterval(updateClock, 1000);

