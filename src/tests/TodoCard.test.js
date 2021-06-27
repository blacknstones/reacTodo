import React from 'react';
import {
  render,
  getByText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TodoCard from '../components/TodoCard';

configure({ adapter: new Adapter() });

const mockTask = {
  title: 'water plants',
  description: 'water all my plants in the apartment',
};

describe('TodoCard Component', () => {
  test('', () => {
    const { getByText } = render(<TodoCard task={mockTask} />);
    expect(getByText('water plants')).toBeInTheDocument();
    expect(getByText('water all my plants in the apartment')).toBeInTheDocument();
  });
});
