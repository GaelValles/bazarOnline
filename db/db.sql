
CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contra TEXT NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (nombre, email, contra) 
    VALUES ('Juan Perez', 'juan@gmail.com', 'juan123'),
    ('Karol Perez', 'karol@gmail.com', 'karol123');
    
SELECT * FROM users;