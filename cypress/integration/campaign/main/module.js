const elements = {
    carousel_mendesak: "span[class='cardStyle__CardTitle-rjuxnd-0 Qjtkg']",
    button_donasi: "[id='campaign-detail_button_donasi-sekarang']",
    text_nominal: "[class='topWrapper']",
    select_bank: "[class='style__PaymentList-tuwc7v-15 gzsoyv']",
    text_name: "[name='fullname']",
    text_phone: "[name='username']",
    button_pembayaran: "[id='contribute_button_lanjutkan-pembayaran']",
    button_kembali: "[class='style__ButtonWrapper-sc-1dpwvg2-0 dXcfsV']",
    button_close: "[class='style__BannerCloseIcon-sc-106sadj-2 kCModS']",
}

export function navigateToSite(){
    cy.visit('https://kitabisa.com/');
}

export function assertVariantColor(index){
    cy.get(elements.carousel_mendesak).eq(index).should('be.visible').click()
}

export function clickDonasi(){
    cy.get(elements.button_donasi).should('be.visible').click()
}

export function selectNominal(nominal_value){
    cy.get(elements.text_nominal).contains(nominal_value).click()
}
export function selectBank(bank){
    cy.get(elements.select_bank).contains(bank).click()
}

export function inputName(name){
    cy.get(elements.text_name).type(name)
}

export function inputPhone(phone){
    cy.get(elements.text_phone).type(phone)
}

export function clickLanjutkanPembayaran(){
    cy.get(elements.button_pembayaran).should('be.visible').click()
}

export function clickBack(){
    cy.get(elements.button_kembali).should('be.visible').click()
}

export function clickClose(){

            cy.get(elements.button_close).should('be.visible').click()

}
