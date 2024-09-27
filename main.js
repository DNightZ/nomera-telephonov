function formattedPhone(phone) {
    const phonePattern = /^(?:\+38)?(0\d{2})(\d{3})(\d{2})(\d{2})$/;

    const match = phone.match(phonePattern);
    
    if (match) {
        const formatted = `+38 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
        return formatted;
    } else {
        return 'Формат функції неправильний';
    }
}

document.getElementById('formatButton').addEventListener('click', function() {
    const userInput = prompt("Введіть номер телефону:");
    const result = formattedPhone(userInput);
    alert(result);
});
