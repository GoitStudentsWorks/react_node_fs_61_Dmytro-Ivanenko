"use strict";(self.webpackChunkgoit_command_project_yourPet=self.webpackChunkgoit_command_project_yourPet||[]).push([[867],{3867:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(3433),a=n(7762),s=n(5861),i=n(9439),c=n(4687),o=n.n(c),l=n(2791),u=n(2768),_=n(2995),m=n(6942),f=n(2426),p=n.n(f),d="news_item_item__WmOxi",h="news_item_content__4utUH",g="news_item_imgWrapper__+IQqH",v="news_item_img__wfUok",x="news_item_title__SVT1t",C="news_item_text__0d4b6",j="news_item_flexContainer__QMW7T",w="news_item_date__61XSA",b="news_item_url__tppw1",N=n(3329),Z=function(e){var t=e.item,n=t.url,r=void 0===n?"":n,a=t.text,s=t.title,i=t.imgUrl,c=t.date,o=p()(c).format("DD/MM/YYYY");return(0,N.jsxs)("li",{className:d,children:[(0,N.jsx)("div",{className:g,children:(0,N.jsx)("img",{className:v,src:i,alt:"news"})}),(0,N.jsxs)("div",{className:h,children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("h4",{className:x,children:s}),(0,N.jsx)("p",{className:C,children:a})]}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("span",{className:w,children:o}),(0,N.jsx)("a",{className:b,target:"_blank",rel:"noreferrer",href:r,children:"Read more"})]})]})]})},y="news_list_list__IRAFO",k=function(e){var t=e.list,n=(0,l.useState)([]),r=(0,i.Z)(n,2),a=r[0],s=r[1],c=(0,l.useState)(0),o=(0,i.Z)(c,2),u=o[0],_=o[1],f=(0,l.useState)(1),p=(0,i.Z)(f,2),d=p[0],h=p[1];(0,l.useEffect)((function(){_(Math.ceil(t.length/12));var e=12*d%t.length,n=e+12,r=t.slice(e,n);s(r)}),[d,t]);var g=(0,l.useCallback)((function(e){h(e.selected+1)}),[]);return(0,N.jsxs)(N.Fragment,{children:[a.length>0&&(0,N.jsx)("ul",{className:y,children:a.map((function(e){return(0,N.jsx)(Z,{item:e},e._id)}))}),u>1&&(0,N.jsx)(m.Z,{pageCount:u,onPageClick:g,currentPage:d})]})};k.defaultProps={list:[]};var L=k,O={container:"news_page_container__iasdE",errorContainer:"news_page_errorContainer__8aYK6",error:"news_page_error__c14qM"},P=n(5985),S=(n(5462),n(1243)),M=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.get("/news/");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),q=M,E=function(){var e=(0,l.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1],m=(0,l.useState)([]),f=(0,i.Z)(m,2),p=f[0],d=f[1];(0,l.useEffect)((function(){(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);return(0,N.jsxs)("div",{className:O.container,children:[(0,N.jsx)(u.Z,{text:"News"}),(0,N.jsx)("div",{className:O.formWrapper,children:(0,N.jsx)(_.Z,{onSubmit:function(e){var t,s=e.query,i=s[0].toUpperCase()+s.slice(1),c=s[0].toLowerCase()+s.slice(1),o=!1,l=(0,a.Z)(n);try{var u=function(){var e=t.value,n=e.title,a=e.text;if(console.log(n),n.includes(i)||n.includes(c)||a.includes(i)||a.includes(c))return o=!0,{v:d((function(t){return[].concat((0,r.Z)(t),[e])}))}};for(l.s();!(t=l.n()).done;){var _=u();if("object"===typeof _)return _.v}}catch(m){l.e(m)}finally{l.f()}o||P.Am.warn("No such news!",{position:"top-right",autoClose:3e3,theme:"colored"})},onClear:function(){d([])}})}),(0,N.jsx)(P.Ix,{}),(0,N.jsx)(L,{list:Boolean(!p.length)?n:p})]})}},2768:function(e,t,n){n.d(t,{Z:function(){return s}});var r="page-title_title__-fXaC",a=n(3329),s=function(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},6942:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(6048),a=n.n(r),s="pagination_paginationContainer__Ns7HO",i="pagination_pagination__8ZJgu",c="pagination_item__+7m9Z",o="pagination_active__CkF3v",l="pagination_link__jIiUN",u="pagination_nextLink__kUhi7",_="pagination_prevLink__CL437",m=n(3329),f=function(e){var t=e.onPageClick,n=e.pageCount,r=void 0===n?1:n,f=e.currentPage,p=void 0===f?1:f;return(0,m.jsx)("div",{className:s,children:(0,m.jsx)(a(),{nextLabel:"",onPageChange:t,pageRangeDisplayed:3,marginPagesDisplayed:1,pageCount:r,previousLabel:"",pageClassName:c,pageLinkClassName:l,previousClassName:c,previousLinkClassName:_,nextClassName:c,nextLinkClassName:u,breakLabel:"...",breakClassName:c,breakLinkClassName:l,activeClassName:o,renderOnZeroPageCount:null,className:i,forcePage:p-1})})}},2995:function(e,t,n){n.d(t,{Z:function(){return b}});var r,a=n(4942),s=n(1413),i=n(9439),c=n(2791),o=n(7995),l=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e,t){var n=e.title,a=e.titleId,s=_(e,l);return c.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},s),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z"})))}var f=c.forwardRef(m),p=(n.p,"search-form_form__1ByjC"),d="search-form_input__bqu-P",h="search-form_clearBtn__Mdb2m",g="search-form_clearBtnIcon__sTAs+",v="search-form_submitBtn__lYE-F",x="search-form_active__uFjAu",C="search-form_icon__GXxHX",j=n(3329),w={query:""},b=function(e){var t=e.onSubmit,n=e.onClear,r=(0,c.useState)((0,s.Z)({},w)),l=(0,i.Z)(r,2),u=l[0],_=l[1],m=function(){_((0,s.Z)({},w)),n((0,s.Z)({},w))},b=u.query;return(0,j.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),""!==u.query.trim()?t((0,s.Z)({},u)):_((0,s.Z)({},w))},children:[(0,j.jsx)("input",{type:"text",name:"query",required:!0,value:b,className:d,onChange:function(e){var t=e.target,n=t.name,r=t.value;r?_((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},n,r))})):m()},placeholder:"Search"}),(0,j.jsx)("button",{type:"submit",className:b?"".concat(v," ").concat(x):v,"aria-label":"submit",children:(0,j.jsx)(f,{className:C,width:24,height:24})}),b&&(0,j.jsx)("button",{type:"button",className:h,onClick:m,"aria-label":"clear",children:(0,j.jsx)(o.r,{className:g,width:24,height:24})})]})}}}]);
//# sourceMappingURL=867.8365cfea.chunk.js.map