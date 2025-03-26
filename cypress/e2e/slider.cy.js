describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test #2', function () {
  it('Check whether the description of each slide is displayed correctly.', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide-active .card-description').should('exist');
    cy.get('.swiper-slide-active .card-description h1')
      .should('exist')
      .and('have.text', 'Rome');
    cy.get('.swiper-slide-active .card-description p')
      .should('exist')
      .and('have.text', 'Italy');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active .card-description').should('exist');
    cy.get('.swiper-slide-active .card-description h1')
      .should('exist')
      .and('have.text', 'London');
    cy.get('.swiper-slide-active .card-description p')
      .should('exist')
      .and('have.text', 'United Kingdom');

    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active .card-description').should('exist');
    cy.get('.swiper-slide-active .card-description h1')
      .should('exist')
      .and('have.text', 'Paris');
    cy.get('.swiper-slide-active .card-description p')
      .should('exist')
      .and('have.text', 'France');
  });
});
