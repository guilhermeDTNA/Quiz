package dao;

/**
 *
 * @author guilherme
 */
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import settings.DBSettings;
import entity.Questions;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;

//Esta classe é a responsável pela efetivação das requisições no banco de dados
public class QuestionsDAO {

    //Método que exibe todo o conteúdo da tabela (id, pergunta e resposta)
    public List<Questions> showQuestions() throws Exception {

        //Monta a estrutura SQL e a prepara para execução
        String sql = "SELECT * FROM questions";
        List<Questions> list = new ArrayList<Questions>();
        PreparedStatement pst = DBSettings.getPreparedStatement(sql);
        try {
            //Executa o código SQL
            ResultSet res = pst.executeQuery();

            //Captura os resultados obtidos pela execução do código e os seta no objeto criado
            while (res.next()) {
                //Cria e altera os atributos do objeto de acordo com o retorno dos valores obtidos
                Questions question = new Questions();
                question.setId(res.getInt("id"));
                question.setQuestion(res.getString("question"));
                question.setAnswer(res.getString("answer"));

                //Adiciona o objeto em uma lista de questões, que conterá todas elas
                list.add(question);
            }
            //Embaralha as questões
            Collections.shuffle(list);
            //Exibe o erro no console
        } catch (SQLException ex) {
            Logger.getLogger(QuestionsDAO.class.getName()).log(Level.SEVERE, null, ex);

        }
        //Retorna a lista de questões
        return list;
    }

    //Método que pesquisa por uma determinada questão
    public Questions searchQuestion(int id) {

        String sql = "SELECT * FROM questions where id=?";
        Questions question = new Questions();
        PreparedStatement pst = DBSettings.getPreparedStatement(sql);
        try {
            //Insere na coluna 1, neste caso o id
            pst.setInt(1, id);
            ResultSet res = pst.executeQuery();

            if (res.next()) {
                question.setId(res.getInt(1));
                question.setQuestion(res.getString(2));
                question.setAnswer(res.getString(3));

            }
        } catch (SQLException ex) {
            //Exibe no console o erro
            Logger.getLogger(QuestionsDAO.class.getName()).log(Level.SEVERE, null, ex);

        }

        return question;
    }

    //Método que adiciona uma nova questão
    public int add(Questions question) throws Exception {
        
        //Variável que armazenará o id
        int generatedId = 0;
        Connection con = DBSettings.getConnection();
        String sql = "INSERT INTO questions(question, answer) VALUES(?, ?)";

        //Retornará também o id gerado pelo banco de dados
        PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        statement.setString(1, question.getQuestion());
        statement.setString(2, question.getAnswer());
        statement.execute();

        //Captura o id gerado
        ResultSet rs = statement.getGeneratedKeys();
        if (rs.next()) {
            generatedId = rs.getInt(1);
        }

        return generatedId;
    }

    //Método que edita uma questão
    public void edit(Questions question, int id) throws Exception {
        Connection con = DBSettings.getConnection();

        String sql = "UPDATE questions SET question = ?, answer = ? WHERE id = ?";

        PreparedStatement statement = con.prepareStatement(sql);
        statement.setString(1, question.getQuestion());
        statement.setString(2, question.getAnswer());
        statement.setInt(3, id);
        statement.execute();
    }

    //Método que remove uma questão
    public void delete(int id) throws Exception {
        Connection con = DBSettings.getConnection();
        String sql = "DELETE FROM questions WHERE id = ?";

        PreparedStatement statement = con.prepareStatement(sql);
        statement.setInt(1, id);
        statement.execute();
    }
}
