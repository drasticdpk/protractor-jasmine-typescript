	import { browser } from "protractor";

	// Require protractor-beautiful-reporter to generate reports.
    var HtmlReporter = require('protractor-beautiful-reporter');
    var jasmineReporters = require('jasmine-reporters')

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            //args: [ "--headless" ]
          }
        // chromeOptions: {
        //     args: ['--headless','--disable-gpu', '--window-size=800x600','--no-sandbox']
        // }
    },

    // If you have one app to test then you can mention the base url here.
    // baseUrl: 'https://juliemr.github.io/protractor-demo/',

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    specs: ['../temp/test-suites/*.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true
    },

    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);

        // Add a screenshot reporter and store screenshots to `./test-results`:
        // jasmine.getEnv().addReporter(new HtmlReporter({
        //     baseDirectory: 'test-results',
        //     preserveDirectory: false, // Preserve base directory
        //     screenshotsSubfolder: 'screenshots',
        //     jsonsSubfolder: 'jsons', // JSONs Subfolder
        //     takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
        //     takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
        //     docTitle: 'Test Automation Execution Report', // Add title for the html report
        //     docName: 'TestResult.html', // Change html report file name
        //     gatherBrowserLogs: true // Store Browser logs
        // }).getJasmine2Reporter());
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );

    }
}