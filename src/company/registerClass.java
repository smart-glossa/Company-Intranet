package company;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.json.JSONException;
import org.json.JSONObject;

public class registerClass {

	public JSONObject Register( String Emailaddress, String pass, String Comments) throws JSONException {
        JSONObject result = new JSONObject();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/company", "root", "root");
            Statement statement = connection.createStatement();
            String query = "insert into registers (EmailAddress,Pass,comments) values (" + Emailaddress +"', '" + pass + 
            		"','" + Comments +"')"; 
            statement.execute(query);
            result.put("Status", "1");
            
        } catch (Exception e1) {
            JSONObject error = new JSONObject();
            error.put("Status", "0");
            error .put("Message", e1.getMessage());
        }
        return result;
    }
	public JSONObject login( String Emailaddress, String pass) throws JSONException {
        JSONObject result = new JSONObject();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/company", "root", "root");
            Statement statement = connection.createStatement();
            String query = "insert into registers (EmailAddress,pass) values (" + Emailaddress +"', '" + pass +"')"; 
            statement.execute(query);
            result.put("Status", "1");
            
        } catch (Exception e1) {
            JSONObject error = new JSONObject();
            error.put("Status", "0");
            error .put("Message", e1.getMessage());
        }
        return result;
    }
}
