import SimpleStory from "./SimpleStory";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Example/SimpleStore',
    component: SimpleStory,
    argTypes: {
        color: { control: 'color' },
        levelType: {control: 'select'} //radio
    },
} as ComponentMeta<typeof SimpleStory>;

const Template: ComponentStory<typeof SimpleStory> = (args) => <SimpleStory {...args} />;

export const SimpleStoryExample = Template.bind({});
SimpleStoryExample.args = {
    levelType: 'Simple',
    color: 'pink',
};

export const SimpleStorySimple =  Template.bind({});
SimpleStorySimple.args = {
    levelType: 'Simple',
    color: 'green',
};

export const SimpleStoryMedium =   Template.bind({});
SimpleStoryMedium.args = {
    levelType: 'Medium',
    color: 'yellow',
};

export const SimpleStoryHard =   Template.bind({});
SimpleStoryHard.args = {
    levelType: 'Hard',
    color: 'red',
};




