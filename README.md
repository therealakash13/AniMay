# AniMay Project

  

## Project Overview

AniMay is an anime search and browsing web application built with **Node.js**, **Express**, **EJS**, **Axios**, and **jQuery**. The app fetches data from the **Jikan API** and provides features like *search*, *pagination*, and *dynamic UI elements* for a better user experience.

  
## Link
Here is the live link : [AniMay](https://animay.onrender.com)


## Features

- Search for anime by keyword.

- Get Suggestions, Top Animes, Characters info and trailers ( *might add popular clips later* ) .

- Pagination with persistent search input.

- Dynamic buttons with Material Icons.

- YouTube iframe embedding with minimal suggestions.

- Responsive UI with jQuery interactions.

  

## Technologies Used

- Node.js & Express

- Axios for API requests

- EJS for templating

- jQuery for DOM manipulation

- Material Icons for UI

- HTML & CSS for frontend

  

## Setup Instructions

1. Clone the repository:

```bash

git  clone  https://github.com/therealakash13/AniMay.git

```

2. Navigate into the project folder:

```bash

cd  AniMay

```

3. Install dependencies:

```bash

npm  install

```

4. Start the server:

```bash

npm start

```

5. Open your browser and visit `http://localhost:3000`.

  

## Folder Structure

```

	public/
	    ├── assets/
	        ├── fonts/
	            ├── agile.otf
	            ├── agile.ttf
	            ├── agile.woff
	            └── agile.woff2
	        ├── images/
	            ├── github.png
	            ├── gmail.png
	            ├── linkedin.png
	            └── mehero.png
	        └── svg/
	            ├── close.svg
	            └── menu.svg
	    ├── css/
	        └── main.css
	    └── js/
	        └── script.js
	views/
	    ├── partials/
	        ├── animeGrid.ejs
	        ├── footer.ejs
	        └── header.ejs
	    ├── about.ejs
	    ├── animePage.ejs
	    ├── characters.ejs
	    ├── index.ejs
	    ├── recommendation.ejs
	    ├── search.ejs
	    └── toprated.ejs
	.gitignore
	package-lock.json
	package.json
	server.js

```

  

## Usage

- Enter a keyword in the search box and click "Go".

- Use pagination buttons to navigate between pages.

- Click Material Icon buttons to navigate easily.

- Search term persists across pages.

- Navuigate to different pages containing anime results and see details on each anime and their character. 

  

## Notes & Best Practices

- Axios requests use IPv6 to avoid timeout issues. ( *My ISP issue maybe* ).

- Hidden input fields persist search term across POST requests. ( *Dropped it and made a single get route to handle the search for cleaner code* ).

- Avoid using global variables for user input.

- jQuery is used for click events, input handling, and dynamic UI updates.

- EJS `<%= %>` is used to safely render variables into HTML.

  

## Learning Points

- Debugged API connectivity issues and IPv4 preference in Node.js.

- Implemented persistent search functionality with pagination.

- Integrated dynamic UI using jQuery and Material Icons.

- Embedded YouTube videos with controlled suggestion behavior.

- Applied best practices for safe, maintainable backend and frontend code.

  

## License

This project is for learning and portfolio purposes.
