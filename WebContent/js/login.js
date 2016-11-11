
	function web(){

		var maindiv=document.createElement("DIV");
		maindiv.setAttribute("class","main");
			document.body.appendChild(maindiv);

			var secondiv=document.createElement("DIV");
			 var img=document.createElement("img");
			 img.setAttribute("src","../images/16.png");
			 secondiv.appendChild(img);
			maindiv.appendChild(secondiv);

			var thirediv=document.createElement("DIV")
			thirediv.setAttribute("class","ss");
			maindiv.appendChild(thirediv);

			var div4=document.createElement("p");
			div4.setAttribute("class","para");
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
			 input1.setAttribute("type","password");
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
			   but.setAttribute("id","reg");
			   but.setAttribute("class","gd");
             var butValue = document.createTextNode("login");
             but.appendChild(butValue);
             thirediv.appendChild(but);

   var div9=document.createElement("DIV");
   var p12=document.createElement("p");
   p12.setAttribute("class","rd");
   var ptext=document.createTextNode("Proudly powered by Papyrs");
   p12.appendChild(ptext);
   div9.appendChild(p12);
   maindiv.appendChild(div9);
   
	}
