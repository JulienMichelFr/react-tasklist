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

describe("TasklistPage", () => {
  it("Display an empty list", () => {
    cy.get("h3").should("contain.text", TASKLIST.EMPTY_TASKLIST);
  });

  it("Add task", () => {
    cy.addTask([TASK()]);
    cy.findByTestId("task").should("exist");
  });

  it("Add multiple tasks", () => {
    cy.addTask([TASK(), TASK()]);
    cy.findAllByTestId("task").should("have.length", 2);
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
