$(document).ready(function () {
    // Navigation Bar
    $('#menu-btn').click(function () {
        $('nav .navigation ul').addClass('active');
    });

    $('#menu-close').click(function () {
        $('nav .navigation ul').removeClass('active');
    });

    // Contact Us Form Validation
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\+?[0-9]{10,14}$/.test(phone);
    }

    function submitForm() {
        var firstName = $('input[name="firstName"]').val().trim();
        var lastName = $('input[name="lastName"]').val().trim();
        var email = $('input[name="email"]').val().trim();
        var phone = $('input[name="phone"]').val().trim();
        var message = $('textarea[name="message"]').val().trim();

        var isValid = true;

        if (firstName === '') {
            isValid = false;
            alert('Please enter your First Name.');
        }

        if (lastName === '') {
            isValid = false;
            alert('Please enter your Last Name.');
        }

        if (email === '') {
            isValid = false;
            alert('Please enter your Email Address.');
        } else if (!isValidEmail(email)) {
            isValid = false;
            alert('Please enter a valid Email Address.');
        }

        if (phone === '') {
            isValid = false;
            alert('Please enter your Phone Number.');
        } else if (!isValidPhone(phone)) {
            isValid = false;
            alert('Please enter a valid Phone Number (10-14 digits).');
        }

        if (message === '') {
            isValid = false;
            alert('Please enter your Message.');
        }

        if (isValid) {
            alert('Form submitted successfully!');
            $('input[type="text"], textarea').val('');
        }
    }

    $('button').click(function (e) {
        e.preventDefault();
        submitForm();
    });
});