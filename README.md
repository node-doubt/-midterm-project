# Assignment Buster

## Project Description

Assignment Buster is a Slack App that helps students stay up-to-date with their coursework. Students are able to quickly access their Canvas assignments from the Assignment Buster App.

## Team

Ben Choe, Cody Davis, Dylan Ullrich, Katharine Swilley

### Languages and Technologies

- JavaScript
- Node.js
  - Slack Bolt
  - Axios
  - dotenv
- ngrok
- Heroku
- Slack
- Canvas Instructure API

### Links and Resources

- [Development Deployment](https://slack-bot-assignments.herokuapp.com/)
- [Production Deployment]()

#### Docs

- [Bolt.js](https://slack.dev/bolt-js/concepts)
- [Slack API](https://api.slack.com)
  - [Slack Apps Home](https://api.slack.com/apps)
  - [Slack API & Bolt](https://api.slack.com/start/building/bolt-js)
- [Canvas Instructure API](https://canvas.instructure.com/doc/api/)
  - [Assignment API](https://canvas.instructure.com/doc/api/assignments.html)

#### Videos

- [Anton Putra - How to Build Slack Bot (Slack Bot Node JS Tutorial) Ep 1](https://www.youtube.com/watch?v=Awuh2I6iFb0)
- [Horea Porutiu - Build your first Slack app using a manifest file](https://www.youtube.com/watch?v=tnek1Rx6MKA)
- [Horea Porutiu - Build Your First Slack Bolt App: Setting Redirect URLs](https://www.youtube.com/watch?v=aycTE75-2Gc)
- [Horea Porutiu - Build Your First Slack Bolt App Pt 2: Custom Routes and Admin APIs:](https://www.youtube.com/watch?v=6w0xI4IEDt8)
- [Horea Porutiu - Build your first Slack Bolt App Pt 3: OAuth & Storing User Credentials (w/ MongoDB)](https://www.youtube.com/watch?v=sSfHz7j89Xk)
- [Canvas Instructure API Information](https://www.youtube.com/watch?v=LBQp0ls7mcI)

### Setup

#### ENV requirements

`PORT` - The port you choose to run locally.

`SLACK_SIGNING_SECRET` - [HOW TO OBTAIN](https://api.slack.com/authentication/verifying-requests-from-slack#verifying-requests-from-slack-using-signing-secrets__app-management-updates)

`SLACK_TOKEN` - [HOW TO OBTAIN](https://api.slack.com/authentication/token-types)

`CANVAS_TOKEN` - [HOW TO OBTAIN](https://canvas.instructure.com/profile/settings)

`CANVAS_COURSE_ID` - Navigate to the Home of the course you would like to get information on. Note the number in the url after courses: `https://canvas.instructure.com/courses/3333333`. In this instance the number is `3333333`, the number in the place of `333333` is your course ID.

#### **How to Run Assignment Buster in Your Own Workspace**

**You will need:**

- [A Slack workspace with permission to add apps to the workspace.](https://api.slack.com/apps)
- [ngrok for testing your bot locally.](https://ngrok.com/)
- A deployment platform such as [Heroku](https://www.heroku.com/), if you decide to deploy elsewhere.

**Steps:**

1. Clone Assignment Buster repository
2. [Create Slack workspace or utilize existing workspace that you have bot add permissions.](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)
3. [Create a new App to add.](https://api.slack.com/start/overview#creating)
4. [Set proper permissions for bot, such as read permissions for channels and/or direct messages. NOTE: You will need to reinstall the bot to the workspace with any changes in permissions](https://api.slack.com/scopes)
5. Host the bot locally with [ngrok](https://ngrok.com/), or deploy to a service like [Heroku](https://www.heroku.com/).
6. Enter the link from your deployment in the **Event Subscriptions** section, and register your slash commands with the same link in the **Slash Commands** section.
7. Go to the Assignment Buster App in your Slack workspace, and try it out!

#### Features and Routes

- Check assignments `/duetoday`
- Check assignments `/upcoming`
- Check assignments `/overdue`

#### Tests

- Testing the app locally can be done with ngrok.
- Jest tests have been implemented, which can be run.

### Development Experience

#### Roadblocks

Working with the Canvas API and Slack presented some challenges.

- Canvas API limitations - without a developer key the API must be accessed by a student API key, which narrows the API endpoints available to us. In a production environment, one would never ask a user to input their API key. Rather an OAuth workflow process would authenticate the user.
- Heroku v AWS
  - We attempted to host this app using serverless functions on AWS. Due to time and complexity, Heroku proved to be the best path forward to obtain MVP.

#### Moving Forward

The steps we would take to deploy this app in a production environment include:

- Having Canvas Administrator access to issue a needed developer key
- Implementing an OAuth process to authenticate Canvas users in Slack
- Implement a Database to store user credential inputs from Slack.
