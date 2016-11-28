(function($){
	$.fn.page=function(options){
		var defaultOptions={
			pageNo:1,   //当前页码，用于点亮对应的页码
			pageSize:10,  //每页渲染的最大页码数
			count:0,    //
			showNum:6,  //初始化的显示页码，默认的是显示到6页
			color:'orange',
			btnName:'确定',  //按钮名称
			skipPart:true,    //跳转模块是否添加
			fontSize:16,
			// statisMsgPart:false,  //静态信息显示，默认为不显示
		}
		var that=this;
		var settings=$.extend({},defaultOptions,options);
		var pageCount=0;
		$(this).empty();
		//主函数
		var main=function(){
			var val=ValidatePageCount();
			if(val==false){
				return false;
			}
			var pageNo=parseInt(settings.pageNo);
			var pageSize=parseInt(settings.pageSize);
			var count=parseInt(settings.count);
			if(count%pageSize==0){
				pageCount=count/pageSize;
			}else{
				pageCount=parseInt(count/pageSize)+1;
			}
			var showNum=parseInt(settings.showNum);
			var pageJson=PageAlgorithm(pageNo,pageSize,pageCount,showNum);
			PageDraw(pageJson);
			$(that).off();
		};
		main();

		//按键触发
		 // $(document).on('click','.pagination li',function(e){
		 // 	//alert(2);
	  //       var num=$(this).attr("num");
	  //       console.log("NUM:"+num);
			// if($(this).attr("class")=="disabled"){
			// 	return false;
			// }
			// if(num==0 || num==(settings.count+1)){

			// }else{
			// 	var json=PageAlgorithm(parseInt(num),settings.pageSize,pageCount,settings.showNum);
			// 	//console.log(json);
			// 	PageDraw(json);
			// 	$(".pagination li").off("click");
			// }
	  //   });

		 // $(document).on('click','.pagination_search',function(){
		 // 	//alert(3);
	  //       //输入为空不做处理
			// if($(that).find(".pagination_change_page").val()==""){
			// 	alert("跳转页码不能为空");
			// }else{
			// 	var num=parseInt($(that).find(".pagination_change_page").val());
			// 	var json=PageAlgorithm(parseInt(num),settings.pageSize,pageCount,settings.showNum);
			// 	PageDraw(json);
			// }
	  //   });

		//验证传入数据是否符合渲染规则
		function ValidatePageCount(){
			if(settings.pagNo<0 || settings.pageSize<0 || settings.count<0){
				console.error("请检查 pagNo,pageSize,count这个三个参数是否存在非法输入");
				return false;
			}
			//如果showNum为为非法数值，那么设置为默认值
			if(settings.showNum<0){
				setting.showNum=6;
			}

		}

		//分页渲染
		function PageDraw(json){
			if(parseInt(settings.count)>0){
				var html='<ul class="pagination">';
				for(var i in json.algorithm){
					if(json.algorithm[i].status=="disabled"){
						html+='<li class="'+json.algorithm[i].status+'" num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
					}
					else if(json.algorithm[i].status=="active"){
						html+='<li class="'+json.algorithm[i].status+'" num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
						
					}else if(json.algorithm[i].num=="more"){
						html+='<li class="disabled" num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
					}else{
						html+='<li num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
					}
				}
				$(that).html(html);
				if(settings.skipPart==true){
					$(that).find(".pagination").append('<span class="text-muted" style="margin:5px;margin-left:10px;display:inline-block;font-size:18px;font-size:'+settings.fontSize+'px">共有'+pageCount+'页/'+settings.count+'个</span><div style="display:inline-block" name="changePage"><span class="text-muted" style="margin:5px;margin-left:0px;display:inline-block;font-size:'+settings.fontSize+'px">,到第</span> <input type="number" min="1" max="'+pageCount+'"class="pagination_change_page" style="width:45px;border-color:#ddd"> <span class="text-muted" style="margin:5px;margin-left:10px;display:inline-block;font-size:font-size:'+settings.fontSize+'px">页</span> <button class="btn btn-default btn-sm pagination_search">'+settings.btnName+'</button></div>');
				}
			}else{

			}
			
		}

		//分页算法逻辑，主要对分页进行逻辑运算，不做渲染，返回值为JSON
		function PageAlgorithm(pageNo,pageSize,count,showNum){
			var data="";
			if(pageNo==1){
				data='{"algorithm":[{"text":"上一页","num":0,"status":"disabled"}';
			}else{
				data='{"algorithm":[{"text":"上一页","num":"'+(pageNo-1)+'","status":"abled"}';
			}
			//判断分页类型
			if(count>showNum){
				if(pageNo<=showNum+2){
					//判断pageNo是否在要初始化显示的页码内
					if(pageNo<=showNum){
						for(var i=1;i<=showNum;i++){
							if(pageNo==i){
								data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
								
							}else{
								data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
							}	
						}
						if(pageNo==showNum){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}else{
						for(var i=1;i<=pageNo;i++){

							if(i==pageNo){
								data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
							}else{
								data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
							}
						}
						if(pageNo!=count){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}
					//选中最后一页时，将省略号隐藏
					if(pageNo!=count){
						if(pageNo!=(count-1)){
							data+=',{"text":"…","num":"more","status":""}';
						}
						
					}
					
				}else if(pageNo>count-showNum){
					data+=',{"text":"1","num":"1","status":"abled"}';
					data+=',{"text":"2","num":"2","status":"abled"}';
					data+=',{"text":"…","num":"more","status":"disabled"}';
					for(var i=count-showNum+1;i<=count;i++){
						if(pageNo==i){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
						}else{
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}
				}
				else{
					data+=',{"text":"1","num":"1","status":"abled"}';
					data+=',{"text":"2","num":"2","status":"abled"}';
					data+=',{"text":"…","num":"more","status":"disabled"}';
					for(var i=pageNo-2;i<=pageNo+2;i++){
						if(i==pageNo){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
						}else{
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}
					data+=',{"text":"…","num":"more","status":"disabled"}';
				}
			}else{				
				for(var i=1;i<=count;i++){
					if(pageNo==i){
						data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
					}else{
						data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
					}

				}
				
			}
			if(pageNo==count){
				data+=',{"text":"下一页","num":"'+(pageNo+1)+'","status":"disabled"}]}';
			}else{
				data+=',{"text":"下一页","num":"'+(pageNo+1)+'","status":"abled"}]}';
			}
			var json_return = JSON.parse(data);
			return json_return;

		}
	}
})(jQuery);