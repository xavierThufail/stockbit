import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppLayout from './AppLayout.component';

describe('AppLayout snap test', () => {
  it('Render AppLayout, should match snapshot', () => {
    const Children = () => (<div>Children</div>);
    const { container } = render(
      <AppLayout>
        <Children />
      </AppLayout>
    );

    expect(container).toMatchSnapshot();
  });
});
