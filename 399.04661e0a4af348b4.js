"use strict";(self.webpackChunkxiv_api=self.webpackChunkxiv_api||[]).push([[399],{5399:(F,p,c)=>{c.r(p),c.d(p,{ItemModule:()=>Q});var l=c(6895),a=c(4679),t=c(8256),_=c(8746),C=c(529),d=c(8529);let f=(()=>{class n{constructor(e,o){this._HttpClient=e,this.loadingService=o,this.apiBaseUrl="https://xivapi.com"}searchItem(e,o){let r=`${this.apiBaseUrl}/search?string=${e}&page=${o}&indexes=item`;return this.loadingService.setLoading(!0),this._HttpClient.get(r).pipe((0,_.x)(()=>this.loadingService.setLoading(!1)))}getItem(e){const o=`${this.apiBaseUrl}/item/${e}`;return this.loadingService.setLoading(!0),this._HttpClient.get(o).pipe((0,_.x)(()=>this.loadingService.setLoading(!1)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.eN),t.LFG(d.b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function x(n,i){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Slot: ",e.item.EquipSlotCategory.Name,"")}}function b(n,i){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Category: ",e.item.ItemUICategory.Name,"")}}function P(n,i){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Item Kind"),t.qZA())}function v(n,i){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.item.ItemKind.Name,"")}}function M(n,i){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Description"),t.qZA())}function O(n,i){if(1&n&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.Q6J("innerHTML",e.item.Description,t.oJD),t.xp6(1),t.Oqu(e.item.Description)}}let I=(()=>{class n{constructor(e,o,r){this._activatedRoute=e,this.loadingService=o,this._router=r,this.item=this._activatedRoute.snapshot.data.item,this.isLoading=!1,console.log(this.item)}ngOnInit(){this.loadingService.getLoading().subscribe(e=>this.isLoading=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.gz),t.Y36(d.b),t.Y36(a.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-item-detail"]],decls:15,vars:10,consts:[[1,"body"],[1,"title"],[1,"img_item"],[3,"src","alt"],[1,"stat_item"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2),t._UZ(5,"img",3),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,x,2,1,"p",5),t.YNc(8,b,2,1,"p",5),t.YNc(9,P,2,0,"h3",5),t.YNc(10,v,2,1,"p",5),t.YNc(11,M,2,0,"h3",5),t.YNc(12,O,2,2,"p",6),t.TgZ(13,"p"),t._uU(14),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(o.item.Name),t.xp6(2),t.Q6J("src","https://xivapi.com/"+o.item.IconHD,t.LSH)("alt",o.item.ItemUICategory.Name),t.xp6(2),t.Q6J("ngIf",o.item.EquipSlotCategory),t.xp6(1),t.Q6J("ngIf",o.item.ItemUICategory.Name),t.xp6(1),t.Q6J("ngIf",o.item.ItemKind.Name),t.xp6(1),t.Q6J("ngIf",o.item.ItemKind.Name),t.xp6(1),t.Q6J("ngIf",o.item.Description),t.xp6(1),t.Q6J("ngIf",o.item.Description),t.xp6(2),t.hij("Level: ",o.item.LevelEquip,""))},dependencies:[l.O5],styles:[".body[_ngcontent-%COMP%]{background-color:#000000a9;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;margin:0;padding:0 0 5%}.body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:1.2rem;font-weight:700}.body[_ngcontent-%COMP%]   .stat_item[_ngcontent-%COMP%]{color:#fff;font-size:1.2rem;width:50%;border:5px solid rgba(255,255,255,.342);border-radius:5px}.body[_ngcontent-%COMP%]   .stat_item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{background-color:#000000ad;padding:2px 0}.body[_ngcontent-%COMP%]   .stat_item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 35px}"]}),n})();var m=c(433);function y(n,i){1&n&&(t.TgZ(0,"div"),t._UZ(1,"br")(2,"br")(3,"br")(4,"img",8)(5,"br")(6,"br")(7,"br"),t.qZA())}const u=function(n){return{active:n}};function T(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,g=t.oxw(3);return t.KtG(g.goToPage(s))}),t._uU(2),t.qZA()()}if(2&n){const e=i.$implicit,o=t.oxw(3);t.xp6(1),t.Q6J("ngClass",t.VKq(2,u,e==o.page)),t.xp6(1),t.Oqu(e)}}function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.prevPage())}),t._uU(2,"Previous"),t.qZA(),t.YNc(3,T,3,4,"div",14),t.TgZ(4,"button",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.nextPage())}),t._uU(5,"Next"),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled",!e.items.Pagination.PagePrev),t.xp6(2),t.Q6J("ngForOf",e.nbrOfPages),t.xp6(1),t.Q6J("disabled",!e.items.Pagination.PageNext)}}function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",18),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",19),t.NdJ("click",function(){const s=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.viewItem(s.ID))}),t._uU(7,"Details"),t.qZA()()()}if(2&n){const e=i.$implicit;t.xp6(2),t.Q6J("src","https://xivapi.com/"+e.Icon,t.LSH),t.xp6(2),t.Oqu(e.Name)}}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,g=t.oxw(3);return t.KtG(g.goToPage(s))}),t._uU(2),t.qZA()()}if(2&n){const e=i.$implicit,o=t.oxw(3);t.xp6(1),t.Q6J("ngClass",t.VKq(2,u,e==o.page)),t.xp6(1),t.Oqu(e)}}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.prevPage())}),t._uU(2,"Previous"),t.qZA(),t.YNc(3,k,3,4,"div",14),t.TgZ(4,"button",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.nextPage())}),t._uU(5,"Next"),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled",!e.items.Pagination.PagePrev),t.xp6(2),t.Q6J("ngForOf",e.nbrOfPages),t.xp6(1),t.Q6J("disabled",!e.items.Pagination.PageNext)}}function J(n,i){if(1&n&&(t.TgZ(0,"div",9),t.YNc(1,Z,6,3,"div",10),t._UZ(2,"br"),t.TgZ(3,"table")(4,"thead")(5,"tr")(6,"th"),t._uU(7,"Icon"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Name"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,S,8,2,"tr",11),t.qZA()(),t.YNc(12,N,6,3,"div",10),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.items.Pagination.PageNext),t.xp6(10),t.Q6J("ngForOf",e.items.Results),t.xp6(1),t.Q6J("ngIf",e.items.Pagination.PageNext)}}function U(n,i){1&n&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"No item found"),t.qZA()())}const w=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-item"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"div"),t._UZ(1,"router-outlet"),t.qZA())},dependencies:[a.lC],styles:["div[_ngcontent-%COMP%]{padding-top:70px}"]}),n})(),children:[{path:"",component:(()=>{class n{constructor(e,o,r){this._itemService=e,this._router=o,this.loadingService=r,this.router=this._router,this.isLoading=!1,this.items={Pagination:{Page:0,PageNext:0,PagePrev:0,PageTotal:0,Results:0,ResultsPerPage:0,ResultsTotal:0},Results:[],SpeedMs:0},this.name="",this.page=1,this.nbrOfPages=[],this.id=0,this.searchStart=!1}ngOnInit(){this.loadingService.getLoading().subscribe(e=>this.isLoading=e)}isEmpty(){return 0==this.items.Results.length}search(){this._itemService.searchItem(this.name,this.page).subscribe(e=>{this.items=e,this.nbrOfPages=[];for(let o=1;o<=this.items.Pagination.PageTotal;o++)this.nbrOfPages.push(o)}),console.log(this.items),this.searchStart=!0}viewItem(e){this._router.navigate(["/item",e])}nextPage(){this.page++,this.search()}prevPage(){this.page--,this.search()}goToPage(e){this.page=e,this.search()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(a.F0),t.Y36(d.b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-item-search"]],decls:15,vars:4,consts:[[1,"body"],[1,"title"],[1,"form"],[1,"input"],["type","text","placeholder","Item Name",3,"ngModel","ngModelChange","keyup.enter"],[3,"click"],[4,"ngIf"],["class","table",4,"ngIf"],["src","assets/images/mog.gif","alt",""],[1,"table"],["class","btn",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"btn"],[1,"first-child",3,"disabled","click"],["class","page",4,"ngFor","ngForOf"],[1,"last-child",3,"disabled","click"],[1,"page"],[3,"ngClass","click"],["alt","",3,"src"],["routerLinkActive","router-link-active",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"br"),t.TgZ(2,"div",1)(3,"h1"),t._uU(4,"Search Item"),t.qZA()(),t.TgZ(5,"div",2)(6,"div",3)(7,"input",4),t.NdJ("ngModelChange",function(s){return o.name=s})("keyup.enter",function(){return o.search()}),t.qZA()(),t._uU(8," \xa0 "),t.TgZ(9,"div",3)(10,"button",5),t.NdJ("click",function(){return o.search()}),t._uU(11,"Search"),t.qZA()()(),t.YNc(12,y,8,0,"div",6),t.YNc(13,J,13,3,"div",7),t.YNc(14,U,3,0,"div",6),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngModel",o.name),t.xp6(5),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading&&!o.isEmpty()),t.xp6(1),t.Q6J("ngIf",o.isEmpty()&&!o.isLoading&&o.searchStart))},dependencies:[l.mk,l.sg,l.O5,a.Od,m.Fj,m.JJ,m.On],styles:[".body[_ngcontent-%COMP%]{background-color:#00000080;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;margin:0;padding-bottom:5em}.body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2em;color:#fff;margin:0;padding:0}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:38%;height:100%;margin:0;padding:0}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.2em}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0;color:#fff;background-color:#303030;text-decoration:none;font-size:1.2em;padding:.2em .5em;display:flex;flex-direction:row;align-items:center;justify-content:center;transition:all .3s ease-in-out;border:solid 1px #ffffff;border-radius:5px;cursor:pointer}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;background-color:#000;color:#ffdc6b;text-decoration:none}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin:0;color:#fff;background-color:#303030;text-decoration:none;font-size:1.2em;padding:.2em .5em;display:flex;flex-direction:row;align-items:center;justify-content:center;transition:all .3s ease-in-out;border:solid 1px #ffffff;border-radius:5px;cursor:pointer}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;background-color:#000;text-decoration:none}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0;padding:5px;color:#fff;background-color:#303030;text-decoration:none;font-size:1.2em;align-items:center;justify-content:center;transition:all .3s linear;border:solid 1px #ffffff;border-radius:5px;cursor:pointer}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;background-color:#414141;color:#ef0;text-decoration:none}.table[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:50%;height:100%}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:1em;text-decoration:none;font-size:1.2em;padding:.2em .5em;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:center;transition:all .3s ease-in-out}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;text-decoration:none}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .first-child[_ngcontent-%COMP%]{margin-right:5px}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{padding:0;margin:0 auto}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .last-child[_ngcontent-%COMP%]{margin-left:5px}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{margin:5px;padding:0;text-decoration:none;font-size:.8em;display:flex;flex-direction:row;align-items:center;justify-content:center;transition:all .3s ease-in-out;border:none}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]:hover, .table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{transition:all .3s ease-in-out;background-color:#000;color:#ffdc6b;text-decoration:none}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0,5em;color:#fff;background-color:#303030;text-decoration:none;font-size:1.2em;padding:.2em .5em;display:flex;flex-direction:row;align-items:center;justify-content:center;transition:all .3s ease-in-out;border:solid 1px #ffffff;border-radius:5px;cursor:pointer}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;background-color:#000;color:#ffdc6b;text-decoration:none}.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{transition:all .3s ease-in-out;background-color:#a5a5a5;color:#fff;text-decoration:none;cursor:not-allowed}table[_ngcontent-%COMP%]{padding:1em;margin:1em;border:1px solid #ffffff;border-radius:5px;background-color:#00000080;color:#fff;font-size:1em;width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #ffffff;border-radius:5px;background-color:#00000080;color:#fff;font-size:1em}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;font-size:1em;padding:.5em;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;text-decoration:none;border:solid 1px #ffffff;border-radius:5px;padding:.2em .5em;transition:all .3s ease-in-out;background-color:#0000;cursor:pointer}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;color:red;text-decoration:none}.backin[_ngcontent-%COMP%]{margin:0;color:#fff;text-decoration:none;font-size:1.2em;padding:.2em .5em;width:50%;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start}.backin[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{transition:all .3s ease-in-out;border:solid 1px #ffffff;border-radius:2px;cursor:pointer}.backin[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:hover{transition:all .3s ease-in-out;background-color:#000;color:#ffdc6b;text-decoration:none}"]}),n})()},{path:":id",component:I,resolve:{item:n=>(0,t.f3M)(f).getItem(n.paramMap.get("id"))}}]}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(w),a.Bz]}),n})();var q=c(4466);let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,A,q.m]}),n})()}}]);