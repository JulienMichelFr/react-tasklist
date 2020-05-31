import { TASKLIST } from "../../src/utils/constantes";
import { TaskStatus } from "../../src/utils/task-status.const";

beforeEach(() => {
  cy.visit("/");
});

const TASK = () => {
  return {
    title: "My Task",
    content: "My Task content",
    status: TaskStatus.InProgress,
  };
};

describe("TaskList", () => {
  it("Display an empty list", () => {
    cy.get("h3").should("contain.text", TASKLIST.EMPTY_TASKLIST);
  });

  it("Add task", () => {
    const task = TASK();
    cy.findByTestId("add-task").click();
    cy.get("#title").type(task.title);
    cy.get("#content").type(task.content);
    cy.get("#status").select(task.status);
    cy.findByTestId("add-task").click();
    cy.findByTestId("task").should("exist");
  });

  it("Change task status", () => {
    cy.addTask([TASK(), { ...TASK(), status: TaskStatus.Todo }]);
    cy.findAllByTestId("change-status-button-completed").first().click();
    cy.findAllByTestId("task-container")
      .first()
      .should("have.class", "completed");
    cy.findAllByTestId("task-container").last().should("have.class", "todo");
  });
});
