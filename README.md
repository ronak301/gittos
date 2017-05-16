 - This is regarding task given to me here: https://gist.github.com/callstack-io-bot/65b0e806c886f352aee8007dc9aadb57
 - This project contains React and React-Native (Both android and ios) code base in single repo.

Functionalities it includes :

1 ) Able to search github repo.
2 ) Throttling user request i.e not firing requests as long as the user is typing.
3 ) Caching already searched results (in redux state using normalizr).
4 ) Ability to login via github on mobile. (on web , i was getting this error :  No 'Access-Control-Allow-Origin' header is present on the requested resource. ). Searched on google, it seems CORS issue, but i couldnt manage to solve.
5 ) Repo belonging to existing user is marked as highlighted. (on mobile only , as i cant pass through login on web , as mentioned above)
6 ) Persistance : was facing issue while using Asyncstorage from @callstack/Asyncstorage. Already created issue : https://github.com/callstack-io/async-storage/issues/2
I am not sure how to use this with redux-presist.
7 ) Ability to sort each colunm and control number of rows rendered. (5/10/15/20)
8 ) used create-react-app for web.
9 ) using eslint.

Used:
- redux
- react-navigation
