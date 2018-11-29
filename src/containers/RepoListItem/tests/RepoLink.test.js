import React from 'react';
import { mount, shallow } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import 'jest-styled-components';

import RepoLink from '../RepoLink';

describe('<RepoLink />', () => {
  it('should match the snapshot', () => {
    expect(shallow(<RepoLink />)).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const wrapper = mount(<RepoLink />);
    const renderedComponent = enzymeFind(wrapper, RepoLink);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = mount(<RepoLink id={id} />);
    const renderedComponent = enzymeFind(wrapper, RepoLink);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = mount(<RepoLink attribute="test" />);
    const renderedComponent = enzymeFind(wrapper, RepoLink);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
