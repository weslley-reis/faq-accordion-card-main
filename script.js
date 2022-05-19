const question = document.querySelectorAll(".question-item");
const answer = document.querySelectorAll(".answer-item");
const box = document.querySelector(".box");
const faq = document.querySelector(".faq");

function selecionar(b) {
  var selecionado = answer.item(b);
  var questao = question.item(b);
  questao.classList.toggle("question-item-active");
  selecionado.classList.toggle("answer-item-display");
}

faq.addEventListener("mouseover", () => {
  box.classList.add("box--active");
});

faq.addEventListener("mouseout", () => {
  box.classList.remove("box--active");
});
