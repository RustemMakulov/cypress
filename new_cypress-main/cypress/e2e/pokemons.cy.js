
describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click('');
         cy.get('.header__id-text_type_profile').click('');
         cy.get('[href="/shop"] > .history-info').click('');
         cy.get('.available > .shop__button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0525');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('MR MR');
         cy.get('.pay-btn').click('');
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click('');

      });
 });