(this.webpackJsonpcontentdeveloperslive=this.webpackJsonpcontentdeveloperslive||[]).push([[0],{54:function(e,t,n){},64:function(e,t){},78:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n(0),r=n(15),c=n.n(r),s=(n(54),n(8)),d=n(100),o=n(101),l=n(102),u=n(13),b=n(20),j=n(44),m=n(48),h=n(103),p=n(39),g=n.n(p),v=n(41),x=n.n(v),O=n(42),C=n.n(O);n(78);const S=[{sku:"SHOES123",name:"Red canvas shoes",price:34.76,currencyCode:"USD"},{sku:"SHOES456",name:"Brown leather shoes",price:52.81,currencyCode:"USD"},{sku:"HAT567",name:"Wool Hat",price:25.15,currencyCode:"USD"},{sku:"HAT089",name:"Straw Hat",price:11.85,currencyCode:"USD"},{sku:"HAT090",name:"Monkey Hat",price:14.85,currencyCode:"USD"}],w=[{rating:1,reviewText:"Rubbish"},{rating:2,reviewText:"Okay"},{rating:3,reviewText:"Good"},{rating:4,reviewText:"Great"},{rating:5,reviewText:"Fantastic!"}],y=e=>S.find((t=>t.sku===e));var k=function(){const[e,t]=Object(a.useState)(""),[n,r]=Object(a.useState)(""),[c,p]=Object(a.useState)(""),[v,O]=Object(a.useState)("");return window.getProductListItems=Object(a.useCallback)((()=>{const t=y(e);return t?[{quantity:1,currencyCode:t.currencyCode,SKU:t.sku,name:t.name,priceTotal:t.price}]:void 0}),[e]),window.getOrder=Object(a.useCallback)((()=>{const t=y(e);return t?{currencyCode:t.currencyCode,priceTotal:t.price,payments:[{paymentAmount:t.price,paymentType:"Credit Card"}]}:void 0}),[e]),window.getReview=Object(a.useCallback)((()=>{const t=y(e);return t?{productSku:t.sku,reviewerId:n,rating:parseInt(v,10),reviewText:c}:void 0}),[e,n,v,c]),Object(i.jsx)(s.a,{theme:d.a,colorScheme:"light",minHeight:"100vh",children:Object(i.jsxs)(o.a,{padding:"size-250",children:[Object(i.jsx)(l.a,{label:"Product",items:S,selectedKey:e,onSelectionChange:t,placeholder:"Select a product...",children:e=>Object(i.jsx)(u.a,{children:e.name},e.sku)}),Object(i.jsx)(b.a,{level:"1",children:"XDM Commerce Example"}),Object(i.jsxs)(j.a,{direction:"column",alignItems:"flex-start",gap:"size-100",children:[Object(i.jsxs)(m.a,{id:"addToCartButton",variant:"primary",isDisabled:!e,children:[Object(i.jsx)(g.a,{marginEnd:"size-65"}),"Add to cart"]}),Object(i.jsxs)(m.a,{id:"purchaseButton",variant:"primary",isDisabled:!e,children:[Object(i.jsx)(C.a,{marginEnd:"size-65"}),"Purchase"]})]}),Object(i.jsx)(b.a,{level:"1",children:"XDM Product Review Example"}),Object(i.jsxs)(j.a,{direction:"column",alignItems:"flex-start",gap:"size-100",children:[Object(i.jsx)(h.b,{label:"Email Address",value:n,onChange:r,isDisabled:!e}),Object(i.jsx)(l.a,{label:"Rating",placeholder:"Select a rating...",items:w,selectedKey:v,onSelectionChange:O,isDisabled:!e,children:e=>Object(i.jsx)(u.a,{children:e.reviewText},e.rating)}),Object(i.jsx)(h.a,{label:"Comment",value:c,onChange:p,isDisabled:!e,minWidth:"size-4600"}),Object(i.jsxs)(m.a,{id:"submitReviewButton",variant:"primary",isDisabled:!e||!n||!v,children:[Object(i.jsx)(x.a,{marginEnd:"size-65"}),"Submit Review"]})]})]})})};var T=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((({getCLS:t,getFID:n,getFCP:i,getLCP:a,getTTFB:r})=>{t(e),n(e),i(e),a(e),r(e)}))};c.a.render(Object(i.jsx)(k,{}),document.getElementById("root")),T()}},[[98,1,2]]]);
//# sourceMappingURL=main.28566c18.chunk.js.map