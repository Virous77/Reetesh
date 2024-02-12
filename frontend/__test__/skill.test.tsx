import Skill from "@/components/skills/skill";
import { render, screen } from "@testing-library/react";

describe("Skill", () => {
  it("renders the skill component", () => {
    const skills = [
      {
        _id: "1",
        name: "React",
        about: "coo",
        icon: "https://avatars.githubusercontent.com/u/101452588?v=4",
        level: "Intermediate",
        createdAt: "2021-09-01T00:00:00.000Z",
        updatedAt: "2021-09-01T00:00:00.000Z",
      },
      {
        _id: "2",
        name: "Next.js",
        about: "cool",
        icon: "https://avatars.githubusercontent.com/u/101452588?v=4",
        level: "Intermediate",
        createdAt: "2021-09-01T00:00:00.000Z",
        updatedAt: "2021-09-01T00:00:00.000Z",
      },
    ];
    render(<Skill skills={skills} />);
    expect(
      screen.getByRole("heading", { name: /Skills/i })
    ).toBeInTheDocument();
  });
});
