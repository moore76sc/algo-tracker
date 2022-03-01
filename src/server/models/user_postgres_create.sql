--
-- PostgreSQL database dump

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


-- DELETE FROM public.users;
-- DROP TABLE public.users;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"github_secret" varchar NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

-- INSERT INTO.users VALUES (id, github_secret);
INSERT INTO public.users VALUES (1, '79d8959e07a89ddda9e98f39ed8d2f3df3669e67');

-- DROP TABLE public.users;
-- CREATE TABLE public.users (
-- 	"_id" serial NOT NULL,
-- 	"username" varchar NOT NULL,
-- 	"password" varchar NOT NULL,
-- 	"session_id" varchar,
--   "cart" integer[],
-- 	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- INSERT INTO public.users VALUES (1, 'admin', 'password', 3, '{0, 9}');
