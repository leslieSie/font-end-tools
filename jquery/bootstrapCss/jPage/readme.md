###jPage.js插件使用文档  
####这一款插件主要是为了bootstrap原生的分页功能效果不理想而诞生的一款插件。  
*. 插件支持的配置     

>pageNo:这个参数主要是用来指定当前的页码的，传入的类型为number  
count:这个参数是标识总的数据条数，传入的类型为number   
pageSize:这个参数是指定每页要渲染的数据条数，这个与count参数配合可以最终确定页数，传入类型为number  
color:这个为主题颜色，目前只支持默认的浅蓝色主题，所以现在的无需传参  
btnName:这个参数是用来改变确认按钮的文本的，默认的文本是“确定”  
skipPart:配置是否支持分页插件的拓展部分，默认值为true  
showNum:这个参数主要是用来设定默认分页插件的显示页码数的，默认值为6，传入的类型为number  
  
*. 插件的依赖  
这一款插件是依赖于bootstrap、Jquery来实现的，所以在引入插件的同时必须保证bootstrap和jquery已经引入  
  
*. 一个简单的使用案例  

	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">  
	</head>
	<body>
		<div id="test"></div>
		<script type="text/javascript" src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>
		<script type="text/javascript" src="jPage.js"></script>
		<script type="text/javascript">
			$("#test").page({count:70,pageSize:3,skipPart:true});
			
		</script>
	</body>
	</html>
</code>   
这样就生成了一个总计24页，每页有3条数据的分页组件  
  
*. 插件与ajax的交互  
这款插件目前没有在内部实现ajax的交互方式，但是我们可以通过在外添加事件绑定来实现这个需求  
例如：要为确定按钮添加一个ajax事件我们可以这样做  
  
	$(document).on('click','#test .pagination_search',function(){
			if($(document).find("#test .pagination_change_page").val()==""){
				alert("跳转页码不能为空");
			}else{
				var num=parseInt($(document).find("#test .pagination_change_page").val());
				$("#test").page({count:12,pageNo:num,pageSize:3,skipPart:true});
			}
		});

		$(document).on("click","#test .pagination li",function(){
			var num=$(this).attr("num");
			if($(this).attr("class")=="disabled"){
				return false;
			}
			if(num==0 || num==(count+1)){

			}else{
				$("#test").page({count:12,pageNo:num,pageSize:3,skipPart:true});
			}
		});
这样我们就实现了ajax交互的功能  
  
*. 其他的设计思路详见：http://www.cnblogs.com/st-leslie/p/6029804.html
	    

