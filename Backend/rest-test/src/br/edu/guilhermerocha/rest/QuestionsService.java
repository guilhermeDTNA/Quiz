package br.edu.guilhermerocha.rest;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.edu.guilhermerocha.dao.QuestionDAO;
import br.edu.guilhermerocha.entidade.Questions;

@Path("/questions")
public class QuestionsService {

	private QuestionDAO questionDAO;
	
	@PostConstruct
	private void init() {
		questionDAO = new QuestionDAO();
	}
	
	@GET
	@Path("/list")
	@Produces (MediaType.APPLICATION_JSON)
	public List<Questions> showQuestions(){
		List<Questions> list = null;
		
		try {
			list = questionDAO.showQuestions();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
}
