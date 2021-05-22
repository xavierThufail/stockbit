import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../matchMedia.mock';

import TouchableOpacity from './TouchableOpacity.component';

describe('TouchableOpacity component test', () => {
  it('Render TouchableOpacity, should call onClick function when btn is clicked', () => {
    const onClick = jest.fn();
    const title = 'Click Here';

    const { container, getByText } = render(<TouchableOpacity onClick={onClick}>{title}</TouchableOpacity>);

    const btn = getByText(title);

    act(() => {
      fireEvent.click(btn);
    });

    expect(btn).toBeDefined();
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });
});
