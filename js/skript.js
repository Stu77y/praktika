document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Предотвращаем стандартную отправку формы
  
  // Получаем значения полей
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const product = document.getElementById("product").value;
  
  // Проверка на заполненность полей
  if (!name || !email || !product) {
      alert("Пожалуйста, заполните все обязательные поля.");
  } else {
      alert("Спасибо за ваш заказ, " + name + "! Мы свяжемся с вами по email: " + email);
      document.getElementById("order-form").reset();  // Сброс формы после успешной отправки
  }
});

// Получить элемент кнопки
const scrollToTopButton = document.getElementById('scrollToTop');

// Показать кнопку при прокрутке вниз
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
};

// Прокрутка к началу страницы при нажатии кнопки
scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
};