const functions = require('../test_data/commonFunctions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    
    'oln only error' : browser => {
        let transaction = data.transactions.olnOnly
        functions.inputSet(selectors.fields, data.transactions.olnOnly.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'ols only error' : browser => {
        let transaction = data.transactions.olsOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'oly only error' : browser => {
        let transaction = data.transactions.olyOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'lic only error' : browser => {
        let transaction = data.transactions.licOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'lis and liy only error' : browser => {
        let transaction = data.transactions.lisandliyOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Minimum characters length/good data' : browser => {
        let transaction = data.transactions.minimumEntry
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Maximum character length/good data' : browser => {
        let transaction = data.transactions.maximumEntry
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Middle/special/alpha/good data' : browser => {
        let transaction = data.transactions.middleEntry
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Character length too short-errors' : browser => {
        let transaction = data.transactions.tooShort
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Character length too long-errors' : browser => {
        let transaction = data.transactions.tooLong
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Special characters entered where not allowed-expected errors' : browser => {
        let transaction = data.transactions.specialCharacters
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },    
    'Numeric characters entered where not allowed-expected errors' : browser => {
        let transaction = data.transactions.numericCharacters
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
    'Alpha characters entered where not allowed-expected errors' : browser => {
        let transaction = data.transactions.alphaCharacters
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },
}
        

    



