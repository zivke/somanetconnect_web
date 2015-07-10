'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /deviceList when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/deviceList");
  });


  describe('deviceList', function() {

    beforeEach(function() {
      browser.get('index.html#/deviceList');
    });


    it('should render deviceList when user navigates to /deviceList', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for the device list/);
    });

  });


  describe('counterControl', function() {

    beforeEach(function() {
      browser.get('index.html#/counterControl');
    });


    it('should render counterControl when user navigates to /counterControl', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for the counter control/);
    });

  });
});
