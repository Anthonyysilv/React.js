drop database demo;
create database demo;
use demo;
CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL
);
INSERT INTO Users (Name, Email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO Users (Name, Email) VALUES ('Jane Smith', 'jane.smith@example.com');
INSERT INTO Users (Name, Email) VALUES ('Alice Johnson', 'alice.johnson@example.com');