it.skip("TC_business_email_field_pw_reset_page_58-Check whether user is able to enter inside text inside business_email_field_pw_reset_page field", () => {
    cy.log(login.get_business_email_for_pw_reset().typeAndLog('sample') ? "tescase passed" : "testcase failed")
})
it.skip("TC_business_email_field_pw_reset_page_59-Check whether user is able to enter limited characters inside business_email_field_pw_reset_page field", () => {
})
it.skip("TC_business_email_field_pw_reset_page_60-Check whether business_email_field_pw_reset_page is field is accepting numbers", () => {
    cy.log(login.get_business_email_for_pw_reset().typeAndLog('1234') ? "tescase passed" : "testcase failed")
})
it.skip("TC_business_email_field_pw_reset_page_61-Check whether business_email_field_pw_reset_page is field is accepting alphabets", () => {
    cy.log(login.get_business_email_for_pw_reset().typeAndLog('abc') ? "tescase passed" : "testcase failed")
})
it.skip("TC_business_email_field_pw_reset_page_62-Check whether business_email_field_pw_reset_page field is accepting alphanumeric characters", () => {
    cy.log(login.get_business_email_for_pw_reset().typeAndLog('1234abc') ? "tescase passed" : "testcase failed")
})
it.skip("TC_business_email_field_pw_reset_page_63-Check whether business_email_field_pw_reset_page field is accepting combination of alphanumeric characters and special characters", () => {
    cy.log(login.get_business_email_for_pw_reset().typeAndLog('1234@#acv') ? "tescase passed" : "testcase failed")
})