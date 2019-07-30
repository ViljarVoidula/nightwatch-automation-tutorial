# Prerequisites

## Software setup
    To run the tests you need to install these:
    Tested in Windows 10, Mac and Ubuntu.

        1. Install the node.js using this URL: https://nodejs.org/en/
        2. Install the yarn using this URL: https://yarnpkg.com/en/docs/install
        3. Install the chrome using this URL: https://google.com/chrome/
        4. Install JAVA https://www.java.com/en/download/

## Setup local environment 

        1. git clone  https://github.com/ViljarVoidula/nightwatch-automation-tutorial.git
        2. if you dont have git installed https://git-scm.com/download/
        3. Navigate to "boilerplate" folder

## How to install packages
    Open the project with cmd/terminal (the same location, where is the project package.json file) and use the command below to install the packages.

        1. yarn install - installing all the necessary packages.

## How to start the selenium standalone server
    After you have started the selenium standalone server, leave the server running and switch to another bash window.

        1. yarn selenium-setup - installs the selenium standalone server (This needs to be done only once).
        2. yarn selenium-start - starts the selenium standalone in localhost (This needs to be done every time you close the running server).

## How to start the tests
    In another bash window start tests using these commands.

        1. yarn start-desktop - starts desktop tests.
        2. yarn start-mobile - starts mobile tests.

## How to run tests in higher resolution
    You have to change the nightwatch.conf.js file.

        1. Open the nightwatch.conf.js
        2. For desktop find the test_settings -> default -> desiredCapabilities -> args
        3. For mobile find the test_settings -> chrome_mobile -> desiredCapabilities -> args
        4. Change the numbers (X for example) in "--window-size=X,X" as you like.

## Or if you want to run it in for example iPhone X, then you just need to remove the comments in the "mobileEmulation" and write the desired deviceName!