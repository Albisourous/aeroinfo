# AeroInfo.me
 
A React based website that provides users with information about Airport, Airlines, and Flights.

## Team Members

Albin Shrestha, Yijing Chen, Noah Lindley, Kevin Lu, Xiaofei Li

## Presentation

https://speakerdeck.com/appleooo/cs373-swe

## Abstract

In 1903, the first airplane came to the world by the hand of the Wright Brother. The invention of airplanes has brought about a huge change in the way people travel. The ability to travel anywhere has opened up a level of globalization unheard of in the previous century.
Today one hundred years later, Airplanes have become inseparable from our lives. We have witnessed the rapid development of aircraft. At this time, various aircraft of different purposes fly all over the world.

As a result of this rapid increase in air travel, the number of different types of aircraft, airlines, airports, and flights also increased exponentially. As a result, now we have some 40,000 airports in the world, and the daily number of flights in the United States alone is 44,000, carrying 2.7 million passengers. 

Because there are so many flights, airports, and airlines available, it has become increasingly useful to be able to look up flight and airport information. To be able to do this saves time, as having exactly when and where a flight will depart will enable a person to plan ahead and organize his/her trip. This is what our website is designed to do: to enable a person to quickly find information about a flight or an airport.

## React

For the front-end, we used React to display the content of our webpage. Although react is not required for this phase, we ultimately decided to proceed with react because we think it is going to make our website look more professional, smooth, and beautiful.

## Database
In order for our website to effectively work and gather data, we are also going to implement a database using SQLAlchemy and PostgreSQL. This part of the project will not be done in this phase, but in the future, it has to be implemented because it allows us to gather live data to display to our users as time progresses. Without a database, all of our data on the website would be static, meaning we would have to update it manually rather than the website updating it on its own.

## Website Appearance

To make our website more visually appealing, we embedded multiple media in our website in the form of images. In addition to the information we provide about each airplane, airport, and aircraft, we also provide the image with the information. When the user click on the information that they are interested in, a nicely formatted information card will be presented and the relevant images will be presented below the card.

We decided to go for a simple, clean look for our website. On our homepage, we deployed a picture of an airplane to promote the goal of our website. At the top of our webpage, a bar displays the three categories of our website: airplanes, airports, and aircraft. We used a dark blue color for our background color to promote the idea of a high-attitude sky, and we used white font to invoke the idea of clouds. Together, these elements create a sense of aviation and flight.

In the about page, we added information about our group members. The information includes their name, a brief introduction (about me section), and their contact information. The pictures of our group members are also added to further a sense of participation, involvement, and ownership. The users can contact us easily by clicking on the “Contact Me” button present under each group member's info.


## Our Goal

The goal of our project is to design a query website that can allow our users to look up all kinds of information related to airplanes, airports, and flights that can be used to present information to our users in a more elegant form.

There are three main modules on our website are Aircrafts, Flights, and Airports.

On the Aircraft page, data will be displayed about all of the aircrafts that are currently flying or have upcoming flights. The data displayed will be:
```
Type of aircraft
Airline iata code: tells who owns the plane
Construction number
Delivery date of the plane
Number of engines
Date of the first flight it ever made
The model of the aircraft
Plane owner
Plane series
Production line
```

On the Flights page, data that will be displayed about the current and upcoming flights that have been scheduled. The data displayed will be:
```
The flight date
Flight status
Airport where the flight is leaving from
The time zone where the flight is leaving from
Airport where the flight is landing at
Timezone of the airport the flight is landing at
The airline that the flight is offered by
The flight number
```

On the Airports page, data will be displayed about the airports that have current and upcoming flights.
```
Airport name
Code of the Airport
Country that the Airport is in
The latitude
The longitude
```

This website is instructive to get you to know more about airlines, aircrafts, and airports. This can help users understand the important relations between these topics. Some instances where our website can become beneficial is when you plan for travel and want to find a suitable flight, but it will also help you find a better price and airline to satisfy your needs. An example of using our website and our plan of how it is going to work consists of a process such as this:
Go to the airports subcategory and enter your zip code. The airports will be labeled the closest ones to your current location.
By looking at each airport you will be able to see the airlines that are currently offering flights.
In the decision-making process there will be data displayed in upcoming functions we plan to implement that will help us analyze the cost of the flights being offered and the typical prices of specific airlines along with their ratings.

We looked at several potential sources of APIs to use for our project, and we ultimately decided to use the one provided by aviationstack.com. The reason for our choice is that this api has all the endpoints we need for this project. It supports queries about airports, airplanes, and aircrafts, the precise categories we decided to put on our website. The name of our api is NaviAero API, in our API documentation the current commands we have to retrieve data are:
Flights: which retrieves all flights with their data
Flights/flight_number: retrieves information about flights based on flight ID
Flights/flight_date: retrieves information about flights on a given date.
Airlines: retrieves all the airlines that have current or upcoming flights
Airplanes: lists all of the aircrafts that are being used, who they’re owned by, the model of the plane, and more.
Aircraft_types: lists all of the types of aircrafts that are being used.


