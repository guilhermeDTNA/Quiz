package br.edu.guilhermerocha.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.edu.guilhermerocha.config.DBSettings;
import br.edu.guilhermerocha.entidade.Questions;

public class QuestionDAO {
	public List<Questions> showQuestions() throws Exception{
		List<Questions> list = new ArrayList<>();
		
		Connection con = DBSettings.getConnection();
		
		String sql = "SELECT * FROM questions";
		
		java.sql.PreparedStatement statement = con.prepareStatement(sql);
		ResultSet rs = statement.executeQuery();
		
		while(rs.next()) {
			Questions question = new Questions();
			question.setId(rs.getInt("ID"));
			question.setQuestion(rs.getString("QUESTION"));
			question.setAnswer(rs.getString("ANSWER"));
			
			list.add(question);
		}
		
		return list;
	}
}
