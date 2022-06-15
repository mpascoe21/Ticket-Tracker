import { fireEvent, getByRole, getByText, render, screen } from '@testing-library/react';
import Counter from './Counter';

// PASSED
test('count starts with 0', () => {
  render(<Counter />)
  const countElement = screen.getByText(/0/i);
  expect(countElement).toBeInTheDocument()
});

//PASSED
test('renders header', () => {
  render(<Counter />);
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

//PASSED
it('increments by 1 on click', async () => {
  render(<Counter />);
  const count = screen.getByText(/0/i);
  //const buttonElement = screen.getByRole('button') // if only one button
  const buttonElement = screen.getByRole('button',{ name: '+'}) // if only one button
 
  fireEvent.click(buttonElement)
  expect(count.textContent).toBe('1');
});