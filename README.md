# Url Shortener
Built a url shortener tool using JavaScript, Node.js, Express, and MongoDB Atlas to collect database.

## Quick Start
1. Create a MongoDB Atlas account and create a cluster with it's own username and password. Make sure to replace with the cluster's <username> and <password> in the mongoURI located in config > default.json

2. Install **dependencies** and **devDependencies** - Go to the directory from your terminal and run **npm install**.

3. Run express server with nodemon by typing **npm run dev** in your terminal

## Overview
I had to plan out all the different pieces to execute this project with the help of a video and reviewing forums: 

1. Used MongoDB and json package to collect and store the long url data. 
2. Used dependencies to check if the long url is valid and generate a short url.
3. Created a route using node express to redirect short url to original url
4. Sent a post to the backend using Ajax and JQuery for the click button eventListener


