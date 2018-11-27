/**
 * Testing the link component
 */

import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import A from './index';

const href = 'https://jestjs.io/';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) => {
  const wrapper = mount(
    <A href={href} {...props}>
      {children}
    </A>,
  );
  return enzymeFind(wrapper, A);
};

describe('<A />', () => {
  it('Should render an <a> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('a');
  });

  it('Should have a href attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('href')).toEqual(href);
  });

  it('Should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('Should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('a').hasClass(className)).toEqual(true);
  });

  it('Should adopt a target attribute', () => {
    const target = '_blank';
    const renderedComponent = renderComponent({ target });
    expect(renderedComponent.prop('target')).toEqual(target);
  });

  it('Should adopt a rel attributes', () => {
    const rel = 'noopener noreferrer';
    const renderedComponent = renderComponent({ rel });
    expect(renderedComponent.prop('rel')).toEqual(rel);
  });

  it('Should adopt a type attribute', () => {
    const type = 'text/html';
    const renderedComponent = renderComponent({ type });
    expect(renderedComponent.prop('type')).toEqual(type);
  });
});
