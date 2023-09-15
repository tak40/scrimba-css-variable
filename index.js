const root = document.querySelector(':root')
const rootStyles = getComputedStyle(root)
const yellow = rootStyles.getPropertyValue('--yellow')
console.log('yellow', yellow)

root.style.setProperty('--yellow', 'blue')