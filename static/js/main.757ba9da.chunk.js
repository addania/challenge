(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),s=(a(18),a(12)),i=a(8),c=a(25),m=(a(19),a(23)),u=a(24);a(7);function p(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(u.a,{sm:12},l.a.createElement("h2",{style:{margin:"30px 0px",textAlign:"left",color:"#7F6A93",borderBottom:"0.5px solid #E8E8EA",paddingBottom:"20px"}},"Advertising Data ETL-V Challenge"))))}function g(e){return l.a.createElement("li",null,e.message,l.a.createElement("span",{style:e.styling},e.columns,"s"))}function d(e){var t={fontStyle:"italic"};return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(u.a,{sm:12},l.a.createElement("div",{style:{margin:"30px 0px",textAlign:"left",color:"#828282",fontSize:"18px",borderBottom:"0.5px solid #E8E8EA",paddingBottom:"20px"}},l.a.createElement("ul",{style:{paddingLeft:"20px"}},l.a.createElement(g,{message:"Select zero to N ",columns:e.dimensionsColumns[0],styling:t}),l.a.createElement(g,{message:"Select zero to N ",columns:e.dimensionsColumns[1],styling:t})),l.a.createElement("p",{style:{fontSize:"12px"}},'[where zero means "All"]'),l.a.createElement("p",null,'Hitting "Apply" filters the chart to show a timeseries for both ',l.a.createElement("span",{style:t},e.metricsColumns[0])," and ",l.a.createElement("span",{style:t},e.metricsColumns[1])," for given ",l.a.createElement("span",{style:t},e.dimensionsColumns[0],"s")," and ",l.a.createElement("span",{style:t},e.dimensionsColumns[1],"s")," - logical AND")))))}function E(){var e={margin:"30px 0px",textAlign:"left",color:"#8DA1B9"};return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(u.a,{sm:4},l.a.createElement("h2",{style:e},"Filter")),l.a.createElement(u.a,{sm:8},l.a.createElement("h2",{style:e},"Graph"))))}var f=a(5),v=a.n(f);var h=function(){var e=Object(n.useState)([{Date:"01.01.2019",Datasource:"Facebook Ads",Campaign:"Like Ads",Clicks:274,Impressions:1979},{Date:"01.01.2019",Datasource:"Facebook Ads",Campaign:"Offer Campaigns - Conversions",Clicks:10245,Impressions:764627},{Date:"01.01.2019",Datasource:"Google Adwords",Campaign:"B2B - Leads",Clicks:7,Impressions:444},{Date:"01.01.2019",Datasource:"Google Adwords",Campaign:"GDN Prospecting - App - Prio 1 Offer",Clicks:16,Impressions:12535},{Date:"20.01.2019",Datasource:"Google Adwords",Campaign:"GDN Prospecting - App - Prio 1 Offer",Clicks:25,Impressions:10535}]),t=Object(i.a)(e,2),a=t[0],o=(t[1],Object(n.useState)([])),r=Object(i.a)(o,2);r[0],r[1],console.log(JSON.stringify(a));var m,u=(m=a,Object.keys(m[0]));console.log("tableColumns",u);var g=function(e){for(var t=[],a=0;a<e.length;a++){var n=Object(s.a)({},e[a]),l=e[a].Date,o=l.slice(6,10),r=l.slice(3,5),i=l.slice(0,2),c=new Date(o+"-"+r+"-"+i);n.Date=c,t.push(n)}return t}(a);console.log("dataWithDateFormat",g);var f=function(e){return v.a.sortBy(e,["Date","Datasource"])}(g);console.log("sorted data",f);var h=function(e,t){for(var a=[],n=0;n<t.length;n++){var l=t[n];v.a.isNumber(e[0][l])&&a.push(l)}return a}(f,u);console.log("metrics",h);var C=function(e,t){for(var a=[],n=0;n<t.length;n++){var l=t[n];v.a.isString(e[0][l])&&a.push(l)}return a}(f,u);console.log("dimension",C);var D=function(e,t){for(var a=[],n=0;n<t.length;n++){var l=t[n];v.a.isDate(e[0][l])&&a.push(l)}return a}(f,u);return console.log("dates",D),l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement(p,null),l.a.createElement(d,{dimensionsColumns:C,metricsColumns:h}),l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.757ba9da.chunk.js.map