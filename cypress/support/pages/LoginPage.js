var pageLocators = {
    InputNewUser: '#loginusername',
    signInButton: '#loginInModal .btn-primary',
}

class LoginPage {
    inputNewUserWebElement() {
        return cy.get(pageLocators.InputNewUser);
    }

    passwordInputUserWebElement() { return cy.get(pageLocators.PasswordInputUser); }

    writeInputUser(user){
        this.inputNewUserWebElement().type(user);
    }

    clickSignInButton() {
        this.signInButtonWebElement().click();
    }
}

export default LoginPage;