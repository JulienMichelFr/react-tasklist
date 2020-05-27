import { TASKLIST } from "../../src/utils/constantes";

beforeEach(() => {
  cy.visit("/");
});

describe("TasklistPage", () => {
  it("Display an empty list", () => {
    cy.get("h3").should("contain.text", TASKLIST.EMPTY_TASKLIST);
  });

  it("Add tasks", () => {
    cy.get('button[data-testid="add-task"]').click();
    cy.get('[data-testid="task"').should("exist");
  });

  it("Add multiple tasks", () => {
    cy.addTask(2);
    cy.get('[data-testid="task"]').should("have.length", 2);
  });
  it("Change task status", () => {
    cy.addTask(2);
    cy.get('[data-testid="task"] button').first().click();
    cy.get('[data-testid="task"] .card')
      .first()
      .should("have.class", "completed");
    cy.get('[data-testid="task"] .card').last().should("have.class", "todo");
  });
});
