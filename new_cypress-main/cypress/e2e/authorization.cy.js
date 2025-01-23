describe('Проверка авторизации', function () {

    it('Позитивный кейс', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click('');

        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click('');

        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click('');

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Ошибка в пароле', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio5');
        cy.get('#loginButton').click('');

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Ошибка в логине', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.rr');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click('');

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Ошибка валидации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.rr');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click('');

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Авторизация №2', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click('');

        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

 }) 