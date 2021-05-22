import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Icon from './Icon.component';

describe('Icon component snap test', () => {
  it('Render Icon, should match snapshot', () => {

    const { container } = render(<Icon type='HomeFilled' />);

    expect(container).toMatchSnapshot();
  });
});
