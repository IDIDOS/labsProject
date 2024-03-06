import{a as P,b as A,d as F,e as O,f as D,h as E}from"./chunk-3MUANRFZ.js";import{$ as C,$a as a,Fb as x,Ia as k,Ja as M,Ka as T,La as b,Lb as R,Oa as w,P as v,U as d,ab as l,bb as c,fb as m,ga as S,ja as f,ka as _,ob as h,qb as p}from"./chunk-DJGZOAKU.js";var I=(()=>{let e=class e{constructor(){this.route=f(O)}onRedirectToStep(n){this.route.navigate(["/step",n])}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["task-list"]],standalone:!0,features:[p],decls:13,vars:0,consts:[[1,"wrapper-task-list"],[1,"task-card",3,"click"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1),m("click",function(){return o.onRedirectToStep(1)}),a(2,"h2"),h(3,"Step 1"),l()(),a(4,"div",1),m("click",function(){return o.onRedirectToStep(2)}),a(5,"h2"),h(6,"Step 2"),l()(),a(7,"div",1),m("click",function(){return o.onRedirectToStep(3)}),a(8,"h2"),h(9,"Step 3"),l()(),a(10,"div",1),m("click",function(){return o.onRedirectToStep(4)}),a(11,"h2"),h(12,"Step 4"),l()()())},styles:[".wrapper-task-list[_ngcontent-%COMP%]{width:100%;height:fit-content;display:flex;flex-direction:column;align-items:center;gap:10px}.task-card[_ngcontent-%COMP%]{width:50%;background-color:#3f51b5;cursor:pointer;display:flex;justify-content:center;align-items:center}.task-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}"]});let r=e;return r})();var N=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["home"]],standalone:!0,features:[p],decls:4,vars:0,consts:[[1,"main"],["src","assets/photo.jpg"]],template:function(i,o){i&1&&(c(0,"app-header"),a(1,"main",0),c(2,"img",1)(3,"task-list"),l())},dependencies:[E,I],styles:[".main[_ngcontent-%COMP%]{width:100%;height:fit-content;display:flex;align-items:center;margin-top:20px;flex-direction:column;gap:20px}.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30%;border-radius:50%;border:5px solid #3f51b5}task-list[_ngcontent-%COMP%]{margin-bottom:76px;width:100%}"]});let r=e;return r})();var j=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:N},{path:"step/:id",loadComponent:()=>import("./chunk-RD2FDUDB.js").then(r=>r.StepComponent)}];var H="@",U=(()=>{let e=class e{constructor(n,i,o,s,u){this.doc=n,this.delegate=i,this.zone=o,this.animationType=s,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=f(M,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-MBRSUFCY.js")).catch(i=>{throw new v(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(n,i){let o=this.delegate.createRenderer(n,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let s=new y(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let z=u.createRenderer(n,i);s.use(z)}).catch(u=>{s.use(o)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){k()},e.\u0275prov=C({token:e,factory:e.\u0275fac});let r=e;return r})(),y=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,i){this.delegate.insertBefore(e,t,n,i)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,i){this.delegate.setAttribute(e,t,n,i)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,i){this.delegate.setStyle(e,t,n,i)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(H)}};function L(r="animations"){return b("NgAsyncAnimations"),_([{provide:T,useFactory:(e,t,n)=>new U(e,t,n,r),deps:[x,P,w]},{provide:S,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var B={providers:[D(j),L()]};var V=(()=>{let e=class e{constructor(){this.title="labsProject"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:1,vars:0,template:function(i,o){i&1&&c(0,"router-outlet")},dependencies:[R,F]});let r=e;return r})();A(V,B).catch(r=>console.error(r));
