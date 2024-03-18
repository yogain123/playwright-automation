import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  await page.getByRole("button", { name: "Configure Questions" }).click();
  await page.getByRole("button", { name: " Add Layout" }).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("L1");
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByText("Dropdown").click();
  await page.getByText("Dropdown").click();
  await page.getByText("Dropdown").click();
  await page.getByText("Dropdown").click();
  await page.getByRole("button", { name: "Add Block" }).click();
  await page.getByText("Dropdown").click({
    clickCount: 4,
  });
  await page
    .locator(
      "div:nth-child(2) > .SortableItem > div > .toolbar-header > .toolbar-header-buttons > div:nth-child(3)"
    )
    .click();
  await page.getByText("Dropdown").dblclick();
  await page.getByText("Radio Button").dblclick();
  await page.getByRole("button", { name: "Add Block" }).click({
    clickCount: 3,
  });
});
