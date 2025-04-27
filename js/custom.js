const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const resultDiv = document.getElementById('result');

// Define password validation rules
const passwordRules = {
  minLength: 8,
  maxLength: 20,
  requireUppercase: true,
  requireNumbers: true,
  requireSpecialChars: true
};

// Function to validate password
function validatePassword(password) {
  const errors = [];

  if (password.length < passwordRules.minLength) {
    errors.push(`Password must be at least ${passwordRules.minLength} characters long`);
  }

  if (password.length > passwordRules.maxLength) {
    errors.push(`Password must be no more than ${passwordRules.maxLength} characters long`);
  }

  if (passwordRules.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (passwordRules.requireNumbers && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (passwordRules.requireSpecialChars && !/[^a-zA-Z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return errors;
}

// Add event listener to submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const password = passwordInput.value;
  const errors = validatePassword(password);

  if (errors.length > 0) {
    resultDiv.innerHTML = `
      <ul>
        ${errors.map((error) => `<li>${error}</li>`).join('')}
      </ul>
    `;
  } else {
    resultDiv.innerHTML = 'Password is valid!';
  }
});