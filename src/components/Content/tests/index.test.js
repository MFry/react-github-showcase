import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import ContentWrapper from '../index';

describe('<ContentWrapper />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<ContentWrapper id={id} />);
    const renderedComponent = enzymeFind(wrapper, ContentWrapper);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render content', () => {
    const content = <div>Test</div>;
    const wrapper = mount(<ContentWrapper>{content}</ContentWrapper>);
    const renderedComponent = enzymeFind(wrapper, ContentWrapper);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
