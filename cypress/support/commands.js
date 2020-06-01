// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";
import { addTask } from "../../src/store/actions";
import { generateId } from "../../src/utils/functions";

Cypress.Commands.add("addTask", (tasks) => {
  for (const task of tasks) {
    cy.window()
      .its("store")
      .invoke("dispatch", addTask({ ...task, id: generateId() }));
    /*cy.findByTestId("add-task").click();
    cy.get("#title").type(task.title);
    cy.get("#content").type(task.content);
    cy.get("#status").select(task.status);
    cy.findByTestId("add-task").click();*/
  }
});
