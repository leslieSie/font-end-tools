$.fn.PCDSelect=function(options){
	var default_options={
		symbol:'.PCDSelect',     //定义省市区模块的标识 例如#model,.model
		globalStyle:' ',       //设置省市区模块的全局样式(目前仅支持字符串形式)
		width:'100px',   //定义每个select的宽度,支持绝对定位和相对定位
		space:'10px',  //设置每个select 之间的间距，支持绝对定位和相对定位
		provinceName:'province',  //渲染province的name值
		provinceClass:' ',   //支持数组
		cityName:'city',   //渲染city的name值
		cityClass:' ',  //支持数组
		districtName:'district',    //渲染district的name值
		districtClass:' ',    //支持数组
		isShowCity:true,		//设置是否显示城市，设置为false的时候，城市和区域都不显示
		isShowDistrict:true,     //设置是否显示地区，设置为false的时候，区域为不显示

	}
	var settings=$.extend({},default_options,options);	

	//全局变量
	var provinceHtml='';
	var cityHtml='';
	var districtHtml="";
	var that=this;
	var return_data="";

	//动态添加脚本
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'area.js';
	head.appendChild(script);

	//动态脚本加载完成之后执行
	document.onreadystatechange = main;//当页面加载状态改变的时候执行这个方法. 

	//主逻辑
	function main() {
		if(document.readyState == "complete"){//当页面加载状态 
			main.prototype.load();
			ClassDeal();
		}
		
	}
 	
 	$(document).on("change","select[name='"+settings.provinceName+"']",function(){
 		var val=$(this).val();
 		if(val==0){
 			first();
 			ClassDeal();
 			hidenModel();
 		}else{
 			ProvinceChange(val);
 			ClassDeal();
 			hidenModel();
 		}
 	});

 	$(document).on("change","select[name='"+settings.cityName+"']",function(){
 		var value=$(this).val();
 		CityChange(value);
 		ClassDeal();
 		hidenModel();
 	});

	main.prototype.load= function(){
		first();
		hidenModel();
	}

	//symbol过滤
	main.prototype.filter= function(symbol){
		var firstLetter=symbol.substr(0,1);
		var return_data={};
		if(firstLetter=="#"){
			return_data.key="id";
			return_data.value=symbol.substr(1,symbol.length-1);
		}
		if(firstLetter=="."){
			return_data.key="class";
			return_data.value=symbol.substr(1,symbol.length-1);
		}
		return return_data;
	}

	//初始化配置
	function first(){
		var area=getArea();
		var sym=main.prototype.filter(settings.symbol);
		var str=sym.key+"="+sym.value;
		provinceHtml='<div '+str+' style="'+settings.globalStyle+'"><select class="select-province" name="'+settings.provinceName+'" style="width:'+settings.width+';margin-right:'+settings.space+'"><option value="0">请选择</option>';
		cityHtml='<select class="select-city" name="'+settings.cityName+'" style="width:'+settings.width+';margin-right:'+settings.space+'"><option value="0">请选择</option>';
		districtHtml='<select class="select-district" name="'+settings.districtName+'" style="width:'+settings.width+';"><option value="0">请选择</option>';
		for(var i in area){
			if(area[i].level==1){
				provinceHtml+='<option value="'+area[i].id+'">'+area[i].name+'</option>';
			}
		}
		if(cityHtml==""){
			cityHtml+='<option value="0">全境</option>';
		}
		if(districtHtml==""){
			districtHtml+='<option value="0">全境</option>';
		}
		provinceHtml+='</select>';
		cityHtml+='</select>';
		districtHtml+='</select></div>';
		$(that).html(provinceHtml+cityHtml+districtHtml);
	}

	function ProvinceChange(value){
		var area=getArea();
		var sym=main.prototype.filter(settings.symbol);
		var str=sym.key+"="+sym.value;
		var TIME=0;      //市渲染的次数
		var City_id=0;    //市中的ID
		var oldProvinceHtml=provinceHtml='<div '+str+' style="'+settings.globalStyle+'"><select class="select-province" name="'+settings.provinceName+'" style="width:'+settings.width+';margin-right:'+settings.space+'"><option value="0">请选择</option>';
		var oldCityHtml=cityHtml='<select class="select-city" name="'+settings.cityName+'" style="width:'+settings.width+';margin-right:'+settings.space+'">';
		var oldDistrictHtml=districtHtml='<select class="select_district" name="'+settings.districtName+'" style="width:'+settings.width+'">';
		for(var i in area){
			if(area[i].level==1){
				if(area[i].id==value){
					provinceHtml+='<option selected="selected" value="'+area[i].id+'">'+area[i].name+'</option>';
				}else{
					provinceHtml+='<option value="'+area[i].id+'">'+area[i].name+'</option>';
				}
			}
			if(area[i].level==2&&area[i].parent_id==value){
				if(TIME==0){
					City_id=area[i].id;
				}
				cityHtml+='<option value="'+area[i].id+'">'+area[i].name+'</option>';
				TIME++;
			}
			if(area[i].level==3&&area[i].parent_id==City_id){
				//console.log($("select[name='"+settings.cityName+"']").find("option").eq(0).attr("style"));
				districtHtml+='<option value="'+area[i].id+'">'+area[i].name+'</option>';
			}
		}
		if(cityHtml==oldCityHtml){
			//alert(1);
			cityHtml+='<option value="0">全境</option>';
		}
		if(districtHtml==oldDistrictHtml){
			districtHtml+='<option value="0">全境</option>';
		}
		provinceHtml+='</select>';
		cityHtml+='</select>';
		districtHtml+='</select></div>';
		$(that).html(provinceHtml+cityHtml+districtHtml);
	}

	function CityChange(value){
		var area=getArea();
		var sym=main.prototype.filter(settings.symbol);
		var str=sym.key+"="+sym.value;
		var districtHtml='';
		for(var i in area){
			if(area[i].level==3&&area[i].parent_id==value){
				console.info(area[i]);
				districtHtml+='<option value="'+area[i].id+'">'+area[i].name+'</option>';
			}
		}
		if(districtHtml==""){
			districtHtml='<option value="0">全境</option>';
		}
		$("select[name='"+settings.districtName+"']").html(districtHtml);
	}

	function ClassDeal(){
		//Province_class判断
		var P_class=settings.provinceClass;
		for(var i=0;i<P_class.length;i++){
			$('select[name="'+settings.provinceName+'"]').addClass(P_class[i]);
		}
		//City_class判断
		var C_class=settings.cityClass;
		for(var i=0;i<C_class.length;i++){
			$('select[name="'+settings.cityName+'"]').addClass(C_class[i]);
		}
		//District_class判断
		var D_class=settings.districtClass;
		for(var i=0;i<D_class.length;i++){
			$('select[name="'+settings.districtName+'"]').addClass(D_class[i]);
		}
	}
	//判断隐藏判断
	function hidenModel(){
		if(settings.isShowCity==false){
			$("select[name='"+settings.cityName+"']").hide();
			$("select[name='"+settings.districtName+"']").hide();
		}
		if(settings.isShowDistrict==false){
			$("select[name='"+settings.districtName+"']").hide();
		}
	}
}

