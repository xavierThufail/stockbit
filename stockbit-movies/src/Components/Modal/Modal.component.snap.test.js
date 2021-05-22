import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';

import Modal from './Modal.component';

describe('Modal component snap test', () => {
  it('Render Modal, should match snapshot', () => {
    const mockedProps = {
      children: (<div>Test</div>),
      handleClose: jest.fn(),
      visible: true,
      title: 'Title'
    };

    const { result } = renderHook(() => new Modal(mockedProps));

    expect(result.current).toMatchSnapshot();
  });
});
