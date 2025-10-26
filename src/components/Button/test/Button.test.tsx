import React from "react";
import { render, screen } from "@testing-library/react";
import { StyledButton } from "../styled";
import Button from "../index";

describe("StyledButton", () => {
    it("renders as a button element", () => {
        const { container } = render(<StyledButton>Click me</StyledButton>);
        const buttonElement = container.querySelector("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Click me");
    });
});

describe("Button", () => {
    it("renders the label correctly", () => {
        render(<Button label="Click me" />);
        expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("renders different labels", () => {
        const { rerender } = render(<Button label="First" />);
        expect(screen.getByText("First")).toBeInTheDocument();

        rerender(<Button label="Second" />);
        expect(screen.getByText("Second")).toBeInTheDocument();
    });

    it("is a button element", () => {
        const { container } = render(<Button label="Test" />);
        const buttonElement = container.querySelector("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Test");
    });
});
