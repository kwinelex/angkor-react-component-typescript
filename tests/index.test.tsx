import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Button, Input } from "../src/components";

describe.skip("Testing on Button component", () => {
  it("Test check text pf primary defined or not", () => {
    render(<Button />);
    const textElement = screen.getByText(/primary/);
    expect(textElement).toBeDefined();
  });

  it("Test provide children values to Button", () => {
    render(<Button>Logins</Button>);
    const textElement = screen.getByText("Logins");
    expect(textElement).toBeDefined();
  });
});

describe("Testing on Input component", () => {
  test("provide name to input element", () => {
    render(<Input htmlType="text" name='Test' />);
    expect(screen.getByRole("input", {name: "Test"})).toBeDefined();
  });
});