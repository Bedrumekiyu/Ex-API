const API_URL = 'http://localhost:3000/api';

export async function loginUser(credentials) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); 
}

export async function registerUser(details) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
}
