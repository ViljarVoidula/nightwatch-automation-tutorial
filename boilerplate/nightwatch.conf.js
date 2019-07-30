
import normalizeType from 'normalize-type';
import paths from './paths';


const settings = normalizeType({
  test_workers: {
    enabled: process.env.WORKERS || false,
    workers: process.env.WORKERS_AMOUNT || 2
  },

  live_output: true,
  parallel_process_delay: 10,
  src_folders: [paths.tests],
  output_folder: paths.reports,
  globals_path: paths.globals,
  test_settings: {
    default: {
      launch_url: process.env.LAUNCH_URL || 'http://127.0.0.1',
      webdriver: {
        default_path_prefix: '/wd/hub',
      },
      silent: true,
      disable_colors: true,
      use_xpath: true,
      end_session_on_fail: true,
      skip_testcases_on_fail: true,
      screenshots: {
        enabled: process.env.SCREENSHOTS_ENABLED || false,
        path: process.env.SCREENSHOTS_PATH || './screenshots',
        on_failure: process.env.SCREENSHOTS_ON_FAILURE || false
      },
      desiredCapabilities: {
        enableVNC: process.env.ENABLE_VNC || true,
        timezone: process.env.TIMEZONE || 'Europe/Tallinn',
        browserName: 'chrome',
        chromeOptions: {
          args: ['--disable-cache', '--window-size=1280,800']
        }
      }
    },
    chrome_mobile: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehaviour: 1,
        enableVNC: true,
        'goog:chromeOptions': {
          args: [
            '--window-size=375,667',
            '--disable-gpu',
            '--disable-blink-features=BlockCredentialedSubresources',
            '--disable-gpu-sandbox',
            '--no-sandbox',
          ],
          // mobileEmulation: {
          //   deviceName: 'iPhone X'
          // },
        },
      },
    },
  }
});

module.exports = settings;
