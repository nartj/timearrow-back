CREATE DATABASE timeArrowTimeline;
CREATE USER 'timeline'@'192.168.0.7' IDENTIFIED BY 'timeline';
GRANT ALL PRIVILEGES ON * . * TO 'timeline'@'192.168.0.7';
