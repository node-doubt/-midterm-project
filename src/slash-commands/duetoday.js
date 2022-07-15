'use strict';

const axios = require('axios');
require('dotenv').config();

let token = process.env.CANVAS_TOKEN;

let courseId = process.env.CANVAS_COURSE_ID;

const duetoday = async ({ command, ack, say }) => {
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

  let date = new Date();

  let assignment = response.data.filter((item) => {
    const options = { timeZone: 'PST', timeZoneName: 'short' };

    const assignDate = new Date(item.due_at).toLocaleDateString(undefined, options);
    console.log(assignDate);
    let today = date.toLocaleDateString(undefined, options);
    if (assignDate === today) {
      return item;
    }
  });

  let str = '`DUE TODAY`\n';
  assignment.forEach((item) => {
    str += item.name + '\n' + item.html_url + '\n';
  });

  await say(str);
  console.log(str);
};

module.exports = duetoday;
