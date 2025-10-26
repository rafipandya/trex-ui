import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../index";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "A reusable button component built with styled-components.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            description: "The text to display inside the button",
        },
        mode: {
            control: "select",
            options: ["fill", "outline", "plain"],
            description: "Button mode style",
        },
        disabled: {
            control: "boolean",
            description: "Disabled button",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Click me",
    },
};

export const LongText: Story = {
    args: {
        label: "This is a longer button label",
    },
};

export const ShortText: Story = {
    args: {
        label: "OK",
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
    },
};

export const Contained: Story = {
    args: {
        label: "Contained Button",
        mode: "fill",
    },
};

export const Outline: Story = {
    args: {
        label: "Outline Button",
        mode: "outline",
    },
};

export const Text: Story = {
    args: {
        label: "Text Button",
        mode: "plain",
    },
};

export const Allmodes = {
    render: () => (
        <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
            <Button label="Contained Button" mode="fill" />
            <Button label="Outline Button" mode="outline" />
            <Button label="Text Button" mode="plain" />
        </div>
    ),
};

export const WithClick: Story = {
    args: {
        label: "Click Me",
        mode: "fill",
        onClick: () => alert("Button clicked!"),
    },
};
