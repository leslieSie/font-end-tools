##font-end-tools
###Summary
这是一个前端工具的开源项目，其中我们会以开源工具依赖关系进行分类大致上可以分成这样的几类  
从JS方向上面来看大致上可以分为基于  
1. javascript  
2. jquery  
3. typeScript  
4. node.js  
5. ……………………  
 
从CSS上面来看，大致上可以分成基于  
1. bootstrap  
2. frozen.css  
3. …………………………  
###how to build font-end-tools project  
该项目是采用根据依赖关系层层递增的方式来构建的，如果开源工具需要依赖到某个CSS架构的时候我们把CSS架构放在最下层  
例如：  
假设有某个插件C.js，依赖于A.js和B.css,这个时候我们的路径可以这样书写：  
javascript/AJs/BCss/C.js    
####备注：除了文件名之外其他文件需要加上后缀，例如：bootstrapCss文件夹，Css为后缀  
###how to submit bug  or issues
有两种方法可以与我联系:   
1. 直接在github上面向改项目提交issues  
2. 直接与我联系     2358407968@qq.com
