import{j as k,r as c,k as _,q as d,s as e,t as b,B as u,v,y as C,z as y,C as p,F as x,G as T,I as E,A as j,T as V,J as B,x as n,K as A,M as I,N as L}from"./DAn7dnkX.js";import{I as P,a as M}from"./NJcs9_DI.js";import{a as m,b as g,c as N}from"./BTbU19mV.js";const z={components:{IconClose:P,IconPensil:M},data(){return{token:"",categories:[],selectedCategory:"",toastMessage:"",toastTimeout:null,showToast:!1,categoriesObj:{}}},setup(){const t=c(""),s=c(!1),h=c(""),a=c(""),l=c(!1);return{oldName:t,writeActive:s,inputValue:h,id:a,refCategory:l}},mounted(){this.token=m.get("authtoken"),this.fetchCategory(),document.addEventListener("click",this.handleDocumentClick)},beforeUnmount(){document.removeEventListener("click",this.handleDocumentClick)},computed:{..._(N,["url"])},methods:{editing(t,s){this.writeActive=!this.writeActive,this.oldName=t,this.id=s,this.closePopup(s)},async deleteFn(t){this.id=t,await this.deleteCategory(),this.fetchCategory()},togglePopup(t){t.showPopup=!t.showPopup,this.refCategory=t},closePopup(t){const s=this.categories.find(h=>h.id===t);s&&(s.showPopup=!1)},createCategoriesObj(t){t.forEach(s=>{this.categoriesObj[s.id]=!1}),console.log("categoriesObj: ",this.categoriesObj)},close(){this.inputValue="",this.writeActive=!1,this.id=""},async changeValue(){await this.modifyCategory(),this.fetchCategory(),this.close()},async fetchCategory(){try{const t=await g.get(`${this.url}api/cp/brand/`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}});await this.createCategoriesObj(t.data),t.data.message==="Error"?this.$router.push("/auth/login"):(this.categories=t.data,console.log(this.categories))}catch(t){console.error("ОШИБКА:",t),this.$router.push("/auth/login"),m.remove("authtoken")}},async deleteCategory(){try{const t=await g.delete(`${this.url}api/cp/brand/?ids=${this.id}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}});t.data.message==="Error"?this.$router.push("/auth/login"):(this.categories=t.data,console.log(this.categories))}catch(t){console.error("ОШИБКА:",t),this.$router.push("/auth/login"),m.remove("authtoken")}},async modifyCategory(){try{const t={name:this.inputValue};await g.put(`${this.url}api/cp/brand/${this.id}/`,t,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}}),console.log(t),this.toastMessage="Успешно обновлено!",this.showToast=!0,this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.hideToast()},5e3)}catch(t){this.toastMessage="Ошибка при обновлении товара.",console.log(t),this.showToast=!0,this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.hideToast()},5e3)}},hideToast(){this.showToast=!1},beforeEnter(t){t.classList.add("toast-enter")},enter(t,s){t.addEventListener("animationend",s,{once:!0})},leave(t,s){t.classList.add("toast-exit"),t.addEventListener("animationend",s,{once:!0})}}},r=t=>(I("data-v-1e531018"),t=t(),L(),t),O={class:"page"},S={key:0,class:"write"},$={class:"write--wrapper"},D={class:"write--text font-montserrat"},F={class:"list"},U={class:"list--text font-montserrat"},q={class:"list--wrapper"},G=["onClick"],J=r(()=>e("div",{class:"list--dot"},null,-1)),K=r(()=>e("div",{class:"list--dot"},null,-1)),H=r(()=>e("div",{class:"list--dot"},null,-1)),Q=[J,K,H],R=["onClick"],W=["onClick"],X={class:"toast fixed top-4 left-4 max-w-xs bg-gray-600 border border-rose-300 rounded-xl shadow-lg :",role:"alert",tabindex:"-1","aria-labelledby":"hs-toast-error-example-label"},Y={class:"toast flex p-4"},Z=r(()=>e("div",{class:"shrink-0"},null,-1)),tt={class:"ms-3"},et={id:"hs-toast-error-example-label",class:"text-sm text-pink-700 dark:text-pink-300"},st=r(()=>e("span",{class:"sr-only"},"Close",-1)),ot=r(()=>e("svg",{class:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M18 6 6 18"}),e("path",{d:"m6 6 12 12"})],-1)),it=[st,ot];function at(t,s,h,a,l,i){const w=B("IconClose");return n(),d("div",O,[a.writeActive?(n(),d("label",S,[e("div",$,[e("p",D,[b(" Переименовать "),e("b",null,u(a.oldName),1),b(" в: ")]),e("button",{onClick:s[0]||(s[0]=o=>i.close()),class:"write--close"},[v(w)])]),C(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>a.inputValue=o),type:"text",class:"font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none write--input"},null,512),[[y,a.inputValue]]),e("button",{onClick:s[2]||(s[2]=o=>i.changeValue()),class:"write--rename font-montserrat w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-white hover:text-black transition focus:outline-none focus:bg-white disabled:opacity-50 disabled:pointer-events-none"},"Переименовать")])):p("",!0),e("ul",F,[(n(!0),d(x,null,T(l.categories,o=>(n(),d("li",{class:"list--item",key:o.id},[e("p",U,u(o.name),1),e("div",q,[e("button",{class:"list--show",onClick:f=>i.togglePopup(o)},Q,8,G),o.showPopup?(n(),d("div",{key:0,class:"list--popup",onClick:s[3]||(s[3]=A(()=>{},["stop"]))},[e("button",{onClick:f=>i.editing(o.name,o.id),class:"list--button font-montserrat"}," Изменить объект ",8,R),e("button",{onClick:f=>i.deleteFn(o.id),class:"list--button font-montserrat"}," Удалить объект ",8,W)])):p("",!0)])]))),128))]),l.showToast?(n(),E(V,{key:1,name:"toast",onBeforeEnter:i.beforeEnter,onEnter:i.enter,onLeave:i.leave},{default:j(()=>[e("div",X,[e("div",Y,[Z,e("div",tt,[e("p",et,u(l.toastMessage),1)]),e("button",{type:"button",class:"inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white bg-pink-900 hover:bg-pink-600 focus:outline-none focus:bg-white","aria-label":"Close",onClick:s[4]||(s[4]=(...o)=>i.hideToast&&i.hideToast(...o))},it)])])]),_:1},8,["onBeforeEnter","onEnter","onLeave"])):p("",!0)])}const ct=k(z,[["render",at],["__scopeId","data-v-1e531018"]]);export{ct as default};
