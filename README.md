<h3>Este projeto tem por objetivo a construção de um webservice, integrando servidor e cliente, responsável por armazenar uma lista de perguntas e respostas e retorná-las para o usuário em formato de um quiz</h3>

<p>O backend foi desenvolvido na linguagem Java e o frontend na linguagem JavaScript, com auxílio dos framaworks Jersey e React JS, respectivamente. Em relação à base de dados, a linguagem utilizada foi a SQL e o banco é acessado pela aplicação remotamente, logo não é necessário implementar o banco de dados localmente. Para consulta à estrutura utilizada, basta acessar o arquivo create-dabase_and_table.sql dentro da pasta Backend para criar o banco de dados e a tabela localmente.</p>

<p>O código-fonte do webservice está localizado nos arquivos do diretório: Backend/Quiz/src/java.</p>

<p>Para executar o backend da aplicação é necessário ter um servidor de aplicação para a plataforma Java EE. Caso já possua algum, como o Tomcat, por exemplo, basta copiar o arquivo Quiz.war presente em: Backend/Quiz/dist/ para o diretório do servidor onde será efetuado o deploy. No caso do Tomcat, a pasta responsável por armazenar arquivos .war é a "webapps".</p>

<p>O servidor utilizado para executar o webservice foi o Glassfish, por isso é recomendada a sua utilização para este projeto. É importante verificar se não há outra aplicação na máquina utilizando as portas 8080, 8181 e 4848, caso já exista, você pode alterar as portas utilizadas pelo Glassfish substituindo o arquivo domain.xml, encontrado em: glassfish5/glassfish/domains/domain1/config, pelo arquivo domain.xml encontrado nesse repositório, na pasta Backend. No caso de haver a substituição, é necessário alterar o link da requisição AJAX no frontend, mais especificamente no arquivo Questions.js presente em: Frontend/quiz/src/pages/questions/, substituindo "localhost:8080" por "localhost:9090".</p>

<p><b>Passo 1: </b>Para instalar o Glassfish em um ambiente Linux e executar o backend, digite os códigos abaixo no terminal:</p>

```console
$ cd ~ 
$ wget -c http://download.oracle.com/glassfish/5.0/release/glassfish-5.0.zip 
$ unzip glassfish-5.0.zip 
$ cp Quiz-main/Backend/Quiz/dist/Quiz.war ~/glassfish5/glassfish/domains/domain1/autodeploy/ 
$ cd glassfish5/glassfish/bin/ 
$ ./asadmin 
```

<p>Para instalar o Glassfish e executar a aplicação backend em ambiente Windows, basta fazer o download do servidor disponível <a href="http://download.oracle.com/glassfish/5.0/release/glassfish-5.0.zip">neste link</a>, extrair o arquivo baixado e executar o arquivo asadmin, localizado na pasta "bin" da instalação do Glassfish. Após isso, copie o arquivo Quiz.war localizado no diretório Quiz\Backend\Quiz\dist deste repositório para o diretório glassfish5\glassfish\domains\domain1\autodeploy</p>

<p><b>Passo 2: </b>Para ambos ambientes, uma vez que o terminal foi aberto após a execução dos comandos anteriores, o comando necessário para ligar o servidor é:</p> 

```console
asadmin> start-domain
```
<p>Para executar o frontend é necessário ter o npm instalado em sua máquina, para isso, basta executar o comando abaixo para sistema operacional Linux: </p>

```console
$ sudo apt-get update
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y npm
$ sudo npm install -g n
$ sudo n stable
```

<p>Em ambiente Windows, basta ir na <a href="www.nodejs.org/en">página oficial do NodeJS</a>, fazer o download do Node e executar o instalador, seguindo as instruções de instalação.</p>

<p><b>Passo 3: </b>Caso não seja mostrada alguma mensagem de erro no terminal, no caso do Linux, e não falhe a instalação pelo instalador, no caso do Windows, basta navegar até o diretorório Frontend/quiz/ e executar o frontend através dos comandos abaixo: </p>

```console
$ npm install #(Esse comando só precisa ser executado na primeira vez em que o projeto for executado)
$ npm start
```

<p>Feito isso, basta acessar o endereço <a href="http://localhost:3000">http://localhost:3000</a> no navegador para verificar a execução do frontend. Caso queira executar a aplicação em outro dispositivo conectado na mesma rede que o host do webservice, inclusive dispositivo móvel, visto que o frontend é responsivo, basta trocar 'localhost' pelo IP do dispositivo na rede. Exemplo: 192.168.1.8:3000.

<p>Caso algum erro seja exibido no navegador verifique se o backend está sendo executado acessando o endereço: <a href="http://localhost:8080/Quiz/questions/list">http://localhost:8080/Quiz/questions/list</a>. Se não for exibida a lista de questões em formato JSON, será preciso reiniciar o servidor glassfish retornando ao passo 2 e executando:</p>

```console
asadmin> restart-domain
``` 

<p>Outra informação importante é que pelo webservice criado é possível cadastrar, listar, consultar individualmente, alterar e remover registros do banco de dados utilizando os métodos POST, GET, PUT e DELETE presentes em API's Restful.</p>