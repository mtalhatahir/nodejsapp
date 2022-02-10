var app = require('./../app.js');
var assert = require('chai').assert;
var http= require('http');

var webdriver = require('selenium-webdriver');
var chrome=require('selenium-webdriver/chrome');
var chromedriver =require('chromedriver');

const width = 640;
const height = 480;


let driver=new webdriver.Builder().forBrowser('chrome').setChromeOptions(
  new chrome.Options().headless().windowSize({width, height})).build();

// let driver=new webdriver.Builder().forBrowser('chrome').build();

describe('Form Page', function() {
  before(function () {
    driver.get("http://localhost:80");
    // driver.get("https://devsecopsnodejs.azurewebsites.net/");
  });

  it('Form Submit', async function() {
    driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/form/div[1]/div/input')).sendKeys("SystemLtd");
    driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/form/div[2]/div/input')).sendKeys("IT@systemltd.com");
    driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/form/div[3]/div/textarea')).sendKeys("System Limited");
    
    await driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/form/div[4]/input')).click();
    
    var message= await driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/form/div[1]/span'));
    assert.equal(await message.getText(),"Form Submitted");
    await driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/form/div[1]/button')).click();
    
  });

  after(() => {
    driver.quit();
  });
});

