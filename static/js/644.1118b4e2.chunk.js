"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[644],{155:function(t,e,n){n.d(e,{O:function(){return l}});var r=n(689),a=n(87),c=n(151),u="MoviesList_list__0Owr9",s="MoviesList_item__eePYv",i="MoviesList_wrapper__vfeLj",o="MoviesList_img__v4jFC",f="MoviesList_titleItem__W4WXW",p=n(184),l=function(t){var e=t.movies,n=(0,r.TH)().pathname;return(0,p.jsx)("ul",{className:u,children:e.map((function(t){var e=t.id,r=t.poster_path,u=t.title;return(0,p.jsx)("li",{className:s,children:(0,p.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:n},children:[(0,p.jsx)("div",{className:i,children:r?(0,p.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w400/".concat(r),alt:u}):(0,p.jsx)("img",{className:o,src:c.M,alt:u})}),(0,p.jsx)("p",{className:f,children:u})]})},e)}))})}},763:function(t,e,n){n.d(e,{Hx:function(){return l},mv:function(){return f},qX:function(){return o},uV:function(){return p},wr:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(294),s="ea3bc943aa3fc0f55c10b5359222491e";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="trending/movie/day?language=en-US&&api_key=".concat(s,"&page=").concat(e),t.next=3,(0,u.Z)(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"?api_key=").concat(s),t.next=3,(0,u.Z)(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r,a,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="search/movie?api_key=".concat(s,"&query=").concat(e,"&include_adult=false&language=en-US&page=").concat(n,"'"),t.next=3,u.Z.get(r);case 3:return a=t.sent,i=a.data,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/credits?api_key=").concat(s),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/reviews?api_key=").concat(s),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},151:function(t,e,n){n.d(e,{M:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},644:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(439),a=n(791),c="SearchBar_form__gW7Gj",u="SearchBar_inp__7RCQN",s="SearchBar_btn__PKGSc",i=n(184),o=function(t){var e=t.onSubmit,n=(0,a.useState)(""),o=(0,r.Z)(n,2),f=o[0],p=o[1];return(0,i.jsxs)("form",{className:c,onSubmit:function(t){t.preventDefault(),""!==f.trim()?(e(f),p("")):alert("write something please!!!")},children:[(0,i.jsx)("input",{className:u,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:f,onChange:function(t){var e=t.target.value;p(e)}}),(0,i.jsx)("button",{className:s,type:"submit",children:"search"})]})},f=n(87),p=n(763),l=n(155),v=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],c=e[1],u=(0,a.useState)(1),s=(0,r.Z)(u,1)[0],v=(0,f.lr)(),m=(0,r.Z)(v,2),h=m[0],_=m[1];return(0,a.useEffect)((function(){var t=h.get("query")||"";t&&(0,p.mv)(t,s).then((function(t){var e=t.results;c(e)})).catch((function(t){return console.log("fetchMovieByQuery:".concat(t))}))}),[h,s]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{onSubmit:function(t){_({query:t})}}),n.length>0&&(0,i.jsx)(l.O,{movies:n})]})}}}]);
//# sourceMappingURL=644.1118b4e2.chunk.js.map