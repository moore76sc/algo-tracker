--
-- PostgreSQL database dump

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- -- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;


-- DELETE FROM users;
-- DROP TABLE users;

-- CREATE TABLE users (
-- 	"_id" serial NOT NULL,
-- 	"github_username" varchar,
-- 	"name" varchar,
-- 	"access_token" varchar,
-- 	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
-- );

DELETE FROM algos;
DROP TABLE algos;

CREATE TABLE algos (
	name varchar NOT NULL,
  userId serial,
	completed varchar,
	repeat varchar,
	timeComp varchar,
	PRIMARY KEY (name)
);

-- algoName: "Contains Duplicate"
-- completed: "yes"
-- difficulty: "easy"
-- repeat: "yes"
-- timeComp: "constant: O(1)"
-- userId: 6564875

-- INSERT INTO users (_id, github_username, name, access_token) VALUES (1, 'username', 'foo bar', 'foo');
