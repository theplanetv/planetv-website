CREATE DATABASE planetv;

\c planetv;

-- Create tables
\i /docker-entrypoint-initdb.d/src/data_tables.sql