/* global beforeEach, it, describe, browser */
const { expect } = require('chai');

describe('GH Search App', () => {
  const searchText = 'CakePHP';
  const repoName = 'cakephp/cakephp';

  // Use beforeEach to carry out steps used by every test
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
    browser.element('.search-input').setValue(searchText);
    const actualSearchInput = browser.element('.search-input').getValue();
    expect(actualSearchInput).to.equal(searchText);
  });

  it('Should display search results when a valid repo is searched for', () => {
    // Input the search text to the search bar
    browser.element('.search-input').setValue(searchText);

    // Perform the searh by submitting the form
    browser.element('.search-input').submitForm();

    // Wait for the search results to return before continuing - as we are reliant on the search
    // completing the next step will fail if we do not wait. (Times out after 5000ms)
    browser.element('.search-item').waitForExist(5000);

    const actualSearchResults = browser.element('.card-title').getText();
    expect(actualSearchResults).to.equal(repoName);
  });

  it('Should navigate to the repo view when a repo link is clicked', () => {
    browser.element('.search-input').setValue(searchText);
    browser.element('.search-input').submitForm();

    // Wait for the search results to return before continuing - as we are reliant on the search
    // completing the next step will fail if we do not wait. (Times out after 5000ms)
    browser.element('.search-item').waitForExist(5000);
    browser.click('.search-item');
  });
});
