#!/bin/bash
echo " =========================================  "
echo "            Iniciando Migracao"
echo " =========================================  "


for migration in $(ls v*.sql | sort); do
	if [[ $migration > $version && $migration == *.sql ]]; then
		echo
    	echo " ==========  Executando migracao: $migration ==========  "
		psql -h localhost -U postgres -d ddr3 < $migration
	fi
done

echo " =========================================  "
echo "              Fim na Migracao"
echo " =========================================  "
