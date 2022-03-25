# README

This app can be used to manually set and track status updates. It utilises a react based frontend, with Rails in API-mode. 
Unfortunately I made a bit of a mistake in locating the frontend app inside 
But the activity was time-boxed and a bit rushed! It did take me around 5 hours but didn't have time to fix everything. 
It is well well short on the testing front. I wanted to add a cypress test  / some others but was already over time so just needed to get it finished. 

* Ruby version - 3.0.3
* Rails version - 7.0.2.3

TO RUN THE APP

* Pull the repo

* Run "Bundle install"
* cd into directory "statuses-web"
* Run "npm install"
* cd .. 
* Run "rails db:migrate"
* Run "rails db:seeds"
* Run "rails s -p 5002" 
* Run "yarn --cwd statuses-web start" -> runs the frontend at port 3000 
