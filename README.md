# cypressDemo
# Configuration
npm init  
npm install cypress --save-dev  
npm i cypress-plugin-snapshots -S  // reference: https://github.com/meinaart/cypress-plugin-snapshots  
npx cypress open  


# Workaround for timeout:  
Log error: Cypress verification timed out. ,Command timed out after 30000 milliseconds: increase the time out from 30000 to 100000 in verify.js file inside \nodemodules\cypress\lib\tasks
![alt text](https://github.com/oletishiva/cypressDemo/blob/main/image.png)



# Demo features
Page object pattern  
visual image validation of fileds in the page  
click actions  
type actions  
focus  

# How to configure Allure Reports

download allure framework as zip file and add path to the user environment variable  
https://github.com/allure-framework/allure2  
Configure allure report settings with cypress  
npm i -D @shelex/cypress-allure-plugin  
Add Allure plugin to cypress plugins. To do that add the following code snippet of allurewriter inside the plugins/index.js file.  

const allureWriter = require('@shelex/cypress-allure-plugin/writer');  
module.exports = (on, config) => {  
  allureWriter(on, config);  
  return config;  
  }  

Then register the command of allure plugin with cypress/support/index.js file  
import '@shelex/cypress-allure-plugin';  


Add below to the cypress.json file
1.  
"projectId": "ProjectName",  
  "reporter": "cypress-multi-reporters",  
  "reporterOptions": {  
    "configFile": "cypress/support/cypress-multi-reporters.json"  
  },
2.  
"env":{  
 "allureResultsPath": "allure-results",  
    "allure": true  
}  

3. Create cypress-multi-reporter.json file add following line to this file  
{  
    "reporterEnabled": "@mochajs/json-file-reporter, mochawesome"  
}  

![alt text](https://github.com/oletishiva/cypressDemo/blob/main/allure1.png)
![alt text](https://github.com/oletishiva/cypressDemo/blob/main/allure2.png)
![alt text](https://github.com/oletishiva/cypressDemo/blob/main/allure3.png)

# How to see allure report  
1. Go to the project folder generate allure report using the below command  
allure generate --clean  
allure open --> It will open the report the in browser  
![alt text](https://github.com/oletishiva/cypressDemo/blob/main/allureserverstart.png)


