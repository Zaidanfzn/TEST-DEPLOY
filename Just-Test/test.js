// const contoh = document.querySelectorAll('.coba');

// contoh.forEach(element => {
//     element.addEventListener('mouseover', () => {
//         element.style.color = 'green';
//         element.style.cursor = 'pointer';
//         element.textContent = 'HELLO ACADEMICIAN';
//     });
//     element.addEventListener('mouseout', () => {
//         element.style.color = 'red';
//         element.textContent = 'HELLO WORLD';
//     });
// });

const contoh = document.getElementsByClassName('coba');

for (let i = 0; i < contoh.length; i++) {
    const element = contoh[i];

    element.addEventListener('mouseover', () => {
        element.style.color = 'green';
        element.style.cursor = 'pointer';
        element.textContent = 'HELLO ACADEMICIAN';
    });

    element.addEventListener('mouseout', () => {
        element.style.color = 'red';
        element.textContent = 'HELLO WORLD';
    });
}