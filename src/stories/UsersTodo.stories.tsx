import UsersTodo from "./UsersTodo";
import {ComponentMeta} from "@storybook/react";
import React from "react";

export default {
    title: 'Example/UsersTodo',
    component: UsersTodo,
    argTypes: {
    },
    parameters: {
        mockData: [
            {
                url: 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10',
                method: 'GET',
                status: 200,
                response: [
                    {
                        userId: 1,
                        id: 1,
                        title: 'Mock ToDo Date',
                        completed: false,
                    }
                ],
            },
        ],
    },
} as ComponentMeta<typeof UsersTodo>;


export const SuccessBehavior = () => <UsersTodo />
