
/// <reference types = "Cypress"/>
///<reference types = "cypress-xpath"/>
Cypress.Commands.add("typeAndLog", { prevSubject: true }, (subject, text) => {
    cy.wrap(subject)
      .type(text)
      .then(($input) => {
        const typedText = $input.val();
        if (typedText === text) {
          cy.log(`Input field accepted characters,numbers and special characters: "${text}"`);
        } else {
          cy.log(`Input field did not accept characters,numbers and special characters: "${text}"`);
        }
      });
  });

  //verify link or btn is enabled or disabled
  Cypress.Commands.add('verify_btnlink_enable_or_disable', (selector) => {
    cy.get(selector).then($el => {
      const isEnabled = !$el.is(':disabled');
  
      if (isEnabled) {
        cy.log('Testcase passed, link/button is enabled');
      } else {
        cy.log('Testcase failed, link/button is disabled');
        throw new Error('Testcase failed, link/button is disabled');
      }
    });
  });
//verify link or btn is visible or invisble
  Cypress.Commands.add('verify_btnlink_visible_or_invisible', (selector) => {
    cy.get(selector).then($el => {
      const isVisible = $el.is(':visible');
  
      if (isVisible) {
        cy.log('Testcase passed, link/button is visible');
      } else {
        cy.log('Testcase failed, link/button is not visible');
        throw new Error('Testcase failed, link/button is not visible');
      }
    });
  });

  Cypress.Commands.add('verify_btnlink_clickable_or_not_clickable', (selector) => {
    cy.get(selector).then($el => {
      const isVisible = $el.is(':visible');
      const isEnabled = !$el.is(':disabled');
  
      if (isVisible && isEnabled) {
        cy.wrap($el).click({ force: true }).then(() => {
          cy.log('Testcase passed, link/button is clickable');
        });
      } else {
        cy.log('Testcase failed, link/button is not clickable');
        throw new Error('Testcase failed, link/button is not clickable');
      }
    });
  });
  