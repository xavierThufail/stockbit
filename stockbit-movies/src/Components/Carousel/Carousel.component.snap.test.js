import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Carousel from './Carousel.component';

describe('Carousel component snap test', () => {
  it('Render Carousel, should match snapshot', () => {

    const { container } = render(<Carousel />);

    expect(container).toMatchSnapshot();
  });
});
