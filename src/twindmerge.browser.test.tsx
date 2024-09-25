import { expect, test } from "vitest";
import { merge } from './twindmerge';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {clsx} from "clsx";


describe('browser tests', () => {
  const renderComponent = (className: string) => {
    function ExampleComponent() {
      return <button className={className}></button>;
    }
    render(<ExampleComponent />);
    return screen.getByRole('button');
  };

  const testMerge = (testName: string, ...input: Parameters<typeof merge>) => {
    test(testName, () => {
      const button = renderComponent(merge(...input));
      expect(button.className).toBe(merge(...input));
    });
  };

  testMerge('merges string input', "text-gray-100 text-gray-50");
  testMerge('merges clsx input', clsx("text-gray-100", "text-gray-50"));
  testMerge('merges array input', ['bg-blue-500', 'bg-red-500']);
  testMerge('merges multiple arguments', 'bg-blue-500', 'bg-red-500');
});