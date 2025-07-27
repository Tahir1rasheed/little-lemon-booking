import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// ✅ Mock react-router-dom to avoid Jest router issues
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

test("renders Little Lemon Restaurant header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Little Lemon Restaurant/i);
  expect(headerElement).toBeInTheDocument();
});
