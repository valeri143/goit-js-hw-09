import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const  delay = form.delay.value 
const step = form.step.value;
const amount = form.amount.value;
form.addEventListener('submit',  createPromise(1, delay))
// function onSubmit (evt){
//   evt.preventDefault()
//   createPromise(0, delay)
// }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let myPromises = [];
  setTimeout(() => {
          for (let position = 1; position <= amount; position +=1) {
            setInterval(() => {
       const myPromise =  new Promise((resolve, reject) => {
                if (shouldResolve) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
                } else {
                 reject(`❌ Rejected promise ${position} in ${delay}ms`);
                }  myPromises.push(myPromise)
            }) 
            }, step)
          } return myPromises;
         },delay)
}

Promise.allSettled()
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
   
  