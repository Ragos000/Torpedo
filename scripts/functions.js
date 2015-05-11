var shipcnt=0,counter=0;
				var horizcounter=0;
				var lasthit =0;
				var toleft=0;
				var switcher=0;
//--
			$(document).ready(function(){
				var sor=15,oszlop=sor*2;

				var i,j,l,k=0,k2=0,h=100/sor,w=100/oszlop;
				var ship1w=2+Math.floor((Math.random()*5)+1),ship1h=2+Math.floor((Math.random()*5)+1),ship2w=1+Math.floor((Math.random()*3)+1),ship3h=2+Math.floor((Math.random()*5)+1),shipcount1=0,shipcount2=0,counter=0;	//Math.floor((Math.random()*5)+1);
				
				var ship1sti=shipStarti(sor,ship1h);			
				var ship1stj=shipStartj(oszlop,ship1w);	
				
				var ship2sti=shipStarti(sor,ship2w);			
				var ship2stj=shipStartj(oszlop,ship2w);		
				
				var ship3sti=shipStarti(sor,ship3h);
				var ship3stj=shipStartj(oszlop,1);
				var plus=Math.floor(sor/2);
				//--
				setTimeout(function() {
				var ship1sti2=shipStarti(sor,ship1h);	
				var ship1stj2=shipStartj(oszlop,ship1w);	
				
				var ship2sti2=shipStarti(sor,ship2w);			
				var ship2stj2=shipStartj(oszlop,ship2w);	
				
				var ship3sti2=shipStarti(sor,ship3h);
				var ship3stj2=shipStartj(oszlop,1);
				
				var koordin=new Array();
				$("body").css("overflow", "hidden");
					
				for(i=0;i<100/h;i++){
					for(j=0;j<100/w;j++){
					koordin[i]=new Array();
						if(ship1(i,j,ship1sti,ship1stj,ship1w,ship1h) || ship2(i,j,ship2sti,ship2sti,ship2w) || ship3(i,j,ship3sti,ship3stj,ship3h))
						{
							shipGen(i,j,w,h,k2);
							shipcount1++;
						}else if(ship1(i,j,(ship1sti2+plus),ship1stj2,ship1w,ship1h) || ship2(i,j,(ship2sti2+plus),ship2stj2,ship2w) || ship3(i,j,(ship3sti2+plus),ship3stj2,ship3h)){
							shipGen2(i,j,w,h,k2);
						}
						else
						if(i== Math.floor(sor/2) || i==0 || i==sor-1 || j==0 || j==oszlop-1){
								borderGen(i,j,w,h,k2);
						}else{
							seaGen(i,j,w,h,k2);
						}//."+i+"."+j+"
						k2++;	
					} 
				}
				$(".gridb").click(function(){
					if($(this).css("background-color")!="rgb(0, 0, 139)"){
					//alert($(this).css("background-color"));
					counter++;
					console.log(counter);
						$(this).css("background-color","darkblue");
						$("#blocker").css("top","0");
						$("#blocker").css("height","100%");
						setTimeout(function() {
							AI(sor);

						}, 500);

					}
					})
					
				$(".ship").click(function(){
				if($(this).css("background-color")!="rgb(139, 0, 0)"){
					$(this).css("background-color","darkred");
					shipcount2++;
					if(shipcount1==shipcount2){
						alert("You won!");
					}
				}
				})
					
				},429);	
			});
//--

function ship1(i,j,startI,startJ,width=3,height=4) {
	if(i==startI && (j-startJ)<width &&(j-startJ)>=0 || j==startJ+width-1 && (i-startI)<height-1 && (i-startI)>=0) 
	{
		return 1;
	}else return 0;
	
}

function ship2(i,j,startI,startJ,width=3) {
	if(i==startI && (j-startJ)<width &&(j-startJ)>=0 || j>=startJ && j<=startJ+width-1 && (i-startI)<width && (i-startI)>=0 ) 
	{
		return 1;
	}else return 0;
	
}

