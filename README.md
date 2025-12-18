Welcomme on the Carambar & co App

This is an app ready to serve you funny jokes:

In this app you will be able to:
- get all the jokes list
- search a specific joke
- search a random joke

To ensure an instantaneous user experience, this app uses a "Stale-While-Revalidate" strategy with localStorage.

Note for developers: If you have previously visited the app, jokes are likely stored in your local cache. When you return or refresh, the app will display these cached jokes immediately while fetching fresh data from the API in the background.

If you have just added a new joke via Postman or Swagger, you might see the "old" list for a brief second. Don't worry: the app will automatically sync and display your new joke as soon as the API response is received.

Links:
- website:
- api url: https://carambar-co-backend.onrender.com
- repo Github Frontend: https://github.com/ThibaudFre/Carambar_co_Frontend
- repo Github Backend: https://github.com/ThibaudFre/Carambar_co_Backend
- Swagger: 
    - http://localhost:3000/api-docs/ -----------> try it out in dev mode.
    - https://carambar-co-backend.onrender.com/api-docs/ ---> try it out in production mode