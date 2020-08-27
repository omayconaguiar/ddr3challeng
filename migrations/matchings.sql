CREATE TABLE matchings (
    id	SERIAL NOT NULL PRIMARY KEY,
    gravacao_old INTEGER NOT NULL,
    tabulacao_old INTEGER NOT NULL    
);

ALTER TABLE matchings ADD CONSTRAINT gravacao_old_fk FOREIGN KEY(gravacao_old) REFERENCES records(id);
ALTER TABLE matchings ADD CONSTRAINT tabulacao_old_fk FOREIGN KEY(tabulacao_old) REFERENCES tabulation(id);