define('app',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.title = 'Geonesia';
            config.map([{ route: '', moduleId: 'welcome', title: 'Geonesia' }]);

            this.router = router;
        };

        return App;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    var _environment2 = _interopRequireDefault(_environment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });

    function configure(aurelia) {
        aurelia.use.standardConfiguration().feature('resources');

        if (_environment2.default.debug) {
            aurelia.use.developmentLogging();
        }

        if (_environment2.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }

        aurelia.start().then(function () {
            return aurelia.setRoot();
        });
    }
});
define('welcome',['exports', 'aurelia-framework', 'internationalization'], function (exports, _aureliaFramework, _internationalization) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Welcome = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.inject)(_internationalization.Internationalization), _dec(_class = function () {
        function Welcome(internationalization) {
            _classCallCheck(this, Welcome);

            this.internationalization = internationalization;
        }

        Welcome.prototype.attached = function attached() {
            this.data = this.internationalization.data;
        };

        return Welcome;
    }()) || _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('internationalization',['exports', 'aurelia-framework', 'aurelia-fetch-client', 'whatwg-fetch'], function (exports, _aureliaFramework, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Internationalization = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Internationalization = exports.Internationalization = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
        function Internationalization(httpClient) {
            _classCallCheck(this, Internationalization);

            this.lang = "fr";
            this.data = {};

            this.httpClient = httpClient;
            this.load();
        }

        Internationalization.prototype.load = function load() {
            var _ = this;
            this.httpClient.fetch('../src/assets/' + this.lang + '.json').then(function (response) {
                return response.json();
            }).then(function (data) {
                _.data = data;
            });
        };

        return Internationalization;
    }()) || _class);
});
define('assets/fr',[], function () {});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n    <require from=\"./styles.css\"></require>\r\n\r\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <span>Geonesia</span>\r\n            </a>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <router-view class=\"col-md-12\"></router-view>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = ""; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${data.welcome.message}</h1>test\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map