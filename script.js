const strengthMeter = document.getElementById('strength-meter');
const passwordInput = document.getElementById('password-input');
const reasonsContainer = document.getElementById('reasons');

passwordInput.addEventListener('input',updateStrMeter);
updateStrengthMeter()

const updateStrMeter= () => {
    const weaknesses = calculatePassStr(passwordInput.value);
    let strength = 100;
    reasonsContainer.innerHTML = '';
    weaknesses.forEach(weakness => {
        if(weakness == null) return
        strength -= weakness.deduction
        const messageElement = document.createElement('div')
        messageElement.innerText = weakness.message
        reasonsContainer.appendChild()
    })
    strengthMeter.style.setProperty('--strength', strength)
}
const calculatePassStr = (password) =>{
    const weaknesses = [];
    weaknesses.push(lengthWeaknes(password));
    weaknesses.push(lowercaseWeakness(password));
    weaknesses.push(uppercaseWeakness(password));
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
const lowercaseWeakness = (password) =>{
   return characterTypeWeakness(password, /[a-z]/g, 'lowercase characters')
}
const uppercaseWeakness = (password) => {
    return characterTypeWeakness(password, /[A-Z]/g, 'uppercase characters')
}
const characterTypeWeakness = (password, regex, type) =>{
    const match = password.match(regex) || [];
    if(match.length === 0){
        return{
            message: `Your password has no ${type}`,
            deduction: 20
        }
    }
    if(match.length <= 2){
        return{
            message: `Your password could use more ${type}`,
            deduction: 5
        }
    }
}