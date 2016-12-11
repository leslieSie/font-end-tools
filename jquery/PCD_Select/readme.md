###PCDSelect省市区联动插件使用文档  
####这一款插件主要是为了解决省市区联动的外部实现不方便而诞生过的一款插件  
*. 插件支持的配置  
>symbol 主要是用来为省市区插件定义一个标识，例如ID，class之类的，默认值为 .PCDSelect  
globalStyle  主要是用来定位在PCDSelect插件的全局的样式，默认值为“” ，这个主要可以应用在为插件设置间距的背景颜色等方面上  
width  这个参数是定义省市区下拉框的宽度的，目前下拉框支持像素和百分比两种方式来定义，默认值为100px，但是要注意的是这一块定义的是三个下拉框的样式，也就是说三块下拉框的宽度默认的时候都是100px  
space  这个参数是定义下拉框之间的间隔来的，一般如果width在使用像素的时候，这个一个参数也要跟着同步，如果width使用百分比的时候，亦是如此  
provinceName  这个参数是用来为省级下拉框添加name用的，目的是联动所用，默认值为province  
cityName 这个参数是用来为市级下拉框添加name用的，目的是联动所用，默认值为city  
districtName    这个参数是用来为区级下拉框添加name用的，目的是联动所用，默认值为district   
provinceClass  为省级的下拉框添加class，这里如果是添加单个class样式的时候，我们是可以直接使用字符串的形式，但是如果是要添加多个的话，那么我们就应该要使用数组的形式，默认值为“”  
cityClass  为市级的下拉框添加class，这里如果是添加单个class样式的时候，我们是可以直接使用字符串的形式，但是如果是要添加多个的话，那么我们就应该要使用数组的形式，默认值为“”    
districtClass 为区级的下拉框添加class，这里如果是添加单个class样式的时候，我们是可以直接使用字符串的形式，但是如果是要添加多个的话，那么我们就应该要使用数组的形式，默认值为“”  
isShowCity  这个参数是用来配置市级是否可见的，当配置为false的时候，市级和区级是不可见的。默认值为true  
isShowDistrict 这个参数是用来配置区级是否可见的，当配置为false的是偶，区级不可见，默认值为true    
  
<b>插件注意事项： </b>   
1. 因为这款插件是依赖于bootstrap和jquery来实现的，所以在使用这款插件的时候必须保证bootstrap.css和jquery.js加载完成。  
2. 这款插件同时还必须存在提供了一个数据源的文件——area.js，必须保证area.js和本插件在同一个目录下面    
3. 在页面内使用多个省市区插件的时候，注意要将provinceName,cityName,districtName这三个参数自定义设置，以免因为默认值相同而导致的冲突

<b>使用案例</b>  
这个插件的使用方法非常简单(插件的默认值是按照我们的日常使用习惯去设置的，一般可以直接使用，无需从新配置，除非页面内要使用多个省市区除外)，举一个最简单的例子：    

	<html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="http://cdn.bootcss.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css">
	</head>
	<body>
	<div  style="margin-top:100px;margin-left: 100px">
		<div id="test" class="col-md-5">
			
		</div>
	<!-- 	<select class="select-province" style="width: 100px"></select>
		<select class="select-city" style="width:100px"></select>
		<select class="select-district" style="width:100px"></select> -->
	</div>
	
	<script type="text/javascript" src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>
	<script type="text/javascript" src="PCDSelect.js"></script>
	<script type="text/javascript">
		$("#test").PCDSelect();
	</script>
	</body>
	</html>
</code>  
<b>相关推荐</b>

     

   
   
