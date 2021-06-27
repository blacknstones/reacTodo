import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTaskForm from '../components/AddTaskForm';

describe('AddTaskForm', () => {
  test('render the correct fields', () => {
      const {getByLabelText} = render(<AddTaskForm/>);
      const titleLabel = getByLabelText('Title');
      const descLabel = getByLabelText('Description');
      expect(titleLabel).toBeInTheDocument();
      expect(descLabel).toBeInTheDocument();
  });
});
