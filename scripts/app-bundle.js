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
            config.map([{ route: ['', 'home'], moduleId: 'home', name: 'home' }, { route: 'skills', moduleId: 'skills', name: 'skills' }]);

            this.router = router;
        };

        return App;
    }();
});
define('brand',['exports', 'aurelia-framework', 'internationalization', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _internationalization, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Brand = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Brand = exports.Brand = (_dec = (0, _aureliaFramework.inject)(_internationalization.Internationalization, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function Brand(internationalization, eventAggregator) {
            var _this = this;

            _classCallCheck(this, Brand);

            this.internationalization = internationalization;
            this.eventAggregator = eventAggregator;
            this.eventAggregator.subscribe(_internationalization.LangLoaded, function (msg) {
                return _this.data = msg.data.brand;
            });
        }

        Brand.prototype.changeLang = function changeLang(lang) {
            this.eventAggregator.publish(new _internationalization.LangChanged(lang));
        };

        return Brand;
    }()) || _class);
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
define('home',['exports', 'aurelia-framework', 'internationalization', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _internationalization, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Home = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_internationalization.Internationalization, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function Home(internationalization, eventAggregator) {
            var _this = this;

            _classCallCheck(this, Home);

            this.internationalization = internationalization;
            this.eventAggregator = eventAggregator;
            this.eventAggregator.subscribe(_internationalization.LangLoaded, function (msg) {
                return _this.data = msg.data.home;
            });
        }

        Home.prototype.attached = function attached() {
            this.internationalization.reload();
        };

        return Home;
    }()) || _class);
});
define('internationalization',['exports', 'aurelia-framework', 'aurelia-fetch-client', 'aurelia-event-aggregator', 'whatwg-fetch'], function (exports, _aureliaFramework, _aureliaFetchClient, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.LangLoaded = exports.LangChanged = exports.Internationalization = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Internationalization = exports.Internationalization = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function Internationalization(httpClient, eventAggregator) {
            var _this = this;

            _classCallCheck(this, Internationalization);

            this.httpClient = httpClient;
            this.eventAggregator = eventAggregator;
            this.eventAggregator.subscribe(LangChanged, function (msg) {
                return _this.load(msg.lang);
            });
            this.eventAggregator.publish(new LangChanged('fr'));
        }

        Internationalization.prototype.load = function load(lang) {
            var _this2 = this;

            var _ = this;
            this.httpClient.fetch('../src/assets/' + lang + '.json').then(function (response) {
                return response.json();
            }).then(function (data) {
                return _.data = data;
            }).then(function (data) {
                _this2.eventAggregator.publish(new LangLoaded(data));
            });
        };

        Internationalization.prototype.reload = function reload() {
            this.eventAggregator.publish(new LangLoaded(this.data));
        };

        return Internationalization;
    }()) || _class);

    var LangChanged = exports.LangChanged = function LangChanged(lang) {
        _classCallCheck(this, LangChanged);

        this.lang = lang;
    };

    var LangLoaded = exports.LangLoaded = function LangLoaded(data) {
        _classCallCheck(this, LangLoaded);

        this.data = data;
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
define('navigation',['exports', 'aurelia-framework', 'internationalization', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _internationalization, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Navigation = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Navigation = exports.Navigation = (_dec = (0, _aureliaFramework.inject)(_internationalization.Internationalization, _aureliaEventAggregator.EventAggregator), _dec(_class = function Navigation(internationalization, eventAggregator) {
        var _this = this;

        _classCallCheck(this, Navigation);

        this.internationalization = internationalization;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(_internationalization.LangLoaded, function (msg) {
            return _this.data = msg.data.navigation;
        });
    }) || _class);
});
define('skills',['exports', 'aurelia-framework', 'internationalization', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _internationalization, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Skills = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Skills = exports.Skills = (_dec = (0, _aureliaFramework.inject)(_internationalization.Internationalization, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function Skills(internationalization, eventAggregator) {
            var _this = this;

            _classCallCheck(this, Skills);

            this.internationalization = internationalization;
            this.eventAggregator = eventAggregator;
            this.eventAggregator.subscribe(_internationalization.LangLoaded, function (msg) {
                return _this.data = msg.data.skills;
            });
        }

        Skills.prototype.attached = function attached() {
            this.internationalization.reload();
        };

        return Skills;
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
define('text!styles.css', ['module'], function(module) { module.exports = ""; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n    <require from=\"./styles.css\"></require>\r\n    <require from=\"brand\"></require>\r\n    <require from=\"navigation\"></require>\r\n\r\n    <brand></brand>\r\n\r\n    <div class=\"container\">\r\n        <navigation class=\"row\"></navigation>\r\n        <div class=\"row\">\r\n            <router-view class=\"col-md-12\"></router-view>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!brand.html', ['module'], function(module) { module.exports = "<template>\r\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <span>Geonesia</span>\r\n            </a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"dropdown\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    ${data.lang}\r\n                    <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li><a click.trigger=\"changeLang('fr')\">fr</a></li>\r\n                    <li><a click.trigger=\"changeLang('en')\">en</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${data.message}</h1>\r\n</template>\r\n"; });
define('text!navigation.html', ['module'], function(module) { module.exports = "<template>\r\n    <ul class=\"nav nav-pills\">\r\n        <li role=\"presentation\"><a route-href=\"route: home;\">${data.home}</a></li>\r\n        <li role=\"presentation\"><a route-href=\"route: skills;\">${data.skills}</a></li>\r\n    </ul>\r\n</template>"; });
define('text!skills.html', ['module'], function(module) { module.exports = "<template>${data.mapping}</template>"; });
//# sourceMappingURL=app-bundle.js.map