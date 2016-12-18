/*
 * multSideBar plugin
 * author:leslieSie
 * creatTime:2016/12/11
 * lastModified:2016/12/13
 * description:这个插件主要是用来解决类似电商网站左侧侧栏的效果实现
 * email:2358407968@qq.com
 */
$.fn.multSideBar=function(options){
	
	var defaultOptions={
		bgColor:"black",   //设置默认背景色
		afterColor:"#ae1c1c",   //设置hover发生的改变颜色
		//opacity:.8,            //透明度为80%
		cssUri:"style.css",    //这个属性是用来支持用户将CSS文件存放在其他的地方，这里注意在使用的时候要将完整的文件名写出来
		goTopControl:false,    //该选项设置为false的时候，goTopControlPixel失效，这个参数为true的时候goTop大于goTopControlPixel的时候就显示，否则则隐藏，如果是为false，那么总是显示
		goTopControlPixel:100,//默认显示隐藏的默认值为100px
		direction:"right",//显示的方向，支持left和right这两种方法，默认的是right
		fileUri:'img',  //对应文件夹的相对路径，如果是没有设置默认的是放在img里面
		//isShow:true,  //设置是否显示此控件，当设置为false的时候show参数失效
		//用于设置显示
		show:{
			data:[
			]
		}
	};
	
	var settings=$.extend({},defaultOptions,options);
	$("<link>").attr({ rel: "stylesheet",type: "text/css",href: settings.cssUri}).appendTo("head");
	var that=this;
	document.onreadystatechange = setTimeout(main,0);   //当页面加载状态改变的时候执行这个方法. 

	/*
	 * descripttion:用于初始化程序在计算中所要用到的全部变量
	 */
	function init(direction,bgColor,opacity,fileUrl,showData,that,limmit){
		this.jsonData={};
		this.bgColor=bgColor;
		this.opacity=opacity;
		this.that=that;
		this.direction=direction;
		this.limmit=limmit;//用于确定最终要渲染的个数
		this.fileUrl=fileUrl;
		this.showData=showData;
		/*********配置默认可选的ICON***************/
		this.allowIcon=["weixin","qq","taobao","zhifubao","facebook","weibo","goTop"];  
		this.allowType=["hollow","solid"];
		this.moduleNum=0;
	}

	/*
	 * description:用于验证传入的参数是否正确
	 */
	init.prototype.validate=function(){
		//全局变量验证
		if(typeof this.bgColor!="string"){
			console.error("bgColor属性不能为空，且不能为string类型");
			return false;
		}else if(this.bgColor==" "){
			console.error("color属性不能为空，且不能为string类型");
			return false;
		}else if(this.direction!="right" && this.direction!="left"){
			console.error("direction属性设置错误");
			return false;
		}else if(typeof settings.goTopControl!="boolean"){
			console.error("goTopControl属性必须为布尔值");
			return false;
		}else if(typeof settings.goTopControlPixel!="number" && settings.goTopControlPixel>=0){
			console.error("goTopControlPixel属性设置不正确");
			return false;
		}
		this.moduleNum=this.showData.data.length;
		for(var i=0;i<this.showData.data.length;i++){
			if(this.showData.data[i].noCustom==false){
				var allowStatus=false;
				//验证是否符合允许类型
				switch(this.showData.data[i].icon){
					case "weixin":
					case "qq":
					case "taobao":
					case "zhifubao":
					case "facebook":
					case "weibo":
					case "goTop":
						allowStatus=true;
					break;
					default:
						allowStatus=false;
						console.error("allowIcon不指定类型");
						return false;
					break;
				}
				if(allowStatus==true){
					if(this.showData.data[i].type!="solid" && this.showData.data[i].type !="hollow"){
						console.error("allowType与指定类型不匹配");
						return false;
					}
				}

			}else if(this.showData.data[i].noCustom==true){
				if(typeof this.showData.data[i].customUrl!="string"){
					console.error("自定义类型中customUrl必须为string类型");
					return false;
				}
			}
		}
	}

	/*
	 * description:用于绘制最终所要呈现的效果
	 */
	init.prototype.draw=function(){
		//判断极限值是否大于输入值
		var html='';
		if(settings.direction=="right"){
			html='<div class="msb-side r0"><ul>';
		}else if(settings.direction=="left"){
			html='<div class="msb-side l0"><ul>';
		}
		//var json={};
		clickFunction="";
		if(this.moduleNum<this.limmit){
			//全部渲染
			for(var i=0;i<this.moduleNum;i++){
				if(settings.show.data[i].noCustom==true){
					if(settings.show.data[i].icon=="goTop"){	
						if(settings.goTopControl==false){
							html+='<li class"goTop"><a href="javascript:;"><div onclick="$(\'html,body\').animate({\'scrollTop\':0},600);" class="sidebox" style="background:'+settings.bgColor+';" ><img src="'+settings.fileUri+'/'+settings.show.data[i].icon+"-"+settings.show.data[i].type+'.png" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
						}else if(settings.goTopControl==true){
							html+='<li style="display:none" class="goTop"><a href="javascript:;"><div onclick="$(\'html,body\').animate({\'scrollTop\':0},600);" class="sidebox" style="background:'+settings.bgColor+'"><img src="'+settings.fileUri+'/'+settings.show.data[i].icon+"-"+settings.show.data[i].type+'.png" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
						}
						
					}else{
						html+='<li><a href="javascript:;"><div class="sidebox" style="background:'+settings.bgColor+'"><img src="'+settings.fileUri+'/'+settings.show.data[i].icon+"-"+settings.show.data[i].type+'.png" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
					}
				}else{
					html+='<li><a href="javascript:;"><div class="sidebox" style="background:'+settings.bgColor+'" ><img src="'+settings.show.data[i].customUrl+'" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
				}
			}
		}else{
			for(var i=0;i<this.limmit-1;i++){
				if(settings.show.data[i].noCustom==true){
					if(settings.show.data[i].icon=="goTop"){
						if(settings.goTopControl==false){
							html+='<li class="goTop"><a href="javascript:;"><div onclick="$(\'html,body\').animate({\'scrollTop\':0},600);" class="sidebox" style="background:'+settings.bgColor+'" ><img src="'+settings.fileUri+'/'+settings.show.data[i].icon+"-"+settings.show.data[i].type+'.png" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
						}else if(settings.goTopControl==true){
							html+='<li style="display:none" class="goTop"><a href="javascript:;"><div onclick="$(\'html,body\').animate({\'scrollTop\':0},600);" class="sidebox" style="background:'+settings.bgColor+'" ><img src="'+settings.fileUri+'/'+settings.show.data[i].icon+"-"+settings.show.data[i].type+'.png" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
						}
					}else{
						html+='<li><a href="javascript:;"><div class="sidebox" style="background:'+settings.bgColor+'" ><img src="'+settings.fileUri+'/'+settings.show.data[i].icon+"-"+settings.show.data[i].type+'.png" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
					}
				}else{
					html+='<li><a href="javascript:;"><div onclick="'+settings.show.data[i].click+'" class="sidebox" style="background:'+settings.bgColor+'" ><img src="'+settings.show.data[i].customUrl+'" style="width:48px;float:left;margin-left:2px">'+settings.show.data[i].text+'</div></a></li>';
				}
			}
		}
		html+='</ul></div>';
		$(this.that).html(html);
	}
	
	/*
	 * descripttion:入口方法
	 */
	function main(){
		var ini=new init(settings.direction,settings.bgColor,settings.opacity,settings.fileUrl,settings.show,that,limmit=6);
		ini.validate();
		ini.draw();
	};

	/***********************事件绑定**************************************/
	/*
	 *description:绑定图标对应的触发事件
	 */
	$(document).on("click","ul li",function(){
		var isGoTop=$(this).find("img").attr("src").indexOf("goTop");
		if(isGoTop!=-1){
			//当前为goTop不做任何事件添加处理
		}else{
			var index=$(this).index();
			for(var i in settings.show.data){
				if(i==index){
					if(settings.show.data[i].click!=undefined){
						settings.show.data[i].click();
					}
				}
			}
		}
	});

	/*
	 *description:监听窗口的滚动，为了实现在滚动到某个位置的时候把置顶功能显示，某个位置把置顶功能隐藏
	 */
	$(window).scroll(function(){
		var scroll_len = $(window).scrollTop();
		if(settings.goTopControl==true && settings.goTopControlPixel>scroll_len){
			$(".goTop").hide();
		}else if(settings.goTopControl==true && settings.goTopControlPixel<=scroll_len){
			$(".goTop").show();
		}
	});

	/*
	 *description:响应hover事件
	 */
	$(document).ready(function(){
		$(".msb-side ul li").hover(function(){
			if($(this).attr("class")!="goTop"){
				$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":settings.afterColor});	
			}else{
				$(this).find(".sidebox").css({"opacity":"1","filter":"Alpha(opacity=100)","background":settings.afterColor});	
			}
		},function(){
			$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":settings.bgColor})	
		});	
	});
}
