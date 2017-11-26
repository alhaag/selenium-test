# Selenium Test Example
Example project of selenium tests using WebdriverIO and NodeJS sintax.

## Dependencies
 * Linux64 env
 * Java ^1.8.0_144-b01
 * NodeJS ^6.11.3
 * Yarn

## Init
Init and download dependencies in project path:

Download Chrome driver:
```
$ wget https://chromedriver.storage.googleapis.com/2.33/chromedriver_linux64.zip
$ unzip chromedriver_linux64.zip
$ rm -f geckodriver-v0.19.1-linux64.tar.gz
```

Download Firefox driver:
```
$ wget https://github.com/mozilla/geckodriver/releases/download/v0.19.1/geckodriver-v0.19.1-linux64.tar.gz
$ tar xzvf geckodriver-v0.19.1-linux64.tar.gz
$ rm -f geckodriver-v0.19.1-linux64.tar.gz
```

Install dependencies:
```
$ yarn install
```

## Run

First run the standalone selenium server:
```
$ java -jar selenium-server-standalone-3.7.1.jar
```

Run tests:
```
$ yarn test
```