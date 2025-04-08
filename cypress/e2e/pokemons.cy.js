describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // Перешел на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');   // Ввел логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');    // Ввел пароль
         cy.get('button[type="submit"]').click();                    // Нажал кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();           // Кликнул в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // Нажал кнопку Смена аватара
         cy.get('.available > button').first().click();   // Кликнул Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // Ввел номер карты
         cy.get('.card_csv').type('125');                // Ввел CVV карты
         cy.get('.card_date').type('1226');                // Ввел срок действия карты
         cy.get('.card_name').type('NAME');                // Ввел имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // Нажал кнопку Оплатить
         cy.wait(2000);
         cy.get('.threeds_number').type('56456');                            // Ввел код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // Нажал кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // Проверил наличие и видимость сообщения об успешной покупке
     });
 });
