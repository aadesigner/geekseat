import React from 'react';

import { Divider } from './Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Geekseat/Divider',
  component: Divider,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Divider {...args} />;

export const CustomDivider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomDivider.args = {

};

