# Redux-Unsplash-API-Photo-Search
The Iron Yard, React Redux  app where users can search for a category and see a list of images

## Activity: Unsplash API - Pair Programming
In this project, you'll be working with the [Unsplash API](https://unsplash.com/developers) to create an app where users can search for a category and see a list of images that fit that result.

## API Access  
The first thing you'll need to do is to sign up for an account. You can do that [here](https://unsplash.com/developers), just click the "Register as a developer" button.

You'll need to specify your first and last name, email address and username/password combination. Once you join you should visit the [Terms](https://unsplash.com/developers/terms) page and click the Continue button.

On the developer profile page, you don't need to specify a URL, and under the What are you going to build? section, you can just say, "School Project".
You'll then be directed to your [Applications Page](https://unsplash.com/oauth/applications ), where you need to click the "New Application" button. Provide any name you'd like and just leave the Public Access box checked. Once complete, you'll be taken to a page that contains your Application ID

## !!IMPORTANT!! - 
Do NOT store your Application ID on GitHub. Put it in a token.js file and include that in your .gitignore. 
We realize that will mean you can't deploy this application, but that's OK for now. This project is just to run locally.

## API Documentation  
Next up, you should familiarize yourself with the API Documentation.
Specifically the [Public Actions](https://unsplash.com/documentation#public-actions) and the [Search Photos](https://unsplash.com/documentation#search-photos) sections, as these are ALL you'll need to accomplish this application.
Note, you'll need to pass your Application ID in the headers of your request, make sure you read about this in the documentation under Public Actions.

## App Requirements  
There are no starter files, so go ahead and scaffold out a create-react-app and do your basic setup, making sure to install all the required libraries.
Create an Input field where the user can type their search query
Using Redux-Thunk, make a request to the API to search for the value in the input box.
Display the images on the page in some fashion.

## Your role as a student
Articulate their ideas as best you can. Try to facilitate effective collaboration with your paired student. Be willing to debate strategies for how best to approach your challenge, but don’t allow endless debate to keep you from making progress. Keep your eye on the clock and try to work yourself through the challenge at a reasonable pace. You and your partner should share the responsibility for authoring ideas and code. Finish your challenge and make certain that you call talk someone through the logic and strategies implemented by your group.
