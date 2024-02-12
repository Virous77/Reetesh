import { render, screen } from "@testing-library/react";
import About from "@/components/about/about";

describe("About", () => {
  it("should render about component", () => {
    render(<About />);

    const description = screen.getByText(
      /I'm Reetesh Kumar, a Full Stack Developer turning caffeine into code./i
    );
    expect(description).toBeInTheDocument();
  });
});
