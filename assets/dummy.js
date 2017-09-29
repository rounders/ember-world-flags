"use strict";



define('dummy/app', ['exports', 'ember-resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _emberResolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _emberResolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/controllers/index', ['exports', 'ember-world-flags/utils/constants/country-codes'], function (exports, _countryCodes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    codes: _countryCodes.default,
    filteredCodes: Ember.computed('codes', 'keyword', function () {
      var keyword = this.get('keyword').toLowerCase();
      var codes = this.get('codes');

      if (Ember.isBlank(keyword)) {
        return codes;
      }

      return codes.filter(function (code) {
        return code.name.toLowerCase().includes(keyword) || code.id.toLowerCase().includes(keyword);
      });
    }),
    countryCodes: Ember.computed.sort('filteredCodes', 'sortBy'),
    keyword: '',
    sortBy: [],
    sortByName: ['name:asc'],
    sortByCode: ['id:asc'],

    initSortBy: Ember.on('init', function () {
      this.set('sortBy', this.get('sortByName'));
    }),

    actions: {
      sortByName: function sortByName() {
        this.set('sortBy', this.get('sortByName'));
      },
      sortByCode: function sortByCode() {
        this.set('sortBy', this.get('sortByCode'));
      }
    }
  });
});
define('dummy/ember-world-flags/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-world-flags/helpers/world-flag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-world-flags/helpers/world-flag.js should pass ESLint\n\n');
  });

  QUnit.test('ember-world-flags/utils/constants/country-codes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-world-flags/utils/constants/country-codes.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/world-flag', ['exports', 'ember-world-flags/helpers/world-flag'], function (exports, _worldFlag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _worldFlag.default;
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "76nmAp6e", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[9,\"class\",\"title\"],[7],[6,\"a\"],[9,\"href\",\"https://github.com/rounders/ember-world-flags\"],[9,\"target\",\"_blank\"],[7],[0,\"Ember-World-Flags Demo\"],[8],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L8eHxyzF", "block": "{\"symbols\":[\"code\"],\"statements\":[[6,\"div\"],[9,\"class\",\"flagDemo\"],[7],[0,\"\\n  \"],[1,[25,\"world-flag\",[\"us\",32],null],false],[0,\"\\n  \"],[1,[25,\"world-flag\",[\"gb\",32],null],false],[0,\"\\n  \"],[1,[25,\"world-flag\",[\"ca\",32],null],false],[0,\"\\n  \"],[1,[25,\"world-flag\",[\"fr\",32],null],false],[0,\"\\n  \"],[1,[25,\"world-flag\",[\"ge\",32],null],false],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"{{world-flag 'us' 32}}\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"p\"],[7],[0,\"This addon provides a world-flag component that can display any country/territory's flag in 16x16 or 32x32.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"\\n    Currently, \"],[1,[20,[\"countryCodes\",\"length\"]],false],[0,\" flags are supported out of 263 officially assigned codes in the\\n    \"],[6,\"a\"],[9,\"href\",\"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Current_codes\"],[9,\"target\",\"_blank\"],[7],[0,\"ISO 3166-1 alpha-2\"],[8],[0,\" spec.\\n\"],[8],[0,\"\\n\\n\"],[6,\"p\"],[7],[0,\"Missing a flag? \"],[6,\"a\"],[9,\"href\",\"https://github.com/rounders/ember-world-flags/issues/2\"],[9,\"target\",\"_blank\"],[7],[0,\"Report it here\"],[8],[0,\".\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"flagSearch\"],[7],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"autofocus\",\"placeholder\",\"value\"],[true,\"Find A Flag...\",[19,0,[\"keyword\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"flagList\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"country header\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"name\"],[3,\"action\",[[19,0,[]],\"sortByName\"]],[7],[0,\"Country\"],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"code\"],[3,\"action\",[[19,0,[]],\"sortByCode\"]],[7],[0,\"ISO 3166-1 alpha-2 Code\"],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"lg\"],[7],[0,\"32x32\"],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"sm\"],[7],[0,\"16x16\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"if\",[[19,0,[\"countryCodes\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[19,0,[\"countryCodes\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"country\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"name\"],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"code\"],[7],[1,[19,1,[\"id\"]],false],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"lg\"],[7],[1,[25,\"world-flag\",[[19,1,[\"id\"]],32],null],false],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sm\"],[7],[1,[25,\"world-flag\",[[19,1,[\"id\"]],16],null],false],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"p\"],[7],[0,\"Sorry, no flags were found for that query.\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
