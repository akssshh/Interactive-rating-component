const btns = document.querySelectorAll(".btn-container");
const submitBtn = document.querySelector(".btn-sub");
const span = document.querySelector(".card-two .rating-text span");
const initialCard = document.querySelector(".card-one");
const secondCard = document.querySelector(".card-two");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let text = e.target.textContent;
    submitBtn.addEventListener("click", (e) => {
      initialCard.classList.add("hide");
      secondCard.classList.remove("hide");
      span.textContent = text;
    });
  });
});
