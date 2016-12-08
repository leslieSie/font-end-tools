	
	
$.fn.jDrag=function(options){
	var default_options={
		drag:true,
		moveObject:this
	};
	var status='';
	$(this).off();
	var mouseX=0;
	var mouseY=0;
	var ElementX=0;
	var ElementY=0;
	var thisObj=document.getElementById(this);	
	var settings=$.extend({},default_options,options);
	var that=settings.moveObject;
	if(settings.drag==false){
		$(this).css("cursor","default");
	}else{
		$(this).css("cursor","move");
	}
	
	$(this).on("mousedown",function(e){
		var e=e||window.event;
		mouseX=e.clientX;
		mouseY=e.clientY;
		ElementX=$(this).position().left;
		ElementY=$(this).position().top;
		if(settings.drag==true){
			status=true;
		}
		if(settings.drag==false){
			status=false;
		}
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
	}