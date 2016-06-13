/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: Application', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can click the button', function() {
    visit('/');
    click('.hello-world-button');

    andThen(function() {
      expect(currentPath()).to.equal('application');
      expect($('.alert-success')).to.have.length(1);
    });
  });
});
