#Este projeto ainda está em construção

Para executar o backend da aplicação é necessário ter um servidor de aplicação para a plataforma Java EE. Caso já possua algum, como o Tomcat, por exemplo, basta copiar o arquivo Quiz.war presente em: Backend/Quiz/dist/ para o diretório do servidor onde será efetuado o deploy. No caso do Tomcat, a pasta responsável por armazenar arquivos .war é a "webapps".

O servidor utilizado para executar o webservice foi o Glassfish, por isso recomendado sua utilização para tal. É importante verificar se não há outra aplicação na máquina utilizando as portas 8080, 8181 e 4848, caso já exista, você pode alterar as portas utilizadas pelo Glassfish substituindo o arquivo domain.xml, encontrado em: glassfish5/glassfish/domains/domain1/config, pelo arquivo domain.xml encontrado nesse repositório, na pasta Backend. 

Para instalar o Glasfish em um ambiente Linux e executar o backend, digite os códigos abaixo no terminal:

cd ~
wget -c http://download.oracle.com/glassfish/5.0/release/glassfish-5.0.zip 
unzip glassfish-5.0.zip
cp Backend/Quiz/dist/Quiz.war ~/glassfish5/glassfish/domains/domain1/autodeploy/ 
cd glassfish5/glassfish/bin/
./asadmin

Após isso, basta digitar o comando abaixo para iniciar o servidor: 
start-domain

Em relação à base de dados, a linguagem utilizada foi a SQL e o banco é acessado pela aplicação remotamente, logo não é necessário implementar o banco de dados localmente. Para consulta à estrutura utilizada, basta acessar o arquivo create-dabase_and_table.sql dentro da pasta Backend para criar o banco de dados e a tabela localmente.
