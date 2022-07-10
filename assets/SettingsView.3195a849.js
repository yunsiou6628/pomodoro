var J=Object.defineProperty;var A=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var D=(e,l,o)=>l in e?J(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,S=(e,l)=>{for(var o in l||(l={}))K.call(l,o)&&D(e,o,l[o]);if(A)for(var o of A(l))Q.call(l,o)&&D(e,o,l[o]);return e};import{d as O,I as y,u as L,g as M,c as v,p as W,t as m,a as x,b as r,e as X,f as Y,m as Z,h as ee,i as le,R as oe,r as C,w as P,j as te,V as ne,k as ae,v as ie,l as re,n as ue,o as T,q as se,S as U,s as ce,x as de,y as I,z as ve,A as V,B as fe,C as j,D as s,E,F as me,G,H as ye,J as pe,K as be}from"./index.ade0119e.js";import{V as _e,a as Ve}from"./VTable.cf320109.js";const q=Symbol.for("vuetify:selection-control-group");O({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:y,trueIcon:y,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l;const t=L(e,"modelValue"),c=M(),n=v(()=>e.id||`v-selection-control-group-${c}`),u=v(()=>e.name||n.value);return W(q,{disabled:m(e,"disabled"),inline:m(e,"inline"),modelValue:t,multiple:v(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:u,falseIcon:m(e,"falseIcon"),trueIcon:m(e,"trueIcon"),readonly:m(e,"readonly"),type:m(e,"type")}),x(()=>{var a;return r("div",{class:"v-selection-control-group","aria-labelled-by":e.type==="radio"?n.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[o==null||(a=o.default)==null?void 0:a.call(o)])}),{}}});const ge=X(S(S({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:y,trueIcon:y,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:Y}},Z()),ee()));function he(e){const l=re(q,void 0),{densityClasses:o}=ue(e),t=L(e,"modelValue"),c=v(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),n=v(()=>e.falseValue!==void 0?e.falseValue:!1),u=v(()=>(l==null?void 0:l.multiple.value)||!!e.multiple||e.multiple==null&&Array.isArray(t.value)),a=v({get(){const d=l?l.modelValue.value:t.value;return u.value?d.some(i=>e.valueComparator(i,c.value)):e.valueComparator(d,c.value)},set(d){if(e.readonly)return;const i=d?c.value:n.value;let f=i;u.value&&(f=d?[...T(t.value),i]:T(t.value).filter(p=>!e.valueComparator(p,c.value))),l?l.modelValue.value=f:t.value=f}}),{textColorClasses:b,textColorStyles:g}=se(v(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=v(()=>{var d,i;return a.value?(d=l==null?void 0:l.trueIcon.value)!=null?d:e.trueIcon:(i=l==null?void 0:l.falseIcon.value)!=null?i:e.falseIcon});return{group:l,densityClasses:o,trueValue:c,falseValue:n,model:a,textColorClasses:b,textColorStyles:g,icon:h}}const Se=le()({name:"VSelectionControl",directives:{Ripple:oe},inheritAttrs:!1,props:ge(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:o,slots:t}=l;const{densityClasses:c,group:n,icon:u,model:a,textColorClasses:b,textColorStyles:g,trueValue:h}=he(e),d=M(),i=v(()=>e.id||`input-${d}`),f=C(!1),p=C(!1),B=C();function $(_){f.value=!0,(!U||U&&_.target.matches(":focus-visible"))&&(p.value=!0)}function w(){f.value=!1,p.value=!1}return x(()=>{var _,k,R,F;const N=t.label?t.label({label:e.label,props:{for:i.value}}):e.label,z=(_=n==null?void 0:n.type.value)!=null?_:e.type;return r("div",{class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":p.value,"v-selection-control--inline":(n==null?void 0:n.inline.value)||e.inline},c.value]},[r("div",{class:["v-selection-control__wrapper",b.value],style:g.value},[(k=t.default)==null?void 0:k.call(t),P(r("div",{class:["v-selection-control__input"]},[u.value&&r(ne,{icon:u.value},null),P(r("input",ae({"onUpdate:modelValue":H=>a.value=H,ref:B,disabled:e.disabled,id:i.value,onBlur:w,onFocus:$,"aria-readonly":e.readonly,type:z,value:h.value,name:(R=n==null?void 0:n.name.value)!=null?R:e.name,"aria-checked":z==="checkbox"?a.value:void 0},o),null),[[ie,a.value]]),(F=t.input)==null?void 0:F.call(t,{model:a,textColorClasses:b,props:{onFocus:$,onBlur:w,id:i.value}})]),[[te("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),r(_e,{for:i.value},{default:()=>[N]})])}),{isFocused:f,input:B}}}),Ce=O({name:"VRadio",props:{falseIcon:{type:y,default:"$radioOff"},trueIcon:{type:y,default:"$radioOn"}},setup(e,l){let{slots:o}=l;return x(()=>r(Se,{class:"v-radio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:"radio"},o)),{}}}),Ie=s("h1",{class:"text-center"},"\u8A2D\u5B9A",-1),xe=s("thead",null,[s("tr",null,[s("th",null,"\u540D\u7A31"),s("th",null,"\u8A66\u807D"),s("th",null,"\u9078\u64C7")])],-1),Be=["src"],Re={__name:"SettingsView",setup(e){const l=ce(),{selectedAlarm:o,alarms:t}=de(l);return(c,n)=>(I(),ve(fe,{id:"settings"},{default:V(()=>[r(j,{cols:"12"},{default:V(()=>[Ie]),_:1}),r(j,{cols:"12"},{default:V(()=>[r(Ve,null,{default:V(()=>[xe,s("tbody",null,[(I(!0),E(ye,null,me(G(t),u=>(I(),E("tr",null,[s("td",null,pe(u.name),1),s("td",null,[s("audio",{controls:"",src:u.file},null,8,Be)]),s("td",null,[r(Ce,{modelValue:G(o),"onUpdate:modelValue":n[0]||(n[0]=a=>be(o)?o.value=a:null),value:u.id},null,8,["modelValue","value"])])]))),256))])]),_:1})]),_:1})]),_:1}))}};export{Re as default};
