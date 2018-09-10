(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{bikW:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),e=a("WyAD"),t=function(){function l(){this.exampleChartType="line"}return l.prototype.ngOnInit=function(){this.barChart(),this.lineChart(),this.doughnutChart(),this.mixedChart(),this.bubbleChart(),this.radarChart(),this.setExample(),this.randomizeData()},l.prototype.radarChart=function(){new e(document.getElementById("radar-chart"),{type:"radar",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"1950",fill:!0,backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(179,181,198,1)",data:[8.77,55.61,21.69,6.62,6.82]},{label:"2050",fill:!0,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(255,99,132,1)",data:[25.48,54.16,7.61,8.06,4.45]}]},options:{title:{display:!0,text:"Distribution in % of world population"},maintainAspectRatio:!1,responsive:!0}})},l.prototype.bubbleChart=function(){new e(document.getElementById("bubble-chart"),{type:"bubble",data:{labels:"Africa",datasets:[{label:["China"],backgroundColor:"rgba(255,221,50,0.2)",borderColor:"rgba(255,221,50,1)",data:[{x:21269017,y:5.245,r:15}]},{label:["Denmark"],backgroundColor:"rgba(60,186,159,0.2)",borderColor:"rgba(60,186,159,1)",data:[{x:258702,y:7.526,r:10}]},{label:["Germany"],backgroundColor:"rgba(0,0,0,0.2)",borderColor:"#000",data:[{x:3979083,y:6.994,r:15}]},{label:["Japan"],backgroundColor:"rgba(193,46,12,0.2)",borderColor:"rgba(193,46,12,1)",data:[{x:4931877,y:5.921,r:15}]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Happiness"}}],xAxes:[{scaleLabel:{display:!0,labelString:"GDP (PPP)"}}]},maintainAspectRatio:!1,responsive:!0}})},l.prototype.mixedChart=function(){new e(document.getElementById("mixed-chart"),{type:"bar",data:{labels:["1900","1950","1999","2050"],datasets:[{label:"Europe",type:"line",borderColor:"#8e5ea2",data:[408,547,675,734],fill:!1},{label:"Africa",type:"line",borderColor:"#3e95cd",data:[133,221,783,2478],fill:!1},{label:"Europe",type:"bar",backgroundColor:"rgba(0,0,0,0.2)",data:[408,547,675,734]},{label:"Africa",type:"bar",backgroundColor:"rgba(0,0,0,0.2)",backgroundColorHover:"#3e95cd",data:[133,221,783,2478]}]},options:{title:{display:!0,text:"Population growth (millions): Europe & Africa"},legend:{display:!1},maintainAspectRatio:!1,responsive:!0}})},l.prototype.doughnutChart=function(){new e(document.getElementById("doughnut-chart"),{type:"doughnut",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"},maintainAspectRatio:!1,responsive:!0}})},l.prototype.lineChart=function(){new e(document.getElementById("line-chart"),{type:"line",data:{labels:[1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],datasets:[{data:[86,114,106,106,107,111,133,221,783,2478],label:"Africa",borderColor:"#3e95cd",fill:!1},{data:[282,350,411,502,635,809,947,1402,3700,5267],label:"Asia",borderColor:"#8e5ea2",fill:!1},{data:[168,170,178,190,203,276,408,547,675,734],label:"Europe",borderColor:"#3cba9f",fill:!1},{data:[40,20,10,16,24,38,74,167,508,784],label:"Latin America",borderColor:"#e8c3b9",fill:!1},{data:[6,3,2,2,7,26,82,172,312,433],label:"North America",borderColor:"#c45850",fill:!1}]},options:{title:{display:!0,text:"World population per region (in millions)"},maintainAspectRatio:!1,responsive:!0}})},l.prototype.barChart=function(){new e(document.getElementById("bar-chart"),{type:"bar",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#3ebb8c","#9092a5","#f36b56","#39a8d0","#fed33d"],data:[2478,5267,734,784,433]}]},options:{legend:{display:!1},title:{display:!0,text:"Predicted world population (millions) in 2050"},maintainAspectRatio:!1,responsive:!0}})},l.prototype.setExample=function(){this.exampleDataSet1=[1,10,5,2,20,30,45],this.exampleDataSet2=[20,30,15,12,21,30,40],this.exampleData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"DataSet1!",fill:!1,backgroundColor:"rgba(144,146,165, 0.8)",borderColor:"rgb(144,146,165)",data:this.exampleDataSet1},{label:"DataSet2!",fill:!0,backgroundColor:"rgb(62,187,140, 0.8)",borderColor:"rgb(62,187,140)",data:this.exampleDataSet2}]},this.exampleChartCanvas=document.getElementById("exampleChart"),this.exampleChart=new e(this.exampleChartCanvas,{type:this.exampleChartType,data:this.exampleData,options:{maintainAspectRatio:!1,responsive:!0}})},l.prototype.updateChartType=function(){this.exampleChart.destroy(),this.exampleChart=new e(this.exampleChartCanvas,{type:this.exampleChartType,data:this.exampleData,options:{maintainAspectRatio:!1,responsive:!0}})},l.prototype.randomizeData=function(){var l=this.exampleDataSet1.map(function(l){return Math.floor(50*Math.random())}),n=this.exampleDataSet2.map(function(l){return Math.floor(40*Math.random())});this.exampleData.datasets[0].data=l,this.exampleData.datasets[1].data=n,this.exampleChart.update()},l}(),r=function(){},o=a("pMnS"),i=a("gMr2"),s=a("QpxQ"),d=a("gIcY"),c=u.Na({encapsulation:0,styles:[".card-body[_ngcontent-%COMP%], .exampleChart[_ngcontent-%COMP%]{  position: relative;   min-height:45vh; }"],data:{}});function p(l){return u.jb(0,[(l()(),u.Pa(0,0,null,null,1,"h2",[["class","heading text-center"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Charts"])),(l()(),u.Pa(2,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Pa(3,0,null,null,5,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),u.Pa(4,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Bar Chart"])),(l()(),u.Pa(6,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(7,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(8,0,null,null,0,"canvas",[["id","bar-chart"]],null,null,null,null,null)),(l()(),u.Pa(9,0,null,null,5,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),u.Pa(10,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Line Chart"])),(l()(),u.Pa(12,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(13,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(14,0,null,null,0,"canvas",[["id","line-chart"]],null,null,null,null,null)),(l()(),u.Pa(15,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Pa(16,0,null,null,5,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),u.Pa(17,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Doughnut Chart"])),(l()(),u.Pa(19,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(20,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(21,0,null,null,0,"canvas",[["id","doughnut-chart"]],null,null,null,null,null)),(l()(),u.Pa(22,0,null,null,5,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),u.Pa(23,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Mix Chart (Bar and Line)"])),(l()(),u.Pa(25,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(26,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(27,0,null,null,0,"canvas",[["id","mixed-chart"]],null,null,null,null,null)),(l()(),u.Pa(28,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Pa(29,0,null,null,5,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),u.Pa(30,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Bubble Chart"])),(l()(),u.Pa(32,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(33,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(34,0,null,null,0,"canvas",[["id","bubble-chart"]],null,null,null,null,null)),(l()(),u.Pa(35,0,null,null,5,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),u.Pa(36,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Radar Chart"])),(l()(),u.Pa(38,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(39,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(40,0,null,null,0,"canvas",[["id","radar-chart"]],null,null,null,null,null)),(l()(),u.Pa(41,0,null,null,1,"h4",[["class","mt-4"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Example"])),(l()(),u.Pa(43,0,null,null,30,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Pa(44,0,null,null,29,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.Pa(45,0,null,null,25,"div",[["class","form-group row mb-4"]],null,null,null,null,null)),(l()(),u.Pa(46,0,null,null,2,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),u.Pa(47,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Select Type"])),(l()(),u.Pa(49,0,null,null,18,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),u.Pa(50,0,null,null,17,"ng-select",[["class","ng-select"],["placeholder","Select"],["role","listbox"]],[[2,"ng-select-single",null],[2,"ng-select-typeahead",null],[2,"ng-select-multiple",null],[2,"ng-select-taggable",null],[2,"ng-select-searchable",null],[2,"ng-select-opened",null],[2,"ng-select-disabled",null],[2,"ng-select-filtered",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"ngModelChange"],[null,"keydown"]],function(l,n,a){var e=!0,t=l.component;return"keydown"===n&&(e=!1!==u.Za(l,51).handleKeyDown(a)&&e),"change"===n&&(e=!1!==t.updateChartType()&&e),"ngModelChange"===n&&(e=!1!==(t.exampleChartType=a)&&e),e},i.b,i.a)),u.Oa(51,4964352,null,11,s.b,[[8,null],[8,null],s.a,s.d,u.k,u.h,s.j],{items:[0,"items"],placeholder:[1,"placeholder"]},{changeEvent:"change"}),u.fb(335544320,1,{optionTemplate:0}),u.fb(335544320,2,{optgroupTemplate:0}),u.fb(335544320,3,{labelTemplate:0}),u.fb(335544320,4,{multiLabelTemplate:0}),u.fb(335544320,5,{headerTemplate:0}),u.fb(335544320,6,{footerTemplate:0}),u.fb(335544320,7,{notFoundTemplate:0}),u.fb(335544320,8,{typeToSearchTemplate:0}),u.fb(335544320,9,{loadingTextTemplate:0}),u.fb(335544320,10,{tagTemplate:0}),u.fb(603979776,11,{ngOptions:1}),u.ab(63,7),u.eb(1024,null,d.m,function(l){return[l]},[s.b]),u.Oa(65,671744,null,0,d.r,[[8,null],[8,null],[8,null],[6,d.m]],{model:[0,"model"]},{update:"ngModelChange"}),u.eb(2048,null,d.n,null,[d.r]),u.Oa(67,16384,null,0,d.o,[[4,d.n]],null,null),(l()(),u.Pa(68,0,null,null,2,"div",[["class","col-sm-4 mt-3 mt-sm-0"]],null,null,null,null,null)),(l()(),u.Pa(69,0,null,null,1,"button",[["class","btn btn-secondary "]],null,[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.randomizeData()&&u),u},null,null)),(l()(),u.hb(-1,null,["Randomize !"])),(l()(),u.Pa(71,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.Pa(72,0,null,null,1,"div",[["class","exampleChart"]],null,null,null,null,null)),(l()(),u.Pa(73,0,null,null,0,"canvas",[["id","exampleChart"]],null,null,null,null,null)),(l()(),u.Pa(74,0,null,null,5,"p",[["class","mt-4 d-block text-muted"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["for more info: "])),(l()(),u.Pa(76,0,null,null,3,"a",[["href","https://www.chartjs.org/"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["Chartjs "])),(l()(),u.Pa(78,0,null,null,1,"i",[["class","material-icons"],["style","font-size: .9rem"]],null,null,null,null,null)),(l()(),u.hb(-1,null,["launch"]))],function(l,n){var a=n.component;l(n,51,0,l(n,63,0,"line","horizontalBar","bar","radar","polarArea","doughnut","pie"),"Select"),l(n,65,0,a.exampleChartType)},function(l,n){l(n,50,1,[!u.Za(n,51).multiple,u.Za(n,51).typeahead,u.Za(n,51).multiple,u.Za(n,51).addTag,u.Za(n,51).searchable,u.Za(n,51).isOpen,u.Za(n,51).disabled,u.Za(n,51).filtered,u.Za(n,67).ngClassUntouched,u.Za(n,67).ngClassTouched,u.Za(n,67).ngClassPristine,u.Za(n,67).ngClassDirty,u.Za(n,67).ngClassValid,u.Za(n,67).ngClassInvalid,u.Za(n,67).ngClassPending])})}var b=u.La("app-charts",t,function(l){return u.jb(0,[(l()(),u.Pa(0,0,null,null,1,"app-charts",[],null,null,null,p,c)),u.Oa(1,114688,null,0,t,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=a("Ip0R"),m=a("ZYCi");a.d(n,"ChartsModuleNgFactory",function(){return g});var g=u.Ma(r,[],function(l){return u.Wa([u.Xa(512,u.j,u.Ba,[[8,[o.a,b]],[3,u.j],u.v]),u.Xa(4608,h.m,h.l,[u.s,[2,h.w]]),u.Xa(4608,d.y,d.y,[]),u.Xa(1073742336,h.c,h.c,[]),u.Xa(1073742336,d.w,d.w,[]),u.Xa(1073742336,d.j,d.j,[]),u.Xa(1073742336,s.c,s.c,[]),u.Xa(1073742336,m.r,m.r,[[2,m.x],[2,m.n]]),u.Xa(1073742336,r,r,[]),u.Xa(256,s.d,s.e,[]),u.Xa(256,s.a,{notFoundText:"No items found",typeToSearchText:"Type to search",addTagText:"Add item",loadingText:"Loading...",clearAllText:"Clear all",disableVirtualScroll:!1},[]),u.Xa(1024,m.j,function(){return[[{path:"",component:t}]]},[])])})}}]);