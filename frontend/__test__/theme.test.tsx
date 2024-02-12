import ThemeSwitcher from "@/components/theme/theme-switcher";
import { render, screen } from "@testing-library/react";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(() => ({
    theme: "light",
    setTheme: jest.fn((newTheme) => ({ theme: newTheme })),
  })),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

describe("ThemeSwitcher", () => {
  it("renders the switcher component", () => {
    render(<ThemeSwitcher />);
    const switcher = screen.getByTestId("moon");
    expect(switcher).toBeInTheDocument();
  });
});
