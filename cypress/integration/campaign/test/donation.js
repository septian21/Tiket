import * as browser from '../main/module'

describe('Campaign donation', function () {
    before(function () { 
        browser.navigateToSite()
    })
    it('As a User can donation from campaign', function () {
       browser.campaign(1)
       browser.clickDonasi()
       browser.selectNominal("20.000")
       browser.selectBank("BCA")
       browser.inputName("septian")
       browser.inputPhone("0822299668903")
       browser.clickLanjutkanPembayaran()
        browser.clickClose()
        browser.clickBack()
    })
})