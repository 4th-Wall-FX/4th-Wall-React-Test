## Setup
1. Create a fork and clone the repo
2. Run `npm install` [npm](https://docs.npmjs.com/cli/install)
3. Run `npm run json-server` [json-server](https://www.npmjs.com/package/json-server)
4. In a separate terminal, Run `npm start` [Create React App](https://github.com/facebook/create-react-app) - (Should have two terminals running, 1 for the json server & 1 for the UI)


## Test Instructions
1. Add functionality and improve code
  - The minimum goal is that the user should be able to view, add, update, and delete contacts when you are done (the async methods to accomplish this are provided already)
  - After completing base functionality, focus on improving the code and/or the UI/UX
  - Use any libraries you think will help you accomplish what you want
2. Update this README file
  - List changes you make and brief explanations of why you made them under "Changes Made"
  - If you don't have time to complete everything you'd like to, list further changes under "Changes Needed"
3. Finally, in a last commit, share your thoughts about the test under "Final Thoughts." What went well? What were the challenges?

## Evaluation Criteria
1. Your thought process
  - Listing your changes and why you made them is just as important as your code. We want to understand how you think about code.
2. Your code
  - Best practices
  - Readability
  - Reliability
3. UI/UX



## Changes Made
- Installed library ```react-router-dom``` for routing purposes, and created Two routes: the first one is our home ('/') and shows our Contacts list, and the second one ('/contacts') is the page that shows our Locations list.
- Created the folder ```components```, and inside it ```shared``` and ```pages```. The components folder was created aiming the centralization of the components used in this project. The shared folter was filled with components that should be reused. The pages folders was created for holding the components called direct from the routes.
- Installed library ```react-hook-form``` for creating and managing forms with hooks.
- Implemented view, update, create and delete functions for the contacts page and also the view function for the locations page.

## Changes Needed

- Better styles, update the MUITheme to match the desired StyleGuide, and then update the colors pulling from the Design StyleGuide and Company brandmark.
- Better Loading syntax, with an animated image and also displaying in front of the modals, so it would maintain the modal opened until the succcess of the request, and then it would be closed after it.
- Error handling, it is important to notify the users when something goes wrong with the requests.
- Testing: Testing especially the shared components is a great way to maintain the core components away from bad behaviours
- Better linting structure
- Use of git flow pattern 


