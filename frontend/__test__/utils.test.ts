import {
  getLocalData,
  generateUUID,
  formateDate,
  hashData,
} from "@/utils/utils";

describe("getLocalData", () => {
  it("should return 0 if data is not present in local storage", () => {
    expect(getLocalData("test")).toBe(0);
  });

  it("should return data if present in local storage", () => {
    localStorage.setItem("test", JSON.stringify({ name: "Reetesh" }));
    expect(getLocalData("test")).toEqual({ name: "Reetesh" });
    localStorage.removeItem("test");
  });

  it("should generate UUID", () => {
    expect(generateUUID()).toMatch(
      /[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[\da-f]{4}-[\da-f]{12}/i
    );
  });

  it("should formate date", () => {
    expect(formateDate("2021-09-20T00:00:00.000Z")).toBe("Sep 20, 2021");
  });

  it("should hash data", () => {
    const data = hashData();
    expect(data).toBe(data);
  });
});
