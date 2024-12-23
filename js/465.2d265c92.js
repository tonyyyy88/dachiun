"use strict";(self["webpackChunkdachiun"]=self["webpackChunkdachiun"]||[]).push([[465],{465:function(t,e,i){i.r(e),i.d(e,{default:function(){return At}});var n=i(8105),s=n.A,r=i(5471),a=i(4961);function o(t=[],...e){return Array().concat(t,...e)}function l(t,e="top center 0",i){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render(e,i){const n="transition"+(i.props.group?"-group":""),s={props:{name:t,mode:i.props.mode},on:{beforeEnter(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(s.on.leave=o(s.on.leave,(t=>{const{offsetTop:e,offsetLeft:i,offsetWidth:n,offsetHeight:s}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=i+"px",t.style.width=n+"px",t.style.height=s+"px"})),s.on.afterLeave=o(s.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:i,left:n,width:s,height:r}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=i||"",t.style.left=n||"",t.style.width=s||"",t.style.height=r||""}}))),i.props.hideOnLeave&&(s.on.leave=o(s.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(n,(0,a.Ay)(i.data,s),i.children)}}}function c(t,e,i="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:i}},render(i,n){return i("transition",(0,a.Ay)(n.data,{props:{name:t},on:e}),n.children)}}}var d=i(6960);function u(t="",e=!1){const i=e?"width":"height",n=`offset${(0,d.Zb)(i)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},enter(e){const s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const r=`${e[n]}px`;e.style[i]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[i]=r}))},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[i]="0"))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}}l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition"),l("tab-reverse-transition"),l("menu-transition"),l("fab-transition","center center","out-in"),l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition");const p=l("fade-transition"),h=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition"));l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",u()),c("expand-x-transition",u("",!0));var v=i(6965),m=i(8767),f=i(9923);function g(t="value",e="change"){return r.Ay.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const y=g();var _=y,b=i(3661),C=i(3507);const x=(0,C.A)(m.A,(0,f.P)(["absolute","fixed","top","bottom"]),_,b.A);var w=x.extend({name:"v-progress-linear",directives:{intersect:v.A},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,d.Dg)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,d.Dg)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,d.Dg)(this.normalizedValue,"%"),width:(0,d.Dg)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?p:h},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,d.Dg)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,d.$c)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,i){this.isVisible=i},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,d.Dg)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),$=w,k=r.Ay.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:(0,d.$c)(this,"progress")||this.$createElement($,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});const S=80;function A(t,e){t.style.transform=e,t.style.webkitTransform=e}function B(t){return"TouchEvent"===t.constructor.name}function L(t){return"KeyboardEvent"===t.constructor.name}const E=(t,e,i={})=>{let n=0,s=0;if(!L(t)){const i=e.getBoundingClientRect(),r=B(t)?t.touches[t.touches.length-1]:t;n=r.clientX-i.left,s=r.clientY-i.top}let r=0,a=.3;e._ripple&&e._ripple.circle?(a=.15,r=e.clientWidth/2,r=i.center?r:r+Math.sqrt((n-r)**2+(s-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const o=(e.clientWidth-2*r)/2+"px",l=(e.clientHeight-2*r)/2+"px",c=i.center?o:n-r+"px",d=i.center?l:s-r+"px";return{radius:r,scale:a,x:c,y:d,centerX:o,centerY:l}},T={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",i.class&&(n.className+=` ${i.class}`);const{radius:r,scale:a,x:o,y:l,centerX:c,centerY:d}=E(t,e,i),u=2*r+"px";s.className="v-ripple__animation",s.style.width=u,s.style.height=u,e.appendChild(n);const p=window.getComputedStyle(e);p&&"static"===p.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),A(s,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),A(s,`translate(${c}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const n=performance.now()-Number(i.dataset.activated),s=Math.max(250-n,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{var e;const n=t.getElementsByClassName("v-ripple__animation");1===n.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),(null===(e=i.parentNode)||void 0===e?void 0:e.parentNode)===t&&t.removeChild(i.parentNode)}),300)}),s)}};function P(t){return"undefined"===typeof t||!!t}function j(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,B(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||L(t),i._ripple.class&&(e.class=i._ripple.class),B(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{T.show(t,i,e)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),S)}else T.show(t,i,e)}}function O(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{O(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),T.hide(e)}}function z(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let N=!1;function V(t){N||t.keyCode!==d.uP.enter&&t.keyCode!==d.uP.space||(N=!0,j(t))}function R(t){N=!1,O(t)}function D(t){!0===N&&(N=!1,O(t))}function H(t,e,i){const n=P(e.value);n||T.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;const s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),n&&!i?(t.addEventListener("touchstart",j,{passive:!0}),t.addEventListener("touchend",O,{passive:!0}),t.addEventListener("touchmove",z,{passive:!0}),t.addEventListener("touchcancel",O),t.addEventListener("mousedown",j),t.addEventListener("mouseup",O),t.addEventListener("mouseleave",O),t.addEventListener("keydown",V),t.addEventListener("keyup",R),t.addEventListener("blur",D),t.addEventListener("dragstart",O,{passive:!0})):!n&&i&&q(t)}function q(t){t.removeEventListener("mousedown",j),t.removeEventListener("touchstart",j),t.removeEventListener("touchend",O),t.removeEventListener("touchmove",z),t.removeEventListener("touchcancel",O),t.removeEventListener("mouseup",O),t.removeEventListener("mouseleave",O),t.removeEventListener("keydown",V),t.removeEventListener("keyup",R),t.removeEventListener("dragstart",O),t.removeEventListener("blur",D)}function W(t,e,i){H(t,e,!1)}function G(t){delete t._ripple,q(t)}function I(t,e){if(e.value===e.oldValue)return;const i=P(e.oldValue);H(t,e,i)}const M={bind:W,unbind:G,update:I};var F=M,X=r.Ay.extend({name:"routable",directives:{Ripple:F},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let n=this.activeClass,s=this.exactActiveClass||n;this.proxyClass&&(n=`${n} ${this.proxyClass}`.trim(),s=`${s} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:n,exactActiveClass:s,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,d.no)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}}),Z=(0,C.A)(k,X,s).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...X.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.options.computed.classes.call(this)}},styles(){const t={...s.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=k.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),(0,d.$c)(this)])}});(0,d.Gn)("v-card__actions"),(0,d.Gn)("v-card__subtitle");const Y=(0,d.Gn)("v-card__text"),K=(0,d.Gn)("v-card__title");i(4114),i(8992),i(3949),i(7550);const J=["sm","md","lg","xl"],Q=(()=>J.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),U=(()=>J.reduce(((t,e)=>(t["offset"+(0,d.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),tt=(()=>J.reduce(((t,e)=>(t["order"+(0,d.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),et={col:Object.keys(Q),offset:Object.keys(U),order:Object.keys(tt)};function it(t,e,i){let n=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");n+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(n+=`-${i}`,n.toLowerCase()):n.toLowerCase()}}const nt=new Map;var st=r.Ay.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...Q,offset:{type:[String,Number],default:null},...U,order:{type:[String,Number],default:null},...tt,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n,parent:s}){let r="";for(const a in e)r+=String(e[a]);let o=nt.get(r);if(!o){let t;for(t in o=[],et)et[t].forEach((i=>{const n=e[i],s=it(t,i,n);s&&o.push(s)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),nt.set(r,o)}return t(e.tag,(0,a.Ay)(i,{class:o}),n)}});i(4520),i(158);function rt(t){return r.Ay.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:n,children:s}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:r}=n;if(r){n.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(n.staticClass+=` ${t.join(" ")}`)}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,s)}})}var at=rt("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:n}){let s;const{attrs:r}=i;return r&&(i.attrs={},s=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,a.Ay)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),n)}});const ot=["sm","md","lg","xl"],lt=["start","end","center"];function ct(t,e){return ot.reduce(((i,n)=>(i[t+(0,d.Zb)(n)]=e(),i)),{})}const dt=t=>[...lt,"baseline","stretch"].includes(t),ut=ct("align",(()=>({type:String,default:null,validator:dt}))),pt=t=>[...lt,"space-between","space-around"].includes(t),ht=ct("justify",(()=>({type:String,default:null,validator:pt}))),vt=t=>[...lt,"space-between","space-around","stretch"].includes(t),mt=ct("alignContent",(()=>({type:String,default:null,validator:vt}))),ft={align:Object.keys(ut),justify:Object.keys(ht),alignContent:Object.keys(mt)},gt={align:"align",justify:"justify",alignContent:"align-content"};function yt(t,e,i){let n=gt[t];if(null!=i){if(e){const i=e.replace(t,"");n+=`-${i}`}return n+=`-${i}`,n.toLowerCase()}}const _t=new Map;var bt=r.Ay.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:dt},...ut,justify:{type:String,default:null,validator:pt},...ht,alignContent:{type:String,default:null,validator:vt},...mt},render(t,{props:e,data:i,children:n}){let s="";for(const a in e)s+=String(e[a]);let r=_t.get(s);if(!r){let t;for(t in r=[],ft)ft[t].forEach((i=>{const n=e[i],s=yt(t,i,n);s&&r.push(s)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),_t.set(s,r)}return t(e.tag,(0,a.Ay)(i,{staticClass:"row",class:r}),n)}}),Ct=function(){var t=this,e=t._self._c;return e(at,[e(bt,{staticClass:"mt-6",attrs:{justify:"center"}},[e(st,{attrs:{cols:"12",sm:"10",md:"8"}},[e(Z,{attrs:{elevation:"2"}},[e(K,{staticClass:"text-h4"},[t._v(t._s(t.articleData.title))]),e(Y,t._l(t.articleData.content,(function(i,n){return e("p",{key:n,staticClass:"mb-4 text-h6"},[t._v(" "+t._s(i)+" ")])})),0)],1)],1)],1)],1)},xt=[],wt={name:"viewParagraph",data(){return{articles:{A1:{title:"公司與行號差別",content:["  公司觀感規模較大且公司全國專用，行號感覺規模較小屬單一縣市專用。","公司只須就出資額負擔清償責任上限，(!)行號則須負擔無上限清償責任 (!)","依產業特性與未來企業規劃決定何者較適合。","如有上下游廠商或客戶、銷售平台或招標單位無特殊要求，兩者都可以，惟刻板印象觀感、名稱專屬權與清償責任上限不同。"]},A2:{title:"公司與行號哪個好呢？三個標準快速判斷！",content:["1.未來組織擴大有沒有需要開立發票？還是可以一直接受收據呢？","2.股東人數是否超過一位？","3.公司未來的營運區域範圍是否為全國？","只要有其一回答「是」，建議登記「公司」。回答皆是「否」，則建議登記「行號」。","◆判斷標準一：現在或未來有使用發票需求，建議申請公司","如規劃從事的行業批發業、需有上下游供應商商品或服務，有需要開發票給客戶/消費者的需求的話，強烈建議申請公司組織型態較好，原因公司營收高低都要開立發票，具有較強節稅規劃空間，行號亦可使用發票，但節稅效益會遠低於公司！","這是綜合所得稅的稅率級距表：","綜合所的淨額","▲0~540,000","▲540,001~1,210,000","▲1,120,001~2,420,000","▲2,420,001~4,530,000","▲ 4530001以上 ","依台灣個人綜合所得稅最高稅率40%，行號的營利所得按規定併入負責人個人綜合所得稅申報，若未來行號營業額很高，負責人綜合所得稅有可能會由5%一口氣躍升到40%！","（三 )公司與行號在稅務上的差異：","▲ 組織型態","▲使用發票","▲營業稅稅率","▲扣繳申報","▲營所稅稅率","◆判斷標準二：股東人數是否超過一位？","（一 )股東人數眾多，選公司決議更有效率：行號且合夥組織下，若有任何應變更事項或決議，需全體合夥人全部同意才可執行; 但公司組織有任何應變更登記事項，有限公司需全體股東同意並親自簽名，股份有限公司則需經由董事會或股東會決議，決議方法也依影響之程度，區分為普通決議及特別決議。如股東人數較多或股東組成較複雜，建議以成立公司組織更能增加執行效率。","（二 )未來發展規模拓展性高：公司與行號不能相互轉換，所以一開始設立時若未來營運計畫較大建議選擇公司，未來如有需求尚可變更為股份有限公司的可能性，以避免未來名號或規模發展龐大時，無法改制或發展受到限制。請特別注意申請行號後未來想擴展規模行號，無法變更只能重新申請。","◆判斷標準三：業務範圍較廣建議申請公司較優","(一)公司的名稱屬全國性保護性較佳：公司與行號各管轄機關不同：【公司組織】的主管機關為『經濟部』；【行號組織】的主管機關為『地方縣市政府』，公司名稱保護屬全國。行號僅限地方政府。公司名稱的保護是全國性，公司名稱有專一性，行號則僅限於設立登記的該縣市。且公司組織成立之後，可遷移至任一縣市。若行號，遷移到其他縣市還需確認有無同名行號登記，不甚保險更不方便，因此我們會建議登記公司組織比較有保障。","(二)政府招標、園區客群：申請公司較優：未來公司營運計畫與業務區域是遍佈全國的話，申請公司組織不僅能確保公司名稱能通行全國，不會重複。此外，現在公家機關之招標常訂有投標資格，需達資本額最低標準門檻才能參與投標，行號因為設立時，一般資本額多會訂在25萬以下，因此不會透過會計師驗資，很可能會因為不符合招標規定而喪失資格，因此有意承包政府相關業務者，也建議以申請公司組織較為適當。園區事業的下游或外包，以新竹、竹北地區而言，由於科學園區林立，因此若有機會成為園區的廠商外包或下游能爭取到不錯的訂單，但以科學園區來說，雖然行號與公司一樣都能開立發票，但園區客戶通常較希望與公司組織往來，因此如果未來您服務的對象或銷售產品的對象在園區，也建議以申請公司組織較佳。"]},A3:{title:"開公司還是行號較省錢？",content:["  單純從「辦理費用」來說，開公司的費用成本較高。但論未來發展性公司比行號來得好，一來可以擴充組織的規模、引進金主或新的投資者較為便利，稅捐較有規劃的空間和彈性。行號除非是申請小規模營業人，不然在租稅的負擔上不一定比公司來得輕唷！因為行號開發票的情況下，當年度賺的都會分配給負責人，除非使用小規模營業人，不然有機會個人綜合所得稅適用到30%或40%的稅率，因此在租稅的負擔上不一定比公司來得輕。","若是行號平均每月新臺幣20萬元以下，有機會申請為小規模營業人，意即可免用發票，改用收據。針對於這點，達群要特別提醒：只是有機會申請為可使用收據的資格，並非一定能取得；畢竟決定權在國稅局，且能否取得的因素很多，比方說：營業性質特殊的營業人，那當然在申請上會較易些，對於小規模營業人的資格有興趣者，不妨參考下列的適用範圍與要件，審視自身是否符合。","一、營業性質特殊營業人之適用範圍：營業性質特殊之營業人，主管稽徵機關依「營業稅特種稅額查定辦法」查定其每月銷售額時，其銷售額得不受使用統一發票標準之限制。","二、主旨所稱營業性質特殊之營業人如下：","(一)供應大眾化消費之豆漿店、冰果店、甜食館、麵食館、自助餐、排骨飯、便當及餐盒，但主管稽徵機關得視其營業性質及經營規模，具有使用統一發票能力者，核定其使用統一發票。","(二)電動玩具遊樂場所。","(三)稻米、麵粉、小麥、大麥、米粉、麵類（包括麵乾、麵條等 )、豆類、落花生、高梁、甘薯、甘薯簽、甘薯澱粉、大麥片、糕粉等零售業。","(四)攤販。","(五)其他屬季節性之行業，其交易零星者。"]},A4:{title:"哪些人可以申請免用統一發票？",content:["  申請免用統一發票之”小規模營業人”要件如下：","1 月營業額20萬元以下。","2. 銷售單價低、小店面生意（例如：麵攤、小吃店、攤車）。","3. 非連鎖事業。","4. 不能是批發業（營業項目選擇需注意唷）。"]},A5:{title:"股東與董事有什麼差異？",content:["  股東不需負擔經營責任，只是出資者（出錢不管事 )，理論上無需負管理上的責任。","董事需負擔經營管理責任，按法律規定董事具有公司的事務執行權與對外代表權。"]},A6:{title:"負責人及股東有無條件限制？",content:["1. 需滿20歲且有行為能力。","2. 如負責人領有政府各項補助款，或退休金補助者，強烈建議先與各補助核發單位再三確認，以免被取消補助。","3. 欠卡債者不宜當負責人及股東。","4. 欠稅捐者不宜當負責人及股東。","5. 公務人員不可擔任負責人。"]},A7:{title:"如何挑選合法的設立公司地點呢？",content:["住宅區：僅限住宅使用，只有某些放寬規定供特定營業項目使用。","商業區：可作商業使用，可合法設立辦公室與營業登記。","工業區：可作製造業使用，有某部份放寬規定供特定營業項目使用。","按照建築法與建築物使用分區管理條例及使用執照管理辦法等規定，可以區分以上三類的情況。 ","如未按相關法規登記會遭當地政府處罰，或遭鄰居檢舉產生罰則，因此設立登記前需特別注意挑選合法營業地址。"]},A8:{title:"登記在自己家有哪些稅金或費用？如何節省房屋稅與地價稅？",content:["(一)房屋稅部分：","原則上依照房屋的實際使用情形按不同稅率課徵，可區分為營業用稅率3%、住家用稅率1.2%、非住家非營業用稅率2%。","(二)地價稅部分：","地價稅則依房屋稅課徵情形依比例計算所占土地面積，分別按自用住宅用地（千分之二 )、一般用地（千分之十 )。","(三)土地增值稅部分：","土地增值稅是在「土地所有權移轉」時發生的，短期內無售屋打算可不考慮此項。","(四)水、電、瓦斯、電話費：","水、電、瓦斯費用：會調整為營業用。","電話費及行動電話費：要自行到電信單位申辦，才會變更成營業用，或是申請電話時，您提出營業單位的名稱，才會被設定為營業用，以個人名義申請，在未辦理變更之前，仍是一般費率。","原已有登記公司，對於房屋稅、地價稅均不會有影響。","原是全自住登記公司後，房屋稅由1.2%調整為3%，地價稅由千分之二調整為千分之十，但大部分新創公司不會使用到全部面積作為辦公室，因此可以申請「六分之一」營業使用。"]},A9:{title:"什麼資格才能申請房屋稅與地價稅全部自住用稅率？",content:["  如果要申請全自住用稅率，需符合以下條件：","1.負責人本人或配偶、直系親屬的房屋。","2.原是全自住使用。","3.未雇用員工。","4.營業活動均以行動裝置完成。","5.房屋內未供辦公或存放與營業活動相關的設備及物品。","於前往國稅局領取購買證時告知「想適用自用住宅稅率」，請稅務員協助「註記」，接著再到「稅捐處」進行房屋使用情形變更申請。","全自住不一定會通過，以稅捐人員勘查結果為準。若沒有通過，可申請「六分之一」營業使用，因沒有條件限制，大多數情況都可以通過。","另外提醒，房屋稅地價稅可以一起申請有任何疑問，可致電「房屋稅單右下角」的稅捐處承辦人員。"]},A10:{title:"任何地點都能開店開公司從事我想要的營業項目？",content:["  營業登記可申請免審核建物及土地用途，只要營業地點有門牌並取得屋主同意即可辦理登記。","但若您設立的地點是台北市或新北市，設立前，針對某特定行業會強制審查營業項目與建物或土地用途是否相符，才能完成營業登記手續。","因此，建議設立前先瞭解自身地點是否符合規定，避免後續不符合規範，無法設立公司或面臨被迫遷移的窘境。"]},A11:{title:"公司登記在「自宅」或「親友家」需要租約嗎？要提供什麼文件？",content:["  除了「獨資、合夥」的「行號」，且房屋為「負責人本人、配偶、或直系親屬」所有。除此之外都不可無償使用，若主張無償使用，稽徵機關可參考當地一般租金情況，計算租賃收入課稅。","如果是「公司」，無論是否是登記在「自宅」或是「親友家」，都不是可以無償使用的範圍。","達群建議，如實際為無償使用仍需簽訂最低每月租金1,000元的租約！比國稅局按照市場價格核定計算便宜。所以即使房東提供無償使用，沒有收到租金，建議仍需申報租賃收入。","房屋所有權人為兩人以上，房東僅有一人，提供最新一期房屋稅單影本即可（需最新一期，並有戳章頁；如購買新屋檢附契稅；免繳房屋稅，請附房屋稅證明書 )。","房屋稅單上無加註樓層，希望登記樓層者，提供建物所有權狀或第一類建物騰本，可限定樓層，將只有其中一層稅率變更營業用。"]},A12:{title:"資本額應該要多少？有無最低限制？",content:["  早在 98 年 1 月 22 日，行政院便已廢除公司設立最低資本額制度，而公司資本額以會計師查核簽證認定此金額足夠支付設立成本即可。"]},A13:{title:"決定資本額需評估哪些？",content:["1.未來如有考慮向銀行申請「貸款」、「補助」，政府或銀行均以資本額作為申請額度標準之一。","2.如需標工程案，資本額也是依據之一。","3.特殊行業會有法案規定。例如:營造業、土木包工業等。"]},A14:{title:"股東無時間匯款，可由負責人代理嗎？",content:["  如代匯股款時，請附代匯款切結書。","委託代辦，需附上代辦授權書，因洗錢防制法規定，達群不可承辦負責人無法親洽業務。"]},A15:{title:"設立資本額最少需要在銀行幾天？",content:["  最短存放兩天。「銀行設立公司籌備處帳戶到存入資本額」一天、隔日可至銀行「申請存款餘額證明」後即可動用。","＊需要是公司正常的營運使用，請不要單筆50萬以上銀行需進行洗錢防制通報備查。"]},A16:{title:"可以用存款餘額證明替代會計師資本簽證嗎？",content:["  按公司法第7條規定公司設立時，資本額須經會計師簽證且需提供存簿影本、餘額正本給會計師進行簽證 。"]},A17:{title:"可以先將登記的資本總額設高，實收資本額再慢慢補齊嗎？",content:["  較常發生於上市公司或股東眾多的公司。股份有限公司要變更資本額，需股東大會通過，股東多的公司舉辦股東大會需數個月，所以先將登記資本總額設高再分次實現，可以節省麻煩的手續。","股東人數不多的非公開發行股份有限公司就不建議，原因如下：","1.實收資本額分次到位時，每次都要進行增資的變更登記。","2.政府公開資料，會同時顯示資本總額與實收資本額。股東人數不多的公司，可以直接設定資本總額等於實收資本額，有需要增資時，直接做增資的變更登記即可。"]},A18:{title:"如何挑選公司開戶銀行？",content:["  建議依據使用習慣：公司戶日後會常用網路銀行，建議挑選已習慣的銀行或已有往來銀行。但有些銀行的企業帳戶與個人帳戶使用不同系統，可以先詢問清楚呦！","建議依據公司或住家遠近：未來會常跑銀行建議找住家或公司附近銀行辦理，建議同步申請網路銀行、後續亦可申請公司支票。"]},A19:{title:"開設籌備戶需要準備那些？",content:["  負責人本人親自辦理攜帶下列資料：","1. 公司名稱及所營事業登記預查核定書。","2. 負責人私章。","3. 負責人雙證件(身分證及健保卡)。","*大多數銀行皆可免用籌備處章，仍有部分銀行會要求，如果需要的話，要刻備處章才能開戶。"]},A20:{title:"公司籌備戶何時改成正式戶，需要帶什麼資料?",content:["  雖然每家不太相同，達群建議攜帶如下：","1. 負責人本人身分證與健保卡。","2. 設立登記公文與登記表正本(行號攜帶設立登記公文與商業抄本)。","3. 銀行用公司大小章(可與設立大小章不同)。","4. 第二證件：「公司章程」或「國稅局公文或購票證明」(行號攜帶國稅局公文)。"]},A21:{title:"行號如何開立正式帳戶?",content:["  資本額小於25萬無須開設帳戶。","因為行號不具法人格，係屬個人延伸，上下游收款無特殊需求可用個人帳戶收款。","達群建議至固定往來銀行開設，未來轉帳亦可節省手續費。"]},A22:{title:"資本額存入有哪些？",content:["現金臨櫃：","設立在與個人帳戶同家銀行：攜帶個人戶的印章存摺前往，告知行員要從個人戶提現金存入籌備處戶即可。","設立在與個人帳戶不同銀行：需預先提出現金，攜帶前往預計開設籌備處戶之銀行。","優點：開戶當天完成存入資本額的動作。如數名股東，現金存入時寫不同股東名字與相對應金額。","請注意現金如果超過新台幣30萬以上，建議用轉帳方式存入(因應洗錢防制法)","轉帳方式存入資本額：","請留意非約定轉帳上限，如超過先行約定後再轉入資本額。另外一定要從股東本人帳戶轉資金到籌備處帳戶，不能代轉，如未顯示股東姓名則需提供轉入帳號存摺封面影本存證。"]},A23:{title:"股東們一定要依照比例存入資金嗎？",content:["  因洗錢防制法關係需請各股東照比例存入資金，但注意，轉入資本額的帳戶一定要股東的。"]},A24:{title:"達群會幫忙代刻公司印章嗎？可以跟銀行同一組嗎？",content:["  達群的服務包含刻設立印鑑大小章一組、發票大小章一組、記帳大小章一組(純設立的客戶則無記帳大小章)。","印鑑大小章在公司設立完成後會交還給公司，請貴公司自行保管。","公司印章與種類可分為三種：","1. 設立機關：公司設立印鑑，未來與公司登記異動有關：如設立登記、變更、申請工商憑證、修改章程等，都需要使用與設立登記表相同的大小章。","2. 國稅局：發票章跟負責人小章(購票證背面的印鑑卡)，未來營運時購買發票使用，負責人小章應與設立時的負責人小章同顆，較易管理。","3. 銀行：銀行大小章建議可以刻篆字，較難仿也不易造成別人拿到公司大小章就能領錢的情況。","達群強烈建議：創業者自己刻「銀行帳戶」大小章，較好管理與安全。"]},A25:{title:"營業項目較多會增加費用嗎？",content:["  申請營業項目並無選項上限，且政府規費都相同。有些初次創業者會放上很多營業項目，以下分析利弊得失！","1. 太多營業項目，且資本額過低主管機關極有可能拒絕核准設立。","2. 公司的「主要經營項目」，建議以3~5個較佳。","3. 公司辦理營業登記時，國稅局會根據公司的「主要營業項目」，作為未來計算營所稅的書審率，評估應繳的所得稅基準。","4. 營業項目末碼為１均屬特許資格，千萬不要在預查完成後，又追加超過5項以上的營業項目，尤其追加特許資格的營業項目。","5. 預查後如需增加營業額或特殊營業項目，就需要增加特許資格申請差額，此外公司設立時間就會變得非常冗長啦！"]}}}},computed:{articleData(){const t=this.$route.params.id||"A1";return this.articles[t]||{title:"找不到文章",content:["此文章不存在"]}}}},$t=wt,kt=i(1656),St=(0,kt.A)($t,Ct,xt,!1,null,"9a5cf6ac",null),At=St.exports}}]);
//# sourceMappingURL=465.2d265c92.js.map