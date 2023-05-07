// menu
$(document).ready(function () {
  $(".menu").click(function () {
    $("#menu-items").toggle();
  });

  // hide the menu when the user scrolls down
  $(window).scroll(function () {
    if ($(window).width() < 640 && $(this).scrollTop() > 0) {
      $("#menu-items").hide();
    }
  });
});

//images on hover
$(document).ready(function () {
  if ($(window).width() > 768) {
    const images = [".image-2", ".image-3", ".image-4"];

    images.forEach((image) => {
      const $image = $(image);
      const isImage2 = $image.hasClass("image-2");
      const isImage3 = $image.hasClass("image-3");
      const isImage4 = $image.hasClass("image-4");

      $image.hover(
        function () {
          if (isImage2) {
            $image.addClass("scale-x-125 origin-left");
            $(".image-3").addClass("transform translate-x-[123px]");
            $(".image-4").addClass("scale-x-75 origin-right");
          } else if (isImage3) {
            $image.addClass("scale-x-150");
            $(".image-2").addClass("scale-x-75 origin-left");
            $(".image-4").addClass("scale-x-75 origin-right");
          } else if (isImage4) {
            $image.addClass("scale-x-125 origin-right");
            $(".image-2").addClass("scale-x-75 origin-left");
            $(".image-3").addClass("transform -translate-x-[123px]");
          }
        },
        function () {
          if (isImage2) {
            $image.removeClass("scale-x-125 origin-left");
            $(".image-3").removeClass("transform translate-x-[123px]");
            $(".image-4").removeClass("scale-x-75 origin-right");
          } else if (isImage3) {
            $image.removeClass("scale-x-150");
            $(".image-2").removeClass("scale-x-75 origin-left");
            $(".image-4").removeClass("scale-x-75 origin-right");
          } else if (isImage4) {
            $image.removeClass("scale-x-125 origin-right");
            $(".image-2").removeClass("scale-x-75 origin-left");
            $(".image-3").removeClass("transform -translate-x-[123px]");
          }
        }
      );
    });
  } else {
    $(".image-2, .image-3, .image-4").off("mouseenter mouseleave");
  }
});

//swiper
$(document).ready(function () {
  // Initialize Swiper
  var mySwiper = new Swiper(".swiper", {
    // Options here
    navigation: {
      nextEl: "#custom-button-next",
      prevEl: "#custom-button-prev",
    },
  });

  // clone the content of the first slide
  var firstSlideContent = $(".swiper-slide").first().html();
  // Append the cloned content to the remaining slides
  $(".swiper-slide").not(":first").html(firstSlideContent);

  // hide prev-button
  var prevButton = $("#custom-button-prev").hide();

  // hide next-button on last slide
  var nextButton = $("#custom-button-next");
  if (mySwiper.isEnd) {
    nextButton.hide();
  }

  // show/hide prev-button and next-button on slide change
  mySwiper.on("slideChange", function () {
    if (mySwiper.realIndex === 0) {
      prevButton.hide();
    } else {
      prevButton.show();
    }

    if (mySwiper.isEnd) {
      nextButton.hide();
    } else {
      nextButton.show();
    }
  });
});

// email validation
$(document).ready(function () {
  $(".submit-button").click(function () {
    var email = $(".email").val();
    if (email.length == 0) {
      $(".error-message")
        .text("Please enter your email address")
        .removeClass("hidden");
      $(".success-message").addClass("hidden");
      return false;
    }
    if (!isValidEmail(email)) {
      $(".error-message")
        .text("Please enter a valid email address")
        .removeClass("hidden");
      $(".success-message").addClass("hidden");
      return false;
    }
    $(".success-message")
      .text("Thank you for signing up!")
      .removeClass("hidden");
    $(".error-message").addClass("hidden");
  });
});

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
