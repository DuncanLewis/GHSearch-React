/* global it, describe, browser */
const { expect } = require('chai');

describe('GH Search App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('GitHub Search');
  });

  it('Should allow the user to input a search', () => {
    const searchText = 'CakePHP';
    browser.url('http://localhost:3000');
    browser.element('.search-input').setValue(searchText);
    const actualSearchInput = browser.element('.search-input');
    expect(actualSearchInput).to.have.lengthOf.at.least(1);
  });
});
