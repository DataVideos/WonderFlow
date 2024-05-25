(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"23d5":function(t,e,a){"use strict";a("928c")},"2f6e":function(t,e,a){},"4c89":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"eventBus",(function(){return Ht}));var i=a("2b0e"),r=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"App"},c=o,l=(a("6e8a"),a("2877")),d=Object(l["a"])(c,n,s,!1,null,null,null),u=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"homepage-view"},[a("el-header",[a("PageHeader")],1),a("el-main",[a("div",{staticStyle:{width:"1000px","margin-left":"auto","margin-right":"auto"}},[a("el-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("h1",{staticClass:"title-text"},[t._v("WonderFlow: Narration-Centric Design of Animated Data Videos")])]),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("h4",{staticStyle:{"text-align":"center"}},[a("p",[a("span",[t._v("Yun Wang"),a("sup",[t._v("* 1")])]),t._v("   "),a("span",[t._v("Leixian Shen"),a("sup",[t._v("* 2")])]),t._v("   "),a("span",[t._v("Zhengxin You"),a("sup",[t._v("3")])]),t._v("   "),a("span",[t._v("Xinhuan Shu"),a("sup",[t._v("4")])]),t._v("   "),a("span",[t._v("Bongshin Lee"),a("sup",[t._v("5")])]),t._v("   "),a("br"),a("span",[t._v("John Thompson"),a("sup",[t._v("6")])]),t._v("   "),a("span",[t._v("Haidong Zhang"),a("sup",[t._v("1")])]),t._v("   "),a("span",[t._v("Dongmei Zhang"),a("sup",[t._v("1")])])]),a("p",[a("span",[a("sup",[t._v("1")]),t._v("Microsoft")]),t._v("   "),a("span",[a("sup",[t._v("2")]),t._v("The Hong Kong University of Science and Technology")]),t._v("   "),a("span",[a("sup",[t._v("3")]),t._v("The Hong Kong Polytechnic University")]),t._v("   "),a("br"),a("span",[a("sup",[t._v("4")]),t._v("Newcastle University")]),t._v("   "),a("span",[a("sup",[t._v("5")]),t._v("Yonsei University")]),t._v("   "),a("span",[a("sup",[t._v("6")]),t._v("AutoDesk")])]),a("p",[a("sup",[t._v("*")]),t._v("Equal contribution")]),a("p",[t._v("IEEE Transactions on Visualization and Computer Graphics 2024")])])]),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("video",{staticClass:"local-video",staticStyle:{"box-shadow":"0 0 5px #d7d7d7"},attrs:{src:"./data/video/WonderFlow_video.mp4",controls:"",width:"100%",height:"100%"}})]),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("h2",[t._v("Abstract:")]),a("p",[t._v("Creating an animated data video with audio narration is a time-consuming and complex task that requires expertise. It involves designing complex animations, turning written scripts into audio narrations, and synchronizing visual changes with the narrations. This paper presents WonderFlow, an interactive authoring tool, that facilitates narration-centric design of animated data videos. WonderFlow allows authors to easily specify semantic links between text and the corresponding chart elements. Then it automatically generates audio narration by leveraging text-to-speech techniques and aligns the narration with an animation. WonderFlow provides a structure-aware animation library designed to ease chart animation creation, enabling authors to apply pre-designed animation effects to common visualization components. Additionally, authors can preview and refine their data videos within the same system, without having to switch between different creation tools. A series of evaluation results confirmed that WonderFlow is easy to use and simplifies the creation of data videos with narration-animation interplay.")])]),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("h2",[t._v("Resources:")]),a("a",{attrs:{href:"./data/paper.pdf",target:"_blank"}},[t._v("Paper")]),t._v(" | "),a("a",{attrs:{href:"https://github.com/DataVideos/WonderFlow/raw/main/data/supp.zip",target:"_blank"}},[t._v("Supp")])])],1)]),a("el-footer",[a("PageFooter")],1)],1)},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("div",{staticStyle:{width:"1000px",height:"100%","margin-left":"auto","margin-right":"auto",display:"flex","justify-content":"center","align-items":"center"}},[a("div",{staticClass:"header-text",staticStyle:{"user-select":"none",cursor:"pointer"},attrs:{title:"WonderFlow Homepage"},on:{click:t.clickHome}},[t._v("WonderFlow")]),a("div",{staticStyle:{display:"block","margin-left":"auto"}},[a("el-button",{staticClass:"header-button",attrs:{type:"text"},nativeOn:{click:function(e){return t.clickHome.apply(null,arguments)}}},[t._v("Home")]),a("el-button",{staticClass:"header-button",attrs:{type:"text"},nativeOn:{click:function(e){return t.clickGallery.apply(null,arguments)}}},[t._v("Gallery")])],1)])])},m=[],v={name:"PageHeader",components:{},data(){return{}},methods:{clickHome(){console.log(this.$route),"/homepage"!==this.$route.path&&this.$router.push("homepage")},clickGallery(){"/gallery"!==this.$route.path&&this.$router.push("gallery")},clickLaunch(){"/editor"!==this.$route.path&&this.$router.push("editor")}},mounted(){},computed:{}},f=v,y=(a("fb98"),Object(l["a"])(f,g,m,!1,null,"bac2e200",null)),w=y.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-footer"},[a("div",{staticStyle:{width:"1000px",height:"100%","margin-left":"auto","margin-right":"auto",display:"flex","justify-content":"center","align-items":"center"}},[a("div",{staticClass:"footer-text",staticStyle:{"user-select":"none"}},[t._v("WonderFlow")]),a("div",{staticStyle:{display:"block","margin-left":"auto"}},[t._v(" Make it easy to create narration-enriched data videos ")])])])}],_={name:"PageFooter",components:{},data(){return{}},methods:{},mounted(){},computed:{}},x=_,j=(a("77ad"),Object(l["a"])(x,b,S,!1,null,"699c6dd0",null)),k=j.exports,M={name:"HomepageView",components:{PageFooter:k,PageHeader:w},data(){return{}},methods:{},mounted(){},computed:{}},C=M,I=(a("8fe0"),Object(l["a"])(C,p,h,!1,null,"7a8820fd",null)),P=I.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"gallery-view"},[a("el-header",[a("PageHeader")],1),a("el-main",[a("div",{staticStyle:{width:"1000px","margin-left":"auto","margin-right":"auto"}},[a("el-row",[a("h2",[t._v("Gallery")])]),a("el-row",[a("div",{staticClass:"svg-group"},[t._l(t.presetCharts,(function(e){return a("el-card",{key:e.id,staticClass:"svg-item clickable",attrs:{shadow:"hover","body-style":{padding:"0px"}},nativeOn:{click:function(a){return t.handleProjectClick(e)}}},[a("SvgPreviewer",{attrs:{project:e,height:180,width:290}}),a("div",{staticClass:"item-text-container"},[a("div",[t._v(t._s(e.label))]),a("div",{staticStyle:{color:"gray","font-size":"0.9rem"}},[t._v(t._s(e.chartType))])])],1)})),t._l([].concat(Array((3-t.presetCharts.length%3)%3).keys()),(function(t){return a("div",{key:"empty-block-"+t,staticClass:"svg-item"})}))],2)])],1)]),a("el-footer",[a("PageFooter")],1)],1)},A=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"svg-previewer",style:{height:t.height+"px",width:t.width+"px"}},[a("svg",{ref:"svg",attrs:{height:t.height,width:t.width}},[a("g",{staticClass:"scene"})])])},O=[],L=a("2f62"),q={name:"SvgPreviewer",props:["project","width","height"],data(){return{svg:null,scene:null,created:!1}},methods:{loadSVG(){if(this.created)return;const t=this.staticSvgMap.get(this.project.id);t&&(this.created=!0,this.scene.innerHTML=t,this.$nextTick(()=>{const t=this.scene.querySelector("svg");t.setAttribute("width",this.width),t.setAttribute("height",this.height);let e=t.getAttribute("viewBox");if(!e||!e.match(/\d+ \d+ \d+ \d+/)){const{width:t,height:a}=this.scene.getBoundingClientRect();e=`0 0 ${t} ${a}`}const a=e.split(" "),i=parseInt(a[2]),r=parseInt(a[3]);if(i/r>this.width/this.height){const t=Math.floor(this.width/this.height*r),a=Math.ceil((i-t)/2);e=`${a} 0 ${t} ${r}`}else{const t=Math.round(this.height/this.width*i),a=Math.ceil((r-t)/2);e=`0 ${a} ${i} ${t}`}t.setAttribute("viewBox",e)}))}},mounted(){this.svg=this.$refs.svg,this.scene=this.svg.querySelector(".scene")},watch:{staticSvgMapSign(){this.loadSVG()}},computed:{...Object(L["b"])("resource",{staticSvgMap:t=>t.staticSvgMap,staticSvgMapSign:t=>t.staticSvgMapSign})}},V=q,G=Object(l["a"])(V,$,O,!1,null,"1bdfccbf",null),E=G.exports,F={name:"GalleryView",components:{SvgPreviewer:E,PageFooter:k,PageHeader:w},data(){return{}},mounted(){this.$store.dispatch("resource/queryAllSvg").then(()=>{this.$store.commit("resource/changeStaticSvgMapSign")})},methods:{handleProjectClick(t){this.$router.push({path:"example",query:{"example-index":this.projectList.indexOf(t)}})}},computed:{...Object(L["b"])("resource",{projectList:t=>t.projectList}),projectGroupMap(){const t=new Map;return t.set("Single chart",[]),t.set("Custom chart",[]),t.set("Vega Line Chart",[]),this.projectList.forEach(e=>{const a=e.group;"Single chart"!==a&&"Custom chart"!==a&&"Vega Line Chart"!==a||t.get(a).push(e)}),t},presetCharts(){var t,e;const a=null!==(t=this.projectGroupMap.get("Single chart"))&&void 0!==t?t:[],i=null!==(e=this.projectGroupMap.get("Vega Line Chart"))&&void 0!==e?e:[];return a.concat(...i)},customCharts(){var t;return null!==(t=this.projectGroupMap.get("Custom chart"))&&void 0!==t?t:[]}}},W=F,H=(a("23d5"),Object(l["a"])(W,T,A,!1,null,"7c62537d",null)),N=H.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"example-view"},[a("el-header",[a("PageHeader")],1),a("el-main",[a("div",{staticStyle:{width:"1000px","margin-left":"auto","margin-right":"auto"}},[a("el-row",[a("div",{staticStyle:{width:"100%",display:"flex"}},[a("h1",{staticClass:"page-text"},[t._v(t._s(t.project.label))]),a("el-button",{staticClass:"back-button",attrs:{type:"text"},nativeOn:{click:function(e){return t.clickBack.apply(null,arguments)}}},[t._v("< Back to gallery")])],1),a("span",{staticClass:"page-text-small"},[t._v(t._s(t.project.chartType))])]),a("el-row",{staticStyle:{display:"flex","flex-wrap":"wrap","margin-top":"20px"}},[a("SvgPreviewer",{staticStyle:{border:"1px solid #cecece","border-radius":"4px"},attrs:{project:t.project,height:320,width:500}}),a("div")],1),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("h2",{staticClass:"title-text"},[t._v("Link to Original Video")]),a("a",{staticClass:"content-text",attrs:{href:t.galleryInfo.link}},[t._v(t._s(t.galleryInfo.videoName))])]),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("h2",{staticClass:"title-text"},[t._v("Narration")]),a("div",{staticClass:"content-text"},[t._v(t._s(t.galleryInfo.transcript))])]),a("el-row",[a("h2",{staticClass:"title-text"},[t._v("Creation Process")]),a("video",{staticClass:"local-video",attrs:{src:"./data/video/V"+(t.projectIndex+1)+"_1.mp4",controls:"",width:"100%",height:"100%"}})]),a("el-row",[a("h2",{staticClass:"title-text"},[t._v("Final Version")]),a("video",{staticClass:"local-video",attrs:{src:"./data/video/V"+(t.projectIndex+1)+"_2.mp4",controls:"",width:"100%",height:"100%"}})])],1)]),a("el-footer",[a("PageFooter")],1)],1)},B=[],U={name:"ExampleView",components:{SvgPreviewer:E,PageFooter:k,PageHeader:w},data(){return{projectIndex:-1,project:{}}},mounted(){let t=1;try{var e;t=parseInt(null!==(e=this.$route.query["example-index"])&&void 0!==e?e:""+t)}catch(a){console.log(a)}this.projectIndex=t,this.project=this.projectList[this.projectIndex],this.$store.dispatch("resource/queryAllSvg").then(()=>{this.$store.commit("resource/changeStaticSvgMapSign")})},methods:{clickBack(){this.$router.push("gallery")},clickLaunch(){this.$router.push({path:"editor",query:{"example-index":this.projectIndex}})}},watch:{},computed:{...Object(L["b"])("resource",{projectList:t=>t.projectList,galleryList:t=>t.galleryList}),galleryInfo(){var t;return this.project&&null!==(t=this.galleryList.find(t=>t.id===this.project.id))&&void 0!==t?t:{}}}},z=U,R=(a("e8a6"),Object(l["a"])(z,D,B,!1,null,"5527173d",null)),Z=R.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-view"},[t._m(0),a("el-row",{staticClass:"main-container"},[a("el-col",{staticClass:"upload-container"},[a("div",{staticClass:"title-text-container"},[a("span",{staticClass:"title-text"},[t._v("Data Upload")])]),a("SelectColumnPanel")],1),a("el-col",{staticClass:"generation-container"},[a("div",{staticClass:"title-text-container",staticStyle:{background:"#FEF7F2"}},[a("span",{staticClass:"title-text",staticStyle:{color:"#F5590D"}},[t._v("Generation")])]),a("el-button",{staticClass:"upload-btn",attrs:{plain:""}},[t._v("Live")])],1)],1)],1)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-container"},[a("span",{staticClass:"header-text",attrs:{title:"Live Chart"}},[t._v("Live Chart")])])}],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select-container"},[a("span",[t._v("Select Columns")]),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{property:"date",label:"日期",width:"120"}}),a("el-table-column",{attrs:{property:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{property:"address",label:"地址"}})],1),a("el-button",{staticClass:"upload-btn",attrs:{plain:""}},[t._v("Live")])],1)},Q=[],X={name:"SelectColumnPanel",data(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentRow:null}},methods:{},mounted(){},watch:{},computed:{}},tt=X,et=(a("fef3"),Object(l["a"])(tt,Y,Q,!1,null,"27202780",null)),at=et.exports,it={name:"LiveView",components:{SelectColumnPanel:at},data(){return{}},methods:{},mounted(){},computed:{}},rt=it,nt=(a("e13f"),Object(l["a"])(rt,K,J,!1,null,"4d510832",null)),st=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-view"},[a("el-header",{staticClass:"head-container"},[a("span",{staticClass:"header-text",attrs:{title:"Live Chart"}},[t._v("Live Chart")])]),a("el-main",{staticClass:"main-container"},[a("el-col",{staticClass:"upload"},[a("el-upload",{staticClass:"upload-data",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"",limit:1,"on-exceed":t.handleExceed,"file-list":t.fileList}},[a("el-button",{staticClass:"upload-btn",attrs:{plain:""}},[t._v("Data Upload")])],1),a("span",{staticClass:"main-text"},[t._v("Don't have data? Try any of the files below.")]),a("el-row",[a("el-button",{staticClass:"data-btn",attrs:{size:"mini"},nativeOn:{click:function(e){return t.clickLive.apply(null,arguments)}}},[t._v("a.csv")]),a("el-button",{staticClass:"data-btn",attrs:{size:"mini"}},[t._v("b.csv")]),a("el-button",{staticClass:"data-btn",attrs:{size:"mini"}},[t._v("c.csv")]),a("el-button",{staticClass:"data-btn",attrs:{size:"mini"}},[t._v("d.csv")])],1)],1)],1)],1)},ct=[],lt={name:"UploadView",components:{},data(){return{}},methods:{clickLive(){console.log(this.$route),"/live"!==this.$route.path&&this.$router.push("live")}},mounted(){},computed:{}},dt=lt,ut=(a("f3ca"),Object(l["a"])(dt,ot,ct,!1,null,"7907a5c4",null)),pt=ut.exports;const ht=[{path:"/homepage",component:P},{path:"/gallery",component:N},{path:"/example",component:Z},{path:"/upload",component:pt},{path:"/live",component:st},{path:"/",redirect:"/homepage"}];var gt=new r["a"]({mode:"hash",routes:ht}),mt=a("5c96"),vt=a.n(mt),ft=a("bc3a"),yt=a.n(ft);function wt(t,e,a){let i="./data/project/"+t;yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}function bt(t,e,a){let i="./data/svg/"+t;return yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}function St(t,e,a){let i="./data/transcript/"+t;return yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}function _t(t,e,a){let i="./data/audio/"+t;return yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}function xt(t,e,a){let i="./data/target-v2/"+t;return yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}function jt(t,e,a){let i="./data/linking/"+t;return yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}function kt(t,e,a){let i="./data/insight/"+t;return yt.a.get(i).then(t=>{e(t)}).catch(t=>{a(t)})}var Mt=a("5e48"),Ct=a.n(Mt),It=[{id:"australia-fire-example1",label:"Australia Fire",group:"Single chart"},{id:"accounting-of-pirates-example1",label:"Accounting of Pirates",group:"Single chart"},{id:"commute-mode-example1",label:"Commute Mode",group:"Single chart"},{id:"house-prices-example1",label:"House Prices",group:"Single chart"},{id:"army-military-comparison-example1",label:"GDP Comparison",group:"Single chart"},{id:"sat-score-example1",label:"SAT Score",group:"Single chart"},{id:"scottish-independence-referendum-example1",label:"Scottish Independence Referendum",group:"Single chart"},{id:"share-of-profits-example1",label:"Share of Profits",group:"Single chart"},{id:"shortage-of-water-example1",label:"Shortage of Water",group:"Single chart"},{id:"transportation-mode-example1",label:"Transportation Mode",group:"Single chart"},{id:"wealth-inequality-example1",label:"Wealth Inequality",group:"Single chart"}],Pt=[{id:"australia-fire-example1",videoName:"Why does climate change make wildfires worse?",link:"https://youtu.be/mypEs1SBAUg?t=197",transcript:"In 2019, human-caused and out-of-control fires burned 976200 hectares of the Amazon rainforest. That's the third-highest increase in the rate of deforestation in the Amazon's history. At a 30% jump from the prior year, second only to 1995, which was 95% and 1998 which was 31%."},{id:"accounting-of-pirates-example1",videoName:"How Somalia’s Pirates Make Money",link:"https://youtu.be/dZh0B8AYxac?t=389",transcript:"First, investors get their guaranteed cut of at least 30%. The port, who looked the other way while they parked the ship, gets 5-10%. And the rest is split between the attackers, with a bonus of around $10,000 for being first to board the ship."},{id:"commute-mode-example1",videoName:"Why American public transit is so bad | 2020 Election",link:"https://youtu.be/-ZDZtBRTyeI?t=80",transcript:"The most common American commute is actually from suburb to suburb; routes that public transit in the US usually doesn’t serve. It’s one reason that the overwhelming majority of Americans get to work by driving alone. Most Americans don’t rely on public transit, making it better is rarely a top political priority, which makes things even harder for the people who do rely on neglected transit systems."},{id:"house-prices-example1",videoName:"Why are houses so expensive?",link:"https://youtu.be/vhAXp0xzMFg?t=189",transcript:"Here is a line chart."},{id:"army-military-comparison-example1",videoName:"China vs Japan - Who Would Win - Army / Military Comparison",link:"https://youtu.be/eBV4GmK4kO4?t=33",transcript:"The USA has the world's highest GDP of around 18.5 trillion dollars. It's followed by China with a nominal GDP of 11.8 trillion dollars, and then Japan with a GDP of around 4.8 trillion dollars. The European Union would take second place, but the EU is a combination of 28 states."},{id:"sat-score-example1",videoName:"The problem with America's college entrance exam",link:"https://youtu.be/WjVVwMGJ9S8?t=334",transcript:"Here's a chart of the average SAT scores by family income. Students whose families earn less than $20,000 score around 890 -- way below average. And as we move up the income brackets, students score higher and higher. The wealthiest students -- whose parents earn more than $200,000 -- score an average of 1150."},{id:"scottish-independence-referendum-example1",videoName:"Scottish independence referendum 2014 explained | Guardian Animations",link:"https://youtu.be/zIeVmqVB9pQ?t=29",transcript:"Didn't you just call Scotland a country? Isn't Scotland already a country? The definitive answer to that question is: sort of. Technically Scotland is a country within a country known as the United Kingdom. Scotland may have its own church, its own legal system, its own professional soccer league and its own dietary idiosyncrasies, but it’s still part of the UK, which also includes the countries of England, Wales and Northern Ireland."},{id:"share-of-profits-example1",videoName:"How American CEOs got so rich",link:"https://youtu.be/ylLTMYt24lA?t=299",transcript:"General Motor, Volkswagen and Toyota are three of the biggest motor corporations in the world. In this chart, you can see how much of their profits three companies spend on buybacks. GM has the highest buyback during this period, except 2016. Volkswagen hasn’t done any since 2012, and Toyota’s biggest buyback years are roughly the size of GM’s smallest."},{id:"shortage-of-water-example1",videoName:"Dubai's Plan to Outlive Oil",link:"https://youtu.be/-dsM8zPGqa0?t=159",transcript:"In the Middle East, the entire 3.2 million square kilometer peninsula lacks a single natural river. The United States, in comparison, has 250,000. 98.8% of Dubai’s water has to be pumped from the Persian Gulf and desalinated."},{id:"transportation-mode-example1",videoName:"Why American public transit is so bad | 2020 Election",link:"https://youtu.be/-ZDZtBRTyeI?t=243",transcript:"The people who live in these places are less likely than the national average to drive, and more likely to walk, bike, or take transit."},{id:"wealth-inequality-example1",videoName:"Wealth Inequality in America",link:"https://youtu.be/QPKKQnijnsM?t=161",transcript:"Here's that idea we asked everyone about something like this curve. This isn't too bad we've got some incentive as the wealthiest folks are now about 10 to 20 times better off than the poorest Americans. But hey even the poor folks aren't actually poor since the poverty line has stayed almost entirely off the chart. We have a super healthy middle class with a smooth transition into wealth, and yes Republicans and Democrats alike chose this curve."}];const Tt=()=>({projectList:It,galleryList:Pt,staticSvgMap:new Map,staticSvgMapSign:!1,projectId:null,projectSpec:null,svgStrMap:new Map,audioStrMap:new Map,transcriptMap:new Map,targetModelMap:new Map,extraProjectSpecMap:new Map,linkingMap:new Map,insightsMap:new Map,audioEl:null}),At={},$t={async queryProjectSpec({commit:t,dispatch:e},a){t("changeProjectId",a),t("initResources");const i=a+".json5";function r(t){const a=[];for(const i of t){const t=i.charts[0].source;if(""!==t){const i=t.trim().replace("./","").replace(".svg","");a.push(e("queryStaticSVG",i)),a.push(e("queryTranscript",i)),a.push(e("queryStaticAudio",i)),a.push(e("queryTargetModel",i)),a.push(e("queryLinking",i))}}return Promise.all(a)}wt(i,e=>{const a="string"===typeof e.data?Ct.a.parse(e.data):e.data;t("changeProjectSpec",a),r(a.scenes).then(()=>{t("project/initProjectView",null,{root:!0})})},t=>{Object(mt["Notification"])({title:"Fail to get sample file.",message:t.message,type:"error"}),console.error(t)})},async queryProjectSpec2({state:t,commit:e,dispatch:a},i){function r(t){const e=[];for(const i of t){const t=i.charts[0].source;if(""!==t){const i=t.trim().replace("./","").replace(".svg","");e.push(a("queryStaticSVG",i)),e.push(a("queryTranscript",i)),e.push(a("queryStaticAudio",i)),e.push(a("queryTargetModel",i)),e.push(a("queryLinking",i)),e.push(a("queryInsights",i))}}return Promise.all(e)}if(t.extraProjectSpecMap.has(i)){const a=i;e("changeProjectId",i),e("initResources");const{svgStr:r,targetModel:n,transcript:s,insights:o,audioStr:c,fakeProjectSpec:l}=t.extraProjectSpecMap.get(i);e("changeProjectSpec",l),e("addSVGStr",{srcId:a,svgStr:r}),e("addStaticSVGStr",{srcId:a,svgStr:r}),e("addTargetModel",{srcId:a,targetModel:n}),e("addTranscript",{srcId:a,transcript:s}),e("addAudioStr",{srcId:a,audioStr:c}),e("addInsights",{srcId:a,insights:o}),e("project/initProjectView",null,{root:!0}),e("editor/changeSceneById",0,{root:!0}),e("editor/initWorkspace",null,{root:!0})}else{e("changeProjectId",i),e("initResources");const t=i+".json5";wt(t,t=>{const a="string"===typeof t.data?Ct.a.parse(t.data):t.data;e("changeProjectSpec",a),r(a.scenes).then(()=>{e("project/initProjectView",null,{root:!0}),e("editor/changeSceneById",0,{root:!0}),e("editor/initWorkspace",!0,{root:!0})})},t=>{Object(mt["Notification"])({title:"Fail to get sample file.",message:t.message,type:"error"}),console.error(t)})}},async queryAllSvg({state:t,commit:e}){t.projectList.forEach(a=>{const i=a.id;if(t.staticSvgMap.has(i))return;const r=i+".json5";wt(r,t=>{const a="string"===typeof t.data?Ct.a.parse(t.data):t.data,r=a.scenes[0],n=r.charts[0].source;if(""!==n){const t=n.trim().replace("./","").replace(".svg",""),a=t+".svg";bt(a,t=>{e("addStaticSVGStr",{projectId:i,svgStr:t.data})},t=>{e("addStaticSVGStr",{projectId:i,svgStr:""}),console.error(t)})}},t=>{console.error(t)})})},queryStaticSVG({commit:t},e){const a=e+".svg";return bt(a,a=>{t("addSVGStr",{srcId:e,svgStr:a.data})},i=>{t("addSVGStr",{srcId:e,svgStr:""}),Object(mt["Notification"])({title:`Chart resource ${a} not found.`,message:i.message,type:"warning"}),console.error(i)})},queryInsights({commit:t},e){const a=e+".json";return kt(a,a=>{t("addInsights",{srcId:e,insights:a.data})},i=>{t("addInsights",{srcId:e,insights:{}}),Object(mt["Notification"])({title:`Insights resource ${a} not found.`,message:i.message,type:"warning"}),console.error(i)})},queryStaticAudio({commit:t},e){const a=e+".txt";return _t(a,a=>{t("addAudioStr",{srcId:e,audioStr:a.data})},a=>{t("addAudioStr",{srcId:e,audioStr:""}),Object(mt["Notification"])({title:"Fail to get static audio.",message:a.message,type:"error"}),console.log(a)})},queryTranscript({commit:t},e){const a=e+".json";return St(a,a=>{t("addTranscript",{srcId:e,transcript:a.data})},i=>{t("addTranscript",{srcId:e,transcript:{}}),Object(mt["Notification"])({title:`Transcript resource ${a} not found.`,message:i.message,type:"warning"}),console.error(i)})},queryTargetModel({commit:t},e){const a=e+".json";return xt(a,a=>{t("addTargetModel",{srcId:e,targetModel:a.data})},i=>{t("addTargetModel",{srcId:e,targetModel:null}),a.includes("vega")||console.log(i)})},queryLinking({commit:t},e){const a=e+".json";return jt(a,a=>{t("addLinking",{srcId:e,linking:a.data})},i=>{t("addLinking",{srcId:e,linking:null}),a.includes("vega")||(Object(mt["Notification"])({title:`Linking ${a} not found.`,message:i.message,type:"warning"}),console.log(i))})}},Ot={changeProjectId(t,e){t.projectId=e},initResources(t){t.projectSpec=null,t.svgStrMap=new Map,t.audioStrMap=new Map,t.transcriptMap=new Map,t.targetModelMap=new Map,t.insightsMap=new Map},changeProjectSpec(t,e){t.projectSpec=e},addSVGStr(t,{srcId:e,svgStr:a}){t.svgStrMap.set(e,a)},addStaticSVGStr(t,{projectId:e,svgStr:a}){t.staticSvgMap.set(e,a),setTimeout(()=>this.commit("resource/changeStaticSvgMapSign"),0)},changeStaticSvgMapSign(t){t.staticSvgMapSign^=!0},addInsights(t,{srcId:e,insights:a}){t.insightsMap.set(e,a)},addAudioStr(t,{srcId:e,audioStr:a}){t.audioStrMap.set(e,a)},addTranscript(t,{srcId:e,transcript:a}){t.transcriptMap.set(e,a)},addTargetModel(t,{srcId:e,targetModel:a}){t.targetModelMap.set(e,a)},addLinking(t,{srcId:e,linking:a}){t.linkingMap.set(e,a)},updateSVGModel(t,{chartId:e,svgStr:a,targetModel:i}){t.svgStrMap.set(e,a),t.targetModelMap.set(e,i)},registerAudioEl(t,e){t.audioEl=e}};var Lt={namespaced:!0,state:Tt,getters:At,actions:$t,mutations:Ot};i["default"].use(L["a"]);var qt=new L["a"].Store({modules:{resource:Lt},strict:!1}),Vt=(a("0fae"),a("b2d6")),Gt=a.n(Vt),Et=a("21a6"),Ft=a("8f94"),Wt=a.n(Ft);a("a7be");const Ht=new i["default"];i["default"].config.productionTip=!1,i["default"].use(r["a"]),i["default"].use(vt.a,{locale:Gt.a}),i["default"].use(Wt.a),i["default"].prototype.$saveAs=Et["saveAs"],new i["default"]({render:t=>t(u),router:gt,store:qt}).$mount("#app")},"66dd":function(t,e,a){},"6c21":function(t,e,a){},"6e8a":function(t,e,a){"use strict";a("b24d")},"77ad":function(t,e,a){"use strict";a("6c21")},"8f35":function(t,e,a){},"8fe0":function(t,e,a){"use strict";a("66dd")},"928c":function(t,e,a){},b24d:function(t,e,a){},e13f:function(t,e,a){"use strict";a("4c89")},e584:function(t,e,a){},e8a6:function(t,e,a){"use strict";a("e584")},ec8b:function(t,e,a){},f3ca:function(t,e,a){"use strict";a("8f35")},fb98:function(t,e,a){"use strict";a("ec8b")},fef3:function(t,e,a){"use strict";a("2f6e")}});
//# sourceMappingURL=app.f860afc8.js.map