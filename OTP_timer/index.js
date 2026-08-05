const otpBtn = document.getElementById("otpBtn");
const timer = document.getElementById("timer");

let interval;

otpBtn.addEventListener("click", () => {

    otpBtn.disabled = true;

    let timeLeft = 30;

    timer.textContent = `Resend OTP in ${timeLeft}s`;

    interval = setInterval(() => {

        timeLeft--;

        timer.textContent = `Resend OTP in ${timeLeft}s`;

        if (timeLeft === 0) {

            clearInterval(interval);

            otpBtn.disabled = false;

            timer.textContent = "You can resend the OTP now.";
        }

    }, 1000);

});
