DROP DATABASE IF EXISTS feh_app;

DROP USER IF EXISTS feh_app_admin;

CREATE USER feh_app_admin WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE feh_app WITH OWNER feh_app_admin;