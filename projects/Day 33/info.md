Get and Post Request bare. 

query string form means - extra data sending in url ko form
drawbacks of GET request - limited with browser of url length, string data format, visible in url.

POST requests - secure, to create/write/update.
data send via request body(any type of data)
No Hacker man can crack this now, HEHEHAHAHAH

### 2 - handling post request
app.use (express.urlencoded({extended:true}));
app.use(express.json());

we need to parse POST request data. cause express doesn't understand.