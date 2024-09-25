import { expect, test } from "vitest";
import { Window } from 'happy-dom';
import { merge } from './twindmerge';
import { render, screen } from '@testing-library/react';
import React from 'react';


test('example1', () => {
  const TestComponent = () => (
    <div className="container">
      <button className={merge('bg-blue-500 text-white p-2 rounded', 'bg-red-500')}>
        Test Button
      </button>
    </div>
  );

  render(<TestComponent />);

  const button = screen.getByRole('button');
  expect(button.className).toBe('bg-red-500 text-white p-2 rounded');
});