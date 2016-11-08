package company;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONException;
import org.json.JSONObject;


/**
 * Servlet implementation class regiaterServlet
 */
@WebServlet("/regiaterServlet")
public class regiaterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public regiaterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String operation = request.getParameter("operation");
		registerClass RegObject = new registerClass();
		if (operation.equals("add")) {
			String Emailaddress = request.getParameter("Emailaddress");
			String Password = request.getParameter("Password");
			String Comment = request.getParameter("Comment");
			JSONObject result;
			try {
				result = RegObject.Register(Emailaddress, Password, Comment);
				response.getWriter().print(result);
				
			} catch (JSONException e) {

				e.printStackTrace();
				
			}
				
			}
		if (operation.equals("login")) {
			JSONObject result = new JSONObject();
			String Emailaddress = request.getParameter("Emailaddress");
			String Password = request.getParameter("Password");
		
			try{
				result=RegObject.login(Emailaddress, Password);
				response.getWriter().print("result");
			}
			catch
				(JSONException e){
				e.printStackTrace();
			}
		}
		}
		
		
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
