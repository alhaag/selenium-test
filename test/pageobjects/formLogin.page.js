var page = require('./page');

var formLoginPage = Object.create(page, {

    // define elements
    username: {     get: function () { return $('#identifierId'); } },
    submitButton: { get: function () { return $('#identifierNext'); } },
    flash: {        get: function () { return $('.RCum0c .RxsGPe'); } },

    // define or overwrite page methods
    open: {
        value: function() {
            page.open.call(this, 'https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
        }
    },

    submit: {
        value: function() {
            this.submitButton.click();
        }
    }
});

module.exports = formLoginPage;