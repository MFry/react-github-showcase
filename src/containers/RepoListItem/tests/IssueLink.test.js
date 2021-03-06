import React from 'react';
import { mount, shallow } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import 'jest-styled-components';

import IssueLink from '../IssueLink';

describe('<IssueLink />', () => {
  it('should match the snapshot', () => {
    expect(shallow(<IssueLink />)).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const wrapper = mount(<IssueLink />);
    const renderedComponent = enzymeFind(wrapper, IssueLink);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = mount(<IssueLink id={id} />);
    const renderedComponent = enzymeFind(wrapper, IssueLink);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = mount(<IssueLink attribute="test" />);
    const renderedComponent = enzymeFind(wrapper, IssueLink);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
