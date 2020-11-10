(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t),t.default={system_header:"The weather",system_description:"Current weather and forecast",button_search:"Search",button_clear:"Clear",input_search_placeholder:"City Name",search_city_first:"Search city first",feels_like:"Feels Like"}},16:function(e,t,c){"use strict";c.r(t),t.default={system_header:"\u63a2\u7d22\u6c23\u8c61",system_description:"\u76ee\u524d\u5929\u6c23\u6982\u6cc1\u8207\u9810\u5831",button_search:"\u67e5\u8a62",button_clear:"\u6e05\u9664",input_search_placeholder:"\u57ce\u5e02\u540d\u7a31",search_city_first:"\u641c\u5c0b\u57ce\u5e02\u5929\u6c23",feels_like:"\u9ad4\u611f"}},17:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(6),r=c.n(s),i=(c(13),c(2)),l=c(4),o=c.n(l),d=c(7),u=Object(a.createContext)({t:function(){return""},getLocale:function(){},setLocale:function(){}}),h=function(e){var t=Object(a.useState)("zh-TW"),c=Object(i.a)(t,2),s=c[0],r=c[1],l={t:function(t){return e.translations[s][t]},getLocale:function(){return s},setLocale:function(e){return r(e)}};return Object(n.jsx)(u.Provider,{value:l,children:e.children})};var j=function(){return Object(a.useContext)(u)},b=(c(5),function(e){var t=j(),c=t.t,s=t.getLocale,r=Object(a.useState)(!1),l=Object(i.a)(r,2),u=l[0],h=l[1],b=Object(a.useState)(""),m=Object(i.a)(b,2),x=m[0],g=m[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),O=f[0],w=f[1],v=Object(a.useState)(""),y=Object(i.a)(v,2),N=y[0],_=y[1],k=Object(a.useState)(""),L=Object(i.a)(k,2),S=L[0],C=L[1],z=Object(a.useState)(""),T=Object(i.a)(z,2),W=T[0],K=T[1],M=Object(a.useState)([]),R=Object(i.a)(M,2),B=R[0],E=R[1];Object(a.useEffect)((function(){0!==e.coord.length&&F(e)}),[e]);var F=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="zh-TW"===s()?"zh_tw":"en",fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lng,"&appid=").concat(t.apiKey,"&units=metric&lang=").concat(c)).then((function(e){return e.json()})).then((function(e){g(e.current.feels_like),w(e.current.temp),_(e.current.weather[0].description),C(e.current.weather[0].main),K(e.current.weather[0].icon),E(e.daily.slice(1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=new Date(1e3*e),c=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"".concat(c,"/").concat(n,"/").concat(a)};return Object(n.jsx)(n.Fragment,{children:0===e.city.length?Object(n.jsx)("h3",{className:"text-gray-100",children:c("search_city_first")}):Object(n.jsxs)("div",{className:"mx-auto max-w-full rounded overflow-hidden shadow-lg md:px-20 sm:py-6 md:py-8 sm:px-8 bg-indigo-200",children:[Object(n.jsxs)("div",{className:"sm:flex",children:[Object(n.jsxs)("div",{className:"sm:w-1/2 lg:w-2/5",children:[Object(n.jsxs)("h2",{className:"mt-6 mb-5",children:[e.flag,"\xa0",e.city]}),Object(n.jsxs)("h3",{children:[O," \u2103"]}),Object(n.jsxs)("h3",{children:[c("feels_like"),"\xa0",x,"\xa0\u2103"]})]}),Object(n.jsxs)("div",{className:"sm:w-1/2 lg:w-2/5",children:[Object(n.jsx)("img",{className:"inline object-center",width:"40",alt:S,src:"http://openweathermap.org/img/wn/".concat(W,"@2x.png")}),Object(n.jsx)("h3",{children:N})]}),Object(n.jsx)("div",{className:"lg:w-1/5 flex items-end justify-end align-bottom",children:Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:"text-gray-500",onClick:function(){h(!u)},children:u?Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}):Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})})})]}),u?Object(n.jsx)("div",{className:"mt-8",children:Object(n.jsx)("ul",{className:"inline-grid sm:gap-y-3 md:grid-cols-7 md:gap-x-1 lg:gap-x-3",children:B&&B.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"sm:flex sm:items-center md:block md:text-xs lg:text-base",children:[Object(n.jsx)("p",{children:D(e.dt)}),Object(n.jsx)("img",{className:"inline object-center",alt:e.weather[0].main,src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),Object(n.jsx)("p",{children:e.weather[0].description}),Object(n.jsxs)("p",{children:[e.temp.day," \u2103"]}),Object(n.jsxs)("p",{className:"sm:ml-3 sm:text-base md:text-sm lg:text-sm xl:text-base",children:[c("feels_like"),"\xa0",e.feels_like.day,"\xa0\u2103"]})]})},t)}))})}):null]})})}),m=function(e){var t=j(),c=t.t,s=t.getLocale,r=Object(a.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1];return Object(n.jsxs)("div",{className:"px-4 py-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6",children:[Object(n.jsx)("div",{className:"col-span-6 sm:col-span-4",children:Object(n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:c("input_search_placeholder"),value:o,onChange:function(e){d(e.target.value)}})}),Object(n.jsx)("button",{className:"py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out",onClick:function(){if(0!==o.length){var t="en"===s()?"en":"native";fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(o,"&key=").concat(e.apiKey,"&language=").concat(t)).then((function(e){return e.json()})).then((function(t){e.setLocation({coord:t.results[0].geometry,cityName:t.results[0].formatted,flag:t.results[0].annotations.flag})}))}},children:c("button_search")}),Object(n.jsx)("button",{className:"bg-white hover:bg-indigo-100 text-indigo-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",onClick:function(){d("")},children:c("button_clear")})]})},x=function(){var e=j(),t=e.t,c=e.getLocale,s=e.setLocale,r=Object(a.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1],u=Object(a.useState)([]),h=Object(i.a)(u,2),x=h[0],g=h[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),O=f[0],w=f[1];return Object(n.jsxs)("div",{className:"container px-8 mx-auto text-center items-center",children:[Object(n.jsxs)("div",{className:"text-right",children:[Object(n.jsx)("span",{href:"#",className:"no-underline ".concat("zh-TW"===c()?"text-gray-100":"text-blue-500 hover:underline cursor-pointer"),onClick:function(){return s("zh-TW")},children:"\u4e2d\u6587"}),Object(n.jsx)("span",{className:"text-gray-300",children:"\xa0|\xa0"}),Object(n.jsx)("span",{className:"no-underline ".concat("en"===c()?"text-gray-100":"text-blue-500 hover:underline cursor-pointer"),onClick:function(){return s("en")},children:"English"})]}),Object(n.jsxs)("div",{className:"py-12",children:[Object(n.jsx)("div",{className:"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("h1",{className:"mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10 uppercase ",children:t("system_header")}),Object(n.jsx)("p",{className:"mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto",dangerouslySetInnerHTML:{__html:t("system_description")}})]})}),Object(n.jsxs)("div",{className:"mt-10",children:[Object(n.jsx)(m,{setLocation:function(e){d(e.cityName),g(e.coord),w(e.flag)},apiKey:"6b13d976714f488792b849709ed745b8"}),Object(n.jsx)(b,{city:o,coord:x,flag:O,apiKey:"5a41d35c009c3bb73c52b6817d03b311"})]})]})]})},g={en:c(15).default,"zh-TW":c(16).default};r.a.render(Object(n.jsx)(h,{locales:["en","zh-TW"],translations:g,children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ea1c4007.chunk.js.map