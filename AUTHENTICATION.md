1. [JWT]()
2. [Thank you for rushing again](https://www.youtube.com/watch?v=sovAIX4doOE)
* Two ways either directly assigning document.cookie="smeet:3", It can be done using Event Listener.
* ```res.setHeader("set-cookie,[value]")```
* It's set as session cookie, close tab and it's gone!
* properties domain, path, max-age, samesite(strict/lax)
* ```document.setCookie("value; domain=www.example.com")```
* ```document.setCookie("value; path=/path1")```
* ```document.setCookie("value; max-age:3min")```
* ```document.setCookie("value; samesite=strict;")```
* session cookie : are often cookies whihc dont have expire or max-age but if you close the browser it goes away
* Permenant Cookie : with max-age or cookie
* httponly Cookie : ``` res.setHeader("set-cookie","value; httponly")```
* securecookie same as httponly only difference https
3. [Good To know](https://www.youtube.com/watch?v=aUF2QCEudPo)
* ``` document.setCookie("value; samesite=none")```  No practical use
* ``` document.setCookie("value; ")``` 

## Passport

1. [Aditional dependencies ```npm i passport  passport-google-oauth20 express-session http-proxy-middleware```]() 
2. [min 34:00 to 1:12:00](https://www.youtube.com/watch?v=SBvmnHTQIPY)