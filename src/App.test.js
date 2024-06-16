import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('add new task', () => {
  render(<App/>);
  const input = screen.getByPlaceholderText('Task name');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: {value: 'Task1'} });
  fireEvent.click(button);

  expect(screen.getByText('Task1')).toBeInTheDocument();

});