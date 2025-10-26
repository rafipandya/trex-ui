import type { Meta, StoryObj } from '@storybook/react';
import Button from '../index';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A reusable button component built with styled-components.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'The text to display inside the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled button'
        }
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Click me',
    },
};

export const LongText: Story = {
    args: {
        label: 'This is a longer button label',
    },
};

export const ShortText: Story = {
    args: {
        label: 'OK',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        disabled: true
    },
};