function ship3(i,j,startI,startJ,height){
	if(j==startJ && (i-startI)>=0 && (i-startI)<height-1){
		return 1;
	}else return 0;
}

function shipStarti(sor,shiph){
	return Math.floor((Math.random()*(Math.floor(sor/2)-shiph))+1);
}

function shipStartj(oszlop,shipw){
	return Math.floor((Math.random()*(oszlop-1-shipw))+1);
}
function getFrom(sor){
var oszlop=sor*2;
	return oszlop*Math.floor((sor+1)/2)-1;
}

function shipGen(i,j,w,h,k2){
	$("body").append("<div id='akad"+k2+"' style=' display:block; position:absolute; height: "+h+"%; width:"+w+"%; left:"+(j*w)+"%; top:"+(i*h)+"%; border:solid black 0.5px; background-color:blue; cursor:pointer; z-index:0;' class='ship' ></div>");
}

function shipGen2(i,j,w,h,k2){
	$("body").append("<div id='akad"+k2+"' style=' display:block; position:absolute; height: "+h+"%; width:"+w+"%; left:"+(j*w)+"%; top:"+(i*h)+"%; border:solid black 0.5px; background-color:grey; cursor:pointer; z-index:0;' class='ship2' ></div>");
}

function borderGen(i,j,w,h,k2){
	$("body").append("<div id='akad"+k2+"' style=' display:block; position:absolute; height: "+h+"%; width:"+w+"%; left:"+(j*w)+"%; top:"+(i*h)+"%; background-color:black; cursor:pointer; z-index:0;' class='gridborder' ></div>");
}

function seaGen(i,j,w,h,k2){
	$("body").append("<div id='akad"+k2+"' style=' display:block; position:absolute; height: "+h+"%; width:"+w+"%; left:"+(j*w)+"%; top:"+(i*h)+"%; border:solid black 0.5px; background-color:blue; cursor:pointer; z-index:0;' class='gridb' ></div>");
}

function getTo(sor){
	var oszlop=sor*2;
	return oszlop*Math.floor(sor/2);
}

function AI(sor,rand3=-1){
	//$("#blocker").html(horizcounter+" "+toleft);


	if(switcher==1)
	{
		rand=lasthit-(horizcounter+1);

		rand3=0;
		switcher=0;
		AI(sor,rand);
	}
	if(rand3<0){//oszlop*(sor+(sor+1)) (22*6)-1 oszlop*sor (22*5)
		var rand=(getFrom(sor))+Math.floor((Math.random()*getTo(sor))+1);}else if(toleft==1){rand=--rand3;}else{rand=++rand3;}
		//$("#blocker").html(rand);
		if($("#akad"+rand+"").css("background-color")=="rgb(0, 0, 139)" || $("#akad"+rand+"").css("background-color")=="rgb(139, 0, 0)" || $("#akad"+rand+"").css("background-color")=="rgb(0, 0, 0)"){
			
			AI(sor);
			
		}else if($("#akad"+rand+"").attr('class')=="ship2"){

			horizcounter++;
			$("#akad"+rand+"").css("background-color","darkred");
			shipcnt++;
			//if(shipcnt==shipcount) alert("Vesztettel");

			setTimeout(function() {
				//---------------------------------------------------------------------------------

				AI(sor,rand);
				rand=-1;
			},500);
		}else{ $("#akad"+rand+"").css("background-color","rgb(0, 0, 139)");	
//$("#akad"+rand+"").html(rand);
		counter++;
		//console.log(counter);
						$("#blocker").css("top","50%");
						$("#blocker").css("height","50%");
					if(horizcounter>0)
					{
						lasthit=rand;
						toleft=1;
						switcher=1;
						horizcounter--;
					}else toleft=0;
				}
}

function AIright(sor,rand){
	AI(sor,rand);
}

function AIleft(sor,rand){

	AI(sor,rand);
}