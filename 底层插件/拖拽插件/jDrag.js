	
	
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
	var settings=$.extend({},default_options,options);
	var that=settings.moveObject;
	$(settings.cursorPosition).css("cursor","move");
	if(settings.drag){
		$(this).on("mousedown",function(e){
			var e=e||window.event;
			mouseX=e.clientX;
			mouseY=e.clientY;
			ElementX=$(this).offset().left;
			ElementY=$(this).offset().top;
			status=true;
		});
		$(document).on("mousemove",function(e){
			if(status==true){
				var x=e.clientX-mouseX+ElementX;
				var y=e.clientY-mouseY+ElementY;
				$(that).css("margin-left",x+"px");
				$(that).css("margin-top",y+"px");
			}
		});
		$(document).on("mouseup",function(e){
			status=false;
		})		
	}else{
		//不可移动
		$(settings.cursorPosition).css("cursor","");
	}
}