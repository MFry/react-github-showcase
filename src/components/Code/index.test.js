import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Code from './index';

const children = <h1>Test</h1>;
const renderComponent = (props = {}) => {
  const wrapper = mount(<Code {...props}>{children}</Code>);
  return enzymeFind(wrapper, Code);
};

describe('<Code />', () => {
  it('Should render an <code> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('code');
  });

  it('Should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('code').hasClass(className)).toEqual(true);
  });

  it('Should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
