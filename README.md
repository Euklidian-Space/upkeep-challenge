This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and was created for the candidate coding challenge for UpKeep.

## Important
In order for the project to work properly you must add a secrets.json file to the project root with the following structure
```
{
  "upkeepCredentials": {
    "email": "your upkeep email here",
    "password": "your password here"
  }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Other Requirements 

### Styling Documentation  

This project uses the styled component library for css styling.  It allows locally scoped styles without the component bloat that inline styling gives.  The approach I took implementing styles with "styled components" was to make a styled component in a separate file and then use functional composition and Higher Order Components to build up a final styled component.  For example see the directory /src/components/Home has the following structure.  

```
.
├── Home.js
├── index.js
└── styles.js
```

The styles.js file holds the style component.  index.js imports the component exported from Home.js and wraps it with the component exported from styles.js .  This approach separates styling concerns from the business logic. This pattern is repeated for all components.  

### Things Missed

I did not have time to implement error handling.  I have redux setup to handle errors in the API calls, but I was not able to come up with an implementation for displaying those errors to the user.  More than able to discuss how I would approach such an undertaking though :-) .


