CREATE TABLE tabulation (
id	SERIAL NOT NULL PRIMARY KEY,
nome_cliente TEXT NOT NULL,
protocolo TEXT NOT NULL,
data_atendimento TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
numero_binado TEXT NOT NULL,
numero_acesso TEXT NOT NULL
)