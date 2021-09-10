create TABLE users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

create TABLE posts(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    imageURL VARCHAR(255),
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users (id)
);