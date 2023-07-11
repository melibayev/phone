// let date = new Date();

let date = new Date()
let day = date.getDate()
let month = date.getMonth();
let time = date.toLocaleTimeString().slice(0, 5);

// battery
let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
   printBatteryStatus(batteryObject);
}
function printBatteryStatus(batteryObject) {
    console.log("IsCharging", batteryObject.charging);
    console.log("Percentage", batteryObject.level); 
    batterPercentage = batteryObject.level * 100;
   
    console.log("charging Time", batteryObject.chargingTime);
    console.log("DisCharging Time", batteryObject.dischargingTime);
}
var batterPercentage;

switch(month){
    case 0: month = "January";
        break;
    case 1: month = "February";
        break;
    case 2: month = "March";
        break;
    case 3: month = "April";
        break;
    case 4: month = "May";
        break;
    case 5: month = "June"; 
        break;
    case 6: month = "July";
        break;
    case 7: month = "August";
        break;
    case 8: month = "September";
        break;
    case 9: month = "October";
        break;
    case 10: month = "November";
        break;
    case 11: month = "December";
        break;
}

function blockPhone() {
    return `
    <img src="images/iphone77.jpg" alt="">
    <div class="home__navbar">
     <div class="home__navbar__left">
         <i class="fa-solid fa-signal"></i>
         <p>Uztelecom</p>
         <i class="fa-solid fa-wifi"></i>
     </div>
     <div class="home__navbar__middle">
         <p>${time}</p>
     </div>
     <div class="home__navbar__right">
         <p>${batterPercentage ? batterPercentage : '54'} %</p>
         <i class="fa-solid fa-battery-half"></i>
     </div>
     </div>
     <div class="home__block">
         <h2>${time}</h2>
         <p>${month} ${day}</p>
     </div>
     <div class="home__block__bottom">
         <p>Press the home button <br> to open</p>
     </div>
     <div class="home__bg">
         <img src="images/noodle.jpg" alt="">
     </div>
     <div class="home__btn">
         <button class="home-btn" onClick="openHome()"></button>
     </div>
     `
 }


 function runPhone() {
    return `
    <img src="images/iphone77.jpg" alt="">
    <div class="home__navbar">
        <div class="home__navbar__left">
            <i class="fa-solid fa-signal"></i>
            <p>Uztelecom</p>
            <i class="fa-solid fa-wifi"></i>
        </div>
        <div class="home__navbar__middle">
            <p>${time}</p>
        </div>
        <div class="home__navbar__right">
            <p>${batterPercentage} %</p>
            <i class="fa-solid fa-battery-half"></i>
        </div>
    </div>
    <div class="home__top">
        <div class="screen__item">
            <img src="images/appstore.png" alt="">
        </div>
        <div class="screen__item">
            <p>${month.slice(0, 4)}<br>${day}</p>
            <img src="images/calendar.png" alt="">
        </div>
        <div class="screen__item">
            <img src="images/foto.png" alt="">
        </div>
        <div class="screen__item" onclick="openClock()">
            <img src="images/clock.png" alt="">
        </div>
        <div class="screen__item">
            <img src="images/settings.png" alt="">
        </div>
        <div class="screen__item">
            <img src="images/musics.png" alt="">
        </div>
    </div>
    <div class="home__bg">
        <img src="images/cr7.jpg" alt="">
    </div>
    <div class="home__bottom">
        <img src="images/phone.png" alt="">
        <img src="images/message.png" alt="">
        <img src="images/safari.png" alt="">
        <img src="images/camera.png" alt="">
    </div>
    <div class="home__btn">
        <button class="home-btn"></button>
    </div>
    `
}

function worldClock() {
    return `
    <img src="images/iphone77.jpg" alt="">
    <div class="home__navbar">
        <div class="home__navbar__left">
            <i class="fa-solid fa-signal"></i>
            <p>Uztelecom</p>
            <i class="fa-solid fa-wifi"></i>
        </div>
        <div class="home__navbar__middle">
            <p>${time}</p>
        </div>
        <div class="home__navbar__right">
            <p>${batterPercentage} %</p>
            <i class="fa-solid fa-battery-half"></i>
        </div>
        </div>
        <div class="home__bg">
            <img src="images/Black.png" alt="">
    </div>
    <div class="world-clock">
        <div class="world-clock__top">
            <p>Edit</p>
            <p>+</p>
        </div>
        <div class="world-clock__title">
            <h4>World Clock</h4>
        </div>
        <div class="world-clock__times">
            <div class="world-clock__time">
                <div class="world-clock__time__left">
                    <p>Today</p>
                    <h5>Tashkent</h5>
                </div>
                <div class="world-clock__time__right">
                    <h2>${time}</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="clock__footer">
        <div class="clock__item" onClick="openClock()">
            <i class="fa-solid fa-globe"></i>
            <p>World Clock</p>
        </div>
        <div class="clock__item" onClick="openAlarm()">
            <i class="fa-solid fa-bell"></i>
            <p>Alarm</p>
        </div>
        <div class="clock__item">
            <i class="fa-solid fa-stopwatch"></i>
            <p>StopWatch</p>
        </div>
        <div class="clock__item">
            <i class="fa-solid fa-hourglass-end"></i>
            <p>Timer</p>
        </div>
    </div>
    <div class="home__btn">
        <button class="home-btn" onClick="openHome()"></button>
    </div>
    `
}


