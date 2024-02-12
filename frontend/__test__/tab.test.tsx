import Navigation from "@/components/tab/navigation";
import { render, screen } from "@testing-library/react";
import Tab from "@/components/tab/tab";

describe("Tab", () => {
  it("renders the tab component", () => {
    render(<Tab />);
    const projects = screen.getByText("Projects");
    expect(projects).toBeInTheDocument();
  });

  it("renders the navigation component", () => {
    render(<Navigation />);
    const blogs = screen.getByText("Blogs");
    expect(blogs).toBeInTheDocument();
  });
});
