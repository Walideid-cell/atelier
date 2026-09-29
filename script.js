/* =====================================================
   ATELIER NOIR
   JavaScript
   ===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ================= BOOKING ================= */

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !service || !date) {

        formMessage.textContent =
            "من فضلك أكملي البيانات المطلوبة.";

        return;
    }


    /* رقم واتساب تجريبي */
    const whatsappNumber = "201000000000";


    const selectedDate =
        new Date(date + "T00:00:00");


    const formattedDate =
        selectedDate.toLocaleDateString("ar-EG", {

            year: "numeric",
            month: "long",
            day: "numeric"

        });


    let whatsappMessage =
        `مرحبًا، أريد حجز موعد في ATELIER NOIR.%0A%0A` +

        `الاسم: ${encodeURIComponent(name)}%0A` +

        `رقم الهاتف: ${encodeURIComponent(phone)}%0A` +

        `الخدمة: ${encodeURIComponent(service)}%0A` +

        `التاريخ المفضل: ${encodeURIComponent(formattedDate)}`;


    if (message) {

        whatsappMessage +=
            `%0A%0Aملاحظات:%0A${encodeURIComponent(message)}`;

    }


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    window.open(whatsappURL, "_blank");


    formMessage.textContent =
        "تم تجهيز طلبك وسيتم فتح واتساب لإرساله.";


    bookingForm.reset();

});


/* ================= MINIMUM DATE ================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");


dateInput.min =
    `${year}-${month}-${day}`;


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".intro-content, .fashion-item, .atelier-content, .atelier-image, .service, .booking-content, .booking-form, .contact-grid > div"
);


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});