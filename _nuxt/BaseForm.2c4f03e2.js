import{_ as Ve}from"./PageBaseLayout.c72097e2.js";import{bM as he,bT as ye,bU as be,h as w,r as v,bc as pe,bC as _e,i as fe,j as P,aL as Ce,b_ as De,cn as ke,a as e,aG as $,F as z,y as se,b3 as we,by as Se,aH as ee,co as Ue,ck as Be,cv as Fe,_ as Ie,u as Re,g as Pe,o as U,k as te,w as o,b as p,V as c,d as y,t as le,n as Ae,c as M,m as E,e as G,f as ae}from"./entry.26e0f55e.js";import{u as He}from"./useToEnglishDigits.dc917fe9.js";import{c as Ne,V as ie}from"./VAutocomplete.64a64ac9.js";import{V as ue}from"./VSelect.620a6f69.js";import{V as k}from"./VDivider.8253b586.js";import{V as ce,a as B}from"./VRadioGroup.f772affe.js";import{V as T}from"./VTextField.dc9b27e5.js";import{V as R}from"./VCheckbox.4cb25d61.js";import{m as Te,f as je,V as Oe,a as Me}from"./VField.de963f4c.js";import{m as Ee,u as Ge,V as de}from"./VInput.46c0eb00.js";import{f as ze}from"./forwardRefs.e2994a01.js";import{I as qe}from"./index.7aba734a.js";import{V as Ke}from"./VApp.dbfd8bb3.js";const Le=he({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseFloat(t))},maxRows:{type:[Number,String],validator:t=>!isNaN(parseFloat(t))},suffix:String,modelModifiers:Object,...Ee(),...Te()},"VTextarea"),Je=ye()({name:"VTextarea",directives:{Intersect:qe},inheritAttrs:!1,props:Le(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,n){let{attrs:g,emit:l,slots:x}=n;const u=be(t,"modelValue"),{isFocused:d,focus:a,blur:r}=Ge(t),A=w(()=>typeof t.counterValue=="function"?t.counterValue(u.value):(u.value||"").toString().length),q=w(()=>{if(g.maxlength)return g.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter});function K(i,h){var m,C;!t.autofocus||!i||(C=(m=h[0].target)==null?void 0:m.focus)==null||C.call(m)}const j=v(),F=v(),S=pe(""),I=v(),L=w(()=>t.persistentPlaceholder||d.value||t.active);function H(){var i;I.value!==document.activeElement&&((i=I.value)==null||i.focus()),d.value||a()}function J(i){H(),l("click:control",i)}function Q(i){l("mousedown:control",i)}function W(i){i.stopPropagation(),H(),ee(()=>{u.value="",Ue(t["onClick:clear"],i)})}function X(i){var m;const h=i.target;if(u.value=h.value,(m=t.modelModifiers)!=null&&m.trim){const C=[h.selectionStart,h.selectionEnd];ee(()=>{h.selectionStart=C[0],h.selectionEnd=C[1]})}}const s=v(),b=v(+t.rows),_=w(()=>["plain","underlined"].includes(t.variant));_e(()=>{t.autoGrow||(b.value=+t.rows)});function f(){t.autoGrow&&ee(()=>{if(!s.value||!F.value)return;const i=getComputedStyle(s.value),h=getComputedStyle(F.value.$el),m=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),C=s.value.scrollHeight,O=parseFloat(i.lineHeight),Y=Math.max(parseFloat(t.rows)*O+m,parseFloat(h.getPropertyValue("--v-input-control-height"))),Z=parseFloat(t.maxRows)*O+m||1/0,D=Fe(C??0,Y,Z);b.value=Math.floor((D-m)/O),S.value=Be(D)})}fe(f),P(u,f),P(()=>t.rows,f),P(()=>t.maxRows,f),P(()=>t.density,f);let V;return P(s,i=>{i?(V=new ResizeObserver(f),V.observe(s.value)):V==null||V.disconnect()}),Ce(()=>{V==null||V.disconnect()}),De(()=>{const i=!!(x.counter||t.counter||t.counterValue),h=!!(i||x.details),[m,C]=ke(g),[{modelValue:O,...Y}]=de.filterProps(t),[Z]=je(t);return e(de,$({ref:j,modelValue:u.value,"onUpdate:modelValue":D=>u.value=D,class:["v-textarea v-text-field",{"v-textarea--prefixed":t.prefix,"v-textarea--suffixed":t.suffix,"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-textarea--auto-grow":t.autoGrow,"v-textarea--no-resize":t.noResize||t.autoGrow,"v-text-field--plain-underlined":_.value},t.class],style:t.style},m,Y,{centerAffix:b.value===1&&!_.value,focused:d.value}),{...x,default:D=>{let{isDisabled:N,isDirty:oe,isReadonly:me,isValid:ve}=D;return e(Oe,$({ref:F,style:{"--v-textarea-control-height":S.value},onClick:J,onMousedown:Q,"onClick:clear":W,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"]},Z,{active:L.value||oe.value,centerAffix:b.value===1&&!_.value,dirty:oe.value||t.dirty,disabled:N.value,focused:d.value,error:ve.value===!1}),{...x,default:ge=>{let{props:{class:ne,...re}}=ge;return e(z,null,[t.prefix&&e("span",{class:"v-text-field__prefix"},[t.prefix]),se(e("textarea",$({ref:I,class:ne,value:u.value,onInput:X,autofocus:t.autofocus,readonly:me.value,disabled:N.value,placeholder:t.placeholder,rows:t.rows,name:t.name,onFocus:H,onBlur:r},re,C),null),[[we("intersect"),{handler:K},null,{once:!0}]]),t.autoGrow&&se(e("textarea",{class:[ne,"v-textarea__sizer"],id:`${re.id}-sizer`,"onUpdate:modelValue":xe=>u.value=xe,ref:s,readonly:!0,"aria-hidden":"true"},null),[[Se,u.value]]),t.suffix&&e("span",{class:"v-text-field__suffix"},[t.suffix])])}})},details:h?D=>{var N;return e(z,null,[(N=x.details)==null?void 0:N.call(x,D),i&&e(z,null,[e("span",null,null),e(Me,{active:t.persistentCounter||d.value,value:A.value,max:q.value},x.counter)])])}:void 0})}),ze({},j,F,I)}}),Qe={props:{mode:{type:String,required:!0},title:{type:String,required:!0},countTitle:{type:String,required:!0},ageTitle:{type:String,required:!0}},setup(t){const n=Re(),g=Pe(),l=v(null),x=v(Ne),u=v(null),d=v({}),a=v(!0),r=v({count:"1",nurseCategory:t.mode,gender:"Male",ages:[],shift:"Day",peopleInHouse:"",camera:"خیر",province:null,city:null,neighborhood:"",description:"",from:"",to:"",problems:[]}),A=v(Object.keys(x.value)),q=s=>s?x.value[s]:[],K=(s,b)=>{d.value={...d.value,[s]:b};const _=Object.keys(d.value).reduce((f,V)=>(f[V]=He(d.value[V]),f),{});r.value.ages=Object.values(_).map(f=>parseInt(f,10))},j=w(()=>r.value.camera!=="خیر"),F=w(()=>{const s=parseInt(r.value.count);return Array.from({length:s},(b,_)=>({id:_+1,show:!0}))}),S=w(()=>{if(t.mode==="Kid")return"nurseReserveChild";if(t.mode==="OldAge")return"nurseReserveElder";if(t.mode==="Patient")return"nurseReserveSick"});P(r,s=>{localStorage.getItem(S.value)||(r.value.city=null,u.value=!0)});const I=v({text:[s=>s?!0:"لطفا فیلد اجباری را پر کنید"],num:[s=>/^[0-9-]+$/.test(s)||/^[۰-۹-]+$/.test(s)?!0:"سن را به درستی وارد کنید"],stateSelect:[()=>r.value.province?!0:"لطفا استان خود را انتخاب کنید"],citySelect:[()=>r.value.city?!0:"لطفا شهر خود را انتخاب کنید"]}),L=()=>{u.value=!u.value,r.value.problems=[],u.value&&(r.value.problems=[])},H=()=>{r.value.problems===[]?u.value=!0:u.value=!1},J=w(()=>r.value.shift==="Boarding"),Q=async s=>{r.value.cctv=j.value,s&&(localStorage.setItem(S.value,JSON.stringify(r.value)),n.push(`${g.fullPath}/info`))},W=()=>{n.push("/nurse-services")},X=()=>{if(localStorage.getItem(S.value)){r.value=JSON.parse(localStorage.getItem(S.value));const s=r.value.ages.reduce((b,_,f)=>(b[f+1]=_.toString(),b),{});d.value=s,t.mode==="OldAge"&&r.value.problems.length<=0&&(u.value=!0)}else t.mode==="OldAge"&&(u.value=!0)};return fe(()=>{X()}),{submit:Q,form:l,routBackHandler:W,getCitiesByStates:q,states:A,rules:I,elderCareNone:u,elderCareSelectNone:L,elderCareUpdate:H,hideShiftHours:J,shiftError:a,updateAgeData:K,ageObj:d,generatedTextFields:F,formData:r}}},We={class:"text-title"},Xe=y("p",{class:"text-title"},"جنسیت",-1),Ye={class:"text-title"},Ze={key:0},$e=y("p",{class:"text-title"},"سالمند شما کدام یک از موارد زیر را دارا میباشد؟",-1),et=y("p",{class:"text-title"},"شیفت کاری",-1),tt=y("p",{class:"text-title"},"ساعت کاری از",-1),lt=y("span",{class:"text"},"تا",-1),at=y("p",{class:"text-title"},"در طول مدت فعالیت نیروی اعزامی چه شخصی داخل منزل حضور دارد؟",-1),ot=y("p",{class:"text-title"},"آیا در محل نیروی اعزامی دوربین مداربسته وجود دارد؟",-1),nt=y("p",{class:"text-center text-title"},"محدوده محل سکونت",-1),rt=y("p",{class:"text-teal-accent-4 text-title"},null,-1);function st(t,n,g,l,x,u){const d=Ve;return U(),te("div",null,[e(Ke,null,{default:o(()=>[e(d,{title:g.title,formClass:"nurse-service",firstIndex:!0,onBaseRouteBackHandler:l.routBackHandler,onBaseSubmit:l.submit},{default:o(()=>[e(p,{"no-gutters":"",class:"px-3"},{default:o(()=>[e(c,{xxl:"5",xl:"6",lg:"7",md:"8",cols:"12",class:"mx-auto"},{default:o(()=>[e(p,null,{default:o(()=>[e(c,{cols:"4"},{default:o(()=>[e(ue,{items:["1","2","3","4"],variant:"underlined",color:"teal-accent-4",modelValue:l.formData.count,"onUpdate:modelValue":n[0]||(n[0]=a=>l.formData.count=a)},null,8,["modelValue"])]),_:1}),e(c,{cols:"8",class:"d-flex align-center justify-end text-right px-5"},{default:o(()=>[y("p",We,le(g.countTitle),1)]),_:1}),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:1}),e(p,null,{default:o(()=>[e(c,{cols:"8"},{default:o(()=>[e(ce,{modelValue:l.formData.gender,"onUpdate:modelValue":n[1]||(n[1]=a=>l.formData.gender=a),class:"d-flex",inline:""},{default:o(()=>[e(B,{label:"هردو",color:"teal-accent-4",value:"Both","hide-details":""}),e(B,{label:g.mode==="Kid"?"دختر":"خانم",color:"teal-accent-4",value:"Female","hide-details":""},null,8,["label"]),e(B,{label:g.mode==="Kid"?"پسر":"آقا",color:"teal-accent-4",value:"Male","hide-details":""},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),e(c,{cols:"4",class:"d-flex align-center justify-end text-right px-5"},{default:o(()=>[Xe]),_:1}),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:1}),(U(!0),te(z,null,Ae(l.generatedTextFields,(a,r)=>(U(),M(p,{key:r},{default:o(()=>[e(c,{cols:"4"},{default:o(()=>[a.show?(U(),M(T,{key:0,variant:"underlined",color:"teal-accent-4",type:"text",rules:l.rules.num,"model-value":l.ageObj[a.id],"onUpdate:modelValue":A=>l.updateAgeData(a.id,A)},null,8,["rules","model-value","onUpdate:modelValue"])):E("",!0)]),_:2},1024),e(c,{cols:"8",class:"d-flex align-center justify-end text-right px-5"},{default:o(()=>[y("p",Ye,[r>0?(U(),te("span",Ze,le(r+1),1)):E("",!0),G(" "+le(g.ageTitle),1)])]),_:2},1024),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:2},1024))),128)),g.mode==="OldAge"?(U(),M(p,{key:0},{default:o(()=>[e(c,{cols:"12",class:"text-right"},{default:o(()=>[$e]),_:1}),e(c,{cols:"12",class:"d-flex flex-wrap justify-center elder-checkbox"},{default:o(()=>[e(R,{label:"پوشک",color:"teal-accent-4",value:"Diaper","hide-details":"",inline:"",modelValue:l.formData.problems,"onUpdate:modelValue":n[2]||(n[2]=a=>l.formData.problems=a),onChange:l.elderCareUpdate},null,8,["modelValue","onChange"]),e(R,{label:"لگن",color:"teal-accent-4",value:"Bedpan","hide-details":"",inline:"",modelValue:l.formData.problems,"onUpdate:modelValue":n[3]||(n[3]=a=>l.formData.problems=a),onChange:l.elderCareUpdate},null,8,["modelValue","onChange"]),e(R,{label:"آلزایمر",color:"teal-accent-4",value:"Alzheimer","hide-details":"",inline:"",modelValue:l.formData.problems,"onUpdate:modelValue":n[4]||(n[4]=a=>l.formData.problems=a),onChange:l.elderCareUpdate},null,8,["modelValue","onChange"]),e(R,{label:"پارکینسون",color:"teal-accent-4",value:"Parkinson","hide-details":"",inline:"",modelValue:l.formData.problems,"onUpdate:modelValue":n[5]||(n[5]=a=>l.formData.problems=a),onChange:l.elderCareUpdate},null,8,["modelValue","onChange"]),e(R,{label:"هیچکدام",color:"teal-accent-4","hide-details":"",inline:"",modelValue:l.elderCareNone,"onUpdate:modelValue":n[6]||(n[6]=a=>l.elderCareNone=a),onClick:l.elderCareSelectNone},null,8,["modelValue","onClick"]),e(R,{label:"ام اس",color:"teal-accent-4",value:"MS","hide-details":"",inline:"",modelValue:l.formData.problems,"onUpdate:modelValue":n[7]||(n[7]=a=>l.formData.problems=a),onChange:l.elderCareUpdate},null,8,["modelValue","onChange"])]),_:1}),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:1})):E("",!0),e(p,null,{default:o(()=>[e(c,{cols:"9"},{default:o(()=>[e(ce,{modelValue:l.formData.shift,"onUpdate:modelValue":n[8]||(n[8]=a=>l.formData.shift=a),class:"d-flex",inline:""},{default:o(()=>[e(B,{label:"شبانه",color:"teal-accent-4",value:"Night","hide-details":"",class:"w-50"}),e(B,{label:"روزانه",color:"teal-accent-4",value:"Day","hide-details":"",class:"w-50"}),e(B,{label:"شبانه روزی",color:"teal-accent-4",value:"Boarding","hide-details":"",class:"w-50"}),e(B,{label:"مقطعی",color:"teal-accent-4",value:"Hour","hide-details":"",class:"w-50"})]),_:1},8,["modelValue"])]),_:1}),e(c,{cols:"3",class:"d-flex align-center justify-end text-right px-5"},{default:o(()=>[et]),_:1}),l.hideShiftHours?E("",!0):(U(),M(c,{key:0,class:"d-flex flex-row-reverse align-center"},{default:o(()=>[e(c,{cols:"4",class:"text-right"},{default:o(()=>[tt]),_:1}),e(c,{cols:"4"},{default:o(()=>[e(T,{placeholder:"۹ صبح",variant:"underlined",color:"teal-accent-4",modelValue:l.formData.from,"onUpdate:modelValue":n[9]||(n[9]=a=>l.formData.from=a),rules:l.rules.text},null,8,["modelValue","rules"])]),_:1}),lt,e(c,{cols:"4"},{default:o(()=>[e(T,{placeholder:"۶ بعدازظهر",variant:"underlined",color:"teal-accent-4",modelValue:l.formData.to,"onUpdate:modelValue":n[10]||(n[10]=a=>l.formData.to=a),rules:l.rules.text},null,8,["modelValue","rules"])]),_:1})]),_:1})),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:1}),e(p,null,{default:o(()=>[e(c,{cols:"3"},{default:o(()=>[e(T,{variant:"underlined",color:"teal-accent-4",type:"text",rules:l.rules.text,modelValue:l.formData.peopleInHouse,"onUpdate:modelValue":n[11]||(n[11]=a=>l.formData.peopleInHouse=a)},null,8,["rules","modelValue"])]),_:1}),e(c,{cols:"9",class:"d-flex align-center justify-end text-right px-5"},{default:o(()=>[at]),_:1}),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:1}),e(p,null,{default:o(()=>[e(c,{cols:"3"},{default:o(()=>[e(ue,{items:["بله","خیر"],variant:"underlined",color:"teal-accent-4",modelValue:l.formData.camera,"onUpdate:modelValue":n[12]||(n[12]=a=>l.formData.camera=a)},null,8,["modelValue"])]),_:1}),e(c,{cols:"9",class:"d-flex align-center justify-end text-right px-5"},{default:o(()=>[ot]),_:1}),e(k,{thickness:1,class:"border-opacity-100",color:"teal-accent-4"})]),_:1}),e(p,{class:"personal-info mt-3"},{default:o(()=>[e(c,{cols:"12"},{default:o(()=>[nt,e(ie,{label:"استان",items:l.states,variant:"underlined",color:"teal-accent-4",class:"align px-3",rules:l.rules.stateSelect,"menu-icon":"",modelValue:l.formData.province,"onUpdate:modelValue":n[13]||(n[13]=a=>l.formData.province=a),counter:!1},{append:o(()=>[e(ae,{color:"teal-accent-4",class:"ml-2",style:{opacity:"1"}},{default:o(()=>[G(" mdi-city ")]),_:1})]),_:1},8,["items","rules","modelValue"]),e(ie,{label:"شهر",items:l.getCitiesByStates(l.formData.province),variant:"underlined",color:"teal-accent-4",class:"align px-3",rules:l.rules.citySelect,"menu-icon":"",modelValue:l.formData.city,"onUpdate:modelValue":n[14]||(n[14]=a=>l.formData.city=a),counter:!1},{append:o(()=>[e(ae,{color:"teal-accent-4",class:"ml-2",style:{opacity:"1"}},{default:o(()=>[G(" mdi-city ")]),_:1})]),_:1},8,["items","rules","modelValue"]),e(T,{variant:"underlined",label:"محله",color:"teal-accent-4",rules:l.rules.text,class:"py-2 px-3",modelValue:l.formData.neighborhood,"onUpdate:modelValue":n[15]||(n[15]=a=>l.formData.neighborhood=a)},{error:o(()=>[rt]),append:o(()=>[e(ae,{color:"teal-accent-4",class:"ml-2",style:{opacity:"1"}},{default:o(()=>[G("mdi-home-group ")]),_:1})]),_:1},8,["rules","modelValue"])]),_:1}),e(k,{thickness:1,class:"border-opacity-100 mb-4",color:"teal-accent-4"})]),_:1}),e(p,{class:"personal-info"},{default:o(()=>[e(Je,{label:"توضیحات",color:"teal-accent-4",variant:"solo",modelValue:l.formData.description,"onUpdate:modelValue":n[16]||(n[16]=a=>l.formData.description=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","onBaseRouteBackHandler","onBaseSubmit"])]),_:1})])}const _t=Ie(Qe,[["render",st]]);export{_t as _};