## Postman
We used and are going to be using postman as our primary tool for testing and developing our API. The reason we used postman is that, conventionally, we would have to write javascript codes to test whether our chosen api is working or not, and that is an inefficient and time-consuming process. With postman, however, we can simply provide it with the api http address and the relevant parameters, and the postman will automatically test whether the api is working for us. This greatly increases the efficiency and ease of our api testing process as we continue to develop the API. So far, the only commands we have implemented are the ones above, but unfortunately they do not function as of right now. The documentation of the API currently is just to lay out the framework for how our API is going to work once it has been fully implemented.

One of the problems we encountered while testing our api is that due to the business atmosphere surrounding the airlines business, most of the api require an enterprise subscription that costs between 100 dollars per month to 500 dollars per month. After some searching, we finally found a free api source: aviationstack.com. However, while we were testing this api, we were informed that, as a result of our free subscription account, we did not have access to the https encryption service. This problem was later solved by one of our backend engineers (Noah Lindley) by changing the request from https to http resulting in us being able to access the essential data we need to develop our website. 


## Flask
Another tool we used for the backend in this phase of the project is the Flask microframework. After obtaining the data for three airports, airplanes, and aircrafts, we used Flask to display these data to our website. The way we hard code our data onto our website (since calling api is not yet required in this phase) is that we have the data as an array of dictionaries. Then using the double bracket notation “{{}}”, we add flask syntax to our front end html page. There, we can simply write a for loop iterating through the data and displaying them one by one in our html page. 

We also used flask to control which html file to display based on the url links. To do that, we used the @ decorator to link specific urls to their corresponding pages, and use the render_template function to display the page. 

## Hosting Service
To deploy our website to the internet, we have to choose between two cloud hosting services: Amazon Web Services (AWS) and Google Cloud Platform (GCP). We ultimately decided to use Google Cloud Platform because we have their coupons, which help us significantly decrease our deployment costs. 

We created three files to incorporate flask microframework (which will control the website to display based on the url) to google platform: main.py, requirements.txt, and app.yaml. The main.py file contains the main flask control code, which consists of a series of decorator linked functions that correspond to their respective urls. The requirements.txt file contains the libraries and dependencies that must be provided for the main.py file. It has two requirements listed: flask and logging. The app.yaml file specifies the running environment as well as the initial file to run for our website. In this file, we also tell GCP that we want to use python3 to run python files as opposed to the default python3.

We then  had a problem with GCP deployment. Our website simply could not be deployed. We checked a lot of issues, and spent a lot of time. Ultimately, the root source of hour problem is that we used react to construct the frontend, which uses .js files, and we also tried to use flask in the backend, which assumes that the frontend is done in .html files. The conflict causes the website to not deploy correctly. Realizing this, we updated the app.yaml file, changing the runtime from Python3 to node.js. 

During the duration of us trying to fix the deployment problem on GCP, we hosted a temporary website on github, so that limited traffic can still access our website while the main server is down. This practice reduces the disruption in user experience since they can continue to access the website even when the main server is down for maintenance.

After adapting React as our front end tool, we still faced deployment issues specific to the GCP platform. We then added a build file to instruct GCP how to construct our website and deploy it properly in the website.

Then we had a domain issue. The domain we would like to use for our website, aeroinfo.me, could not be chosen as our domain, because some previously worked-on project has already been mapped to this domain. So, we spent some time figuring out which project is mapped to the domain and removed that mapping so that our current, up-to-date project can be mapped to the domain. We then fixed minor subdomain issues such as the difference between www.aeroinfo.me and just aeroinfo.me. In the end, we were able to deploy our website successfully.

Our experience with GCP helped us learn many experiences regarding website deployment: specific files must be present, case and spacing must be right, and many other things. It also enabled us to have an opinion on which deployment platform to use. Originally, we were clueless about whether to choose GCP or AWS, since we don’t know the difference. After this experience, however, we are more informed to make this choice, and our group is considering switching to AWS for the next deployment.

## Database
In this phase of the project, we needed to implement the database. We are using a database because we don’t want to constantly make calls to our api, as doing this would be inefficient and time-consuming. Instead, we make a few calls to our api, store the data gathered in a database, and, later, we can just make queries to our database to find the information we need. The speed at which we access the data is extremely important for web applications, especially for an information querying website that we are building. When using our website, we need to quickly get the information so that it can be presented to the user in a mannerly way by the front-end. The main purpose of implementing our database is so that we can access the data we need and not make our consumers have to waste their time for a slow webpage to load.

We decided to use Postgresql as our database because it is an open-source object-relational database that is freely available on the internet, but most importantly it is just a very powerful tool to use when querying databases. It is also one of the well-known databases that has been tested by many other users and programmers. One of the problems that we encountered while installing the database was adding it to the environment variables. This occurred because we can’t add it to the path since it is not a list. After some time tinkering with our program we discovered that we only need to add a comma to make the path variable a list, thus enabling us to add the database to the path variable, solving the problem.

