import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../src/components";

test("Testing on Button component", () => {
  render(<Button />);
  const textElement = screen.getByText(/primary/);
  expect(textElement).toBeDefined();
});

test("Testing provide children values to Button", () => {
  render(<Button>Logins</Button>)
  const textElement = screen.getByText("Logins")
  expect(textElement).toBeDefined();
})
