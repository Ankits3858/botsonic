/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
import login_page from "../../pageobjects/login_page";
const login = new login_page
describe("login",  { retries: 2 },() => {
   /* beforeEach(() => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        it(3000)
    }); */
    it("TC_login_with_password_01-Verify Login with valid credentials", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().type(user.email, { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
        login.get_sign_in_with_password().click({ force: true })
        cy.log(login.get_password().type(user.password, { force: true }) ? "password field is enabled,user is able to type" : "password field is disabled,user is unable to type")
        cy.log(login.get_sign_in_button().click({ force: true }) ? "signin button is enabled and clickable" : "signin button is disabled and not clickable")
        cy.wait(4000)
        cy.log(cy.title().should('eq', 'Botsonic | Dashboard') ? "user landed to dashboard page,testcase pass" : "user is unable to land to dashboard,testcase fail")
     })
     it("TC_login_with_password_02-Verify Login with invalid credentials", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().type("invalid@gmail.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
        login.get_sign_in_with_password().click({ force: true })
        cy.log(login.get_password().type("123123", { force: true }) ? "password field is enabled,user is able to type" : "password field is disabled,user is unable to type")
        cy.log(login.get_sign_in_button().click({ force: true }) ? "signin button is enabled and clickable" : "signin button is disabled and not clickable")
        cy.wait(3000)
        cy.log(login.get_display_msg_for_invalid_login().should('be.visible') ? "user is not able to login with invalid credentials,testcase pass" : "user is able to login with invalid credentials,testcase fail")
     })
     it("TC_login_with_password_03-Verify login with blank UserID and Password", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_sign_in_button().click({ force: true }) ? "signin button is enabled and clickable" : "signin button is disabled and not clickable")
         cy.on('window:alert', (str) => {
            if (str === 'Please fill out this field') {
                cy.log('Testcase passed successfully, user is not able to login with blank ID and password');
            } else {
                throw new Error('Testcase failed, user is able to login with blank ID and password');
            }
        });
     })
     it("TC_login_with_password_04-Verify login with valid username and blank password", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900) 
        cy.log(login.get_email().type(user.email, { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_sign_in_button().click({ force: true }) ? "signin button is enabled and clickable" : "signin button is disabled and not clickable")
         cy.on('window:alert', (str) => {
            if (str === 'Please fill out this field') {
                cy.log('Testcase passed successfully, user is not able to login with valid ID and empty password');
            } else {
                throw new Error('Testcase failed, user is able to login with valid ID and empty password');
            }
        });
     })
     it("TC_login_with_password_05-Verify login with valid username and invalid password with text limit as 1 character", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().type("invalid@gmail.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
        login.get_sign_in_with_password().click({ force: true })
        cy.log(login.get_password().type("1", { force: true }) ? "password field is enabled,user is able to type" : "password field is disabled,user is unable to type")
        cy.log(login.get_sign_in_button().click({ force: true }) ? "signin button is enabled and clickable" : "signin button is disabled and not clickable")
        cy.wait(3000)
        cy.log(login.get_display_msg_for_invalid_login().should('be.visible') ? "user is not able to login with invalid credentials,testcase pass" : "user is able to login with invalid credentials,testcase fail")
     })
     it("TC_email_06-Check whether user is able to enter inside text inside email field", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().typeAndLog('sample') ? "tescase passed" : "testcase failed")
     })
     it("TC_email_07-Check whether user is able to enter limited characters inside email field", () => {
     })
     it("TC_email_08-Check whether email is field is accepting numbers", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().typeAndLog('1234') ? "tescase passed" : "testcase failed")
     })
     it("TC_email_09-Check whether email is field is accepting alphabets", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().typeAndLog('abc') ? "tescase passed" : "testcase failed")
     })
     it("TC_email_10-Check whether email field is accepting alphanumeric characters", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().typeAndLog('1234abc') ? "tescase passed" : "testcase failed")
     })
     it("TC_email_11-Check whether email field is accepting combination of alphanumeric characters and special characters", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_email().typeAndLog('1234@#acv') ? "tescase passed" : "testcase failed")
     })
     it("TC_password_12-Check whether user is able to enter inside text inside password field", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_password().typeAndLog('sample') ? "tescase passed" : "testcase failed")
     })
     it("TC_password_13-Check whether user is able to enter limited characters inside password field", () => {
     })
     it("TC_password_14-Check whether password is field is accepting numbers", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900) 
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_password().typeAndLog('1234') ? "tescase passed" : "testcase failed")
     })
     it("TC_password_15-Check whether password is field is accepting alphabets", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900) 
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_password().typeAndLog('abc') ? "tescase passed" : "testcase failed")
     })
     it("TC_password_16-Check whether password field is accepting alphanumeric characters", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_password().typeAndLog('abc123') ? "tescase passed" : "testcase failed")
     })
     it("TC_password_17-Check whether password field is accepting combination of alphanumeric characters and special characters", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_password().click({ force: true })
         cy.log(login.get_password().typeAndLog('abc@123') ? "tescase passed" : "testcase failed")
     })
     it("TC_sign_in_with_google_18-validate whether sign_in_with_google link is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
         if (login.get_sign_in_with_google().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
     })
     it("TC_sign_in_with_google_19-validate whether sign_in_with_google link is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
         login.get_sign_in_with_google().should('be.visible');
         if (login.get_sign_in_with_google().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not visible')
        }
     })
     it("TC_sign_in_with_google_20-validate whether sign_in_with_google is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
         login.get_sign_in_with_google().click({ force: true })
        cy.log(login.get_use_google_acnt().should('be.visible') ? "tescase passed" : "testcase failed")
        
        cy.wait(3000)
        cy.pause()
     })
     it("TC_sign_in_with_apple_id_22-validate whether sign_in_with_apple_id link is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_signin_with_apple().should('exist');
        login.get_signin_with_apple().should('be.visible');

        // Debugging: Print the element to the console
        login.get_signin_with_apple().then(($el) => {
            console.log($el);
        });

        // Check if the element is enabled with increased timeout
        login.get_signin_with_apple().should('be.enabled', { timeout: 10000 });
     })
     it("TC_sign_in_with_apple_id_23-validate whether sign_in_with_apple_id link is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        if (login.get_signin_with_apple().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
     })
     it("TC_sign_in_with_apple_id_24-validate whether sign_in_with_apple_id link is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_signin_with_apple().should('exist');
        login.get_signin_with_apple().should('be.visible');

        // Debugging: Print the element to the console
        login.get_signin_with_apple().then(($el) => {
            console.log($el);
        });

     })
    it("TC_sign_in_with_apple_id_25-validate whether user is able to sign_in via apple_id", () => {
     })


     it("TC_sign_in_with_otp_btn_26-validate whether sign_in_with_otp_btn is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        if (login.get_sign_in_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
    it.skip("sign_in_with_otp_btn_27-validate whether sign_in_with_otp_btn is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        if (login.get_sign_in_otp_btn().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not visible')
        }
    })
    it("TC_sign_in_with_otp_btn_28-validate whether ssign_in_with_otp_btn is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        if (login.get_sign_in_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_sign_in_with_otp_btn_29-validate whether user is able to sign_in_with_otp_btn", () => {
    })


    
    it("TC_verify_otp_btn_30-validate whether verify_otp_btn is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        if (login.get_verify_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
    it("TC_verify_otp_btn_31-validate whether verify_otp_btn is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        if (login.get_verify_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_verify_otp_btn_32-validate whether verify_otp_btn is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        if (login.get_verify_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_verify_otp_btn_33-validate whether user is able to sign with invalid otp", () => {
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_email().type(user.email, { force: true })
    login.get_sign_in_otp_btn().click({ force: true })
   
    login.get_verify_otp_btn().click({ force: true })
   
    if (login.get_message_after_invalid_otp().should('be.visible')) {
        cy.log('testcase passed')
    }
    else {
        throw new Error('testcase failed,user is not able to sign in via invalid otp')
    }

    })


    it("TC_resend_otp_btn_34-validate whether resend_otp_btn is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        login.get_otp_field().type('12390')
       
       // login.get_verify_otp_btn().click({ force: true })
        cy.wait(31000)
        if (login.get_resend_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
    it("TC_resend_otp_btn_35-validate whether resend_otp_btn is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        login.get_otp_field().type('12390')
       // login.get_verify_otp_btn().click({ force: true })
        cy.wait(31000)
     if (login.get_resend_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_resend_otp_btn_36-validate whether resend_otp_btn is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        login.get_otp_field().type('12390')
       // login.get_verify_otp_btn().click({ force: true })
        cy.wait(31000)
        if (login.get_resend_otp_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_resend_otp_btn_37-validate whether user is resend otp after clicking on button", () => {
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        login.get_otp_field().type('12390')
    login.get_verify_otp_btn().click({ force: true })
    cy.wait(31000)
    login.get_resend_otp_btn().click({ force: true })
    
    if (login.get_otp_sent_confirmation_toast().should('be.visible')) {
        cy.log('testcase passed')
    }
    else {
        throw new Error('testcase failed,user is not able to sign in via invalid otp')
    }
    })


    it("TC_back_to_login_page_link_38-validate whether back_to_login_page_link is enabled", () => {
        cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        login.get_back_to_login_from_otp_page().should('exist');
        login.get_back_to_login_from_otp_page().should('be.visible');

        // Debugging: Print the element to the console
        login.get_back_to_login_from_otp_page().then(($el) => {
            console.log($el);
        });

        // Check if the element is enabled with increased timeout
        login.get_back_to_login_from_otp_page().should('be.enabled', { timeout: 10000 });
    })
    it("TC_back_to_login_page_link_39-validate whether back_to_login_page_link is displayed", () => {
        cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_email().type(user.email, { force: true })
    login.get_sign_in_otp_btn().click({ force: true })
        if (login.get_back_to_login_from_otp_page().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_back_to_login_page_link_40-validate whether back_to_login_page_link is clickable", () => {
        cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_email().type(user.email, { force: true })
        login.get_sign_in_otp_btn().click({ force: true })
        if (login.get_back_to_login_from_otp_page().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_back_to_login_page_link_41-validate whether user is able to land on login page", () => {
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_email().type(user.email, { force: true })
    login.get_sign_in_otp_btn().click({ force: true })
        if (login.get_back_to_login_from_otp_page().click({ force: true })) {
            cy.log(login.get_sign_in_otp_btn().should('be.visible')?"user is able to land on login page":"user is not able to land on login page")
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })


    it("TC_sign_in_with_sso_btn_42-validate whether sign_in_with_sso_btn is enabled", () => {
        cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
   
       // login.get_sign_in_with_sso().click({ force: true })
        if (login.get_sign_in_with_sso().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
    it("TC_sign_in_with_sso_btn_43-validate whether sign_in_with_sso_btn is displayed", () => {
       // login.get_sign_in_with_sso().click({ force: true })
       cy.visit(Cypress.env("production"))
       cy.viewport(1600, 900)
        if (login.get_sign_in_with_sso().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_sign_in_with_sso_btn_44-validate whether sign_in_with_sso_btn is clickable", () => {
       // login.get_sign_in_with_sso().click({ force: true })
       cy.visit(Cypress.env("production"))
       cy.viewport(1600, 900)
        if (login.get_sign_in_with_sso().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_sign_in_with_sso_btn_45-validate whether user is able to sign in via sso", () => {
    })



    it("TC_sso_sign_in_btn_46-validate whether sso_sign_in_btn is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_sso().click({ force: true })
        if (login.get_signin_sso_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
        
        
    })
    it("TC_sso_sign_in_btn_47-validate whether sso_sign_in_btn is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_sso().click({ force: true })
        if (login.get_signin_sso_btn().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_sso_sign_in_btn_48-validate whether sso_sign_in_btn is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_sign_in_with_sso().click({ force: true })
        if (login.get_signin_sso_btn().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })



    it("TC_lost_your_password_link_49-validate whether lost_your_password_link is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        if (login.get_lost_your_password_link().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
        
    })
    it("TC_lost_your_password_link_50-validate whether lost_your_password_link is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        if (login.get_lost_your_password_link().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_lost_your_password_link_51-validate whether lost_your_password_link is clickable", () => {
        if (login.get_lost_your_password_link().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_lost_your_password_link_52-validate whether user is able to reset password", () => {
    })


    it("TC_business_email_field_pw_reset_page_53-Check whether user is able to enter inside text inside business_email_field_pw_reset_page field", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_business_email_for_pw_reset().typeAndLog('sample') ? "tescase passed" : "testcase failed")
    })
    it("TC_business_email_field_pw_reset_page_54-Check whether user is able to enter limited characters inside business_email_field_pw_reset_page field", () => {
    })
    it("TC_business_email_field_pw_reset_page_55-Check whether business_email_field_pw_reset_page is field is accepting numbers", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_business_email_for_pw_reset().typeAndLog('1234') ? "tescase passed" : "testcase failed")
    })
    it("TC_business_email_field_pw_reset_page_56-Check whether business_email_field_pw_reset_page is field is accepting alphabets", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_business_email_for_pw_reset().typeAndLog('abc') ? "tescase passed" : "testcase failed")
    })
    it("TC_business_email_field_pw_reset_page_57-Check whether business_email_field_pw_reset_page field is accepting alphanumeric characters", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_business_email_for_pw_reset().typeAndLog('1234abc') ? "tescase passed" : "testcase failed")
    })
    it("TC_business_email_field_pw_reset_page_58-Check whether business_email_field_pw_reset_page field is accepting combination of alphanumeric characters and special characters", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        cy.log(login.get_business_email_for_pw_reset().typeAndLog('1234@#acv') ? "tescase passed" : "testcase failed")
    })



    it("TC_lost_your_pw_continue_btn_59-validate whether lost_your_pw_continue_btn is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_lost_your_password_link().click({ force: true })
        if (login.get_continue_button_pw_reset().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
    it("TC_lost_your_pw_continue_btn_60-validate whether lost_your_pw_continue_btn is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_lost_your_password_link().click({ force: true })
        if (login.get_continue_button_pw_reset().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_lost_your_pw_continue_btn_61-validate whether lost_your_pw_continue_btn is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_lost_your_password_link().click({ force: true })
        if (login.get_continue_button_pw_reset().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
   it("TC_lost_your_pw_continue_btn_62-validate whether user is able to sent password reset link after clicking on continue button", () => {
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_lost_your_password_link().click({ force: true })
    cy.wait(3000)
    login.get_email().type(user.email, { force: true })
    login.get_continue_button_pw_reset().click({ force: true })
    login.get_confirmation_message_pw_reset_link().should('be.visible')
    })




    it("TC_back_to_login_page_link_63-validate whether back_to_login_page_link is enabled", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_lost_your_password_link().click({ force: true })
        if (login.get_back_to_login_page_from_pw_reset_page().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not enabled')
        }
    })
    it("TC_back_to_login_page_link_64-validate whether back_to_login_page_link is displayed", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_lost_your_password_link().click({ force: true })
        if (login.get_back_to_login_page_from_pw_reset_page().should('be.visible')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not displayed')
        }
    })
    it("TC_back_to_login_page_link_65-validate whether back_to_login_page_link is clickable", () => {
        cy.visit(Cypress.env("production"))
        cy.viewport(1600, 900)
        login.get_lost_your_password_link().click({ force: true })
        if (login.get_back_to_login_page_from_pw_reset_page().should('be.enabled')) {
            cy.log('testcase passed')
        }
        else {
            throw new Error('testcase failed,Sign in with Google link/button is not clickable')
        }
    })
   it("TC_back_to_login_page_link_66-validate whether user is able to land on login page", () => {
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
    login.get_lost_your_password_link().click({ force: true })
    login.get_back_to_login_page_from_pw_reset_page().click({ force: true })
    login.get_sign_in_otp_btn().should('be.visible')


    })





  


    
 })
 