After setting up our database, we then created models for our database. These models are written in the form of python classes, and we make use of the ORM (Object Relational Mapping) technology to translate the python classes to SQL tables. In these python classes, we specify the table name and the various attributes associated with them. We also specify what type of data that each attribute is going to store during its use. For example, string for name, and integer for id. Also, we created a schema for each model to help us format the json representation of the model. This allows us to easily convert the model information stored in our database into json format, so that it is ready to be used as an api and tool for other programmers that would like to view and use our data.

We now have created our database, ready to be filled with relevant data to the tasks at hand for this project. To get the data for our website, we made “get requests” to various api’s to get the information we needed. To make these requests, we make use of the python requests module. We specify the parameters and headers, get the information website, and use a for loop to add each entity to our database.

deploying  our database to the cloud is the final step for our implementation of the database. We decided to use the Google Cloud Platform as our cloud hosting service in the first phase of the project, and is this phase, we created a PostgresQL instance on GCP, downloaded all the data into it, and deployed to the web. Now any user accessing our website can enter the appropriate api url to access the json format version of our data. This is also the primary way the frontend and backend communicates in our group. 

## Adding Images
One of our objectives is to get relevant images for each of our entities on our website. We feel getting images for our information is tremendously important because it increases the appeal of our website to the users of it. When a user makes a query about a flight, or an airport, or an airline, we don’t want only text information to be displayed. That would be boring and make our website less competitive for other text-based aviation query websites out there. If we can add images to accompany the text information, it would add a lively dimension to our website, making our website more user-friendly, visually appealing, and professional.

Through the effort of our group members, we identified the source of an api that can provide the logo image for the various airlines that we are going to put on our website. The usage of this api is relatively simple compared to some of the other api that we have used. To use this api, we simply add the IATA code of the desired airline to the back of the url, and the api will return the corresponding logo of that airline. We implemented the function for getting airline images in a single line of python code.

Finding the image for flights is a bit tricky, as flight is a relatively abstract concept when compared to airports of airlines. To add images for flights, we decide to use the country of the flight origin and flight destination. So our objective becomes finding ap api that will provide an image for a given country. Thankfully, there are plenty of api that will do precisely this. We found an api, after some time of searching. To use it, we simply pass in the code of the desired country, then the api will return the corresponding flag of that country. We again implemented the function for getting flight (country) images with a single line of python code.

Finding the image for airports is a bit more complicated than the other two categories, as there are few api on the internet that can provide us with images of a given airport. So we decided to take an alternative approach. Through the aviation stack api, we can obtain the IATA code for our target airport. We then use this code to identify the corresponding Wikipedia link for that airport. After arriving at Wikipedia, and extracting the Wikipedia title name, we can then use Wikipedia media’s image api to get a link to the first image on that Wikipedia page. We wrote a function that helps us do all of this. One of the issues is that there are some rooms for error, as some small airports do not have a Wikipedia page. We take that into account when designing the function, and return a default, generic image for the airport, whenever a given airport is not found for any reason.

## Frontend User Elements
For this phase of the project, we decided to add even more media to our website, to make it more visually appealing and professional looking. In addition to the images that we are going to provide alongside with each of our information cards on our three categories: flights, airlines, and airports, we decide to add in animation as well. This includes a moving gif on the homepage, displayed to the user right when they first entered the page, welcoming them, and conveying the theme and purpose of our webpage: to enable query about aviation-related topics. This display of our theme in this noticeable and visual way allows the user to instantly get a feel for our webpage and allows them to quickly decide whether they are in the right place. In addition to various animations related to the aviation topic we have added in various places in our webpage (the homepage, and in each of the category pages), we also added other interactive, animating elements to our website that further the quality of user experience. For example, when users hover their cursor over any of the information cards, that selected card will be highlighted with a white border, and be popped outwards in an animation. This focuses the user’s attention on that card that he has selected. It makes the card larger so the user can read the information more clearly. We also think this makes the user experience smoother and more enjoyable.

Another frontend element we implemented is adding an infinite scroll theme to our category webpages. When users scroll down, more information cards are automatically loaded, and this goes on as long as we have more information in our database to display. We think this is an effective user experience frontend element because it saves the user’s trouble to click the next page when the information runs out on the first page. Instead, the user can simply keep on scrolling to query for more information instead of having to find the next page button and click it.

After the user clicks on an information card and enters its page, more user elements are presented. Here, the various attribute information are displayed in a white information card. For example, an airport information card will display information like the location, the country in which it is located, etc. Alongside the text information, the user can check out the image of the object in interest, so they have a visual idea of that object. On the side of the text information, we make the connection between the categories. For example, on the airport's information card, we display related information about flights originating from that airport and airlines that are in the same country as that airport. This information is displayed in a scroll box, so the user doesn't have to scroll the entire page down to look at this information. This allows them to not lose track of the main information card.


## Contributing

Please contact me on LinkedIn to collaborate: https://www.linkedin.com/in/albin-shrestha
