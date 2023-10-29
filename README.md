# Blog Analytics and Search Tool

This web application built with Express.js enables blog data retrieval, analysis, and search functionalities. It interacts with a third-party blog API, performs analytics, and allows users to search within the retrieved blog data.

## Features

- **Data Retrieval**: Fetches blog data from a specified third-party API.
- **Data Analysis**: Calculates various blog statistics: total blog count, longest title, count of titles with "privacy," and unique titles array.
- **Blog Search Endpoint**: Provides search functionality to filter blogs based on query parameters.
- **Error Handling**: Handles potential errors during data retrieval, analysis, or search processes.
- **Bonus Challenge**: Implements caching mechanisms using Lodash's `memoize` for efficient data storage and retrieval.

## Installation and Usage

1. Clone the repository: `git clone https://github.com/SparshDusad/Assignment.git`
2. Install dependencies: `npm install`
3. Start the server: `node server.js`
4. Use tools like Postman to test the implemented API endpoints.

## Folder Structure

your-project/
|_ server.js
|_ routes/
|_ blogRoutes.js


## Technologies

- Express.js
- Lodash
- Axios

## Usage

The server will run on `http://localhost:3000`. Test the provided endpoints to get blog statistics and search for specific blog titles.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
