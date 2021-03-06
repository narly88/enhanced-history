//@ sourceMappingURL=credits_view.map
// Generated by CoffeeScript 1.6.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BH.Views.CreditsView = (function(_super) {

    __extends(CreditsView, _super);

    function CreditsView() {
      return CreditsView.__super__.constructor.apply(this, arguments);
    }

    CreditsView.include(BH.Modules.I18n);

    CreditsView.prototype.className = 'credits_view';

    CreditsView.prototype.template = BH.Templates['credits'];

    CreditsView.prototype.events = {
      'click .close': 'closeClicked'
    };

    CreditsView.prototype.initialize = function() {
      this.chromeAPI = chrome;
      return this.attachGeneralEvents();
    };

    CreditsView.prototype.render = function() {
      this.$el.html(this.renderTemplate(this.getI18nValues()));
      return this;
    };

    CreditsView.prototype.closeClicked = function(ev) {
      ev.preventDefault();
      return this.close();
    };

    CreditsView.prototype.openClicked = function(ev) {
      ev.preventDefault();
      return this.open();
    };

    CreditsView.prototype.getI18nValues = function() {
      var properties;
      properties = this.t(['credits_title', 'translators_heading', 'spanish', 'swedish', 'german', 'french', 'italian', 'hungarian', 'chinese_simplified', 'arabic', 'polish', 'portuguese', 'russian', 'slovak', 'catalonian', 'hindi', 'vietnamese', 'japanese', 'romanian', 'czech', 'dutch', 'latvian', 'turkish', 'translation_help_heading', 'close_button']);
      properties['i18n_developed_by'] = this.t('developed_by', ['<a href="http://automagical.posterous.com/">', '</a>', 'Roy Kolak']);
      properties['i18n_translation_instructions'] = this.t('translation_instructions', ['roy.kolak@gmail.com', '<a href="mailto:roy.kolak@gmail.com">', '</a>']);
      return properties;
    };

    return CreditsView;

  })(BH.Views.ModalView);

}).call(this);
