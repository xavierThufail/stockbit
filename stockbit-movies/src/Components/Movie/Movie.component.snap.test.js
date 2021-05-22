import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Movie from './Movie.component';

describe('Movie component snap test', () => {
  it('Render Movie, should match snapshot', () => {

    const { container } = render(<Movie Title='test' Year='test' imdbID='test' Type='test' Poster='test' onClick={() => {}} handleOpenModal={() => {}}  />);

    expect(container).toMatchSnapshot();
  });
});
