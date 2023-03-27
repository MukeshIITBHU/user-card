# React User List Application
# Live Link: https://userview03.netlify.app/

This is a simple React application that fetches data from the [API](https://reqres.in/api/users?page=1) and displays it in a beautiful CSS card design. The application consists of a top horizontal navbar that includes a logo and a button that calls the API.

## Project Architecture

- **App.js** - This is the main component of the React application. It renders the navbar component and a button that calls the API to fetch data. It also contains the logic to display a loader while the data is being fetched, and the user data in a card design once the data is fetched.

- **Navbar.js** - This is a functional component that renders the top horizontal navbar consisting of a logo and a button that calls the API.

- **Loader.js** - This is a functional component that renders a circular loader to indicate that the application is fetching data from the API.

- **UserCard.js** - This is a functional component that renders a card design to display user data. It receives the user data as props and displays the user’s avatar, first name, last name, and email.

- **App.css** - This is the main CSS file for the React application. It contains styles for the navbar, loader, and user card components.

- **axios.js** - This is a separate JavaScript file that uses the Axios library to fetch data from the [API](https://reqres.in/api/users?page=1).

Overall, the code written in this React application follows best practices for React development, including the use of functional components, props, and reusable components. It also uses the Axios library to fetch data from an external API and displays the data in a beautiful CSS card design.

## Project Setup

To get started with the application, follow these steps:

Clone the repository to your local machine using the following command:

```
git clone https://github.com/MukeshIITBHU/user-card.git
```

Navigate to the project directory using the following command:
```
cd user-card
```

Install the required dependencies using the following command:
```
npm install
```

Start the application using the following command:
```
npm start
```

This should open the application in your default web browser at `http://localhost:3000`

## Usage

To use the application, follow these steps:


1. Click the button in the navbar to fetch data from the API.

2. A circular loader will appear while the application fetches data from the API.

3. Once the data is fetched, the loader will disappear and the user data will be displayed in a beautiful CSS card design.



## Technologies Used

The application uses the following technologies:

- React
- HTML
- CSS
- Axios (for fetching data from the API)
