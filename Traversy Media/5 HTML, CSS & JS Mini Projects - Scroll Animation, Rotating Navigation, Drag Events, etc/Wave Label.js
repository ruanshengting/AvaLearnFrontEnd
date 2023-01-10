const labels = document.querySelectorAll('.row_control label')
const emailInput = document.querySelector('.row_control input:nth-child(1)')
const passwordInput = document.querySelector(
  '.row_control input[type="password"]',
)
// emailInput.addEventListener('inputs', function () {
//   if (emailInput.innerText.length > 0) {
//     console.log('213123')
//   }
// })
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`,
    )
    .join('')
})
