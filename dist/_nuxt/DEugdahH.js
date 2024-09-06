import{j as _,r as a,k as C,q as d,s,y as p,E as T,F as k,G as v,t as x,B as u,v as B,z as b,C as g,I as P,A as I,T as E,J as N,x as r,K as j,M as A,N as V}from"./DAn7dnkX.js";import{I as M,a as z}from"./NJcs9_DI.js";import{a as y,b as m,c as L}from"./BTbU19mV.js";const R={components:{IconClose:M,IconPensil:z},data(){return{token:"",categories:[],selectedCategory:"",toastMessage:"",toastTimeout:null,showToast:!1,selectedProduct:" "}},setup(){const t=a(""),e=a(!1),h=a(""),n=a(""),l=a(""),i=a(""),f=a([]),o=a("");return{oldName:t,writeActive:e,inputName:h,inputBuyerComment:n,inputbyuerRating:l,id:i,products:f,typeCh:o}},mounted(){this.token=y.get("authtoken"),this.fetchProducts()},computed:{...C(L,["url"])},methods:{editing(t,e){this.writeActive=!this.writeActive,this.oldName=t,this.id=e},togglePopup(t){t.showPopup=!t.showPopup,this.refCategory=t.showPopup},closePopup(t){const e=this.categories.find(h=>h.id===t);e&&(e.showPopup=!1)},createCategoriesObj(t){t.forEach(e=>{e.showPopup=!1,this.categoriesObj[e.id]=!1})},async getProductId(t){this.productID=t.target.value,await this.fetchCategory()},async deleteFn(t){this.id=t,await this.deleteCategory(),this.fetchCategory()},close(){this.inputName="",this.inputBuyerComment="",this.inputbyuerRating="",this.writeActive=!1,this.id=""},async changeValue(){await this.modifyCategory(),this.fetchCategory(),this.close()},async fetchCategory(){try{const t=await m.get(`${this.url}api/cp/feedback/${this.productID}/`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}});t.data.message==="Error"?this.$router.push("/auth/login"):(this.categories=t.data,console.log(this.categories))}catch(t){console.error("ОШИБКА:",t),this.$router.push("/auth/login"),y.remove("authtoken")}},async fetchProducts(){try{const t=await m.get(`${this.url}api/cp/products/`,{headers:{accept:"application/json",Authorization:`Bearer ${this.token}`}});this.products=t.data}catch(t){this.error=t}},async deleteCategory(){try{const t=await m.delete(`${this.url}api/cp/feedback/?ids=${this.id}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}});t.data.message==="Error"?this.$router.push("/auth/login"):this.categories=t.data}catch(t){console.error("ОШИБКА:",t),this.$router.push("/auth/login"),y.remove("authtoken")}},async modifyCategory(){const t={name:this.inputName,buyerComment:this.inputBuyerComment,byuerRating:this.inputbyuerRating};try{console.log(this.id),await m.put(`${this.url}api/cp/feedback/${this.id}/`,t,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}}),this.toastMessage="Успешно обновлено!",this.showToast=!0,this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.hideToast()},5e3)}catch(e){this.toastMessage="Ошибка при обновлении товара.",console.log(e),this.showToast=!0,this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.hideToast()},5e3)}},hideToast(){this.showToast=!1},beforeEnter(t){t.classList.add("toast-enter")},enter(t,e){t.addEventListener("animationend",e,{once:!0})},leave(t,e){t.classList.add("toast-exit"),t.addEventListener("animationend",e,{once:!0})}}},c=t=>(A("data-v-e07ad812"),t=t(),V(),t),S={class:"page"},D=c(()=>s("div",{class:"sm:col-span-3"},[s("label",{for:"af-submit-application-linkedin-url",class:"inline-block text-sm font-medium text-black font-montserrat mt-2.5"}," Выбрать товар ")],-1)),F={class:"sm:col-span-9"},U={class:"w-full md:w-full"},O=["value"],q={key:0,class:"write"},G={class:"write--wrapper"},J={class:"write--text font-montserrat"},K={class:"list"},H={class:"list--text font-montserrat"},Q={disabled:"",class:"resizable-textarea",placeholder:"Введите текст..."},W={class:"list--text raiting font-montserrat"},X={class:"list--wrapper"},Y=["onClick"],Z=c(()=>s("div",{class:"list--dot"},null,-1)),$=c(()=>s("div",{class:"list--dot"},null,-1)),tt=c(()=>s("div",{class:"list--dot"},null,-1)),et=[Z,$,tt],st=["onClick"],ot=["onClick"],it={class:"toast fixed top-4 left-4 max-w-xs bg-gray-600 border border-rose-300 rounded-xl shadow-lg :",role:"alert",tabindex:"-1","aria-labelledby":"hs-toast-error-example-label"},nt={class:"toast flex p-4"},at=c(()=>s("div",{class:"shrink-0"},null,-1)),rt={class:"ms-3"},lt={id:"hs-toast-error-example-label",class:"text-sm text-pink-700 dark:text-pink-300"},dt=c(()=>s("span",{class:"sr-only"},"Close",-1)),ct=c(()=>s("svg",{class:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("path",{d:"M18 6 6 18"}),s("path",{d:"m6 6 12 12"})],-1)),ut=[dt,ct];function ht(t,e,h,n,l,i){const f=N("IconClose");return r(),d("div",S,[D,s("div",F,[s("div",U,[p(s("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>l.selectedProduct=o),onChange:e[1]||(e[1]=o=>i.getProductId(o)),class:"font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none",style:{overflow:"hidden","overflow-y":"auto","max-height":"72px"}},[(r(!0),d(k,null,v(n.products,o=>(r(),d("option",{key:o.id,value:o.id,class:"py-2 px-4 text-sm text-black cursor-pointer font-montserrat hover:bg-white rounded-lg focus:outline-none focus:bg-white"},u(o.name),9,O))),128))],544),[[T,l.selectedProduct]])])]),n.writeActive?(r(),d("label",q,[s("div",G,[s("p",J,[x(" Изменить "),s("b",null,u(n.oldName),1),x(" : ")]),s("button",{onClick:e[2]||(e[2]=o=>i.close()),class:"write--close"},[B(f)])]),p(s("input",{placeholder:"Новое имя","onUpdate:modelValue":e[3]||(e[3]=o=>n.inputName=o),type:"text",class:"font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none write--input"},null,512),[[b,n.inputName]]),p(s("input",{placeholder:"Новый комментарий","onUpdate:modelValue":e[4]||(e[4]=o=>n.inputBuyerComment=o),type:"text",class:"mt-2 font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none write--input"},null,512),[[b,n.inputBuyerComment]]),p(s("input",{placeholder:"Новая оценка (1 - 5)","onUpdate:modelValue":e[5]||(e[5]=o=>n.inputbyuerRating=o),type:"number",class:"mt-2 font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none write--input"},null,512),[[b,n.inputbyuerRating]]),s("button",{onClick:e[6]||(e[6]=o=>i.changeValue()),class:"write--rename font-montserrat w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-white hover:text-black transition focus:outline-none focus:bg-white disabled:opacity-50 disabled:pointer-events-none"},"Переименовать")])):g("",!0),s("ul",K,[(r(!0),d(k,null,v(l.categories,o=>(r(),d("li",{class:"list--item",key:o.id},[s("p",H,u(o.name),1),s("textarea",Q,u(o.buyerComment),1),s("p",W," Оценка: "+u(o.byuerRating),1),s("div",X,[s("button",{class:"list--show",onClick:w=>i.togglePopup(o)},et,8,Y),o.showPopup?(r(),d("div",{key:0,class:"list--popup",onClick:e[7]||(e[7]=j(()=>{},["stop"]))},[s("button",{onClick:w=>i.editing(o.value,o.id),class:"list--button font-montserrat"}," Изменить объект ",8,st),s("button",{onClick:w=>i.deleteFn(o.id),class:"list--button font-montserrat"}," Удалить объект ",8,ot)])):g("",!0)])]))),128))]),l.showToast?(r(),P(E,{key:1,name:"toast",onBeforeEnter:i.beforeEnter,onEnter:i.enter,onLeave:i.leave},{default:I(()=>[s("div",it,[s("div",nt,[at,s("div",rt,[s("p",lt,u(l.toastMessage),1)]),s("button",{type:"button",class:"inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white bg-pink-900 hover:bg-pink-600 focus:outline-none focus:bg-white","aria-label":"Close",onClick:e[8]||(e[8]=(...o)=>i.hideToast&&i.hideToast(...o))},ut)])])]),_:1},8,["onBeforeEnter","onEnter","onLeave"])):g("",!0)])}const bt=_(R,[["render",ht],["__scopeId","data-v-e07ad812"]]);export{bt as default};
