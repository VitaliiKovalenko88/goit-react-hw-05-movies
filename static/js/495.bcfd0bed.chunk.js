"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[495],{763:function(t,n,e){e.d(n,{Hx:function(){return l},mv:function(){return p},qX:function(){return o},uV:function(){return f},wr:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(294),s="ea3bc943aa3fc0f55c10b5359222491e";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="trending/movie/day?language=en-US&&api_key=".concat(s,"&page=").concat(n),t.next=3,(0,u.Z)(e);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"?api_key=").concat(s),t.next=3,(0,u.Z)(e);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="search/movie?api_key=".concat(s,"&query=").concat(n,"&include_adult=false&language=en-US&page=").concat(e,"'"),t.next=3,u.Z.get(r);case 3:return a=t.sent,i=a.data,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/credits?api_key=").concat(s),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/reviews?api_key=").concat(s),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},495:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(433),a=e(439),c=e(791),u="Cast_title__rq9b2",s="Cast_list__oOD41",i="Cast_item__vxHbm",o="Cast_wrapper__XuuXb",p="Cast_img__uVPra",f="Cast_nameTitle__9yBM3",l="Cast_characterCast__BtkDo",_=e(689),m=e(763),v=e(184),h=function(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],h=n[1],d=(0,c.useState)(!1),x=(0,a.Z)(d,2),g=x[0],w=x[1],b=(0,_.UO)().movieId;return(0,c.useEffect)((function(){w(!0),(0,m.uV)(b).then((function(t){var n=t.cast;h((0,r.Z)(n))})).catch((function(t){return console.log(t)})).finally((function(){return w(!1)}))}),[b]),(0,v.jsx)(v.Fragment,{children:g?null:(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:u,children:"Actors"}),(0,v.jsx)("ul",{className:s,children:e.map((function(t){var n=t.cast_id,e=t.original_name,r=t.profile_path,a=t.character;return(0,v.jsxs)("li",{className:i,children:[(0,v.jsx)("div",{className:o,children:r?(0,v.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e}):(0,v.jsx)("img",{className:p,src:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e})}),(0,v.jsx)("h3",{className:f,children:e}),(0,v.jsx)("p",{className:l,children:a})]},n)}))})]})})}}}]);
//# sourceMappingURL=495.bcfd0bed.chunk.js.map