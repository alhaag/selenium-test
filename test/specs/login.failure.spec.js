var expect = require('chai').expect;
var FormLoginPage = require('../pageobjects/formLogin.page');

describe('auth form', function () {

    this.timeout(15000)

    it('should deny access with wrong creds', function () {
        FormLoginPage.open()
        FormLoginPage.username.waitForExist()
        FormLoginPage.username.setValue('foo')
        FormLoginPage.submit()
        FormLoginPage.flash.waitForVisible()
        expect(FormLoginPage.flash.getText()).to.contain('Não foi possível encontrar sua Conta do Google')
    });

    /*it('should allow access with correct creds', function () {
        FormLoginPage.open();
        FormLoginPage.username.setValue('tomsmith');
        FormLoginPage.password.setValue('SuperSecretPassword!');
        FormLoginPage.submit();

        FormLoginPage.flash.waitForVisible();
        expect(FormLoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });*/
});