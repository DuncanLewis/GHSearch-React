/* global it, describe, browser */
const { expect } = require('chai');

describe('GH Search App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('GitHub Search');
  });
});