CREATE DATABASE timeArrowContribution;
CREATE USER 'contribution'@'192.168.0.4' IDENTIFIED BY 'contribution';
GRANT ALL PRIVILEGES ON * . * TO 'contribution'@'192.168.0.4';
