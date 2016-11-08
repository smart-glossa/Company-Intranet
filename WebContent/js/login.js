
	function web(){

		var maindiv=document.createElement("DIV");
		maindiv.setAttribute("class","main");
			document.body.appendChild(maindiv);

			var secondiv=document.createElement("DIV");
			 var img=document.createElement("img");
			 img.setAttribute("src","../images/1.png");
			 secondiv.appendChild(img);
			maindiv.appendChild(secondiv);

			var thirediv=document.createElement("DIV")
			thirediv.setAttribute("class","ss");
			maindiv.appendChild(thirediv);

			var div4=document.createElement("p");
			 var text=document.createTextNode("login");
			 div4.appendChild(text);
			 thirediv.appendChild(div4);

			 var table=document.createElement("table");
              thirediv.appendChild(table);

			 var input=document.createElement("INPUT");
			 input.setAttribute("type","text");
			 input.setAttribute("placeholder","username&EmailAddress");
			 thirediv.appendChild(input);

			 var input1=document.createElement("INPUT");
			 input1.setAttribute("type","text");
			 input1.setAttribute("placeholder","password");
			 input.setAttribute("class","dd");
			 thirediv.appendChild(input1);


			 var forget=document.createElement("p");
			 var anchor=document.createElement("a");
			 anchor.setAttribute("href","#");
			 var text1=document.createTextNode("forgetpassword?");
			  forget.setAttribute("class","tb");
			  anchor.appendChild(text1);
			  forget.appendChild(anchor);
			  thirediv.appendChild(forget);

			  var but=document.createElement("button");
			   but.setAttribute("class","gd");
             var butValue = document.createTextNode("login");
             but.appendChild(butValue);
             thirediv.appendChild(but);

	}
