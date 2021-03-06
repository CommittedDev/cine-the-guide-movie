import React from 'react';
import { render } from 'react-native-testing-library';
import ListItem from '../ListItem';

const props = {
  item: {
    poster_path: '',
    genre_ids: '',
    type: '',
    isSearch: false
  },
  numColumns: 1
};

test('should verify if has only one Image in list mode', () => {
  const { getAllByType } = render(<ListItem {...props} />);
  const image = getAllByType('Image');

  expect(image).toHaveLength(1);
});

test('should verify if has only one Image in columns mode', () => {
  const { getAllByType } = render(<ListItem {...props} numColumns={2} />);
  const image = getAllByType('Image');

  expect(image).toHaveLength(1);
});

test('should verify if title text has numberOfLines equal to 2', () => {
  const { getAllByType } = render(<ListItem {...props} />);
  const [title] = getAllByType('Text');

  expect(title.props.numberOfLines).toBe(2);
});
