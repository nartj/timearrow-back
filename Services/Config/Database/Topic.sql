CREATE DATABASE timeArrowTopic;
CREATE USER 'topic'@'192.168.0.8' IDENTIFIED BY 'topic';
GRANT ALL PRIVILEGES ON * . * TO 'topic'@'192.168.0.8';
