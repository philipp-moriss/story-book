import PlayFunctionExample from "./PlayFunctionExample";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {userEvent} from "@storybook/testing-library";
import { expect } from '@storybook/jest';
import {within} from "@testing-library/react";

export default {
    title: 'Example/PlayFunctionExample',
    component: PlayFunctionExample,
    argTypes: {
        borderColor: { control: 'color' },
        placeholder: {control: 'input'} //radio
    },
} as ComponentMeta<typeof PlayFunctionExample>;

const Template: ComponentStory<typeof PlayFunctionExample> = (args) => <PlayFunctionExample {...args} />;

export const PlayFunctionExampleExample = Template.bind({});
PlayFunctionExampleExample.args = {
    placeholder: 'test',
    borderColor: 'pink',
};
PlayFunctionExampleExample.play = async ({ canvasElement }) => {

    const testValueEmail = 'example-email@email.com'

    const canvas= within(canvasElement);

    const emailInput = canvas.getByTestId('input');

    await userEvent.type(emailInput, testValueEmail, {
        delay: 100,
    });

    await userEvent.type(emailInput, "{enter}");

    const result = canvas.getByTestId('result-value');
    expect(result.textContent).toBe(testValueEmail)
};



