import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../matchMedia.mock';

import TouchableOpacity from './TouchableOpacity.component';

describe('TouchableOpacity component snap test', () => {
  it('Render TouchableOpacity, should match snapshot', () => {
    const onClick = jest.fn();
    const title = 'Click Here';

    const { container, getByText } = render(<TouchableOpacity onClick={onClick}>{title}</TouchableOpacity>);

    const btn = getByText(title);

    expect(btn).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
