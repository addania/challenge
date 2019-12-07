(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(13),s=a.n(l),r=(a(23),a(17)),i=a(10),c=a(34),m=(a(24),a(32)),u=a(33);a(9);function p(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:12},o.a.createElement("h2",{style:{margin:"30px 0px",textAlign:"left",color:"#7F6A93",borderBottom:"0.5px solid #E8E8EA",paddingBottom:"20px"}},"Advertising Data ETL-V Challenge"))))}function g(e){return o.a.createElement("li",null,e.message,o.a.createElement("span",{style:e.styling},e.columns,"s"))}function d(e){for(var t={fontStyle:"italic"},a=[],n=0;n<e.dimensionsColumns.length;n++)a.push(o.a.createElement(g,{message:"Select zero to N ",columns:e.dimensionsColumns[n],styling:t,key:n}));return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:12},o.a.createElement("div",{style:{margin:"30px 0px",textAlign:"left",color:"#828282",fontSize:"18px",borderBottom:"0.5px solid #E8E8EA",paddingBottom:"20px"}},o.a.createElement("ul",{style:{paddingLeft:"20px"}},a),o.a.createElement("p",{style:{fontSize:"12px"}},'[where zero means "All"]'),o.a.createElement("p",null,'Hitting "Apply" filters the chart to show a timeseries for both ',o.a.createElement("span",{style:t},e.metricsColumns[0])," and ",o.a.createElement("span",{style:t},e.metricsColumns[1])," for given ",o.a.createElement("span",{style:t},e.dimensionsColumns[0],"s")," and ",o.a.createElement("span",{style:t},e.dimensionsColumns[1],"s")," - logical AND")))))}function f(){var e={margin:"30px 0px",textAlign:"left",color:"#8DA1B9"};return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:4},o.a.createElement("h2",{style:e},"Filter")),o.a.createElement(u.a,{sm:8},o.a.createElement("h2",{style:e},"Graph"))))}var E=a(6),h=a.n(E),v=a(15),y=a.n(v),C=a(2),x=a.n(C),A=a(16),D=a.n(A);var b=function(){var e=Object(n.useState)([{Date:"01.01.2019",Datasource:"Facebook Ads",Campaign:"Like Ads",Clicks:274,Impressions:1979},{Date:"01.01.2019",Datasource:"Facebook Ads",Campaign:"Offer Campaigns - Conversions",Clicks:10245,Impressions:764627},{Date:"01.01.2019",Datasource:"Google Adwords",Campaign:"B2B - Leads",Clicks:7,Impressions:444},{Date:"01.01.2019",Datasource:"Google Adwords",Campaign:"GDN Prospecting - App - Prio 1 Offer",Clicks:16,Impressions:12535},{Date:"20.01.2019",Datasource:"Google Adwords",Campaign:"GDN Prospecting - App - Prio 1 Offer",Clicks:25,Impressions:10535}]),t=Object(i.a)(e,2),a=t[0],l=(t[1],Object(n.useState)([])),s=Object(i.a)(l,2);s[0],s[1],console.log(JSON.stringify(a));var m,u=(m=a,Object.keys(m[0]));console.log("tableColumns",u);var g=function(e){for(var t=[],a=0;a<e.length;a++){var n=Object(r.a)({},e[a]),o=e[a].Date,l=o.slice(6,10),s=o.slice(3,5),i=o.slice(0,2),c=new Date(l+"-"+s+"-"+i);n.Date=c,t.push(n)}return t}(a);console.log("dataWithDateFormat",g);var E=function(e){return h.a.sortBy(e,["Date","Datasource"])}(g);console.log("sorted data",E);var v=function(e,t){for(var a=[],n=0;n<t.length;n++){var o=t[n];h.a.isNumber(e[0][o])&&a.push(o)}return a}(E,u);console.log("metrics",v);var C=function(e,t){for(var a=[],n=0;n<t.length;n++){var o=t[n];h.a.isString(e[0][o])&&a.push(o)}return a}(E,u);console.log("dimension",C);var A=function(e,t){for(var a=[],n=0;n<t.length;n++){var o=t[n];h.a.isDate(e[0][o])&&a.push(o)}return a}(E,u);console.log("dates",A);var b={chart:{type:"spline"},xAxis:{categories:["2019-01-01","2019-02-01","2019-03-01","2019-04-01","2019-05-01","2019-06-01"]},yAxis:[{labels:{format:"{value}",type:"datetime",style:{color:x.a.getOptions().colors[0]}},title:{text:"Clicks",style:{color:x.a.getOptions().colors[0]}},opposite:!1},{gridLineWidth:0,title:{text:"Impressions",style:{color:x.a.getOptions().colors[1]}},labels:{format:"{value}",style:{color:x.a.getOptions().colors[1]}},opposite:!0}],title:{text:"Datasources"+C,align:"left"},series:[{name:"Clicks",data:[12,4,3,4,4,4]},{name:"Impressions",yAxis:1,data:[10,20,30,40,30,60]}]};return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(p,null),o.a.createElement(d,{dimensionsColumns:C,metricsColumns:v}),o.a.createElement(f,null),o.a.createElement(y.a,{onChange:function(){return 0},data:[{value:"One",selected:!0},{value:"Two"},{value:"Three"}],multiple:!0}),o.a.createElement(D.a,{highcharts:x.a,options:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8b018960.chunk.js.map