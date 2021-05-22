import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from './Navbar.component';
import constants from '../../Constants/navbar';

jest
  .mock('react-router-dom', () => ({
    Redirect: () => 'Redirect',
    useHistory: jest.fn()
  }))

describe('Navbar component snap test', () => {
  it('Render Navbar, should match snapshot', () => {

    const { container } = render(<Navbar items={constants.dashboard} />);

    expect(container).toMatchSnapshot();
  });
});
