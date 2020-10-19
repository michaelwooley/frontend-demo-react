(this["webpackJsonpfrontend-demo-react"]=this["webpackJsonpfrontend-demo-react"]||[]).push([[0],{22:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n,r,i=a(0),s=a.n(i),o=a(13),c=a.n(o),l="https://github.com/michaelwooley/frontend-demo-react";!function(e){e[e.mobile=768]="mobile",e[e.tablet=769]="tablet",e[e.desktop=1024]="desktop",e[e.widescreen=1216]="widescreen",e[e.fullhd=1408]="fullhd"}(n||(n={})),function(e){e.STATIONS="bhw-react-stations"}(r||(r={}));a(27);var m=function(e){var t=Object.assign({},e);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"spacer"}),s.a.createElement("footer",Object.assign({className:"footer"},t),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-3"},s.a.createElement("h6",{className:"is-size-5"},s.a.createElement("strong",null,"Weather demo")," by"," ",s.a.createElement("a",{href:"mailto:wm.wooley@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Michael Wooley"),"."),s.a.createElement("ul",{className:"is-size-7"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/michaelwooley/frontend-demo-react",target:"_blank",rel:"noopener noreferrer"},"Source code")," ","licensed"," ",s.a.createElement("a",{href:"https://opensource.org/licenses/mit-license.php",target:"_blank",rel:"noopener noreferrer"},"MIT"),"."))),s.a.createElement("div",{className:"column is-3"},s.a.createElement("h6",{className:"is-size-5"},s.a.createElement("strong",null,"Contribute")," on GitHub"),s.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=michaelwooley&repo=frontend-demo-react&type=star&count=false&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub Star"}),s.a.createElement("br",null),s.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=michaelwooley&type=follow&count=true&size=large",frameBorder:"0",scrolling:"0",width:"230",height:"30",title:"GitHub Follow"})),s.a.createElement("div",{className:"column is-3"},s.a.createElement("h6",{className:"is-size-5"},s.a.createElement("strong",null,"Credits")),s.a.createElement("ul",{className:"is-size-7"},s.a.createElement("li",null,"Weather data drawn from"," ",s.a.createElement("a",{href:"https://www.weather.gov/documentation/services-web-api#/",target:"_blank",rel:"noopener noreferrer"},"National Weather Service (weather.gov)")),s.a.createElement("li",null,"Built with"," ",s.a.createElement("a",{href:"reactjs.org",target:"_blank",rel:"noopener noreferrer"},"react.js")),s.a.createElement("li",null,"UI by"," ",s.a.createElement("a",{href:"https://bulma.io",target:"_blank",rel:"noopener noreferrer"},"bulma")),s.a.createElement("li",null,"Icons by"," ",s.a.createElement("a",{href:"https://fontawesome.com",target:"_blank",rel:"noopener noreferrer"},"Font Awesome")))),s.a.createElement("div",{className:"column"}),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("h6",{className:"is-size-5"},s.a.createElement("strong",null,"Share")),s.a.createElement("ul",{className:"is-size-7"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://twitter.com/home?status=".concat(l," A free weather app, written in svelte!"),target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"icon"}," ",s.a.createElement("i",{className:"fab fa-twitter"})," "),s.a.createElement("span",null,"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(l,"&title=").concat("Weather demo","&summary=A free weather app, written in svelte!&source="),target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"icon"}," ",s.a.createElement("i",{className:"fab fa-linkedin"})," "),s.a.createElement("span",null,"LinkedIn"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(l),target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"icon"}," ",s.a.createElement("i",{className:"fab fa-facebook"})," "),s.a.createElement("span",null,"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:info@example.com?body=".concat(l),target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"icon"}," ",s.a.createElement("i",{className:"fas fa-envelope"})," "),s.a.createElement("span",null,"Email"))))))))},u=s.a.createContext({modals:{cities:!1},toggle:function(e){return null}}),d=s.a.createContext({stations:[],onAdd:function(){return null},onRemove:function(){return null},onMoveUp:function(){return null},onMoveDown:function(){return null}}),h=a(3),p=(a(28),function(e){var t=e.title,a=e.description,n=e.icon,r=e.expand,i=void 0!==r&&r,o=e.inline,c=void 0===o||o,l=e.onToggle,m=Object(h.a)(e,["title","description","icon","expand","inline","onToggle"]);return s.a.createElement("div",Object.assign({className:"city-block-placeholder box mb-4 mt-4 ".concat(i?"expanded":"")},m,{onClick:l,title:l&&"Click here or the on the button in the top-right to edit your cities."}),s.a.createElement("div",{className:"content has-text-centered"},!c&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:"title is-2"},s.a.createElement("span",{className:"icon is-large"},s.a.createElement("i",{className:n}))),s.a.createElement("br",null)),s.a.createElement("h2",{className:"title is-4"},c&&s.a.createElement("span",{className:"icon pr-2"},s.a.createElement("i",{className:n})),s.a.createElement("span",null,t)),s.a.createElement("p",null,a)))}),f=a(4),b=(a(29),[{id:"KLUK",city:"Cincinnati, OH",name:"Cincinnati Municipal Airport Lunken Field"},{id:"KIND",name:"Indianapolis International Airport",city:"Indianapolis, IN"},{id:"KSDF",name:"Louisville, Standiford Field",city:"Louisville, KY"},{id:"KLEX",name:"Lexington Blue Grass Airport",city:"Lexington, KY"}]);function v(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function E(){return function(){var e=Object(i.useState)(v()),t=Object(f.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){function e(){n(v())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}().width>=n.tablet}var g,w=function(e){var t=e.currentComponent,a=e.chartComponent,n=Object(i.useState)("current"),r=Object(f.a)(n,2),o=r[0],c=r[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tabs as-button is-centered is-small"},s.a.createElement("ul",null,[{id:"current",icon:"fas fa-temperature",label:"Current"},{id:"chart",icon:"fas fa-chart-line",label:"Charts"}].map((function(e){return s.a.createElement("li",{key:e.id,className:o===e.id?"is-active":""},s.a.createElement("button",{className:"button is-small",onClick:function(){return c(e.id)}},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:e.icon,"aria-hidden":"true"})),s.a.createElement("span",null,e.label)))})))),s.a.createElement("div",null,"current"===o&&t,"chart"===o&&a))},N=function(e){var t=e.station,a=e.isOpen,n=void 0!==a&&a,r=e.onToggleOpen,i=e.currentComponent,o=e.chartComponent,c=e.dropdownComponent,l=Object(h.a)(e,["station","isOpen","onToggleOpen","currentComponent","chartComponent","dropdownComponent"]),m=E();return s.a.createElement("div",Object.assign({className:"city-block mb-2 pb-2",id:t.id},l),s.a.createElement("nav",{className:"level mb-1"},s.a.createElement("div",{className:"level-left"},s.a.createElement("div",{className:"level-item"},s.a.createElement("button",{className:"button is-medium is-white",onClick:function(){return r(t)}},n?s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-chevron-up"})):s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-chevron-down"})),s.a.createElement("span",{className:"has-text-weight-semibold"},t.city)))),s.a.createElement("div",{className:"level-right"},c&&s.a.createElement("div",{className:"level-item"},c))),n&&(m?s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-narrow"},i),s.a.createElement("div",{className:"column"},o)):s.a.createElement(w,{currentComponent:i,chartComponent:o})))},y=a(8),x=a.n(y),k=a(10),O=a(6);a(31);!function(e){e.degF="degF",e.degC="degC",e.degree_angle="degree_(angle)",e.km_h_1="km_h-1",e.Pa="Pa",e.m="m",e.inch="inch",e.percent="percent"}(g||(g={}));var j,C={degF:{link:void 0,name:"Degrees Fahrenheit",abbrev:"\u02da F"},degC:{link:"http://codes.wmo.int/common/unit/degC",name:"Degrees Celsius",abbrev:"\u02da C"},"degree_(angle)":{link:"http://codes.wmo.int/common/unit/degree_(angle)",name:"Degrees (angle)",abbrev:"\u02da"},"km_h-1":{link:"http://codes.wmo.int/common/unit/km_h-1",name:"Kilometers per hour",abbrev:"kph"},Pa:{link:"http://codes.wmo.int/common/unit/Pa",name:"Pascals",abbrev:"Pa"},m:{link:"http://codes.wmo.int/common/unit/m",name:"Meters",abbrev:"m"},inch:{link:void 0,name:"Inches",abbrev:"in."},percent:{link:"http://codes.wmo.int/common/unit/percent",name:"Percent",abbrev:"%"}};!function(e){e.temperature="temperature",e.dewpoint="dewpoint",e.windDirection="windDirection",e.windSpeed="windSpeed",e.windGust="windGust",e.barometricPressure="barometricPressure",e.seaLevelPressure="seaLevelPressure",e.visibility="visibility",e.maxTemperatureLast24Hours="maxTemperatureLast24Hours",e.minTemperatureLast24Hours="minTemperatureLast24Hours",e.precipitationLastHour="precipitationLastHour",e.precipitationLast3Hours="precipitationLast3Hours",e.precipitationLast6Hours="precipitationLast6Hours",e.relativeHumidity="relativeHumidity",e.windChill="windChill",e.heatIndex="heatIndex"}(j||(j={}));var T,M,D=[{id:j.temperature,unit:g.degC,description:"Air temperature.",name:"Temperature",abbrev:"Temp",icon:"fas fa-temperature-high",isDefault:!0,color:"#008FFB"},{id:j.dewpoint,unit:g.degC,description:"A measure of atmospheric moisture. It is the temperature to which air must be cooled in order to reach saturation (assuming air pressure and moisture content are constant). A higher dew point indicates more moisture present in the air. It is sometimes referred to as Dew Point Temperature, and sometimes written as one word (Dewpoint).",name:"Dew point",abbrev:"Dew",icon:"fas fa-mountain",isDefault:!0,color:"#00E396"},{id:j.windDirection,unit:g.degree_angle,description:"The true direction <b>from which</b> the wind is blowing at a given location (i.e., wind blowing from the north to the south is a north wind). It is normally measured in tens of degrees from 10 degrees clockwise through 360 degrees. North is 360 degrees. A wind direction of 0 degrees is only used when wind is calm.",name:"Wind direction",abbrev:"Wind dir.",icon:"fas fa-compass",isDefault:!1,color:"#FEB019"},{id:j.windSpeed,unit:g.km_h_1,description:"The rate at which air is moving horizontally past a given point. It may be a 2-minute average speed (reported as wind speed) or an instantaneous speed (reported as a peak wind speed, wind gust, or squall).",name:"Wind speed",abbrev:"Wind",icon:"fas fa-wind",isDefault:!0,color:"#FF4560"},{id:j.windGust,unit:g.km_h_1,description:"Rapid fluctuations in the wind speed with a variation of 10 knots or more between peaks and lulls. The speed of the gust will be the maximum instantaneous wind speed.",name:"Wind gust",abbrev:"Wind gust",icon:"fas fa-wind",isDefault:!1,color:"#775DD0"},{id:j.barometricPressure,unit:g.Pa,description:"The pressure of the atmosphere as indicated by a barometer.",name:"Barometric pressure",abbrev:"Pressure",icon:"fas fa-weight-hanging",isDefault:!0,color:"#3f51b5"},{id:j.seaLevelPressure,unit:g.Pa,description:"The sea level pressure is the atmospheric pressure at sea level at a given location. When observed at a reporting station that is not at sea level (nearly all stations), it is a correction of the <b>station pressure</b> to sea level. This correction takes into account the standard variation of pressure with height and the influence of temperature variations with height on the pressure. The temperature used in the sea level correction is a twelve hour mean, eliminating diurnal effects. Once calculated, horizontal variations of sea level pressure may be compared for location of high and low pressure areas and fronts.",name:"Sea level pressure",abbrev:"Pressure (Sea)",icon:"fas fa-weight-hanging",isDefault:!1,color:"#03a9f4"},{id:j.visibility,unit:g.m,description:"The distance at which a given standard object can be seen and identified with the unaided eye",name:"Visibility",abbrev:"Viz",icon:"fas fa-eye",isDefault:!0,color:"#4caf50"},{id:j.maxTemperatureLast24Hours,unit:g.degC,description:"Maximum temperature in last 24 hours. The temperature is a measure of the internal energy that a substance contains. This is the most measured quantity in the atmosphere.",name:"Max temperature (24h)",abbrev:"Max Temp.",icon:"fas fa-temperature-high",isDefault:!1,color:"#f9ce1d"},{id:j.minTemperatureLast24Hours,unit:g.degC,description:"Minimum temperature in last 24 hours. The temperature is a measure of the internal energy that a substance contains. This is the most measured quantity in the atmosphere.",name:"Min temperature (24h)",abbrev:"Min Temp.",icon:"fas fa-temperature-low",isDefault:!1,color:"#FF9800"},{id:j.precipitationLastHour,unit:g.m,description:"Total precipitation in the last hour. Total precipitation in the last six hours. The process where water vapor condenses in the atmosphere to form water droplets that fall to the Earth as rain, sleet, snow, hail, etc.",name:"Precipitation in last hour",abbrev:"Rain",icon:"fas fa-cloud-rain",isDefault:!0,color:"#33b2df"},{id:j.precipitationLast3Hours,unit:g.m,description:"Total precipitation in the last three hours. The process where water vapor condenses in the atmosphere to form water droplets that fall to the Earth as rain, sleet, snow, hail, etc.",name:"Precipitation in last three hours",abbrev:"Rain (3h)",icon:"fas fa-cloud-rain",isDefault:!1,color:"#546E7A"},{id:j.precipitationLast6Hours,unit:g.m,description:"Total precipitation in the last six hours. The process where water vapor condenses in the atmosphere to form water droplets that fall to the Earth as rain, sleet, snow, hail, etc.",name:"Precipitation in last six hours",abbrev:"Rain (6h)",icon:"fas fa-cloud-rain",isDefault:!1,color:"#d4526e"},{id:j.relativeHumidity,unit:g.percent,description:"A dimensionless ratio, expressed in percent, of the amount of atmospheric moisture present relative to the amount that would be present if the air were saturated. Since the latter amount is dependent on temperature, relative humidity is a function of both moisture content and temperature. As such, relative humidity by itself does not directly indicate the actual amount of atmospheric moisture present. See dew point.",name:"Relative humidity",abbrev:"Humidity",icon:"fas fa-grin-beam-sweat",isDefault:!0,color:"#13d8aa"},{id:j.windChill,unit:g.degC,description:"Reference to the <b>Wind Chill Factor</b>; increased wind speeds accelerate heat loss from exposed skin, and the wind chill is a measure of this effect. No specific rules exist for determining when wind chill becomes dangerous. As a general rule, the threshold for potentially dangerous wind chill conditions is about -20\xc2\xb0F.",name:"Wind chill",abbrev:"Wind chill",icon:"fas fa-icicles",isDefault:!0,color:"#A5978B"},{id:j.heatIndex,unit:g.degC,description:'The Heat Index (HI) or the "Apparent Temperature" is an accurate measure of how hot it really feels when the Relative Humidity (RH) is added to the actual air temperature.',name:"Heat index",abbrev:"Heat index",icon:"fas fa-fire",isDefault:!0,color:"#4ecdc4"}],S=a(5),A=function(e){var t=e.spec,a=e.stat,n=Object(h.a)(e,["spec","stat"]),r=C[t.unit];return s.a.createElement("div",Object.assign({className:"columns current-stat ml-0 mr-0"},n),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:t.icon}))),s.a.createElement("div",{className:"column is-narrow has-text-weight-semibold"}," ",s.a.createElement("abbr",{title:t.description},t.name)),s.a.createElement("div",{className:"column pr-0"},s.a.createElement("div",{className:"is-pulled-right"},a)),s.a.createElement("div",{className:"column is-narrow pl-0 is-italic"}," ",s.a.createElement("abbr",{title:r.name},r.abbrev)))},R=function(){return s.a.createElement("div",{className:"columns ml-0 mr-0"},s.a.createElement("div",{className:"column has-text-weight-bold"},"Current weather"))},F=(T={},Object(O.a)(T,S.b.Error,{title:"Error",message:"Could not load data.",icon:"fas fa-exclamation-circle",background:"has-background-danger-light",foreground:"has-text-danger",canRefetch:!0}),Object(O.a)(T,S.b.Loading,{title:"Data loading...",message:"This should only take a moment.",icon:"fas fa-hourglass-half",background:"has-background-white-ter",foreground:"",canRefetch:!1}),Object(O.a)(T,S.b.Success,{title:"Data fetch complete!",message:"Rendering now...",icon:"fas fa-hourglass-half",background:"has-background-success-light",foreground:"has-text-success-dark",canRefetch:!0}),T),L=function(e){var t=e.status,a=e.onRefetch,n=Object(i.useMemo)((function(){return F[t]}),[t]),r=n.title,o=n.message,c=n.icon,l=n.background,m=n.foreground,u=n.canRefetch;return s.a.createElement("div",{className:"content m-3 p-5 has-text-centered ".concat(l)},s.a.createElement("h3",{className:"title is-4 ".concat(m)},s.a.createElement("span",{className:"icon pr-5"},s.a.createElement("i",{className:c})),s.a.createElement("span",null,r)),s.a.createElement("p",{className:"is-italic"},o),s.a.createElement("br",null),u&&s.a.createElement("button",{className:"button is-medium",onClick:a},"Refetch the data"))},I=function(e){var t=e.data;return s.a.createElement(s.a.Fragment,null,D.map((function(e){return t.properties[e.id].value?s.a.createElement(A,{key:e.id,spec:e,stat:t.properties[e.id].value||-1}):null})))},H=function(e){var t=e.data,a=e.status,n=e.onRefetch,r=Object(h.a)(e,["data","status","onRefetch"]);return s.a.createElement("div",Object.assign({className:"city-block-current box pl-0 pr-0"},r),s.a.createElement(R,null),t?s.a.createElement(I,{data:t}):s.a.createElement(L,{onRefetch:n,status:a}))},z=a(9),_="https://api.weather.gov",P=new Headers;P.append("Accept","application/geo+json"),P.append("User-Agent","(".concat(l,",").concat("wm.wooley@gmail.com",")")),P.append("Origin",l);var B={method:"GET",headers:P},W=function(){var e=Object(k.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,B);case 2:if((a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:throw n=e.sent,new Error(n.detail||"Station not found");case 8:return e.next=10,a.json();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=(M={},Object(O.a)(M,S.b.Error,{title:"Error",message:"Could not load data.",icon:"fas fa-exclamation-circle",background:"has-background-danger-light",foreground:"has-text-danger",canRefetch:!0}),Object(O.a)(M,S.b.Loading,{title:"Data loading...",message:"This should only take a moment.",icon:"fas fa-hourglass-half",background:"has-background-white-ter",foreground:"",canRefetch:!1}),Object(O.a)(M,S.b.Success,{title:"Data fetch complete!",message:"Rendering now...",icon:"fas fa-hourglass-half",background:"has-background-success-light",foreground:"has-text-success-dark",canRefetch:!0}),M),V=function(){var e=Object(k.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(_,"/stations/").concat(a,"/observations/latest"),e.abrupt("return",W(n));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),G=function(){var e=Object(k.a)(x.a.mark((function e(t,a){var n,r,i,s=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:50,r="".concat(_,"/stations/").concat(a,"/observations?limit=").concat(n),e.next=4,W(r);case 4:if(0!==(i=e.sent).features.length){e.next=7;break}throw new Error("Station not found");case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var K,Y=function(e){var t=e.station,a=(e.idx,Object(h.a)(e,["station","idx"])),n=function(e){var t=Object(S.d)(["weather-latest",e],V,{cacheTime:3e5,staleTime:3e5});return Object(z.a)(Object(z.a)({},t),{},{statusTitle:U[t.status]})}(t.id),r=n.data,i=n.status,o=n.updatedAt,c=n.refetch;console.log("Data last updated at:",new Date(o));var l=function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(H,Object.assign({data:r,status:i,onRefetch:l},a))},q=(a(32),function(e){var t=e.specs,a=e.active,n=e.onSelect;return s.a.createElement("div",{className:"control has-icons-left is-expanded"},s.a.createElement("div",{className:"select is-expanded is-medium"},s.a.createElement("select",{className:"is-expanded","aria-label":"select-series",title:"Select a series to chart",onChange:function(e){return n(t.find((function(t){return t.id===e.target.value}))||t[0])},value:a.id},t.map((function(e){return s.a.createElement("option",{key:e.id,value:e.id},e.name)})))),s.a.createElement("div",{className:"icon is-medium is-left"},s.a.createElement("i",{className:"fas fa-chart-line"})))}),J=function(e){var t=e.icon,a=e.title,n=e.isActive,r=e.disabled,i=void 0!==r&&r,o=e.className,c=void 0===o?"":o,l=e.onClick;return s.a.createElement("button",{className:"button is-medium ".concat(c," ").concat(n?"":"is-outlined"),title:a,onClick:l,disabled:i},s.a.createElement("span",{className:"icon has-text-color-link"},s.a.createElement("i",{className:t})))},X=function(e){var t=e.isActive,a=e.onClick;return s.a.createElement(J,{className:"is-link",disabled:!1,isActive:t,title:"Display info for the selected series",icon:"fas fa-info-circle",onClick:a})},$=function(e){var t=e.isActive,a=e.onClick;return s.a.createElement(J,{disabled:!0,isActive:t,title:"Display the chart fullscreen",icon:"fas fa-expand",onClick:a})},Q=function(e){var t=e.selectComponent,a=e.infoButton,n=e.fullScreenButton;return s.a.createElement("div",{className:"field is-horizontal is-expanded"},s.a.createElement("div",{className:"field-body"},s.a.createElement("div",{className:"field has-addons"},t,s.a.createElement("div",{className:"control"},a),s.a.createElement("div",{className:"control"},n))))},Z=function(e){var t=e.specs,a=e.activeSeries,n=e.showInfo,r=e.showFullScreen,i=e.onInfo,o=e.onFullScreen,c=e.onSeriesSelect,l=Object(h.a)(e,["specs","activeSeries","showInfo","showFullScreen","onInfo","onFullScreen","onSeriesSelect"]);return s.a.createElement("div",Object.assign({className:"city-block-chart card is-shadowless is-bordered"},l),s.a.createElement("header",{className:"card-header pl-5 pr-5 pt-3 pb-3 is-shadowless"},s.a.createElement(Q,{selectComponent:s.a.createElement(q,{active:a,specs:t,onSelect:c}),infoButton:s.a.createElement(X,{onClick:i,isActive:n}),fullScreenButton:s.a.createElement($,{onClick:o,isActive:r})})),s.a.createElement("div",{className:"card-content pb-2 pt-2"},l.children))},ee=a(16),te=a.n(ee),ae=a(21),ne=(a(36),function(e){var t=e.series,a=e.name,n=e.unit,r=e.color,o=e.chartType,c=void 0===o?"line":o,l=Object(h.a)(e,["series","name","unit","color","chartType"]),m=Object(i.useMemo)((function(){return function(e){var t=e.name,a=e.unit,n=e.chartType,r=e.color;return{chart:{id:"main-chart",type:n,title:t,stacked:!1,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{show:!1,autoSelected:"pan",tools:{zoom:!1,zoomin:!1,zoomout:!1,reset:!1}},events:{}},colors:[r,"#66DA26","#2E93fA","#546E7A","#E91E63","#FF9800"],dataLabels:{enabled:!1},yaxis:{labels:{formatter:function(e){return e.toFixed(0)},style:{colors:r}},title:{text:a.name,style:{color:r}},axisBorder:{show:!0,color:r}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm TT"}},tooltip:{enabled:!1}},tooltip:{shared:!1,x:{show:!0,format:"<b>hh:mm TT</b><br/> dd MMM yyyy"},y:{formatter:function(e){return"".concat(e).concat(a.abbrev)}}}}}({name:a,unit:n,color:r,chartType:c})}),[a,n,r,c]),u=Object(i.useMemo)((function(){return function(e){var t=e.color,a=e.series;return{chart:{id:"brush-chart",height:130,type:"area",brush:{target:"main-chart",enabled:!0,autoScaleYaxis:!0},selection:{enabled:!0,xaxis:{min:a[0].data[0][0],max:a[0].data.slice(-1)[0][0]}}},colors:[t,t],xaxis:{type:"datetime",tooltip:{enabled:!1}},yaxis:{tickAmount:2,labels:{show:!0,formatter:function(e){return e},style:{colors:"rgba(0,0,0,0)"}},title:{text:"unit",style:{color:"rgba(0,0,0,0)"}},axisBorder:{show:!0}}}}({color:r,series:t})}),[r,t]);return s.a.createElement(ae.a,null,(function(e){var a=e.measureRef,n=function(e){return{width:Math.max(300,e.width||300),height:Math.max(250,(e.height||165)-15)-100}}(e.contentRect.entry),r=n.height,i=n.width;return s.a.createElement("div",Object.assign({ref:a,className:"base-time-series"},l),s.a.createElement("div",{id:"main-chart-outer"},s.a.createElement(te.a,{options:m,series:t,type:c,width:i,height:r})),s.a.createElement("div",{id:"brush-chart-outer"},s.a.createElement(te.a,{options:u,series:t,type:"area",height:85,width:i})))}))}),re=function(e){var t=e.data,a=e.spec,n=e.unit,r=Object(h.a)(e,["data","spec","unit"]),o=a.id,c=a.name,l=a.color,m=Object(i.useMemo)((function(){return function(e){return console.log("setting dates from formula"),e?e.features.map((function(e){return new Date(e.properties.timestamp).valueOf()})):[]}(t)}),[t]),u=Object(i.useMemo)((function(){return function(e,t,a,n){return n?[{name:t,type:"line",data:n.features.map((function(t,n){return!!t.properties[e].value&&[a[n],t.properties[e].value]})).reverse().filter((function(e){return!1!==e}))}]:[]}(o,c,m,t)}),[o,c,m,t]);return s.a.createElement(s.a.Fragment,null,u[0].data.length>0?s.a.createElement(ne,Object.assign({name:c,unit:n,color:l,series:u},r)):s.a.createElement(p,{title:'No data found for series "'.concat(a.name,'"'),description:"Select another series to view data.",icon:"fas fa-database",inline:!1}))},ie=function(e){var t=e.station,a=(e.idx,Object(h.a)(e,["station","idx"])),n=Object(i.useState)(!1),r=Object(f.a)(n,2),o=r[0],c=r[1],l=Object(i.useState)(!1),m=Object(f.a)(l,2),u=m[0],d=m[1],b=Object(i.useState)(D[0]),v=Object(f.a)(b,2),E=v[0],g=v[1],w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a=Object(S.d)(["weather-historical",e,t],G,{cacheTime:3e5,staleTime:3e5});return Object(z.a)(Object(z.a)({},a),{},{statusTitle:U[a.status]})}(t.id,50),N=w.data,y=w.statusTitle,x=C[E.unit];return s.a.createElement(Z,Object.assign({specs:D,activeSeries:E,showInfo:o,showFullScreen:u,onSeriesSelect:function(e){g(e)},onInfo:function(){return c((function(e){return!e}))},onFullScreen:function(){return d((function(e){return!e}))}},a),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"content pt-0 pb-0 mt-0 mb-0 is-size-7"},s.a.createElement("p",{className:"mt-1 mb-1"},s.a.createElement("span",{className:"icon pr-2"},s.a.createElement("i",{className:E.icon})),s.a.createElement("span",{className:"has-text-weight-bold pr-2"},E.name,".")," ",s.a.createElement("span",{className:"is-italic"},E.description)))),N?s.a.createElement(re,{data:N,spec:E,unit:x}):s.a.createElement(p,{title:y.title,description:y.message,icon:y.icon}))},se=function(e){var t=e.station,a=e.idx,n=Object(h.a)(e,["station","idx"]),r=Object(i.useState)(0===a),o=Object(f.a)(r,2),c=o[0],l=o[1];return s.a.createElement(N,Object.assign({station:t,isOpen:c,onToggleOpen:function(){return l((function(e){return!e}))},currentComponent:s.a.createElement(Y,{station:t,idx:a}),chartComponent:s.a.createElement(ie,{station:t,idx:a})},n))},oe=function(){var e=Object(i.useContext)(d).stations,t=Object(i.useContext)(u).toggle;return s.a.createElement("div",{className:"pt-4"},e.length>0?s.a.createElement(s.a.Fragment,null,e.map((function(e,t){return s.a.createElement(se,{key:e.id,station:e,idx:t})})),s.a.createElement(p,{title:"Add or edit your cities",description:"Click here to edit",icon:"fas fa-edit",expand:!1,inline:!0,onToggle:function(){return t("cities")}})):s.a.createElement(p,{title:"No cities selected!",description:"Click here to add cities",icon:"fas fa-search-location",expand:!0,inline:!1,onToggle:function(){return t("cities")}}))},ce=function(e){var t=Object.assign({},e),a=Object(i.useState)({cities:!1}),n=Object(f.a)(a,2),r=n[0],o=n[1],c={modals:r,toggle:function(e){return o((function(t){return Object(z.a)(Object(z.a)({},t),{},Object(O.a)({},e,!t[e]))}))}};return s.a.createElement(u.Provider,{value:c},t.children)},le=a(18);!function(e){e[e.ADD=0]="ADD",e[e.REMOVE=1]="REMOVE",e[e.MOVE=2]="MOVE"}(K||(K={}));var me=function(e,t,a){return[].concat(Object(le.a)(a.slice(0,t)),[e],Object(le.a)(a.slice(t)))},ue=function(e,t){return t.filter((function(t,a){return a!==e}))};function de(e,t){var a,n,r,i,s;switch(t.type){case K.ADD:if(!t.element)throw new Error("Must include an element to be added");return s=null!==(a=t.index.to)&&void 0!==a?a:0,me(t.element,s,e);case K.REMOVE:return s=null!==(n=t.index.from)&&void 0!==n?n:-1,ue(s,e);case K.MOVE:var o=null!==(r=t.index.from)&&void 0!==r?r:-1,c=null!==(i=t.index.to)&&void 0!==i?i:0,l=e[o];if(!l)throw new Error('Invalid "from" index. (from: '.concat(o,", to: ").concat(c,")"));return me(l,c,ue(o,e));default:throw new Error('Invalid action type "'.concat(t.type,'" passed.'))}}var he=r.STATIONS;function pe(){var e=function(e){var t=Object(i.useReducer)(de,e),a=Object(f.a)(t,2),n=a[0],r=a[1],s=function(e,t){return r({type:K.MOVE,index:{from:e,to:t}})};return{state:n,onAdd:function(e,t){return r({type:K.ADD,index:{to:t,from:-1},element:e})},onRemove:function(e){return r({type:K.REMOVE,index:{to:-1,from:e}})},onMove:s,onMoveUp:function(e){return s(e,e-1)},onMoveDown:function(e){return s(e,e+1)}}}(JSON.parse(localStorage.getItem(he)||JSON.stringify([]))),t=e.state,a=e.onAdd,n=e.onRemove,r=e.onMove,s=e.onMoveDown,o=e.onMoveUp;return Object(i.useEffect)((function(){localStorage.setItem(he,JSON.stringify(t))}),[t]),{stations:t,onAdd:a,onMove:r,onRemove:n,onMoveDown:s,onMoveUp:o}}var fe=function(e){var t=Object.assign({},e),a=pe(),n=a.stations,r=a.onAdd,i=a.onRemove,o=a.onMoveDown,c=a.onMoveUp;return s.a.createElement(d.Provider,{value:{stations:n,onAdd:function(e){return r(e)},onRemove:i,onMoveUp:c,onMoveDown:o}},t.children)},be=new S.a,ve=function(e){var t=Object.assign({},e);return s.a.createElement(S.c,{queryCache:be}," ",s.a.createElement(ce,null,s.a.createElement(fe,null,t.children)))},Ee=(a(37),function(e){var t=e.station,a=e.onAdd,n=Object(h.a)(e,["station","onAdd"]);return s.a.createElement("div",Object.assign({className:"city-add-row columns is-selectable mr-0 ml-0 pr-1 pl-1"},n,{title:"Click to add station",onClick:function(e){return a(t,e)}}),s.a.createElement("div",{className:"column content"}," ",s.a.createElement("p",{className:"has-text-weight-semibold"},t.city),s.a.createElement("p",{className:"is-size-7 has-text-weight-light unveil"},t.name),s.a.createElement("p",{className:"is-size-7 unveil"},t.id)),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("span",{className:"icon is-pulled-right unveil"},s.a.createElement("i",{className:"fas fa-plus"}))))}),ge=function(e){var t=e.stations,a=e.onAdd;return s.a.createElement("div",{className:"city-add box"},s.a.createElement("div",{className:"columns mr-1 ml-0 pr-1 pl-1"},s.a.createElement("div",{className:"column"},s.a.createElement("h3",{className:"title is-4 mb-0"},"Add cities"),s.a.createElement("p",{className:"is-size-7 is-italic pb-1 pt-0 mb-0 mt-0"},"Click a row to add the city"))),s.a.createElement("div",{className:"pb-5"},t.length>0?t.map((function(e){return s.a.createElement(Ee,{station:e,onAdd:a,key:e.id})})):s.a.createElement("div",{className:"columns mr-1 ml-0 pr-1 pl-1"},s.a.createElement("div",{className:"column"},s.a.createElement("h4",{className:"subtitle is-5 mb-0"},"No stations to add"),s.a.createElement("p",{className:"is-size-7 is-italic pb-1 pt-0 mb-0 mt-0"},"You added all available stations to the dashboard!")))))},we=(a(38),function(e){var t=e.isOpen,a=e.onToggle,n=e.closeButton,r=void 0!==n&&n,i=e.children,o=Object(h.a)(e,["isOpen","onToggle","closeButton","children"]);return s.a.createElement("div",Object.assign({className:"modal ".concat(t?"is-active":"")},o),s.a.createElement("div",{className:"modal-background",onClick:a,title:"Click on the background to exit"}),i,r&&s.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:a}))}),Ne=(a(39),function(e){var t=e.isOpen,a=e.onToggle,n=e.leftChild,r=e.rightChild;return s.a.createElement(we,{isOpen:t,onToggle:a},s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head"},s.a.createElement("p",{className:"modal-card-title has-text-weight-bold"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-city"})),s.a.createElement("span",{className:"pl-1"},"Add and edit your cities")),s.a.createElement("button",{onClick:a,className:"delete","aria-label":"close",title:"Return to weather"})),s.a.createElement("section",{className:"modal-card-body pb-0"},s.a.createElement("div",{className:"body-columns columns pr-0 pl-0"},s.a.createElement("div",{className:"column is-one-third"},n),s.a.createElement("div",{className:"column"},r)))))}),ye=(a(40),function(e){var t=e.station,a=e.idx,n=e.isLast,r=e.onRemove,i=e.onMoveUp,o=e.onMoveDown,c=Object(h.a)(e,["station","idx","isLast","onRemove","onMoveUp","onMoveDown"]);return s.a.createElement("div",Object.assign({className:"city-order-row columns is-selectable mr-0 ml-0 pr-1 pl-1"},c),s.a.createElement("div",{className:"column is-half content"}," ",s.a.createElement("p",{className:"has-text-weight-semibold"},t.city),s.a.createElement("p",{className:"is-size-7 has-text-weight-light"},t.name),s.a.createElement("p",{className:"is-size-7"},t.id)),s.a.createElement("div",{className:"column"},s.a.createElement("span",{className:"is-pulled-right"}," ")),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("div",{className:"field has-addons"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button",title:"Move station down",disabled:n,onClick:function(){return o(a)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-chevron-down"})))),s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button",title:"Move station up",disabled:0===a,onClick:function(){return i(a)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-chevron-up"})))))),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("div",{className:"field has-addons"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button is-danger is-outlined",title:"Remove station",onClick:function(){return r(a)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-trash"})))))))}),xe=function(e){var t=e.stations,a=e.onRemove,n=e.onMoveUp,r=e.onMoveDown;return s.a.createElement("div",{className:"city-order box"},s.a.createElement("div",{className:"columns mr-1 ml-0 pr-1 pl-1"},s.a.createElement("div",{className:"column"},s.a.createElement("h3",{className:"title is-4 mb-0"},"Your stations")),s.a.createElement("div",{className:"column"})),s.a.createElement("div",{className:"pb-5"},t.length>0?t.map((function(e,i){return s.a.createElement(ye,{station:e,idx:i,isLast:i===t.length-1,onRemove:a,onMoveUp:n,onMoveDown:r,key:e.id})})):s.a.createElement("div",{className:"columns mr-1 ml-0 pr-1 pl-1"},s.a.createElement("div",{className:"column"},s.a.createElement("h4",{className:"subtitle is-5 mb-0"},"No stations to add"),s.a.createElement("p",{className:"is-size-7 is-italic pb-1 pt-0 mb-0 mt-0"},"You added all available stations to the dashboard!")))))},ke=function(){var e=Object(i.useContext)(u),t=e.toggle,a=e.modals.cities,n=Object(i.useContext)(d),r=n.stations,o=n.onAdd,c=n.onRemove,l=n.onMoveUp,m=n.onMoveDown,h=Object(i.useMemo)((function(){return b.filter((function(e){return r.every((function(t){return t.id!==e.id}))}))}),[r]);return s.a.createElement(Ne,{isOpen:a,onToggle:function(){return t("cities")},leftChild:s.a.createElement(ge,{stations:h,onAdd:o}),rightChild:s.a.createElement(xe,{stations:r,onRemove:c,onMoveUp:l,onMoveDown:m})})},Oe=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(ke,null))},je=(a(41),function(e){var t=e.isActive,a=void 0===t||t,n=e.onToggleCities,r=e.onToggleActive;return s.a.createElement("nav",{id:"app-navbar",className:"navbar",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("div",{className:"navbar-item is-selectable"},s.a.createElement("span",{className:"icon has-text-primary"},s.a.createElement("i",{className:"fa fa-cloud"})),s.a.createElement("span",{className:"ml-2 has-text-weight-bold"},"Weather demo")),s.a.createElement("div",{role:"button",className:"navbar-burger burger ".concat(a?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:r},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(a?"is-active":"")},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"button is-link is-outlined is-fullwidth",onClick:n},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-city"})),s.a.createElement("span",{className:"has-text-weight-semibold"},"Cities")))))))}),Ce=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1],r=Object(i.useContext)(u).toggle;return s.a.createElement(je,{isActive:a,onToggleActive:function(){return n((function(e){return!e}))},onToggleCities:function(){return r("cities")}})};var Te=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(ve,null,s.a.createElement("div",null,s.a.createElement(Ce,null),s.a.createElement("main",{className:"container"},s.a.createElement(oe,null)),s.a.createElement(m,null)),s.a.createElement(Oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);var Me=a(17),De=a(2),Se=a(15);Me.b.add(De.e,De.d,De.b,De.c,De.a,De.v,De.s,De.g,De.z,De.y,De.m,De.w,De.f,De.o,De.q,De.n,De.j,Se.c,Se.a,Se.b,De.t,De.x,De.i,De.u,De.l,De.r,De.p,De.k,De.h),Me.a.watch(),c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f572ec7d.chunk.js.map