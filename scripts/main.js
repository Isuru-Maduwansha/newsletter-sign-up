const subscribeBtn = document.getElementById("subscribeBtn");
const dismissBtn = document.getElementById("dismissBtn");

const subscribe = document.querySelector(".main-page");
const visibility = document.querySelector(".success-message");
const error = document.querySelector(".hidden");
const inputError = document.querySelector("#inputEmail");

subscribeBtn.addEventListener('click', () => {
   const emailInput = document.getElementById("inputEmail");
   const emailValue = emailInput.value.trim();
   const email = document.getElementById("subscribeEmail");

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(emailPattern.test(emailValue)){
      subscribe.classList.add("success-message");
      email.textContent = emailValue;
      visibility.classList.add("success-message-visible");
      error.classList.remove("hidden-visible");
      emailInput.value = "";
   }else{
      error.classList.add("hidden-visible");
      inputError.classList.add("input-email-error");
   }
});

dismissBtn.addEventListener('click', () =>{
   subscribe.classList.remove("success-message");
   visibility.classList.remove("success-message-visible");
   inputError.classList.remove("input-email-error");
})