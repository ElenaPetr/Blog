 
    
      function strip(x,f,y) {                                       //х-высота комнаты, f-припуск на неровности пола и потолока, y-длина узора, 
      return x+f+((Math.ceil((x+f)/y))-((x+f)/y))*y;           
        }
		
     function Nsnip (z,x) {                                        //  z-длина рулона   x- strip                                                                        
   return Math.floor(z/x);                                        //количество полных полос в одном рулоне
        }

  function numberStrip(x,y,w,z,g,j) {                         //x,y,w,z- длины стен и напуск, j-ширина рулона 
     return Math.ceil((x+y+w+z+g)/j);                         //общее количество полос на все стены                                                               
  }

   function NumberRoll(x,y) {                               //x- общее количество полос на все стены, y- количество полных полос в одном рулоне
     return Math.ceil(x/y);                                    //количество рулонов
  }

  function remainderLength(a,b,c){            // длина остатка от 1 рулона, кроме последнего
   return a-(b*c);                            // (a)длина рулона-((b)количество полных полос(Nsnip)*(c) длину полных полос(srtip))
   }
  

  
  
  $('document').ready(function() {
  
$('#calk').on('click', function() {
  var h=parseInt($('#height').val()*1000);// приеобразуем данные в числа и в миллиметры 
  var a=parseInt($('#wall1').val()*1000);
  var b=parseInt($('#wall2').val()*1000);  
  var d=parseInt($('#wall3').val()*1000);
  var e=parseInt($('#wall4').val()*1000);
  var rl=parseInt($('#length').val()*1000);
  var rb=parseInt($('#width').val()*1000);
  var pl=parseInt($('#repeat').val()*1000);
  var c=parseInt(300);   //длина припуска на углы(прибавляем к общей длине комнаты)
  var ch=parseInt(100);     // длина припуска на неровный потолок и пол, прибавляем к высоте стены c=100(по 5 см вверх и вниз
  var w1=parseInt($('#winHeight').val()*1000);
  var w2=parseInt($('#winAbove').val()*1000);
  var w4=parseInt($('#HeightUnder').val()*1000);
  var w4=parseInt($('#winUnder').val()*1000);
  var d1=parseInt($('#doorHeight').val()*1000);
  var  d2 =parseInt($('#doorAbove').val()*1000); 
	  if (pl==0) {                                 //если длина рисунка равна 0-обои однотонные, принять длину рисунка равную 1 мм
		pl=1;}
  
                       var sl= strip(h,ch,pl);                         //длина полосы вместе с обрезаемой частью
                       var ll= Nsnip(rl,sl);							  //количество полных полос в одном рулоне
                       var nn=numberStrip(a,b,d,e,c,rb);      //общее количество полос на все стены

                       var s = NumberRoll(nn,ll);				  //количество рулонов
 
                      // var r=remainderLength(rl,ll,sl);                     // длина остатка от 1 рулона
					  

                       $('#arezult').html(s);

});
	$('#reset').on('click',function() { 
			   
			   
			   $('input').val(' ');
			   $('#arezult').html(" ");
		
			});
});