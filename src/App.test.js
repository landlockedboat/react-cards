import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test React Zurich/i);
  expect(linkElement).toBeVisible();
});

test('clicking button renders modal', () => {
  render(<App />);
  fireEvent.click(document.querySelector('#add-card-fab'))
  const linkElement = screen.getByLabelText(/Nueva tarjeta/i);
  expect(linkElement).toBeVisible();
});

test('modal is capable of creating new cards', () => {
  render(<App />);
  fireEvent.click(document.querySelector('#add-card-fab'))
  const addCardModalTitle = screen.getByLabelText(/Nueva tarjeta/i);
  expect(addCardModalTitle).toBeVisible();
  const titleInput = document.querySelector('#modal-input-card-title');
  const cardTitle = 'Titulo interesante';
  fireEvent.change(titleInput, { target: { value: cardTitle } });
  expect(titleInput.value).toBe(cardTitle);

  const descriptionInput = document.querySelector('#modal-input-card-description');
  const cardDescription = 'Descripción curiosa';
  fireEvent.change(descriptionInput, { target: { value: cardDescription } });
  expect(descriptionInput.value).toBe(cardDescription);

  fireEvent.click(document.querySelector('#create-new-card-button'));
  expect(addCardModalTitle).not.toBeVisible();

  const newCardTitle = screen.getByText(/Titulo interesante/i);
  expect(newCardTitle).toBeVisible();
});