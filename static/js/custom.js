function sendEmail() {
  try {
    const user = "ncteachersinaction@gmail.com";
    const mailtoLink = `mailto:${user}`;

    // Open the default email client
    window.location.href = mailtoLink;
  } catch (error) {
    console.error("Error creating email link:", error);
    alert("Unable to open email client.");
  }
}

$(document).ready(function() {
  document.getElementById("shareYourStory").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent navigation
      shareYourStory();
  });

  document.getElementById("envelope").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent navigation
      sendEmail();
  });

  var $who = $("#fadeTrigger");
  var $nctia = $("#nctia");

  $(window).on("scroll", function() {
    // Distance from top of viewport
    var whoTop = $who[0].getBoundingClientRect().top;
    var nctiaTop = $nctia[0].getBoundingClientRect().top;

    if (whoTop <= 0) {
      $(".fade-text-1").fadeTo(1000, 1);
      $(".fade-text-3").fadeTo(3000, 1);
    }

    if (nctiaTop <= 0) {
      $("#who-inner").animate({ right: "0px" }, 500);

      $(".fade-in-1").delay(1000).fadeTo(1000, 1);
      $(".fade-in-2").delay(2000).fadeTo(1000, 1);
      $(".fade-in-3").delay(3000).fadeTo(1000, 1);
      $(".fade-in-4").delay(4000).fadeTo(1000, 1);
      $(".fade-in-5").delay(5000).fadeTo(1000, 1);
    }
  });
});