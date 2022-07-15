'use strict';

const homePage = async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({
      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: 'Welcome to Assignment Buster!',
              emoji: true,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Connect your Canvas Account to Slack with Oauth',
            },
            accessory: {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'CONNECT',
                emoji: true,
              },
              value: 'click_me_123',
              url: 'https://google.com',
              action_id: 'button-action',
            },
          },
        ],
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = homePage;
