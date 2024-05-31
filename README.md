# Movie Gold

Movie Gold is a full stack web application designed to provide information about movies, similar to IMDB. The application is built using Spring Boot and MongoDB for the backend, and React for the frontend.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a list of movies with detailed information.
- Search for movies by title, genre, or year.
- View movie details including synopsis, cast, and ratings.
- User authentication and authorization.
- Add, edit, and delete movie entries (admin functionality).

## Architecture

Movie Gold is built with the following technologies:

### Backend
- **Spring Boot**: A Java-based framework used to create the backend RESTful APIs.
- **MongoDB**: A NoSQL database used for storing movie data.

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests from the frontend to the backend.

## Installation

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/imksprateek/movie-gold-fullstack-web-application.git
    cd movie-gold/backend
    ```

2. **Set up MongoDB:**

    Ensure MongoDB is installed and running on your machine. You can download it from [MongoDB Download Center](https://www.mongodb.com/try/download/community).

3. **Configure application.properties:**

    Edit the `src/main/resources/application.properties` file to set your MongoDB URI and other configuration settings.

    ```properties
    spring.data.mongodb.uri=mongodb://localhost:27017/moviegold
    ```

4. **Build and run the backend:**

    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

    The backend server will start on `http://localhost:8080`.

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend development server:**

    ```bash
    npm start
    ```

    The frontend server will start on `http://localhost:3000`.

## Usage

1. **Access the application:**

    Open your browser and go to `http://localhost:3000` to access the Movie Gold application.

2. **Explore features:**

    - Browse the list of movies.
    - Use the search functionality to find specific movies.
    - Click on a movie to view detailed information.
    - If you are an admin, use the admin panel to manage movie entries.

## Contributing

We welcome contributions to Movie Gold. To contribute, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes and commit them:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Create a new Pull Request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

