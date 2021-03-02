package rest;

import com.google.gson.Gson;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.DELETE;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.PathParam;

import dao.QuestionsDAO;
import entity.Questions;

//Classe resopnsável por criar as rotas por onde as requisições serão feitas, não tem conexão direta à base de dados
//@CORS({"/Quiz/*"})
@Path("/questions")
public class QuizService {

    CORSFilter cors = new CORSFilter();
    
    //Private é importante para manter o encapsulamento
    private QuestionsDAO questionDAO;

    //Instancia o objeto logo após iniciar
    @PostConstruct
    private void init() {
        questionDAO = new QuestionsDAO();
    }

    //Rota que vai chamar o serviço de listar todas as questões, retorna um JSON
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/list")
    public String showQuestions() throws Exception {
        List<Questions> list;
        list = questionDAO.showQuestions();

        //Classe que transforma um objeto em JSON
        Gson g = new Gson();
        return g.toJson(list);
    }

    //Rota que vai chamar o serviço de listar uma determinada questão, retorna um JSON
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/get/{id}")
    public String getQuestion(@PathParam("id") int id) {

        Questions question = new Questions();

        try {
            question = questionDAO.searchQuestion(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Gson g = new Gson();
        return g.toJson(question);
    }

    //Rota que vai chamar o serviço de adicionar uma nova questão, recebe um JSON e gera um texto simples
    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String addQuestion(Questions question) {
        String msg = "";

        try {
            questionDAO.add(question);
            msg = "Question successfully Inserted!";
        } catch (Exception e) {
            msg = "Couldn't add the question...";
            e.printStackTrace();
        }
        //Já que não exibe algo, pode ser exibida uma mensagem de sucesso ou não
        return msg;
    }

    //Rota que vai chamar o serviço de editar uma questão, recebe um JSON
    @PUT
    @Path("/edit/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String editQuestion(Questions question, @PathParam("id") int id) {
        String msg = "";

        try {
            questionDAO.edit(question, id);
            msg = "Question successfully edited!";
        } catch (Exception e) {
            msg = "Couldn' edit question...";
            e.printStackTrace();
        }

        return msg;
    }

    //Rota que vai chamar o serviço de remover uma questão - Consumo APPLICATION_JSON é opcional
    @DELETE
    @Path("/delete/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String deleteQuestion(@PathParam("id") int id) {
        String msg = "";

        try {
            questionDAO.delete(id);
            msg = "Question successfully deleted!";
        } catch (Exception e) {
            msg = "Couldn't delete question...";
        }

        return msg;
    }
}
