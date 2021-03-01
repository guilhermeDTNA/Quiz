/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import dao.QuestionDAO;
import entidade.Questions;
import javax.ws.rs.PathParam;

@Path("/questions")
public class QuizService {

    private QuestionDAO questionDAO;

    @PostConstruct
    private void init() {
        questionDAO = new QuestionDAO();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/list")
    public String showQuestions() throws Exception {
        List<Questions> list;
        QuestionDAO dao = new QuestionDAO();
        list = dao.showQuestions();

        Gson g = new Gson();
        return g.toJson(list);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/get/{id}")
    public String getQuestion(@PathParam("id") int id) {

        Questions question = new Questions();
        //question.setId(id);

        QuestionDAO dao = new QuestionDAO();

        try {
            question = dao.searchQuestion(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Gson g = new Gson();
        return g.toJson(question);
    }
    /*
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/add")
    @Produces(MediaType.TEXT_PLAIN)
    public String addNota(@PathParam("id", "question") int id, ) {
		String msg = "";

		//System.out.println(q.getTitulo());

		try {
			int idGerado = notaDAO.addNota(nota);

			msg = String.valueOf(idGerado);
		} catch (Exception e) {
			msg = "Erro ao add a nota!";
			e.printStackTrace();
		}

		return msg;
	}
    */
}
