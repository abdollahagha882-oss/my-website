// تشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded ✅");

  // رسالة ترحيب
  alert("👋 Welcome to Get Your Hurghada Local Guide!");
});

// دالة الحجز
function bookNow() {
  let userName = prompt("Please enter your name:");
  let userTour = prompt("Which tour would you like to book? (Glass Boat / Orange Bay / Snorkeling)");

  if (userName && userTour) {
    alert("✅ Thank you " + userName + "! Your booking for " + userTour + " has been received.");
    
    // فتح الواتساب مع الرقم المحدد
    let phone = "+201148577199"; 
    let message = `Hello, I am ${userName}. I would like to book the ${userTour} tour.`;
    let whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank"); // فتح الرابط في نافذة جديدة
  } else {
    alert("⚠️ Booking cancelled. Please try again.");
  }
}

// تأثير التمرير السلس على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// زر الرجوع للأعلى
let backToTop = document.createElement("button");
backToTop.innerText = "⬆️ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.background = "#0077b6";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "8px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";

// إظهار زر العودة عند التمرير
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// حدث عند الضغط على زر الرجوع
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


function bookNow(tourName) {
  let phoneNumber = "+201148577199";
  let message = `Hello, I would like to book the tour: ${tourName}`;
  let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}
