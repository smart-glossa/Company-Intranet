	function home(){
		 var maindiv=document.createElement("DIV");
		maindiv.setAttribute("class","main");
			document.body.appendChild(maindiv);

	    var secondiv=document.createElement("DIV");
		 var img=document.createElement("img");
		 img.setAttribute("src","../images/1.png");
		 secondiv.appendChild(img);
		maindiv.appendChild(secondiv);


        var thirddiv=document.createElement("DIV");
           thirddiv.setAttribute("id","bose");
           maindiv.appendChild(thirddiv);

           var ul=document.createElement("UL");
           thirddiv.appendChild(ul);
           var list1=document.createElement("li");
    var listnode=document.createTextNode("Home");
    list1.appendChild(listnode);
    ul.appendChild(list1);

    var list1=document.createElement("li");
    var listnode=document.createTextNode("Pages");
    list1.appendChild(listnode);
    ul.appendChild(list1);

    var list1=document.createElement("li");
    var listnode=document.createTextNode("Activity System");
    list1.appendChild(listnode);
    ul.appendChild(list1);

    var list1=document.createElement("li");
    var listnode=document.createTextNode("People");
    list1.appendChild(listnode);
    ul.appendChild(list1);

     var list1=document.createElement("li");
    var listnode=document.createTextNode("Examples");
    list1.appendChild(listnode);
    ul.appendChild(list1);

    /*var list1=document.createElement("li");
    var listnode=document.createTextNode("BLOG");
    list1.appendChild(listnode);
    ul.appendChild(list1);

     var list1=document.createElement("li");
    var listnode=document.createTextNode("GET IN TOUCH");
    list1.appendChild(listnode);
    ul.appendChild(list1);
*/
     var div4=document.createElement("DIV");
    div4.setAttribute("Id","ss5");
    thirddiv.appendChild(div4);


     var text2=document.createElement("h1");
     var textline=document.createTextNode("Getting Started");
     text2.appendChild(textline);
     div4.appendChild(text2);

      var text3=document.createElement("p");
     var textline1=document.createTextNode("Thanks for trying Papyrs! Feel free to contact us if you have any questions. Some tips to get started");
     text3.appendChild(textline1);
     div4.appendChild(text3);
     

     var div5=document.createElement("DIV");
     div5.setAttribute("id","tamil");
     var ps=document.createElement("p")
     var text5=document.createTextNode("Tip: this Getting Started example is a page like any other in your Papyrs intranet. Go ahead and edit it by clicking on the pencil button (or click Page ▼ > Edit Page). ");
     ps.appendChild(text5);
     div5.appendChild(ps);
     div4.appendChild(div5);

     var ses=document.createElement("DIV");
     var text6=document.createElement("p");
     text6.setAttribute("class","run");
      var edit=document.createTextNode("Create Pages");
      text6.appendChild(edit);
      ses.appendChild(text6);
      div4.appendChild(ses);

var selvi1=document.createElement("DIV");
      var tex1=document.createElement("p");
      var edit2=document.createTextNode("Pages are the main ingredient of your Papyrs intranet site. Click the New Page button, and start adding information and widgets with simple drag&drop");
      tex1.setAttribute("class","ff");
      tex1.appendChild(edit2);
      selvi1.appendChild(tex1);
      div4.appendChild(selvi1);


      var mar6=document.createElement("DIV");
      var nm=document.createElement("p");
      nm.setAttribute("id","tt");
      var  fr=document.createTextNode("Invite Colleagues");
      nm.appendChild(fr);
      mar6.appendChild(nm);
      selvi1.appendChild(mar6);


 }
