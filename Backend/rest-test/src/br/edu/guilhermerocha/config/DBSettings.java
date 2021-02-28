package br.edu.guilhermerocha.config;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class DBSettings {
	public static Connection getConnection() throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://localhost:3306/quiz", "root", "teste123");
	}
}
