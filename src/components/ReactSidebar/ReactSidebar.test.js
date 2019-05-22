import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ReactSidebar from './ReactSidebar';

describe('ReactSidebar', () => {
  let props;
  let shallowReactSidebar;
  let renderedReactSidebar;
  let mountedReactSidebar;

  const shallowTestComponent = () => {
    if (!shallowReactSidebar) {
      shallowReactSidebar = shallow(<ReactSidebar {...props} />);
    }
    return shallowReactSidebar;
  };

  const renderTestComponent = () => {
    if (!renderedReactSidebar) {
      renderedReactSidebar = render(<ReactSidebar {...props} />);
    }
    return renderedReactSidebar;
  };

  const mountTestComponent = () => {
    if (!mountedReactSidebar) {
      mountedReactSidebar = mount(<ReactSidebar {...props} />);
    }
    return mountedReactSidebar;
  };  

  beforeEach(() => {
    props = {};
    shallowReactSidebar = undefined;
    renderedReactSidebar = undefined;
    mountedReactSidebar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
