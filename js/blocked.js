const home = document.querySelector('.home');
const homeBtn = document.querySelector('.home-btn')





home.innerHTML += blockPhone()
function openHome() {
    home.innerHTML = ""
    home.innerHTML += runPhone()
}
function openClock() {
    home.innerHTML = ""
    home.innerHTML += worldClock();
}
function stopAlarm() {
    home.innerHTML = ""
    home.innerHTML += alarmStop();
}
function openAlarm() {
    home.innerHTML = ""
    hourValue = ""
    minuteValue = ""
    home.innerHTML += alarm();
    const alarmset = document.querySelector('.alarm__set')

    const hour = document.querySelector('.hours')
    const minute = document.querySelector('.minutes')
    const timingJson = localStorage.getItem("time");
    const timing = (JSON.parse(timingJson)) || [];

    const audio = document.querySelector('audio')


    setTime = {
        hour: hourValue,
        minute: minuteValue,
    }

    hour.addEventListener('keyup', function ()  {
        if (this.value >= 0) {
            hourValue = this.value
            setTime.hour = this.value;
        }    
    })
    minute.addEventListener('keyup', function ()  {
        if (this.value >= 0) {
            minuteValue = this.value
            setTime.minute = this.value;
        }    
    })
    timing.push(setTime)
    const setBtn = document.querySelector('.set-btn');
    setBtn.addEventListener('click', () =>{
        localStorage.setItem("time", JSON.stringify(timing))
        if (hourValue / 10 < 1) {
            hourValue = "0"+hourValue;
        }
        if (minuteValue / 10 < 1) {
            minuteValue = "0"+minuteValue;
        }
        const setInter = setInterval(() => {
            let newDate = new Date();
            let timer = newDate.toLocaleTimeString("it-IT").slice(0,5);
            console.log(timer);
            if (timer == (hourValue + ":" + minuteValue)) {
                alarmset.style.display = "none"
                const audioInfo = document.querySelector('.audio-control')
                audioInfo.style.display = "block";
                audio.play();
            }
        }, 2000);
        const stopBtn = document.querySelector('.stop-btn')
        stopBtn.addEventListener('click', () => {
            audio.pause();
            clearInterval(setInter)
        })
    })
}

