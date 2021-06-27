import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../components/TodoList';

describe('TodoList component', () => {
  test('TodoList renders empty todolist on first load', () => {
    const TodoComponent = renderer.create(<TodoList />);
    let tree = TodoComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
