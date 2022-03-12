import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("inputs should be initially empty", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);

  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  userEvent.type(emailInputElement, "try@gmail.com");
  expect(emailInputElement.value).toBe("try@gmail.com");
});

test("should be able to type into the Passsword field", () => {
  render(<App />);
  const passwordInputElement = screen.getByLabelText("Password");
  userEvent.type(passwordInputElement, "testPassword123");
  expect(passwordInputElement.value).toBe("testPassword123");
});

test("should be able to type into the confirm Passsword field", () => {
  render(<App />);
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  userEvent.type(confirmPasswordInputElement, "confirmtestPassword123");
  expect(confirmPasswordInputElement.value).toBe("confirmtestPassword123");
});

test("inputting wrong email should receive a warning", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });
  const wrongEmailWarningEl = screen.queryByText(
    /the email you input is invalid/i
  );

  expect(wrongEmailWarningEl).not.toBeInTheDocument();

  userEvent.type(emailInputElement, "wrongemailatgmail.com");
  userEvent.click(submitBtnElement);

  const wrongEmailWarningElAgain = screen.queryByText(
    /the email you input is invalid/i
  );

  expect(wrongEmailWarningElAgain).toBeInTheDocument();
});
