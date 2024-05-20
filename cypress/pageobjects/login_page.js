class login_page
{
get_email()
{
    return cy.xpath("//input[@id='email']")
}
get_sign_in_with_password()
{
    return cy.xpath("//*[contains(text(),'Sign in with password')]")
}
get_password()
{
    return cy.xpath("//input[@id='password']")
}
get_sign_in_button()
{
    return cy.xpath("//div[normalize-space()='Sign in']")
}
get_use_google_acnt()
{
    return cy.xpath("//span[contains(text(),'Use your Google Account')]")
}
get_sign_in_with_google()
{
    return cy.get('.S9gUrf-YoZ4jf')
}
get_signin_with_apple()
{
    return cy.get(':nth-child(3) > .text-purple-1')
}
get_sign_in_otp_btn()
{
    return cy.get('.bg-purple-1')
}
get_sign_in_with_sso()
{
    return cy.get('.space-y-2 > :nth-child(3)') 
}
get_lost_your_password_link()
{
    return cy.get('.flex-col > .w-full') 
}
get_signup()
{
    return cy.xpath("//span[contains(text(),'Sign Up')]")
}

get_apple_logo()
{
    return cy.xpath("///div[@class='apple-logo-thrid-party-auth']")
}
get_otp_verification_text()
{
    return cy.xpath("//p[contains(text(),'Please check your inbox — you should have received an email with a verification code.')]")
}
//div[contains(text(),'Invalid code. Please enter the correct code.')]
get_message_after_invalid_otp()
{
    return cy.xpath("//div[contains(text(),'Invalid code. Please enter the correct code.')]")
}
get_verify_otp_btn()
{
    return cy.get('.bg-purple-1')
}
get_resend_otp_btn()
{
    return cy.get('.border-gray-1')
}
get_otp_sent_confirmation_toast()
{
    return cy.xpath("//div[contains(text(),'Confirmation email sent successfully!')]")
}
get_back_to_login_from_otp_page()
{
    return cy.xpath("//span[contains(text(),'Back to login')]")
}
get_business_email()
{
    return cy.xpath("//input[@id='email']")
}
get_business_signin_btn()
{
    return cy.xpath("//button[@type='submit']") 
}
get_reset_your_password_cntnue_btn()
{
    return cy.xpath("//div[@class='flex justify-center items-center']")
}
get_reset_password_sent_cnfrm_toast()
{
    return cy.xpath("//div[@id='3']")
}
get_first_name_signup()
{
    return cy.xpath("//input[@id='fullName']")
}
get_display_msg_for_invalid_login()
{
    return cy.xpath("//div[contains(text(),'Please signup')]")
}
get_otp_field()
{
    return cy.xpath("//input[@id='code']")
}
get_signin_sso_btn()
{
    return cy.get(".space-y-2 > :nth-child(3)")
}
get_business_email_for_pw_reset()
{
    return cy.get('#email')
}
get_continue_button_pw_reset()
{
    return cy.xpath("//button[@type='submit']")
}
get_confirmation_message_pw_reset_link()
{
    return cy.xpath("//div[contains(text(),'Confirmation email sent successfully!')]")
}
get_back_to_login_page_from_pw_reset_page()
{
    return cy.xpath("//span[contains(text(),'Back to login')]")
}
get_()
{
    return cy.xpath("")
}
get_()
{
    return cy.xpath("")
}
}
export default login_page