// Live character counter for the enquiry message box
const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("input", function () {
  counter.textContent = message.value.length + " / 300";
});

// Show / hide each trainer bio
document.querySelectorAll(".bio-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const bio = btn.nextElementSibling;
    bio.hidden = !bio.hidden;
    btn.textContent = bio.hidden ? "Show bio" : "Hide bio";
  });
});
