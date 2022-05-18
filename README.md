# Moravio - frontend task - giphy search
​
To implement following task please use one of Javascript FE frameworks like Vue.js or React.js.  It should take you no more than 2 hours of coding time.
​
**We expect you to deliver everything you think is right for a production ready code.**
​
## Task
​
Create an application for searching and displaying gifs.
​
## Detail
​
Application should contain input field where user can type in string based on which gifs will be searched. Searching should start 300ms after user stops typing into the search input field. Application should contain component for displaying set of found gifs. Component displaying gifs should have pagination feature.

Keep q, offset and limit (viz api doc) parameters in url, so you can easily send the query to your friend and try to create reusable hook for managing them.

Setup build process using tools of you preference (webpack, rollup ,..)


​
## API
​
Docs https://developers.giphy.com/docs/api/endpoint#search
​
Api key ```dc6zaTOxFJmzC```
​
Endpoint ```https://api.giphy.com/v1/gifs/search?```