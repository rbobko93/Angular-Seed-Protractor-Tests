var Jasmine2HTML = require('protractor-jasmine2-html-reporter');

exports.config = {
    baseUrl:'http://localhost:8000',
    seleniumServerJar: './node_modules/selenium/lib/runner/selenium-server-standalone-2.20.0.jar',
    framework: 'jasmine',
    capabilities: {
      browserName: "chrome"
    },
    suites: {
        all: [
            'target/test/**/*.js'
        ]
    },
    jasmineNodeOpts: {
        showColors: true
    },
    directConnect: true,
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HTML({
                savePath: './target/reports',
                takeScreenshots: false,
                fileName: 'angularSeedTestsReport'
            })
        )
    }
};