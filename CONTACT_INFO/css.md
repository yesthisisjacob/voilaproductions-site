# Photography Contact Form - CSS Styles

This stylesheet provides a minimalist, professional aesthetic suitable for a photography portfolio. It includes responsive design for mobile and desktop.

## Code

```css
/* Container Layout */
.form-wrapper {
  max-width: 550px;
  margin: 40px auto;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #1a1a1a;
}

/* Form Groups */
.input-field {
  margin-bottom: 24px;
}

.label-text, 
label {
  display: block;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Inputs & Textarea */
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #e1e1e1;
  border-radius: 0; /* Modern square aesthetic */
  background: #fafafa;
  font-size: 1rem;
  box-sizing: border-box;
}

input:focus, 
textarea:focus {
  outline: none;
  border-color: #000;
}

/* Selection Layouts */
.options-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.options-row label, 
.options-list label {
  font-weight: 400;
  text-transform: none;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

/* Button Styling */
button[type="submit"] {
  background-color: #000;
  color: #fff;
  padding: 16px 40px;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;
  width: 100%;
}

button[type="submit"]:hover {
  background-color: #333;
}
