   var no = 30; // количество снежинок
   var speed = 6; // скорость снежинок

   var snowflake = new Array(1);

   snowflake[0] = "/img/sneg1.gif";

   var ns4up = (document.layers) ? 1 : 0;
   var ie4up = (document.all) ? 1 : 0;
   var dx, xp, yp;
   var am, stx, sty;
   var i, doc_width = 800, doc_height = 600;
   if (ns4up) {
   doc_width = self.innerWidth;
   doc_height = self.innerHeight;
   } else if (ie4up) {
   doc_width = document.body.clientWidth;
   doc_height = document.body.clientHeight;
   }
   dx = new Array();
   xp = new Array();
   yp = new Array();
   am = new Array();
   stx = new Array();
   sty = new Array();
   alp = new Array();
   rad = new Array();
   for (i = 0; i < no; ++ i) {
   dx[i] = 0;
   xp[i] = Math.random()*(doc_width-50);
   yp[i] = Math.random()*doc_height;
   am[i] = Math.random()*50;
   stx[i] = 0.02 + Math.random()/10;
   sty[i] = 0.7 + Math.random();
   if (ns4up) {
   if (i == 0) {
   document.write("<layer name=\"dot"+ i +"\" left=\"15\" ");
   document.write("top=\"15\" visibility=\"show\"><img src=\"");
   document.write(snowflake[Math.floor(1 * Math.random())] + "\" border=\"0\"></layer>");
   } else {
   document.write("<layer name=\"dot"+ i +"\" left=\"15\" ");
   document.write("top=\"15\" visibility=\"show\"><img src=\"");
   document.write(snowflake[Math.floor(1 * Math.random())] + "\" border=\"0\"></layer>");
   }
   } else if (ie4up) {
   if (i == 0) {
   document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
   document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
   document.write("visible; TOP: 15px; LEFT: 15px;\"><img src=\"");
   document.write(snowflake[Math.floor(1 * Math.random())] + "\" border=\"0\"></div>");
   } else {
   document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
   document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
   document.write("visible; TOP: 15px; LEFT: 15px;\"><img src=\"");
   document.write(snowflake[Math.floor(1 * Math.random())] + "\" border=\"0\"></div>");
   }
   }
   }
   function snowNS() {
   for (i = 0; i < no; ++ i) {
   yp[i] += sty[i];
   if (yp[i] > doc_height-50) {
   xp[i] = Math.random()*(doc_width-am[i]-30);
   yp[i] = 0;
   stx[i] = 0.02 + Math.random()/10;
   sty[i] = 0.7 + Math.random();
   am[i] = Math.random()*50;
   dx[i] = 0;
   doc_width = self.innerWidth;
   doc_height = self.innerHeight;
   }
   dx[i] += stx[i];
   document.layers["dot"+i].top = yp[i] + am[i]*Math.sin(dx[i]);
   document.layers["dot"+i].left = xp[i] + am[i]*Math.cos(dx[i]);
   }
   setTimeout("snowNS()", speed);
   }
   function snowIE() {
   for (i = 0; i < no; ++ i) {
   yp[i] += sty[i];
   if (yp[i] > doc_height-50) {
   xp[i] = Math.random()*(doc_width-am[i]-30);
   yp[i] = 0;
   stx[i] = 0.02 + Math.random()/10;
   sty[i] = 0.7 + Math.random();
   am[i] = Math.random()*50;
   dx[i] = 0;
   doc_width = document.body.clientWidth;
   doc_height = document.body.clientHeight;
   }
   dx[i] += stx[i];
   document.all["dot"+i].style.pixelTop = yp[i] + am[i]*Math.sin(dx[i]);
   document.all["dot"+i].style.pixelLeft = xp[i] + am[i]*Math.cos(dx[i]);
   }
   setTimeout("snowIE()", speed);
   }
   if (ns4up) {
   snowNS();
   } else if (ie4up) {
   snowIE();
   }