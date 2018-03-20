/* global beforeEach, it, describe, browser */
const { expect } = require('chai');

describe('GH Search App', () => {

  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('GitHub Search');
  });

  it('Should display a navigation bar', () => {
    const actual = browser.element('.navbar');
    expect(actual).to.exist;
  });

  it('Should display help text if no search has been entered', () => {
    const searchHelpText = 'Enter a repo name to get started';
    const actualSearchHelpText = browser.element('.search-help-text').getText();
    expect(actualSearchHelpText).to.equal(searchHelpText);
  });

  it('Should allow the user to input a search', () => {
    const searchText = 'CakePHP';
    browser.element('.search-input').setValue(searchText);
    const actualSearchInput = browser.element('.search-input').getValue();
    expect(actualSearchInput).to.equal(searchText);
  });
});
