/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

/**
 *
 * @author guilherme
 */
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import settings.DBSettings;
import entidade.Questions;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class QuestionDAO {

    public List<Questions> showQuestions() throws Exception {
        String sql = "SELECT * FROM questions";
        List<Questions> list = new ArrayList<Questions>();

        PreparedStatement pst = DBSettings.getPreparedStatement(sql);
        try {

            ResultSet res = pst.executeQuery();
            while (res.next()) {
                Questions question = new Questions();
                question.setQuestion(res.getString("question"));
                question.setAnswer(res.getString("answer"));

                list.add(question);
            }

        } catch (SQLException ex) {
            Logger.getLogger(QuestionDAO.class.getName()).log(Level.SEVERE, null, ex);

        }

        return list;
    }

    public Questions searchQuestion(int id) {
        String sql = "SELECT * FROM questions where id=?";
        Questions question = new Questions();

        PreparedStatement pst = DBSettings.getPreparedStatement(sql);
        try {

            pst.setInt(1, id);
            ResultSet res = pst.executeQuery();

            if (res.next()) {

                question.setId(res.getInt(1));
                question.setQuestion(res.getString(2));
                question.setAnswer(res.getString(3));

            }

        } catch (SQLException ex) {
            Logger.getLogger(QuestionDAO.class.getName()).log(Level.SEVERE, null, ex);

        }

        return question;
    }

    //Testando
    public boolean add(Questions question) {
        String sql = "INSERT INTO questions(question, answer) VALUES(?,?)";
        Boolean isSuccess = false;
        PreparedStatement pst = DBSettings.getPreparedStatement(sql);
        try {
            pst.setString(1, question.getQuestion());
            pst.setString(2, question.getAnswer());

            if (pst.executeUpdate() > 0) {
                isSuccess = true;
            }

        } catch (SQLException ex) {
            Logger.getLogger(QuestionDAO.class.getName()).log(Level.SEVERE, null, ex);
            isSuccess = false;
        }

        return isSuccess;

    }
 /*
    public int addQuestion(String question, String answer) throws Exception {
        int idGerado = 0;
        
        Questions question = new Questions();

        String sql = "INSERT INTO questions(question, answer) VALUES(?, ?)";
        PreparedStatement pst = DBSettings.getPreparedStatement(sql);
        
        try{
            //pst.setString(2, question);
            //pst.setString(3, answer);
            ResultSet res = pst.executeQuery();
            
        } catch(Exception e){
            
        }
        
        statement.setString(1, nota.getTitulo());
        statement.setString(2, nota.getDescricao());
        statement.execute();

        ResultSet rs = statement.getGeneratedKeys();
        if (rs.next()) {
            idGerado = rs.getInt(1);
        }

        return idGerado;
    }

   
    public boolean atualizar(Question question)
    {
        String sql = "UPDATE question set question=?, answer=?";
        Boolean retorno = false;
        PreparedStatement pst = Conexao.getPreparedStatement(sql);
        try {
          
            pst.setString(1, question.getQuestion());
            pst.setString(2, question.getAnswer());
            if(pst.executeUpdate()>0)
            {
                retorno = true;
            }
                
            
            
        } catch (SQLException ex) {
            Logger.getLogger(QuestionDAO.class.getName()).log(Level.SEVERE, null, ex);
            retorno = false;
        }
        
        return retorno;
    
    }
    
    public boolean excluir(Question question)
    {
        String sql = "DELETE FROM question where id=?";
        Boolean retorno = false;
        PreparedStatement pst = Conexao.getPreparedStatement(sql);
        try {
          
           
            pst.setString(1, question.getId());
            if(pst.executeUpdate()>0)
            {
                retorno = true;
            }
                
            
            
        } catch (SQLException ex) {
            Logger.getLogger(QuestionDAO.class.getName()).log(Level.SEVERE, null, ex);
            retorno = false;
        }
        
        return retorno;
    
    }
     */
}
