# CSS Variables: A Quick Dive 📘

Hello! I explored a tutorial on CSS variables and found it quite enlightening. Here's a summary for quick reference.

## Contents

- **HTML Layout**: Comprising a navbar, portfolio display, and footer.
- **CSS Basics**: Core styling for a neat design.
- **CSS Variables**: Demonstrating the flexibility and efficiency they bring.
- **JavaScript Play**: Manipulating CSS variables dynamically.

## Key Takeaways 📌

### Defining Global Variables
Centralized style control. Set it once, use it everywhere.
```css
:root {
    --red: #ff6f69;
    --beige: #ffeead;
    --yellow: #ffcc5c;
    --offwhite: whitesmoke;
}
```

### Utilizing Variables
Accessing and using the variables is made simple.
```css
body {
    background: var(--beige);
}
```

### JavaScript and CSS Variables
Dynamic style adjustments on-the-go.
```javascript
const root = document.querySelector(':root');
const yellow = getComputedStyle(root).getPropertyValue('--yellow');
root.style.setProperty('--yellow', 'orange');
```

## Credits 🙏

- [Learn CSS Variables](https://scrimba.com/learn/cssvariables) by Scrimba