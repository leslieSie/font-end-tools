###muliSidePar v1.0插件使用指南    
####支持参数    
<b>全局配置</b>  

>bgColor:"black",  //默认的底部颜色为黑色，这个参数即支持预定义好的颜色，又支持RGB颜色设置  
afterColor:"#ae1c1c",//默认的hover颜色为深红色，这个参数即支持预定义好的颜色，又支持RGB颜色设置，这个参数是指定hover的颜色值  
cssUri:"style.css",//这个参数用于配置CSS的路径，改参数既支持绝对路径又支持相对路径，默认值为style.css  
goTopControl:false,//该选项设置为false的时候，goTopControlPixel失效，这个参数为true的时候goTop大于goTopControlPixel的时候就显示，否则则隐藏，如果是为false，那么总是显示，这个参数主要是用来控制是否具有特定位置隐藏的功能     
goTopControlPixel:100,这个参数只有在当goTopControl设置为true的时候才生效，这里只支持number类型的传入，表示的是在大于该值得时候就显示显示goTop图标，小于该值的时候隐藏    
direction:'right',//这个参数只支持left和right两种设置，表示的是插件浮动的位置  
fileUri:'img',//这个参数是用来设置默认图片文件夹的位置，这里只支持相对路径  

<b>子模块配置</b>  
><span style="color:red">*</span>icon: 这个参数是用来指定要显示的图片，这里只支持weixin,qq,facebook,taobao,zhifubao,weibo这几种图标，这个参数要配合type属性一起设置才能生效   
 
><span style="color:red">*</span>type:这个参数是用来指定icon的类型的，目前支持的类型有hollow(空心)，solid(实心)图标   
 
><span style="color:red">*</span>text：这个参数是用来设置hover事件中要显示的文本的，默认值为空    

><span style="color:red">*</span>noCustom：这个属性支持布尔类型的传入，当这个参数设置为false的时候，参数type和icon失效，这个时候只能通过customUrl参数来指定图片的路径，注意如果是没有正确设置的话，那么会出现图裂的现象(这个参数的意义是为用户提供拓展icon的一个设置)  
customUrl:自定义图标的显示路径   
click:这个参数是用来指定图标触发的回调方法，这里要传入的类型为function  

<b>不可更改配置</b>  
>目前不支持图片透明度设置，目前图片透明度设置为0.8       
  
<b>备注</b>  
><span style="color:red">*</span>指的是为必传参数
  
<h3>简单的应用</h3>  
我们先来假设有这样的一种场景，假设我们需要一个有浮动的侧边面板，里面是有微博和一个自定义的功能，还有一个是置顶的功能，我们可以这样设置，其中微博跳转到微博首页，自定义功能跳转到百度首页,我们可以这样设置  


	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>mulTSideBar DEMO</title>
	</head>
	<body style="height:1200px">
	<div id="test"></div>
	<script type="text/javascript" src="http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="multSideBar.js"></script>
	<script type="text/javascript">

		/*
		 *author:leslieSie 
		 *description:关于MultSideBar插件的简单应用
		 *time:2016/12/11
		 */
		$("#test").multSideBar({
			goTopControl:true,
			show:{
				data:[
				{
					icon:"weibo",   //weixin,qq,facebook,taobao，zhifubao,weibo
					type:"hollow",   //可选参数有hollow,solid
					noCustom:true,    //自定义类型，只有在custom为true的时候，customUrl才有效
					text:"微博",
					customUrl:"",    //图片的URL
					click:function(){  
						window.location.href="https://www.weibo.com";
					},         
				},{
					icon:"weibo",   //weixin,qq,facebook,taobao，zhifubao,weibo
					type:"hollow",   //可选参数有hollow,solid
					noCustom:false,    //自定义类型，只有在custom为true的时候，customUrl才有效
					text:"小兔子",
					customUrl:"img/custom.svg",    //图片的URL
					click:function(){
						window.location.href="https://www.baidu.com";
					},        //点击后的效果        
				},{
					icon:"goTop",   //weixin,qq,facebook,taobao，zhifubao,weibo
					type:"solid",   //可选参数有hollow,solid
					noCustom:true,    //自定义类型，只有在custom为true的时候，customUrl才有效
					text:"置顶",
					customUrl:"",    //图片的URL
				}]
			}
		});
	</script>
	</body>
	</html>    
运行后的效果如下：  
![这是运行后的效果图](https://raw.githubusercontent.com/leslieSie/font-end-tools/develop/jquery/multSideBar/effect.gif)    
  
<h3>反馈</h3>  
一、可以直接在issues中向我提交反馈内容和bug  
二、可以直接通过邮箱2358407968@qq.com联系我  
  
<h3>版本迭代</h3>  
1.0版本
时间：2016/12/17   
  
<h6>文档写于2016/12/18 16:06:18 </h6>


  




