const contoh = document.querySelectorAll('.coba');

contoh.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'green';
        element.style.cursor = 'pointer';
        element.textContent = 'HELLO ACADEMICIAN';
    });
    element.addEventListener('mouseout', () => {
        element.style.color = 'red';
        element.textContent = 'HELLO WORLD';
    });
});