describe("My Admin ClientPage Test Suite", function () {
    beforeEach(() => {
      cy.visit(`${urlSighnIn}`);
      cy.login(loginOk, passwordOk, url);
      cy.get('[id="rc-tabs-1-tab-clients"]').click();
    });