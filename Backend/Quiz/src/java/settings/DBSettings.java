/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package settings;

/**
 *
 * @author guilherme
 */
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class DBSettings {

    private static final String dataBase = "jdbc:mysql://sql10.freesqldatabase.com:3306/sql10395968";

    private static final String driver = "com.mysql.jdbc.Driver";

    private static final String user = "sql10395968";
    private static final String pass = "RKzVbNTmCv";

    private static Connection con = null;

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
        return con;
    }

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
