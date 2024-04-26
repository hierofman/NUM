$(function () {
  
  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiperReviews = new Swiper(".reviews__slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  document.querySelectorAll('.accordeon__triger').forEach((item) => {
   item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active')
   })
  });
  $(".menu a, .go-top, .header__icon").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);

  });

  $(".form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Дякуємо за заявку!\n Наш консультант зв'яжеться з Вами найближчим часом.");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});