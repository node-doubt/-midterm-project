# Assignment Buster

## Project Description

Assignment Buster is a Slack App that will help students stay up-to-date with their coursework. Students are able to quickly access their assignments due that day via the app.

## Team

Ben Choe, Cody Davis, Dylan Ullrich, Katharine Swilley

### Languages and Technologies

- JavaScript
- Node.js
  - Slack Bolt
  - Axios
  - dotenv
  - Sequelize
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

#### How to Run Assignment Buster

- TBD

#### Features and Routes

- Check assignments `/duetoday`
- Check assignments `/upcoming`

#### Tests

-

### Development Experience

#### Process

-

#### Roadblocks

- Canvas API limitations

#### Moving Forward

-