function alarm() {
    return `
    <img src="images/iphone77.jpg" alt="">
    <div class="home__navbar">
        <div class="home__navbar__left">
            <i class="fa-solid fa-signal"></i>
            <p>Uztelecom</p>
            <i class="fa-solid fa-wifi"></i>
        </div>
        <div class="home__navbar__middle">
            <p>${time}</p>
        </div>
        <div class="home__navbar__right">
            <p>${batterPercentage} %</p>
            <i class="fa-solid fa-battery-half"></i>
        </div>
        </div>
        <div class="home__bg">
            <img src="images/Black.png" alt="">
    </div>
    <div class="world-clock">
        <div class="world-clock__top">
            <p>Edit</p>
            <p>+</p>
        </div>
    </div>
    <div class="alarm">
        <div class="clock">
            <div class="wrap">
              <span class="hour"></span>
              <span class="minute"></span>
              <span class="second"></span>
              <span class="dot"></span>
            </div>
          </div>
        <div class="alarm__set">
            <div class="alarm__set__title">
                <h4>Set the alarm</h4>
            </div>
              <div class="alarm__set__inputs">
                <input type="number" class="hours">
                <input type="number" class="minutes">
              </div>
              <div class="alarm__set__btn">
                <button class='set-btn'>Set</button>
              </div>
        </div>
        <audio>
            <source src="audio/IPHONE ALARM MORNING.mp3">
        </audio>
        <div class='audio-control'>
            <h3>Time is Up</h3>
            <button class="stop-btn">Stop</button>
        </div>
    </div>
    <div class="clock__footer">
        <div class="clock__item" onClick="openClock()">
            <i class="fa-solid fa-globe"></i>
            <p>World Clock</p>
        </div>
        <div class="clock__item" onClick="openAlarm()">
            <i class="fa-solid fa-bell"></i>
            <p>Alarm</p>
        </div>
        <div class="clock__item">
            <i class="fa-solid fa-stopwatch"></i>
            <p>StopWatch</p>
        </div>
        <div class="clock__item">
            <i class="fa-solid fa-hourglass-end"></i>
            <p>Timer</p>
        </div>
    </div>
    <div class="home__btn">
        <button class="home-btn" onClick="openHome()"></button>
    </div>
    `
}

function alarmStop() {
    return `
    <img src="images/iphone77.jpg" alt="">
    <div class="home__navbar">
        <div class="home__navbar__left">
            <i class="fa-solid fa-signal"></i>
            <p>Uztelecom</p>
            <i class="fa-solid fa-wifi"></i>
        </div>
        <div class="home__navbar__middle">
            <p>${time}</p>
        </div>
        <div class="home__navbar__right">
            <p>${batterPercentage} %</p>
            <i class="fa-solid fa-battery-half"></i>
        </div>
        </div>
        <div class="home__bg">
            <img src="images/Black.png" alt="">
    </div>
    <div class="world-clock">
        <div class="world-clock__top">
            <p>Edit</p>
            <p>+</p>
        </div>
    </div>
    <div class="alarm">
        <div class="clock">
            <div class="wrap">
              <span class="hour"></span>
              <span class="minute"></span>
              <span class="second"></span>
              <span class="dot"></span>
            </div>
          </div>
          <audio>
              <source src="audio/IPHONE ALARM MORNING.mp3">
          </audio>
        <div class='audio-control'>
            <h3>Time is Up</h3>
            <button class="stop-btn">Stop</button>
        </div>
    </div>
    <div class="clock__footer">
        <div class="clock__item" onClick="openClock()">
            <i class="fa-solid fa-globe"></i>
            <p>World Clock</p>
        </div>
        <div class="clock__item" onClick="openAlarm()">
            <i class="fa-solid fa-bell"></i>
            <p>Alarm</p>
        </div>
        <div class="clock__item">
            <i class="fa-solid fa-stopwatch"></i>
            <p>StopWatch</p>
        </div>
        <div class="clock__item">
            <i class="fa-solid fa-hourglass-end"></i>
            <p>Timer</p>
        </div>
    </div>
    <div class="home__btn">
        <button class="home-btn" onClick="openHome()"></button>
    </div>
    `
}