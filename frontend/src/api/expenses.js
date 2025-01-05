const API_URL = 'http://localhost:3000/api';

export async function fetchExpenses(token) {
  const response = await fetch(`${API_URL}/expenses`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch expenses');
  }

  return response.json(); 
}

export async function addExpense(expense, token) {
  const response = await fetch(`${API_URL}/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error('Failed to add expense');
  }

  return response.json();
}

export async function updateExpense(id, expense, token) {
  const response = await fetch(`${API_URL}/expenses/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error('Failed to update expense');
  }

  return response.json();
}

export async function deleteExpense(id, token) {
  const response = await fetch(`${API_URL}/expenses/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('Failed to delete expense');
  }

  return response.json();
}
