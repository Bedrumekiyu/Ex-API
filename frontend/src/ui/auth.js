import { loginUser, registerUser } from '../api/auth.js';

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const { token, user } = await loginUser({ email, password });
    localStorage.setItem('token', token);
    alert('Login successful');
    window.location.href = 'expenses.html';
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
});

registerForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await registerUser({ name, email, password });
    alert('Registration successful');
    window.location.href = 'login.html';
  } catch (error) {
    alert('Registration failed: ' + error.message);
  }
});
