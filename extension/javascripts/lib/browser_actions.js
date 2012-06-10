// Generated by CoffeeScript 1.3.1
(function() {

  BH.Lib.BrowserActions = (function() {

    BrowserActions.name = 'BrowserActions';

    function BrowserActions() {}

    BrowserActions.prototype.listen = function() {
      return chrome.browserAction.onClicked.addListener(this.openHistory);
    };

    BrowserActions.prototype.openHistory = function() {
      return chrome.tabs.create({
        url: BH.Lib.Url.base()
      });
    };

    return BrowserActions;

  })();

}).call(this);
