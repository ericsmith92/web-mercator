(this.webpackJsonprona=this.webpackJsonprona||[]).push([[0],{17:function(t,e,a){t.exports=a(40)},39:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=a(2),s=a(3),i=a(4),u=a(5),d=function(t){return r.a.createElement("div",{style:{display:"inline-block"}},t.num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))},h=a(6),p=a.n(h),m=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={countryCode:null,total:null,deaths:null,recovered:null},t.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p.a.get("http://api.geonames.org/countryCode?lat=".concat(t.props.lat,"&lng=").concat(t.props.lon,"&username=").concat("ericsmith92")).then((function(t){return t.data})).then((function(e){t.setState({countryCode:e}),t.getCountryDataFromCode(t.state.countryCode)})).catch((function(a){t.props.updateErrorStatus(e),console.log(a)}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(t){this.props.lat===t.lat&&this.props.lon===t.lon||this.init(t)}},{key:"getCountryDataFromCode",value:function(t){var e=this;p.a.get("https://covid19.mathdro.id/api/countries/".concat(t)).then((function(t){return t.data})).then((function(t){e.setState({total:t.confirmed.value,recovered:t.recovered.value,deaths:t.deaths.value})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"callOut"},r.a.createElement("div",{className:"callOut_wrapper"},r.a.createElement("div",{className:"callOut_country"},this.state.countryCode),r.a.createElement("div",{className:"callOut_total"},r.a.createElement("span",null,"Total:")," ",this.state.total?r.a.createElement(d,{num:this.state.total}):""),r.a.createElement("div",{className:"callOut_deaths"},r.a.createElement("span",null,"Deaths:")," ",this.state.total?r.a.createElement(d,{num:this.state.deaths}):""),r.a.createElement("div",{className:"callOut_recovered"},r.a.createElement("span",null,"Recov:")," ",this.state.total?r.a.createElement(d,{num:this.state.recovered}):""),r.a.createElement("div",{className:"callOut_triangle"})))}}]),a}(r.a.Component),v=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={render:!0},t.closeError=function(){t.setState({render:!1}),t.props.onErrorDismiss()},t}return Object(s.a)(a,[{key:"render",value:function(){return!!this.state.render&&r.a.createElement("div",{className:"error"},r.a.createElement("button",{onClick:this.closeError,className:"error_btn"},"\xd7"),"Error, looks like you clicked on water.")}}]),a}(r.a.Component),y=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={x:0,y:0,lon:0,lat:0,mercN:0,latRad:0,renderCallOut:!1,renderCallOutBottom:!1,error:!1},t.init=function(e){var a=t.getLon(t.props.coordinates[0]),n=t.getMercN(t.props.coordinates[1]),r=t.getLatRad(n),o=t.getLat(r),c=t.props.coordinates[1]<=80;t.setState({x:t.props.coordinates[0],y:t.props.coordinates[1],lon:a,mercN:n,latRad:r,lat:o,renderCallOut:!0,renderCallOutBottom:c})},t.getLon=function(t){return 360*t/1024-180},t.getMercN=function(e){return(e-256)*t.props.PI/-512},t.getLatRad=function(e){return 2*(Math.atan(Math.pow(2.718281828459045,e))-t.props.PI/4)},t.getLat=function(e){return 180*e/t.props.PI},t.updateErrorStatus=function(e){Object.keys(e).length?t.setState({error:!0,x:e.x,y:e.y,lat:e.lat,lon:e.lon}):t.setState({error:!0,x:286.227,y:117.366,lat:43.741667,lon:-79.373333})},t.onErrorDismiss=function(){t.setState({error:!1})},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(t){this.props.coordinates[0]===t.coordinates[0]&&this.props.coordinates[1]===t.coordinates[1]||this.init()}},{key:"render",value:function(){return this.state.error?r.a.createElement(v,{onErrorDismiss:this.onErrorDismiss}):r.a.createElement("div",{className:"point",style:{left:this.state.x+"px",top:this.state.y+"px"}},r.a.createElement("div",{className:"point_wrapper ".concat(this.state.renderCallOutBottom?"bottom":"")},this.state.renderCallOut?r.a.createElement(m,{x:this.state.x,y:this.state.y,lat:this.state.lat,lon:this.state.lon,updateErrorStatus:this.updateErrorStatus}):""))}}]),a}(r.a.Component),f=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={width:1024,height:512,zoom:1,x:null,y:null,PI:Math.PI},t.handleClick=function(e){var a=e.clientX,n=e.clientY,r=e.currentTarget.getBoundingClientRect(),o=[r.x,r.y],c=o[0],l=o[1];t.setState({x:a-c,y:n-l})},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"map",style:{maxWidth:this.state.width}},r.a.createElement("img",{onClick:this.handleClick,src:"https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,".concat(this.state.zoom,"/").concat(this.state.width,"x").concat(this.state.height,"?access_token=").concat("pk.eyJ1IjoiZXJpY3NtaXRoOTIiLCJhIjoiY2s4NXVkbXFtMDEzMDNycDl1MDIzcGQ4NCJ9.BGa8uQd_0__y7vIFjn3w9Q".split(";")[0]),alt:"World Map.",className:"map_img"}),this.state.x&&this.state.y?r.a.createElement(y,{coordinates:[this.state.x,this.state.y],PI:this.state.PI}):"")}}]),a}(r.a.Component),E=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Covid-19 Tracker"))},g=function(){return r.a.createElement("footer",null,r.a.createElement("span",{className:"copyright"},"Made with ",r.a.createElement("i",{className:"fa fa-heart"})," by Eric Smith"))},O=(a(39),function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null)),r.a.createElement(g,null))}}]),a}(r.a.Component));c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.161d97fc.chunk.js.map