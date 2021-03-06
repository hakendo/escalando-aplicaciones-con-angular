import { browser, protractor } from 'protractor';
import { LoginPage } from './login.po';

describe('workspace-project Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('Should login when fill correctly', () => {
    const EC = protractor.ExpectedConditions;
    const expectedUrl = 'http://localhost:4200/';

    page.makeLogIn({
      email: 'admin',
      password: 'admin'
    });

    // http://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.urlContains
    browser.wait(EC.urlIs(expectedUrl))
      .then(() => expect(browser.getCurrentUrl()).toEqual(expectedUrl));
  });
});
