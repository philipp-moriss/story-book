import React from 'react';
import {ComponentMeta, ComponentStory, ReactFramework, StoryContext} from '@storybook/react';

import {Button, ButtonProps} from './Button';
import {PartialStoryFn} from "@storybook/csf/dist/story";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked story BTN' }
  },
  // parameters: {
  //   actions: {
  //     handles: ['click'],
  //   },
  //},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};



function DecoratorMargin (Story: PartialStoryFn<ReactFramework, ButtonProps>, context : StoryContext<ReactFramework>) {
  return (
      <div style={{margin: '3em'}}>
          <Story {...context.args} />
      </div>
  )
}

export const ButtonWithDecorator = Template.bind({});
ButtonWithDecorator.args = {
   ...Primary.args
}
ButtonWithDecorator.decorators = [
  DecoratorMargin
]
