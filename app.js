'use strict';

const { App } = require('@slack/bolt');
// const { sequelize } = require('./src/userModel/index')
require('dotenv').config();

const PORT = process.env.PORT || 3002;

// Bring in app
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_TOKEN,
});

// import Home Page
const homePage = require('./src/homePage');

// import slash commands
const overdue = require('./src/slash-commands/overdue');
const duetoday = require('./src/slash-commands/duetoday');
const upcoming = require('./src/slash-commands/upcoming');

// Home page
app.event('app_home_opened', homePage);

// Commands
app.command('/overdue', overdue);
app.command('/duetoday', duetoday);
app.command('/upcoming', upcoming);

// Error logging
app.error((error) => {
  console.error(error);
});

// sequelize.sync()
//   .then(() => {
//     console.log('Successful connection');
//   })
//   .catch(err => console.error(err));

// Start app
(async () => {
  await app.start(PORT || 3002);
  console.log('Bolt app is running on', PORT);
})();
