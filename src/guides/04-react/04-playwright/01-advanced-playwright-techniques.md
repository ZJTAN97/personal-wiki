# Advanced Playwright Techniques

## 1. Use Locators.

Has Auto waiting and retry ability

Prioritize user facing attributes

```ts
page.getByRole("button", { name: "submit" });
```

## 2. Use Playwright's Assertions

Auto-retrying capabilities for less flakiness.

```ts
await expect(page.getByTestId("status")).toHaveText("submitted");
```

## 3. Annotations

Can be tagged to issues or related issues, can then view in report

```ts
test('use annotations', {
  annotation: [
    {
      type: 'Issues',
      description: 'https://github.com/microsoft/playwright/issues/123123'
    },
    {
      type: 'Issues',
      description: 'https://github.com/microsoft/playwright/issues/123123'
    }
  ]
}, async ({ page }) => {
  ...
} )
```

## 4. Test Steps

Helps to break long tests into "steps", helps in viewing in UI mode and report itself

```ts
test("should allow me to add todo items", async ({ page }) => {
  const newTodo = page.getByPlaceholder("What needs to be done?");

  await test.step("create 1st todo", async () => {
    await newTodo.fill("water the plants");
    await newTodo.press("Enter");
  });

  await expect(page.getByTestId("todo-title")).toHaveText(["water the plants"]);

  await test.step("create 1st todo", async () => {
    await newTodo.fill("water the plants");
    await newTodo.press("Enter");
  });
});
```

## 5. Box Test Steps

Can help to to focus on the errors better

## 6. API Mocking

UI mode

```bash
npx playwright test --ui
```
