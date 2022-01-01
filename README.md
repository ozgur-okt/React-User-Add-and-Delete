# About the repository

I created this app by using React. This is a simple user add-delete system app.On the screen, you can see the users added and then you can delete them in the row of user.

### Installation

I used [Node.js](https://nodejs.org/) v 16.13.1. For installation, install the dependencies and start the server.

```sh
git clone https://github.com/ozgur-okt/React-User-Add-and-Delete
cd React-User-Add-and-Delete
npm install
```
### Start the server
```sh
npm start
```
Now [localhost:3000]() in the address bar of your browser is going to open.

## App Folder and Components 

### App.js
Here I listed 3 users to show on the screen by default in the class component. Afterwards I coded 2 functions; one is to delete user, another one is to add a new user.

I had class 3 components in the app, those were:

### adduser.js
I sent as a prop the function how to add a new user with a 'Button' and its onClick feature. Adding new user function was defined in App.js.

### users.js
Here I designed how the users will be shown on the screen.

### user.js
In that component, I sent as a prop the function of how to delete a user by giving a 'Button' to each user's row. Deleting a user function was defined in App.js.


![63d5e227-1f1d-41cc-885f-a31605490037](https://user-images.githubusercontent.com/73358116/147828846-4ee85094-e629-4bcd-801d-a2b999b63fc0.gif)

## License
This repo is released under the MIT License.
