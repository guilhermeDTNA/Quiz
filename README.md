<h3>Este projeto tem por objetivo a construção de um webservice, integrando servidor e cliente, responsável por armazenar uma lista de perguntas e respostas e retorná-las para o usuário em formato de um quiz</h3>


<p>O backend foi desenvolvido na linguagem Java e o frontend na linguagem JavaScript, com auxílio dos framaworks Jersey e React JS, respectivamente. Em relação à base de dados, a linguagem utilizada foi a SQL e o banco é acessado pela aplicação remotamente, logo não é necessário implementar o banco de dados localmente. Para consulta à estrutura utilizada, basta acessar o arquivo create-dabase_and_table.sql dentro da pasta Backend para criar o banco de dados e a tabela localmente.</p>

<p>O código-fonte do webservice está localizado nos arquivos do diretório: Quiz/Backend/Quiz/src/java.</p>

<p>Para executar o backend da aplicação é necessário ter um servidor de aplicação para a plataforma Java EE. Caso já possua algum, como o Tomcat, por exemplo, basta copiar o arquivo Quiz.war presente em: Backend/Quiz/dist/ para o diretório do servidor onde será efetuado o deploy. No caso do Tomcat, a pasta responsável por armazenar arquivos .war é a "webapps".</p>

<p>O servidor utilizado para executar o webservice foi o Glassfish, por isso recomendado sua utilização para tal. É importante verificar se não há outra aplicação na máquina utilizando as portas 8080, 8181 e 4848, caso já exista, você pode alterar as portas utilizadas pelo Glassfish substituindo o arquivo domain.xml, encontrado em: glassfish5/glassfish/domains/domain1/config, pelo arquivo domain.xml encontrado nesse repositório, na pasta Backend. No caso de haver a substituição, é necessário alterar o link da requisição AJAX no frontend, mais especificamente no arquivo Questions.js presente em: Frontend/quiz/src/pages/questions/, substituindo "localhost:8080" por "localhost:9090".</p>


<p><b>Passo 1: </b>Para instalar o Glassfish em um ambiente Linux e executar o backend, digite os códigos abaixo no terminal:</p>

<p>
cd ~ <br />
wget -c http://download.oracle.com/glassfish/5.0/release/glassfish-5.0.zip <br />
unzip glassfish-5.0.zip <br />
cp Quiz/Backend/Quiz/dist/Quiz.war ~/glassfish5/glassfish/domains/domain1/autodeploy/ <br />
cd glassfish5/glassfish/bin/ <br />
./asadmin </p>


<p>Para instalar o Glassfish e executar a aplicação backend em ambiente Windows, basta fazer o download do servidor disponível nesse link: http://download.oracle.com/glassfish/5.0/release/glassfish-5.0.zip, extrair o arquivo baixado e executar o arquivo asadmin, localizado na pasta bin da instalação do Glassfish. Após isso, copie o arquivo Quiz.war localizado no diretório Quiz\Backend\Quiz\dist deste repositório para o diretório glassfish5\glassfish\domains\domain1\autodeploy</p>

<p><b>Passo 2: </b>Para ambos ambientes, uma vez que o terminal foi aberto após a execução dos comandos anteriores, o comando necessário para ligar o servidor é:</p> 

<p>start-domain</p>

<p><b>Passo 3: </b>Caso não seja mostrada alguma mensagem de erro no terminal, basta navegar até o diretorório Frontend/quiz/ e executar o frontend através dos comandos abaixo: </p>

<p>npm install (Esse comando só precisa ser executado na primeira vez em que o projeto for executado)<br />
npm start
</p>

<p>Feito isso, basta acessar o endereço http://localhost:3000 no navegador para verificar a execução do frontend. Caso algum erro seja exibido no navegador verifique se o backend está sendo executado acessando o endereço: http://localhost:8080/Quiz/questions/list. Caso não seja exibida a lista de questões em formato JSON, será preciso reiniciar o servidor glassfish retornando ao passo 2 e executando:</p>

<p>restart-domain</p> 