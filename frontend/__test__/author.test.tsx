import Author from "@/components/author/author";
import { render, screen } from "@testing-library/react";

describe("Author", () => {
  it("should render author component", () => {
    render(<Author />);

    const author = screen.getByRole("heading", { name: /Reetesh Kumar/i });
    expect(author).toBeInTheDocument();

    const experience = screen.getByText(/Experienced Full-Stack Engineer/i);
    expect(experience).toBeInTheDocument();

    const description = screen.getByText(
      /I specialize in creating exceptional and user-friendly digital experiences for the web./i
    );
    expect(description).toBeInTheDocument();
  });
});
