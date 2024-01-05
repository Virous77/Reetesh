import Contact from "@/components/contact/contact";
import ContactForm from "@/components/contact/contact-form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setFormState = jest.fn();
const formState = {
  name: "",
  email: "",
  message: "",
  status: "idle",
};

const validateState = {
  name: "cool",
  email: "cool",
  message: "tests",
  status: "idle",
};

describe("Contact component", () => {
  it("it should render contact form component", async () => {
    render(<ContactForm formState={formState} setFormState={setFormState} />);

    const button = screen.getByRole("button", {
      name: "Send",
    });
    expect(button).toHaveTextContent("Send");
    expect(button).toBeDisabled();
  });

  it("it should validate form fields", async () => {
    render(
      <ContactForm formState={validateState} setFormState={setFormState} />
    );
    const button = screen.getByRole("button", {
      name: "Send",
    });

    const nameField = screen.getByTestId("name");
    const emailField = screen.getByTestId("email");
    const messageField = screen.getByTestId("message");
    await userEvent.type(nameField, "Raj");
    await userEvent.type(emailField, "testgmail.com");
    await userEvent.type(messageField, "Hello World");
    expect(button).toBeEnabled();
    expect(nameField).toHaveValue("Raj");
    expect(messageField).toHaveValue("Hello World");
    await userEvent.click(button);
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("it should submit form", async () => {
    render(
      <ContactForm
        formState={{
          name: "Raj",
          email: "test2@gmail.com",
          message: "test message",
          status: "success",
        }}
        setFormState={setFormState}
      />
    );
    const nameField = screen.getByTestId("name");
    const emailField = screen.getByTestId("email");
    const messageField = screen.getByTestId("message");
    const button = screen.getByRole("button", {
      name: "Send",
    });

    await userEvent.type(nameField, "Raj");
    await userEvent.type(emailField, "test@gmail.com");
    await userEvent.type(messageField, "Hello World");

    await userEvent.click(button);
    expect(setFormState).toHaveBeenCalled();
  });

  it("it should render contact component", async () => {
    render(<Contact />);

    const initial = screen.getByTestId("initial");
    expect(initial).toBeInTheDocument();
  });
});
