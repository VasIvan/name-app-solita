CREATE DATABASE solita;

CREATE TABLE names ( u_id SERIAL NOT NULL PRIMARY KEY, name VARCHAR(30) NOT NULL, amount INTEGER NOT NULL);

ALTER TABLE names RENAME COLUMN u_name TO name;

INSERT INTO names (name, amount ) VALUES ('Ville', 24);

INSERT INTO names (name, amount) VALUES ('Ville', 24),('Anna', 6),('Antti', 22),('Sanna', 5),('Mikko', 19),('Minna', 5),('Timo', 18),('Satu', 5),('Tuomas', 16),('Tiina', 5),('Tero', 15),('Kati', 5),('Sami', 15),('Henna', 4),('Mika', 12),('Liisa', 4),('Janne', 12),('Paula', 4),('Petri', 11),('Suvi', 4);

DROP TABLE names;

SELECT * FROM names;