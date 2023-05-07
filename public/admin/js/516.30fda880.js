"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[516],{9516:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var l=a(3396),s=a(9242),n=a(7139);const o={id:"contact-data"},i=(0,l._)("h1",{class:"text-center mt-4"},"Appointments",-1),d={class:"container shadow my-3 mt-5 w-100"},c={class:"d-flex justify-content-end mb-3"},r={class:"w-100"},u=(0,l._)("thead",{class:"text-center"},[(0,l._)("th",null,"Name"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"Contact Number"),(0,l._)("th"),(0,l._)("th",null,"Action")],-1),m={class:"text-center"},h={class:"text-center"},_={class:"text-center"},w={class:"text-center"},b=["onClick"],p={class:"text-center"},f=["onClick"],y={class:"modal fade",id:"modalInfo",tabindex:"-1",role:"dialog","aria-labelledby":"modalInfoLabel","aria-hidden":"true"},D={class:"modal-dialog",role:"document"},g={class:"modal-content"},C=(0,l._)("div",{class:"modal-header"},[(0,l._)("h3",{class:"modal-title text-center",id:"modalInfoLabel"}," View Details "),(0,l._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,l._)("span",{"aria-hidden":"true"},"×")])],-1),v={class:"modal-body"},x=(0,l._)("h5",null,"Name",-1),k={class:"lead"},z=(0,l._)("h5",null,"Email",-1),L={class:"lead"},I=(0,l._)("h5",null,"Contact Number",-1),S={class:"lead"},N=(0,l._)("h5",null,"Date",-1),Q={class:"lead"},A=(0,l._)("h5",null,"Time",-1),V={class:"lead"},Z=(0,l._)("h5",null,"Reason",-1),J={class:"lead"},M=(0,l._)("div",{class:"modal-footer"},[(0,l._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1);function $(e,t,a,$,E,F){const U=(0,l.up)("NavbarVue");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(U),i,(0,l._)("div",d,[(0,l._)("div",c,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>E.searchQuery=e),placeholder:"Search....",class:"w-25 mt-3"},null,512),[[s.nr,E.searchQuery]])]),(0,l._)("table",r,[u,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(F.filteredDetails,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",m,(0,n.zw)(e.name),1),(0,l._)("td",h,(0,n.zw)(e.email),1),(0,l._)("td",_,(0,n.zw)(e.contact_number),1),(0,l._)("td",w,[(0,l._)("button",{class:"btn btn-success","data-toggle":"modal","data-target":"#modalInfo",onClick:t=>F.viewInfo(e)}," View Details ",8,b)]),(0,l._)("td",p,[(0,l._)("button",{onClick:t=>F.deleteInfo(e.id),class:"btn btn-danger"}," Delete ",8,f)])])))),128))])])]),(0,l._)("div",y,[(0,l._)("div",D,[(0,l._)("div",g,[C,(0,l._)("div",v,[x,(0,l._)("p",k,(0,n.zw)(E.modalDetails.name),1),z,(0,l._)("p",L,(0,n.zw)(E.modalDetails.email),1),I,(0,l._)("p",S,(0,n.zw)(E.modalDetails.contact_number),1),N,(0,l._)("p",Q,(0,n.zw)(E.modalDetails.date),1),A,(0,l._)("p",V,(0,n.zw)(E.modalDetails.time),1),Z,(0,l._)("p",J,(0,n.zw)(E.modalDetails.reason),1)]),M])])])])}var E=a(4161),F=a(100),U={name:"ContactData",components:{NavbarVue:F.Z},data(){return{details:[],searchQuery:"",modalDetails:{}}},methods:{async deleteInfo(e){const t=confirm("Are you sure you want to delete this information");if(t)try{await E.Z["delete"](`http://localhost:3000/api/appointment/${e}`),this.details=this.details.filter((t=>t.id!==e)),window.alert("Contact successfully deleted!")}catch(a){console.error(a)}},async fetchData(){try{const e=await E.Z.get("http://localhost:3000/api/appointment");this.details=e.data}catch(e){console.error(e)}},viewInfo(e){this.modalDetails=e;const t=new Date(e.date),a=e.time,l=new Date(`${t.toDateString()} ${a}`),s=["January","February","March","April","May","June","July","August","September","October","November","December"],n=s[l.getMonth()]+" "+l.getDate().toString().padStart(2,"0")+", "+l.getFullYear().toString(),o=l.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});this.modalDetails.date=n,this.modalDetails.time=o}},computed:{filteredDetails(){return this.details.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.email.toLowerCase().includes(this.searchQuery.toLowerCase())||e.message.toLowerCase().includes(this.searchQuery.toLowerCase())))}},mounted(){this.fetchData()}},Y=a(89);const j=(0,Y.Z)(U,[["render",$]]);var H=j}}]);
//# sourceMappingURL=516.30fda880.js.map