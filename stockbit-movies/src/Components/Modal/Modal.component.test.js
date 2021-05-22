import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';

import Modal from './Modal.component';

describe('Modal component test', () => {
  it('Render Modal, should called handleClose when btn X is clicked', async () => {
    const mockedProps = {
      handleClose: jest.fn(),
      visible: true
    };

    const { result } = renderHook(() => new Modal(mockedProps));
    const { result: rowModal } = renderHook(() => result.current.props.children);
    const { result: colModal } = renderHook(() => rowModal.current.props.children);

    const btnClose = colModal.current.props.children[0];

    await act(async () => {
      await btnClose.props.onClick();
    });

    expect(mockedProps.handleClose).toBeCalled();
  });
});
