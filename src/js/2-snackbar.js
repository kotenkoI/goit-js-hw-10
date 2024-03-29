// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const createButton = document.querySelector('#submit-button');
const delayInput = document.querySelector('input[name="delay"]');

createButton.addEventListener('click', createNotification);

function createNotification(e) {
  e.preventDefault();
  let stateInput = document.querySelector('input[name="state"]:checked');
  if (delayInput.value && stateInput.value) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (stateInput.value == 'fulfilled') {
          resolve(`Fulfilled promise in ${delayInput.value}ms`);
          console.log(promise);
          iziToast.success({
            title: 'Success!',
            message: `Fulfilled promise in ${delayInput.value}ms`,
            position: 'topRight',
          });
        }
        if (stateInput.value == 'rejected') {
          reject(`Rejected promise in ${delayInput.value}ms`);
          console.log(promise);
          iziToast.error({
            title: 'Error',
            message: `Rejected promise in ${delayInput.value}ms`,
            position: 'topRight',
          });
        }
      }, delayInput.value);
    });
    return promise;
  }
  return iziToast.warning({
    title: 'Warning',
    message: 'You forgot important data!',
    position: 'topRight',
  });
}