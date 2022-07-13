'use strict';

const axios = require('axios');
require('dotenv').config();

let token = process.env.CANVAS_TOKEN;

let courseId = process.env.CANVAS_COURSE_ID;

const upcoming = async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  const config = {
    headers: {
      // Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  let response = await axios.get(
    `https://canvas.instructure.com/api/v1/courses/${courseId}/assignments?bucket=upcoming&order_by=due_at`,
    config,
  );

  console.log(command);

  // let date = new Date();
  // let today = date.toISOString();

  // let todayAss = response.data((item) => {
  //   if (item.due_at.split('T')[0] === today.split('T')[0]) {
  //     return item;
  //   }
  // });

  let str = '`UPCOMING ASSIGNMENTS`\n';
  response.data.forEach((item) => {
    str += item.name + '\n' + item.html_url + '\n';
  });

  await say(str);
};

module.exports = upcoming;