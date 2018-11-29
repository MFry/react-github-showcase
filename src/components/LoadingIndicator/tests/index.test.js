import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should match the snapshot', () => {
    expect(shallow(<LoadingIndicator />)).toMatchSnapshot();
  });
});
