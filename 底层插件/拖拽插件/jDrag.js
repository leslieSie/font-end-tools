	
	
$.fn.ondrag=function(options){
	var default_options={
		drag:true,
		cursorPosition:this,
		moveObject:this
	};
	var status=false;
	var mouseX=0;
	var mouseY=0;
	var ElementX=0;
	var ElementY=0;
	var thisObj=document.getElementById(this);

	console.log(thisObj);
	
	var settings=$.extend({},default_options,options);
	var that=settings.moveObject;
	$(settings.cursorPosition).css("cursor","move");
	if(settings.drag){
		//可移动
		// console.info(window["up"]);
		//点击事件
		$(this).on("mousedown",function(e){
			var e=e||window.event;
			mouseX=e.clientX;
			// console.log(mouseX);
			mouseY=e.clientY;
			// console.log(mouseY);
			//ElementY=e.style.top;
			// that=this;
			ElementX=$(this).offset().left;
			ElementY=$(this).offset().top;
			console.log(ElementX);
			// console.log(ElementX);
			// console.info(ElementY);
			status=true;
		});
		$(document).on("mousemove",function(e){
			//console.info(e.clientX);
			// console.info(mouseX);
			if(status==true){
				var x=e.clientX-mouseX+ElementX;
				var y=e.clientY-mouseY+ElementY;
				$(that).css("margin-left",x+"px");
				$(that).css("margin-top",y+"px");
				// $(e).attr("style");
				// $(e).css("margin-left",x);
				// $(e).css("margin-top",y);
				// e.style.top=y;
				// console.log(x);
				// console.info(y);
			}
		});
		$(document).on("mouseup",function(e){
			status=false;
		})
			// $(this).on("mousedown",function(event){
			// 	var org_left=event.clientX;
			// 	var org_top=event.clientY;
			// 	console.info(up);
			// 	// if(up==false){
			// 		$(document).on("mouseup",function(event){
			// 			window["up"]=true;
			// 			console.info(window["up"]);
						
			// 			console.info(window["up"]);
			// 		})	
			// 		$(document).on("mousemove",function(event){
			// 			console.log(up);
			// 			console.info(window["up"]);
			// 			//$(event).attr("style","");
			// 			$(that).css("margin-left",event.clientX-org_left+"px").css("margin-top",event.clientY-org_top+"px");
			// 		});
			// 	// }
			// });	
			
		// }		
	}else{
		//不可移动
		$(settings.cursorPosition).css("cursor","");
	}
}