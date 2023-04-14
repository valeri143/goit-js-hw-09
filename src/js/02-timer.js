import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const btnStart = document.querySelector('[data-start]')
btnStart.disabled = true;
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]')


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] < Date.now()){
        Notiflix.Notify.failure("Please choose a date in the future");
      }
      btnStart.disabled = false;
      btnStart.addEventListener('click', onStartTimer)
      function onStartTimer(){
        btnStart.disabled = true;
        setInterval(() => {
            const choosedDate = selectedDates[0].getTime();
            const date = Date.now()
            const differenceOfDates = choosedDate - date;
            const formattedDate = convertMs(differenceOfDates);
           days.textContent = formattedDate.days;
           hours.textContent = addLeadingZero(formattedDate.hours);
           minutes.textContent = addLeadingZero(formattedDate.minutes);
           seconds.textContent = addLeadingZero(formattedDate.seconds);
        },1000)
      }
    
    },
  };
  flatpickr("#datetime-picker", options);


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value){
return value.toString().padStart(2,'0')
  }
 