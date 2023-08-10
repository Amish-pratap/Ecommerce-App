# E-Commerce App

This E-Commerce App is built using Vanilla JavaScript, Express, and Node.js. It features production-grade authentication, user management, product management, shopping cart functionality, and session control. User and product data are stored in JSON files with the help of the 'fs' module.

## Dependencies

- [cookie-session](https://www.npmjs.com/package/cookie-session): ^2.0.0
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [express-validator](https://www.npmjs.com/package/express-validator): ^7.0.1
- [multer](https://www.npmjs.com/package/multer): ^1.4.5-lts.1
- [nodemon](https://www.npmjs.com/package/nodemon): ^2.0.22

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm start` or `nodemon index.js`.

## Features

- Sign in and signup functionality.
- Add or delete products.
- Shopping cart functionality.
- Session control for user authentication.
- User and product data storage in JSON files.

## Project Structure

- `index.js`: Entry point of the application.
- `public/`: Contains HTML, CSS, and vanilla JavaScript files for the front end.
- `routes/`: Contains route handlers for different app functionalities.
- `data/`: Stores JSON files for user and product data.
- `middlewares/`: Middleware functions for session control and validation.

## Usage

1. Run the server and open the app in your browser.
2. Explore the different functionalities provided by the app.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
