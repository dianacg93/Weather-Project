# Weather-Project
Build a Weather App using the OpenWeatherMap API
Here's an exciting challenge: You'll be building a small weather app, using your newfound skills with APIs!

# Reading Documentation
Click here for additional information about API keys, working with Chrome Inspector and the Network Tab, HTTP requests.

Now that we have some experience working with APIs, we're going to take a step back and learn how to fully understand an API's documentation.

There are no rules governing how to write documentation for an API, so its content is presented differently each time.

While searching for the right API, you'll want to explore the different options that are available to you, and then take a look at each option's documentation.

Try to find documentation that contains detailed setup instructions and discusses workable options. Assets like these will come in handy when implementing your APIs.

Knowing how to quickly find key pieces of information is the most important part of reading API documentation.

In this lesson, we'll take a look at an API that has very clear documentation — OpenWeatherMap: https://openweathermap.org/api — and then practice looking through that documentation and making API calls.

# Guided Practice
For this project you'll be using the Open Weather Data API. In order to use it, please follow these steps:
- Sign up for a free Open Weather Map: https://home.openweathermap.org/users/sign_up  account!
- Once you've signed up, you're given an API key. Copy that API key and keep track of it somewhere!
- Go to OpenWeatherMap: https://openweathermap.org/api and scroll down, you'll see a section that says "API Documentation."
- Open Postman or Insomnia to check out the data you're working with and to verify that your api key works. Make a GET request to the following URL in Postman, adding your API key to the end.

`http://api.openweathermap.org/data/2.5/weather?q=10025,us&units=imperial&appid=[PUT YOUR API KEY HERE]`





# API Keys
When we click on the "How to Start" link, we are taken to a page that provides us with information on how to get an API key.

For security reasons, many APIs require the use of keys.
An API key is like a signature that uniquely identifies a user. This helps APIs keep track of their traffic and monitor any suspicious activity, such as an individual user sending too many requests.

For example, malicious users might try using multiple usernames until they find one that works. Keys can help prevent these kinds of attacks by limiting how many requests one user can make.

OpenWeatherMap's documentation makes it easy for us to obtain an API key. We simply click the "Sign Up" button and create an account, and then you can get an API key.

To make an API call, we'll need to add our key to the URL:
http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}

Here's an example provided in the documentation:
api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111

As you can see, all we need to do is append our API key to the end of the URL.

Now let's review the main points you should look for when examining an API's documentation.
- Do I need an API key?
- What kind of information is available?
- What does a request look like? What should the structure of the URL be?
- What response should I expect to get back?

Once you've answered all of these questions, you're ready to request data.

# Looking at Documentation


Now that we have our key, let's look back at some of the other information the API documentation can provide.
Find a partner and spend a few minutes exploring the documentation. See what different types of data we can get from the API.

# The Network Tab
Next, let's explore some HTTP resources by looking at HTTP requests and responses using the Chrome Inspector.

To view this request-and-response cycle in Chrome, we'll open up Inspector (command + option + 'i', or ctrl + click and select 'Inspect Element') and select the "Network" tab.

In order to see the requests and responses that are sent out when the page first loads, we'll need to refresh the page:





You should be able to see a few HTTP requests and responses in the "Network" tab.

For each request, you'll see Name, Method, Status, Type, and Size, along with information about how long it took to get each of these resources.

Most of this information comes from the HTTP request and response.

Some HTTP requests are for CSS, JavaScript, and images referenced by the HTML.

Let's go ahead and type a city and state into a simple form and hit "Get Weather," which will request the current weather data for that city from the OpenWeatherMap API.

When we do this, we can see that the "Network" tab displays our API request:

In order to inspect this request and its response, we'll click on the name in the far left-hand column and click on the "Headers" tab:

Headers are metadata properties of an HTTP request or response, separate from the body of the message.

# Request
We can find all kinds of information in the request header, which shows the request that was sent to the server:

`GET /data/2.5/weather?q=San%20Francisco,CA&appid=02e84210a52ed716535f02989864d080 HTTP/1.1
Host: api.openweathermap.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept: */*
Origin: null
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
        Accept-Language: en-US,en;q=0.8`

Here is the structure for the request:

[http request method] [URL] [http version] [list of headers]

# HTTP Request Methods
The first word in the request line, "GET," is the HTTP request's method.

In the last lesson, we looked at the "GET" method, which is used to retrieve data, and the "POST" method, which is used to send or create data.

### Here is a full list of the HTTP request methods available to us:
- GET: Retrieve a resource.
- POST: Create a resource.
- PATCH (or PUT, but PATCH is recommended): Update an existing resource.
- DELETE: Delete a resource.
- HEAD: Retrieve the headers for a resource.

Of these, "GET" and "POST" are the most commonly used.

# Response
When a client sends a request, the server sends back a response. Let's take a look at the response headers that were returned:

`HTTP/1.1 200 OK
Server: openresty
Date: Mon, 18 Jul 2016 07:25:56 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 431
Connection: keep-alive
X-Cache-Key: /data/2.5/weather?q=san%20francisco,ca
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
        Access-Control-Allow-Methods: GET, POST`

The standard format for this response is:

`[http version] [status] [reason] [list of headers] [response body] # typically HTML, JSON, ...`

- The HTTP version should be 1.1.
- Status Codes have standard meanings; here are a few:
    - 200: OK,   
    - 301: moved permanently,   
    - 302: Moved Temporarily,   
    - 400: bad request,     
    - 403: forbidden,     
    - 404: not found,    
    - 500: internal server error

Response Body: If we click on the "Response" tab, this is what we'll see:



The response is a JSON object with the current weather data we requested from the OpenWeatherMap API.

# Review
- The "Network" tab is a helpful resource if your request and responses aren't working correctly.
- You can use it to debug, or to take a look at your response if you're not sure what format to expect.
- You can also use it to look at the status code to make sure that it is 200, which means request was successful.
- Any other status code will help you identify what the error might be.
- For example, if you receive a 404, it means that your request was not found.

# Instructions
For this assignment you'll be using the Open Weather Data API. In order to use it, please follow these steps:
1. Sign up for a free Open Weather Map account!
2. Once you've signed up, you're given an API key. Copy that API key and keep track of it somewhere!
3. Open Postman to check out the data you're working with & to verify that your key works. Make a GET requrest to the following URL in postman, adding your API key to the end.
`http://api.openweathermap.org/data/2.5/weather?q=10025,us?units=imperial&appid=[PUT YOUR API KEY HERE]`

### Your workflow should start with pseudocoding the app logic.
Although the homework submission completion status will be based on the code alone, if your code isn't up to par OR or you found the assignment too challenging to complete you can bet the first place we're going to check is your pseudocode.

### You need to make the following files to support the app:
- main.js
- index.html
- style.css

### Your page should have:
- An input field for a user to enter a zip code or city name
- A submit button
- When the submit button is clicked:
    - A GET request should fetch the weather data from the API
    - The following data should be rendered to the page:
    - City name
    - Current temperature
    - Weather description
    - Min temp
    - Max temp
- Have the temperature turn blue if under 40, and red if above 90.

### Here are some zip codes / city names to test!
- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA)

## Hints
Here's what a sample URL will look like:
'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=02e84210a52ed716535f02989864d080'
 