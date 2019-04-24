export function isValidZip(zip) {
    return /^\d{5}(-\d{4})?$/.test(zip);
}

//display alert message
export function alertMessage(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.textContent = message;
    document.querySelector('.container').insertBefore(div, document.querySelector('#pet-form'));
    setTimeout(() => {
        div.remove();
    }, 3000)
}