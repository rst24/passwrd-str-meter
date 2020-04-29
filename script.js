const strengthMeter = document.getElementById('strength-meter');
const passwordInput = document.getElementById('password-input');
const reasonsContainer = document.getElementById('reasons');

passwordInput.addEventListener('input',updateStrMeter)
const updateStrMeter= () => {
    const weaknesses = calculatePassStr(passwordInput.value);
    let strength = 100;
    weaknesses.forEach(weakness => {
        strength -= weakness.deduction
    })
    strengthMeter.style.setProperty('--strength', strength)
}
const calculatePassStr = (password) =>{
    const weaknesses = [];
    weaknesses.push(lengthWeaknes(password))
    return weaknesses
}
const lengthWeaknes = (password) =>{
    const length = password.length

    if(length <= 5){
        return {
            message: 'Your password is too short',
            deduction: 40
        }
    }
    if(length <= 10){
        return {
            message: 'Your password could be longer',
            deduction: 15
        }
    }

}