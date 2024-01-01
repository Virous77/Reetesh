import Contact from "@/components/contact/contact";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(() => ({
    pending: true,
  })),
}));

describe("Contact component", () => {
  it("should render contact component", async () => {
    render(<Contact />);

    const contact = screen.getByRole("button");
    expect(contact).toHaveTextContent("Send");

    const mail = screen.getByTestId("mail");
    expect(mail).toHaveTextContent("Mail");

    const nameField = screen.getByLabelText("Name");
    const emailField = screen.getByLabelText("Email");
    const messageField = screen.getByLabelText("Your Message");

    // Assert that the current component is no longer in the document
    const currentComponent = screen.queryByTestId("initial");
    expect(currentComponent).toBeInTheDocument();

    fireEvent.click(contact);

    waitFor(() => {
      contact.textContent === "Sending..";
    });

    fireEvent.change(nameField, { target: { value: "Rajreetesh" } });
    fireEvent.change(emailField, { target: { value: "test12@gmail.com" } });
    fireEvent.change(messageField, { target: { value: "Hello World" } });

    waitFor(() => {
      const successComponent = screen.getByTestId("success");
      expect(successComponent).toBeInTheDocument();

      // Assert that the current component is no longer in the document
      const currentComponent = screen.getByTestId("initial");
      expect(currentComponent).not.toBeInTheDocument();
    });
  });
});
