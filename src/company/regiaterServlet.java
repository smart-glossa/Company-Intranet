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
       
    /**
     * @see HttpServlet#HttpServlet()
     */
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
			String password = request.getParameter("password");
			String Comment = request.getParameter("Coment");
			JSONObject result;
			try {
				result = RegObject.Register(Emailaddress, password, Comment);
				response.getWriter().print(result);
				
			} catch (JSONException e) {

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
