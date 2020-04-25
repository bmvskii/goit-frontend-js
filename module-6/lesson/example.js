
const isValidPassword = function (password) {
    if (password.length === 0) {
        console.log("Пароль пустой. Введите пароль");
        return false;
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let hasDigits = false;
    let hasSymbols = false;
    let hasUppercasedLetter = false;

    for (let i = 0; i < password.length; i++) {
        if (digits.includes(password[i])) {
            hasDigits = true;
        }
        if (symbols.includes(password[i])) {
            hasSymbols = true;
        }
        if (letters.includes(password[i])) {
            hasUppercasedLetter = true;
        }
    }

    if (password.length < 8) {
        console.log("Длина пароля должна быть больше 8 символов");
        return false;
    };

    if (!hasUppercasedLetter) {
        console.log("Нет букв в вверхнем регистре");
        return false;
    }

    if (!hasSymbols) {
        console.log("В пароле отстутствуют символы");
        return false;
    }

    if (!hasDigits) {
        console.log("В пароле отстутствуют цифры");
        return false;
    }

    return true;
}

const runCaptcha = function (_attempts = 5) {
    const maxCapchaAttemps = _attempts;
    let attempts = 0;
    let isHuman = false;

    while (attempts < maxCapchaAttemps && !isHuman) {
        console.log(`У вас есть ${maxCapchaAttemps - attempts} попыток`);

        const TEST = "(8 + 10) / 2";
        const EXPECTED_RESULT = '9';
        const testResult = prompt(TEST);

        if (testResult === EXPECTED_RESULT) {
            isHuman = true;
        } else {
            console.log("Вы робот");
            attempts++;
        }
    }

    if (isHuman) {
        return 'CAPCHA_PASSED';
    }

    return 'CAPCHA_GET_PASSWORD_AGAIN';
};

const isPasswordsEqual = function(originalPassword) {
    const password = prompt("Введите еще раз пароль:");

    if (password !== originalPassword) {
        console.log("Пароли не совпадают");
        return false;
    }

    return true;
}

const showAttempts = function() {
    console.log("ПОПЫТКА № ", tries);
    tries++;
}

let isStrongPassword = false;
let tries = 1;

let hasCaptchaErrors = false;

do {
    showAttempts();

    const CAPTCHA_ATTEMPS = 3;
    const pswd = prompt("Введите пароль:");
    const isValid = isValidPassword(pswd);
    const isEqual = isValid && isPasswordsEqual(pswd);

    if (!isValid || !isEqual) {
        continue;
    }

    const captcha = runCaptcha(CAPTCHA_ATTEMPS);
    if (captcha === 'CAPCHA_GET_PASSWORD_AGAIN') {
        location.reload();
        hasCaptchaErrors = true;
    }

    isStrongPassword = true;

} while (!isStrongPassword);

if (isStrongPassword && !hasCaptchaErrors) {
    alert("Пароль успешно установлен!");
}
