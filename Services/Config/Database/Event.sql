CREATE DATABASE timeArrowEvent;
CREATE USER 'event'@'192.168.0.6' IDENTIFIED BY 'event';
GRANT ALL PRIVILEGES ON * . * TO 'event'@'192.168.0.6';
