import { selectTasks as select } from "./task.selector";

describe("Task Selector", () => {
  it("should return tasks", () => {
    const r = select({ tasks: { loading: false, error: null, tasks: [] } });
    expect(r).toEqual([]);
  });
});
