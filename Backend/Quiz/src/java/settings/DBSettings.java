package settings;

/**
 *
 * @author guilherme
 */
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.PreparedStatement;

//Classe que vai estabelecer conexão com o servidor SGBD
public class DBSettings {

    //Armazena a base de dados e o servidor
    private static final String dataBase = "jdbc:mysql://sql10.freesqldatabase.com:3306/sql10395968";

    //Utiliza o driver de conexão do MySQL
    private static final String driver = "com.mysql.jdbc.Driver";

    //Definem senha e usuário do banco
    private static final String user = "sql10395968";
    private static final String pass = "RKzVbNTmCv";

    private static Connection con = null;

    //Método que realiza a tentativa de conexão
    public static Connection getConnection() {
        if (con == null) {
            try {
                Class.forName(driver);
                con = DriverManager.getConnection(dataBase, user, pass);
            } catch (ClassNotFoundException ex) {
                System.out.println("Couldn't find the driver");
            } catch (SQLException ex) {
                System.out.println("Error to connect: " + ex.getMessage());
            }
        }
        //Retorna a conexão para a classe getPreparedStatement
        return con;
    }

    //Método que verifica e retorna para a classe QuestionsDAO a conexão
    public static PreparedStatement getPreparedStatement(String sql) {
        if (con == null) {
            con = getConnection();
        }
        try {
            return con.prepareStatement(sql);
        } catch (SQLException e) {
            System.out.println("Error in sql: " + e.getMessage());
        }
        return null;
    }
}
