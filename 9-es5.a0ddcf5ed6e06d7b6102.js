(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Yeka:function(e,t,n){"use strict";n.r(t);var c=n("Valr"),i=n("TYT/"),a=n("QJY3"),o=n("sJxD"),l=n("p2CB"),r=n("S36L"),s=function(){function e(e){this.notificationService=e}return e.prototype.onClick=function(e){this.copyInputElement.disabled=!1,this.copyInputElement.select(),this.copyInputElement.disabled=!0,document.execCommand("copy"),this.copyNotificationText&&this.notificationService.showNotification(this.copyNotificationText)},e.ngDirectiveDef=i.Db({type:e,selectors:[["","appCopy",""]],factory:function(t){return new(t||e)(i.Ib(r.a))},hostBindings:function(e,t,n){1&e&&i.cc("click",function(e){return t.onClick(e)})},inputs:{copyInputElement:"copyInputElement",copyNotificationText:"copyNotificationText"}}),e}(),p=function(){function e(){}return e.ngModuleDef=i.Gb({type:e}),e.ngInjectorDef=i.Fb({factory:function(t){return new(t||e)},imports:[[c.c]]}),e}(),d=n("hVeP"),b=n("sNRQ"),u=n("kXT5"),g=n("d9RS"),f=n("mrSG"),h=n("h3vL"),_=n("KVSl"),w=n("t9fZ"),m=n("DUip"),O=n("mK86"),x=n("wIqn"),v=n("be9G"),y=[1,"wallet-create"],C=[1,"wallet-create--title"],M=[1,"wallet-create__content"],P=["class","wallet-create__warning",4,"ngIf"],k=[1,"wallet-create__boxes"],U=[3,"click"],I=[1,"wallet-create--or"],A=[1,"wallet-create__warning"],$=[1,"wallet-create__warning--heading"],S=[1,"wallet-create__warning--title"],j=["button-orange","","button-md","",3,"routerLink"];function T(e,t){if(1&e&&(i.Ub(0,"app-widget",A),i.Ub(1,"p",$),i.Ac(2," You already have a wallet "),i.Ob(),i.Ub(3,"p",S),i.Ac(4," Make sure you backup your existing wallet before creating a new "),i.Ob(),i.Ub(5,"app-button",j),i.Ac(6," Export "),i.Ob(),i.Ob()),2&e){var n=i.hc();i.vc(5),i.nc("routerLink","../"+n.slpRoutes.walletExport)}}var D=function(){function e(e,t){var n=this;this.router=e,this.cashContractsService=t,this.isSecretInStorage=!1,this.slpRoutes=f.a({},_.a),this.create=function(){localStorage.removeItem("secret"),n.cashContractsService.generateNewWallet(),n.navigateToWallet()},this.navigateToWallet=function(){n.router.navigate([_.a.wallet])}}return e.prototype.ngOnInit=function(){var e=this;this.cashContractsService.listenIsSecretInStorage.pipe(Object(w.a)(1)).subscribe(function(t){e.isSecretInStorage=t})},e.ngComponentDef=i.Cb({type:e,selectors:[["app-wallet-create"]],factory:function(t){return new(t||e)(i.Ib(m.c),i.Ib(h.a))},consts:17,vars:1,template:function(e,t){1&e&&(i.Ub(0,"app-wrapper"),i.Ub(1,"div",y),i.Ub(2,"h2"),i.Ac(3,"Create wallet"),i.Ob(),i.Ub(4,"p",C),i.Ac(5," Proin viverra, ligula sit amet ultrices semper, Nunc nulla. Sed lectus. "),i.Ob(),i.Ub(6,"div",M),i.yc(7,T,7,1,"app-widget",P),i.Ub(8,"div",k),i.Ub(9,"app-widget",U),i.cc("click",function(e){return t.create()}),i.Ub(10,"h3"),i.Ac(11," Create a new wallet "),i.Ob(),i.Ob(),i.Ub(12,"p",I),i.Ac(13,"OR"),i.Ob(),i.Ub(14,"app-widget"),i.Ub(15,"h3"),i.Ac(16," Import private key "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.vc(7),i.nc("ngIf",t.isSecretInStorage))},directives:[O.a,c.t,x.a,v.a,m.d],styles:["[_nghost-%COMP%]{-webkit-animation:.2s forwards fadeIn;animation:.2s forwards fadeIn;display:flex}.wallet-create[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column}.wallet-create[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:40px;font-weight:600;margin-bottom:10px}.wallet-create[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:500;padding:40px;text-align:center}.wallet-create--title[_ngcontent-%COMP%]{color:#fff;margin-bottom:40px}.wallet-create--or[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:600;padding:0 40px}.wallet-create__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 auto;max-width:800px}.wallet-create__boxes[_ngcontent-%COMP%]{align-items:center;display:flex}.wallet-create__boxes[_ngcontent-%COMP%]   app-widget[_ngcontent-%COMP%]{cursor:pointer}.wallet-create__warning[_ngcontent-%COMP%]{align-items:center;flex-direction:column;margin-bottom:40px}.wallet-create__warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#faa352;text-align:center}.wallet-create__warning--heading[_ngcontent-%COMP%]{font-size:30px;font-weight:600;margin-bottom:10px}.wallet-create__warning--title[_ngcontent-%COMP%]{margin-bottom:20px}.wallet-create__warning[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin-top:20px}"],changeDetection:0}),e}(),B=n("kB5k"),W=n.n(B),F=n("26FU"),z=n("K9Ia"),E=n("ny24"),L=n("ZLIx"),N=n("Afm0"),J=n("wgrp"),q=n("1OPU"),R=n("1Yij"),G=[1,"wallet-details"],H=[1,"wallet-details__header"],K=[1,"wallet-details__header--right"],Q=["button-white","",3,"routerLink"],V=[1,"wallet-details__main"],X=[1,"wallet-details--bch"],Y=[1,"wallet-details--usd"],Z=[1,"wallet-details__main__buttons"],ee=["button-md","",1,"mr-lg",3,"routerLink"],te=["button-md","",1,"ml-lg",3,"routerLink"],ne=[1,"wallet-details__content"],ce=[1,"wallet-details__tokens"],ie=["class","mb-sm",3,"item",4,"ngFor","ngForOf","ngForTrackBy"],ae=["class","wallet-details__transaction-empty",4,"ngIf"],oe=[1,"wallet-details__transactions"],le=[1,"wallet-details__transaction-empty"],re=[0,"xlink","href","#empty"],se=[1,"mb-sm",3,"item"],pe=["right","",1,"ml-md",3,"click"];function de(e,t){if(1&e){var n=i.Xb();i.Ub(0,"app-coin-card",se),i.Ub(1,"app-button",pe),i.cc("click",function(e){i.sc(n);var c=t.$implicit;return i.hc().openSendToken(c)}),i.Ac(2," Send "),i.Ob(),i.Ob()}if(2&e){var c=t.$implicit;i.vc(0),i.nc("item",c)}}function be(e,t){1&e&&(i.Ub(0,"app-widget",le),i.gc(),i.Ub(1,"svg"),i.Jb(2,"use",re),i.Ob(),i.fc(),i.Ub(3,"p"),i.Ac(4,"No tokens yet"),i.Ob(),i.Ob())}var ue=function(){function e(e,t,n){var c=this;this.endpointsService=e,this.router=t,this.cashContractsService=n,this.bchBalance$=new F.a(0),this.usdPrice$=new F.a("0"),this.isLoading$=new F.a(!0),this.transactions$=new F.a([]),this.tokens$=new F.a([]),this.slpRoutes=f.a({},_.a),this.destroy$=new z.a,this.usdPrice=0,this.openSendToken=function(e){c.router.navigate([_.a.wallet+"/"+_.a.walletSend],{state:{selected:{name:e.name,symbol:e.symbol,balance:e.balance,tokenId:e.id,isToken:!0}}})},this.trackById=function(e,t){return t.id},this.setTokens=function(){var e=c.wallet.tokenIds().map(function(e){return f.a({},c.wallet.tokenDetails(e),{balance:c.wallet.tokenBalance(e),isToken:!0})});c.tokens$.next(e.toArray())},this.setBchBalance=function(){var e=c.wallet.nonTokenBalance(),t=Object(N.b)(e);c.bchBalance$.next(t)}}return e.prototype.ngOnInit=function(){var e=this;this.cashContractsService.listenWallet.pipe(Object(E.a)(this.destroy$)).subscribe(function(t){t&&(e.isLoading$.next(!1),e.wallet=t,e.setBchBalance(),e.setTokens())}),this.endpointsService.getBchUsdPrice().pipe(Object(w.a)(1)).subscribe(function(t){e.usdPrice=+t.ticker.price,e.bchBalance$.pipe(Object(E.a)(e.destroy$)).subscribe(function(t){var n=new W.a(e.usdPrice*+t);e.usdPrice$.next(n.decimalPlaces(5).toString())})})},e.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.unsubscribe()},e.ngComponentDef=i.Cb({type:e,selectors:[["app-wallet-details"]],factory:function(t){return new(t||e)(i.Ib(L.a),i.Ib(m.c),i.Ib(h.a))},consts:44,vars:23,template:function(e,t){1&e&&(i.Ub(0,"app-wrapper"),i.Ub(1,"div",G),i.Ub(2,"div",H),i.Ub(3,"h2"),i.Ac(4,"Wallet"),i.Ob(),i.Ub(5,"div",K),i.Ub(6,"app-button",Q),i.Ac(7," Import "),i.Ob(),i.Ub(8,"app-button",Q),i.Ac(9," Export "),i.Ob(),i.Ob(),i.Ob(),i.Ub(10,"app-widget"),i.Ub(11,"div",V),i.Ub(12,"div",X),i.Ub(13,"p"),i.Ac(14),i.ic(15,"bchSeparator"),i.ic(16,"async"),i.Ob(),i.Ob(),i.Ub(17,"div",Y),i.Ub(18,"p"),i.Ac(19),i.ic(20,"usdFormatter"),i.ic(21,"async"),i.Ob(),i.Ob(),i.Ub(22,"div",Z),i.Ub(23,"app-button",ee),i.Ac(24," Send "),i.Ob(),i.Ub(25,"app-button",te),i.Ac(26," Receive "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ub(27,"div",ne),i.Ub(28,"div",ce),i.Ub(29,"h3"),i.Ac(30,"Tokens"),i.Ob(),i.yc(31,de,3,1,"app-coin-card",ie),i.ic(32,"async"),i.yc(33,be,5,0,"app-widget",ae),i.ic(34,"async"),i.ic(35,"async"),i.Ob(),i.Ub(36,"div",oe),i.Ub(37,"h3"),i.Ac(38,"Transactions"),i.Ob(),i.Ub(39,"app-widget",le),i.gc(),i.Ub(40,"svg"),i.Jb(41,"use",re),i.Ob(),i.fc(),i.Ub(42,"p"),i.Ac(43,"No transactions yet"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.vc(6),i.nc("routerLink",t.slpRoutes.walletCreate),i.vc(8),i.nc("routerLink",t.slpRoutes.walletExport),i.vc(14),i.Bc(14,i.bc(" ",i.jc(15,9,i.jc(16,11,t.bchBalance$))," BCH ")),i.vc(19),i.Bc(19,i.bc(" ",i.jc(20,13,i.jc(21,15,t.usdPrice$))," USD ")),i.vc(23),i.nc("routerLink",t.slpRoutes.walletSend),i.vc(25),i.nc("routerLink",t.slpRoutes.walletReceive),i.vc(31),i.nc("ngForOf",i.jc(32,17,t.tokens$)),i.nc("ngForTrackBy",t.trackById),i.vc(33),i.nc("ngIf",!i.jc(34,19,t.tokens$).length&&!i.jc(35,21,t.isLoading$)))},directives:[O.a,v.a,m.d,x.a,c.s,c.t,J.a],pipes:[q.a,c.b,R.a],styles:["[_nghost-%COMP%]{-webkit-animation:.2s forwards fadeIn;animation:.2s forwards fadeIn;display:flex;width:100%}h2[_ngcontent-%COMP%]{color:#fff;font-size:30px}h3[_ngcontent-%COMP%]{color:#fff;font-size:20px;margin-bottom:10px}.wallet-details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wallet-details__header[_ngcontent-%COMP%]{align-items:center;display:flex;margin-bottom:10px}.wallet-details__header--right[_ngcontent-%COMP%]{display:flex;margin-left:auto}.wallet-details__header--right[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin-left:10px}.wallet-details__main[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:240px;width:100%}.wallet-details__main__buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:auto}.wallet-details__main__buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#5ebd6d;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;font-weight:500;margin:0 20px;padding:15px 30px}.wallet-details__content[_ngcontent-%COMP%]{display:flex;margin-top:30px}.wallet-details__tokens[_ngcontent-%COMP%], .wallet-details__transactions[_ngcontent-%COMP%]{flex:1}.wallet-details__tokens[_ngcontent-%COMP%]{margin-right:20px}.wallet-details__token[_ngcontent-%COMP%]{align-items:center;display:flex}.wallet-details__transactions[_ngcontent-%COMP%]{margin-left:20px}.wallet-details__transaction-empty[_ngcontent-%COMP%]{align-items:center;flex-direction:column}.wallet-details__transaction-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#5c5c5c;height:100px}.wallet-details__transaction-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px}.wallet-details--bch[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;margin:20px 0 10px}.wallet-details--bch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:40px;font-weight:500}.wallet-details--usd[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column}.wallet-details--usd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:500;text-align:center}"],changeDetection:0}),e}(),ge=n("XwkG"),fe=n("+ZEg"),he=[1,"wallet-export"],_e=[1,"wallet-export--title"],we=[1,"wallet-export__content"],me=[1,"wallet-export__row"],Oe=[0,"xlink","href","#key"],xe=[1,"wallet-export__row--bottom"],ve=["type","text",3,"value"],ye=["public",""],Ce=["appCopy","",3,"copyInputElement","copyNotificationText"],Me=[1,"wallet-export__qr"],Pe=["alt","",3,"src",4,"ngIf"],ke=["wif",""],Ue=["alt","",3,"src"];function Ie(e,t){if(1&e&&i.Jb(0,"img",Ue),2&e){var n=t.ngIf;i.vc(0),i.nc("src",n,i.uc)}}var Ae=function(){function e(e){this.cashContractsService=e,this.publicKey$=new F.a(""),this.privateWif$=new F.a(""),this.privateWifQr$=new F.a(null),this.destroy$=new z.a}return e.prototype.ngOnInit=function(){var e=this;this.cashContractsService.listenWallet.pipe(Object(E.a)(this.destroy$)).subscribe(function(t){return f.b(e,void 0,void 0,function(){var e,n;return f.e(this,function(c){switch(c.label){case 0:return t?(this.publicKey$.next(t.cashAddr()),e=this.cashContractsService.getWif(),this.privateWif$.next(e),[4,Object(N.c)(e)]):[2];case 1:return n=c.sent(),this.privateWifQr$.next(n),[2]}})})})},e.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.unsubscribe()},e.ngComponentDef=i.Cb({type:e,selectors:[["app-wallet-export"]],factory:function(t){return new(t||e)(i.Ib(h.a))},consts:35,vars:13,template:function(e,t){if(1&e&&(i.Ub(0,"app-modal"),i.Ub(1,"app-wrapper"),i.Ub(2,"app-modal-heading"),i.Ac(3," Export keys "),i.Ob(),i.Ub(4,"div",he),i.Ub(5,"p",_e),i.Ac(6," Etiam feugiat lorem non metus. Maecenas vestibulum mollis diam. "),i.Ob(),i.Ub(7,"div",we),i.Ub(8,"app-widget",me),i.gc(),i.Ub(9,"svg"),i.Jb(10,"use",Oe),i.Ob(),i.fc(),i.Ub(11,"h3"),i.Ac(12," Public "),i.Ob(),i.Ub(13,"div",xe),i.Jb(14,"input",ve,ye),i.ic(16,"async"),i.Ub(17,"app-button",Ce),i.Ac(18," Copy "),i.Ob(),i.Ob(),i.Ob(),i.Ub(19,"app-widget",me),i.gc(),i.Ub(20,"svg"),i.Jb(21,"use",Oe),i.Ob(),i.fc(),i.Ub(22,"h3"),i.Ac(23," Private key (WIF) "),i.Ob(),i.Ub(24,"p"),i.Ac(25," Exporting into a non-SLP wallet might burn all tokens "),i.Ob(),i.Ub(26,"div",Me),i.yc(27,Ie,1,1,"img",Pe),i.ic(28,"async"),i.Ob(),i.Ub(29,"div",xe),i.Jb(30,"input",ve,ke),i.ic(32,"async"),i.Ub(33,"app-button",Ce),i.Ac(34," Copy "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e){var n=i.qc(15),c=i.qc(31);i.vc(14),i.nc("value",i.jc(16,7,t.publicKey$)),i.vc(17),i.nc("copyInputElement",n),i.nc("copyNotificationText","Copied public key"),i.vc(27),i.nc("ngIf",i.jc(28,9,t.privateWifQr$)),i.vc(30),i.nc("value",i.jc(32,11,t.privateWif$)),i.vc(33),i.nc("copyInputElement",c),i.nc("copyNotificationText","Copied private key (WIF)")}},directives:[ge.a,O.a,fe.a,x.a,v.a,s,c.t],pipes:[c.b],styles:[".wallet-export[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column}.wallet-export--title[_ngcontent-%COMP%]{color:#fff;margin-bottom:50px}.wallet-export__content[_ngcontent-%COMP%]{margin:0 auto;max-width:800px;width:100%}.wallet-export__content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:0;border:0;font-size:18px;margin-right:10px;width:100%}.wallet-export__content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.wallet-export__row[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:40px}.wallet-export__row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:30px;margin-bottom:10px;text-align:center}.wallet-export__row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#faa352;font-weight:600;margin-bottom:10px;text-align:center}.wallet-export__row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#5c5c5c;height:60px;margin:0 auto 10px;width:60px}.wallet-export__row--bottom[_ngcontent-%COMP%]{background:#f2f2f2;border-radius:4px;display:flex;flex-shrink:0;height:60px;margin-top:30px;padding:10px 20px;width:100%}.wallet-export__qr[_ngcontent-%COMP%]{display:flex;height:200px;justify-content:center;margin:40px 0 0}.wallet-export__qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:auto}"],changeDetection:0}),e}(),$e=[1,"wallet-receive"],Se=[1,"wallet-receive__header"],je=[1,"wallet-receive__widget"],Te=[1,"wallet-receive__qr"],De=[3,"src",4,"ngIf"],Be=[1,"wallet-receive__address"],We=["type","text","disabled","true",3,"value"],Fe=["bchInput",""],ze=["appCopy","",3,"copyInputElement","copyNotificationText"],Ee=["slpInput",""],Le=[3,"src"];function Ne(e,t){if(1&e&&i.Jb(0,"img",Le),2&e){var n=t.ngIf;i.vc(0),i.nc("src",n,i.uc)}}function Je(e,t){if(1&e&&i.Jb(0,"img",Le),2&e){var n=t.ngIf;i.vc(0),i.nc("src",n,i.uc)}}var qe=function(){function e(e){var t=this;this.cashContractsService=e,this.bchDataUrl$=new F.a(""),this.cashAddr$=new F.a(""),this.slpDataUrl$=new F.a(""),this.slpAddr$=new F.a(""),this.destroy$=new z.a,this.loadWallet=function(){t.cashContractsService.listenWallet.pipe(Object(E.a)(t.destroy$)).subscribe(function(e){return f.b(t,void 0,void 0,function(){var t,n,c,i;return f.e(this,function(a){switch(a.label){case 0:return e?(t=e.cashAddr(),n=e.slpAddr(),this.cashAddr$.next(t),this.slpAddr$.next(n),[4,Object(N.c)(t)]):[2];case 1:return c=a.sent(),[4,Object(N.c)(n)];case 2:return i=a.sent(),this.bchDataUrl$.next(c),this.slpDataUrl$.next(i),[2]}})})})}}return e.prototype.ngOnInit=function(){this.loadWallet()},e.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.unsubscribe()},e.ngComponentDef=i.Cb({type:e,selectors:[["app-wallet-receive"]],factory:function(t){return new(t||e)(i.Ib(h.a))},consts:32,vars:16,template:function(e,t){if(1&e&&(i.Ub(0,"app-modal"),i.Ub(1,"app-wrapper"),i.Ub(2,"app-modal-heading"),i.Ac(3," Receive funds "),i.Ob(),i.Ub(4,"div",$e),i.Ub(5,"div",Se),i.Ub(6,"p"),i.Ac(7,"Sed aliquam ultrices mauris. Curabitur ullamcorper ultricies nisi. Praesent egestas neque eu enim."),i.Ob(),i.Ob(),i.Ub(8,"app-widget",je),i.Ub(9,"h3"),i.Ac(10,"BCH address"),i.Ob(),i.Ub(11,"div",Te),i.yc(12,Ne,1,1,"img",De),i.ic(13,"async"),i.Ob(),i.Ub(14,"div",Be),i.Jb(15,"input",We,Fe),i.ic(17,"async"),i.Ub(18,"app-button",ze),i.Ac(19," Copy "),i.Ob(),i.Ob(),i.Ob(),i.Ub(20,"app-widget",je),i.Ub(21,"h3"),i.Ac(22,"SLP address"),i.Ob(),i.Ub(23,"div",Te),i.yc(24,Je,1,1,"img",De),i.ic(25,"async"),i.Ob(),i.Ub(26,"div",Be),i.Jb(27,"input",We,Ee),i.ic(29,"async"),i.Ub(30,"app-button",ze),i.Ac(31," Copy "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e){var n=i.qc(16),c=i.qc(28);i.vc(12),i.nc("ngIf",i.jc(13,8,t.bchDataUrl$)),i.vc(15),i.nc("value",i.jc(17,10,t.cashAddr$)),i.vc(18),i.nc("copyInputElement",n),i.nc("copyNotificationText","Copied address to clipboard"),i.vc(24),i.nc("ngIf",i.jc(25,12,t.slpDataUrl$)),i.vc(27),i.nc("value",i.jc(29,14,t.slpAddr$)),i.vc(30),i.nc("copyInputElement",c),i.nc("copyNotificationText","Copied address to clipboard")}},directives:[ge.a,O.a,fe.a,x.a,c.t,v.a,s],pipes:[c.b],styles:[".wallet-receive[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;padding-bottom:100px}.wallet-receive[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:30px;margin-bottom:30px;text-align:center}.wallet-receive__header[_ngcontent-%COMP%]{margin-bottom:50px}.wallet-receive__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.wallet-receive__widget[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:40px;max-width:800px;width:100%}.wallet-receive__qr[_ngcontent-%COMP%]{display:flex;height:200px;justify-content:center;margin-bottom:30px}.wallet-receive__qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:auto}.wallet-receive__address[_ngcontent-%COMP%]{background:#f2f2f2;border-radius:4px;display:flex;flex-shrink:0;height:60px;padding:10px 20px;width:100%}.wallet-receive__address[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:0;border:0;font-size:18px;margin-right:10px;width:100%}.wallet-receive__address[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.wallet-receive__address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{align-self:flex-end;background:#5ebd6d;border-radius:4px;color:#fff;cursor:pointer;font-size:15px;font-weight:500;margin-left:10px;padding:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"],changeDetection:0}),e}(),Re=n("dzgT"),Ge=[1,"wallet-send"],He=[1,"wallet-send--title"],Ke=[1,"wallet-send__widget"],Qe=[1,"wallet-send__select"],Ve=["type","text","placeholder","Address",1,"wallet-send__address",3,"ngModel","ngModelChange"],Xe=[1,"wallet-send__amount"],Ye=[1,"wallet-send__amount__input-wrapper"],Ze=["type","number","placeholder","Amount",3,"min","max","ngModel","ngModelChange"],et=["class","wallet-send__amount__input-wrapper--usd",4,"ngIf"],tt=[1,"wallet-send__amount--bottom"],nt=[3,"click"],ct=[4,"ngIf","ngIfElse"],it=["bch",""],at=["button-full","","button-lg","",1,"wallet-send__widget--button",3,"click"],ot=[1,"wallet-send__list"],lt=["class","mb-md",3,"item","click",4,"ngIf"],rt=["class","mb-md",3,"item","click",4,"ngFor","ngForOf"],st=[1,"wallet-send__amount__input-wrapper--usd"];function pt(e,t){if(1&e&&(i.Ub(0,"p",st),i.Ac(1),i.ic(2,"usdFormatter"),i.Ob()),2&e){var n=i.hc();i.vc(1),i.Bc(1,i.bc(" ",i.jc(2,1,n.selectedAmount*n.usd)," USD "))}}function dt(e,t){if(1&e&&(i.Nb(0),i.Ac(1),i.ic(2,"async"),i.Mb()),2&e){var n=i.hc();i.vc(1),i.Bc(1,i.bc(" ",i.jc(2,1,n.selected$).balance||0," "))}}function bt(e,t){if(1&e&&(i.Ac(0),i.ic(1,"bchSeparator"),i.ic(2,"async")),2&e){var n=i.hc();i.vc(0),i.Bc(0,i.bc(" ",i.jc(1,1,i.jc(2,3,n.selected$).balance)||0," "))}}var ut=[1,"mb-md",3,"item","click"],gt=["checkbox","",1,"wallet-send__check"],ft=["wallet-send__check--selected"];function ht(e,t){if(1&e){var n=i.Xb();i.Ub(0,"app-coin-card",ut),i.cc("click",function(e){return i.sc(n),i.hc().selectBch()}),i.Ub(1,"div",gt),i.Vb(ft),i.ic(2,"async"),i.Jb(3,"div"),i.Ob(),i.Ob()}if(2&e){var c=t.ngIf,a=i.hc();i.vc(0),i.nc("item",c),i.Lb(1,0,!i.jc(2,1,a.selected$).isToken),i.Wb(1)}}function _t(e,t){if(1&e){var n=i.Xb();i.Ub(0,"app-coin-card",ut),i.cc("click",function(e){i.sc(n);var c=t.$implicit;return i.hc().selectToken(c)}),i.Ub(1,"div",gt),i.Vb(ft),i.ic(2,"async"),i.Jb(3,"div"),i.Ob(),i.Ob()}if(2&e){var c=t.$implicit,a=i.hc();i.vc(0),i.nc("item",c),i.Lb(1,0,c.id===i.jc(2,1,a.selected$).tokenId),i.Wb(1)}}var wt=function(){function e(e,t,n){var c=this;this.cashContractsService=e,this.endpointsService=t,this.router=n,this.selected$=new F.a({}),this.bchDetails$=new F.a(null),this.tokens$=new F.a([]),this.selectedAddress="",this.selectedAmount=0,this.usd=0,this.fee=0,this.destroy$=new z.a,this.selectBch=function(){var e=Object(N.b)(c.wallet.nonTokenBalance());c.selected$.next({name:"Bitcoin Cash",balance:e,isToken:!1}),c.selectedAmount=e,c.setFee()},this.selectToken=function(e){c.selected$.next({name:e.name,balance:e.balance,isToken:!0,tokenId:e.id}),c.selectedAmount=e.balance,c.setFee()},this.send=function(){c.selectedAddress&&c.selectedAmount&&c.selected$.pipe(Object(w.a)(1)).subscribe(function(e){e.isToken?c.cashContractsService.sendToken(c.selectedAddress,c.selectedAmount,e.tokenId,e.name):c.cashContractsService.sendBch(c.selectedAddress,c.selectedAmount)})},this.setMax=function(){c.selected$.pipe(Object(w.a)(1)).subscribe(function(e){c.selectedAmount=e.balance})},this.setFee=function(){c.selected$.pipe(Object(w.a)(1)).subscribe(function(e){var t;t=e.isToken?c.cashContractsService.getTokenFee(e.tokenId,c.selectedAmount||0):c.cashContractsService.getBchFee(Object(N.a)(c.selectedAmount||0)),c.fee=Object(N.b)(t)*c.usd})},this.handleWallet=function(){var e={name:"Bitcoin Cash",symbol:"BCH",balance:Object(N.b)(c.wallet.nonTokenBalance())};c.bchDetails$.next(e),c.initSelected&&c.initSelected.name?(c.selected$.next({name:c.initSelected.name,balance:c.initSelected.balance,isToken:!0,tokenId:c.initSelected.tokenId}),c.selectedAmount=c.initSelected.balance):(c.selected$.next({name:e.name,balance:e.balance,isToken:!1}),c.selectedAmount=e.balance),c.setFee()},this.setTokens=function(){return f.b(c,void 0,void 0,function(){var e,t,n=this;return f.e(this,function(c){switch(c.label){case 0:return[4,this.wallet.tokenIds()];case 1:return e=c.sent(),t=e.map(function(e){return f.a({},n.wallet.tokenDetails(e),{balance:n.wallet.tokenBalance(e),isToken:!0})}),this.tokens$.next(t.toArray()),[2]}})})},this.router.getCurrentNavigation().extras.state&&(this.initSelected=this.router.getCurrentNavigation().extras.state.selected)}return e.prototype.ngOnInit=function(){var e=this;Object(Re.a)([this.cashContractsService.listenWallet.pipe(Object(E.a)(this.destroy$)),this.endpointsService.getBchUsdPrice().pipe(Object(w.a)(1))]).pipe(Object(E.a)(this.destroy$)).subscribe(function(t){var n=t[1];e.wallet=t[0],e.usd=+n.ticker.price||0,e.wallet&&(e.handleWallet(),e.setTokens())})},e.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.unsubscribe()},e.ngComponentDef=i.Cb({type:e,selectors:[["app-wallet-send"]],factory:function(t){return new(t||e)(i.Ib(h.a),i.Ib(L.a),i.Ib(m.c))},consts:38,vars:25,template:function(e,t){if(1&e&&(i.Ub(0,"app-modal"),i.Ub(1,"app-wrapper"),i.Ub(2,"app-modal-heading"),i.Ac(3," Send "),i.Ob(),i.Ub(4,"div",Ge),i.Ub(5,"p",He),i.Ac(6," Praesent egestas tristique nibh. "),i.Ob(),i.Ub(7,"app-widget",Ke),i.Ub(8,"h2"),i.Ac(9),i.ic(10,"async"),i.Ob(),i.Ub(11,"div",Qe),i.Ub(12,"input",Ve),i.cc("ngModelChange",function(e){return t.selectedAddress=e}),i.Ob(),i.Ub(13,"div",Xe),i.Ub(14,"div",Ye),i.Ub(15,"input",Ze),i.cc("ngModelChange",function(e){return t.selectedAmount=e}),i.cc("ngModelChange",function(e){return t.setFee()}),i.ic(16,"async"),i.Ob(),i.yc(17,pt,3,3,"p",et),i.ic(18,"async"),i.Ob(),i.Ub(19,"div",tt),i.Ub(20,"p"),i.Ac(21),i.ic(22,"usdFormatter"),i.Ob(),i.Ub(23,"p",nt),i.cc("click",function(e){return t.setMax()}),i.Ac(24," Max: "),i.yc(25,dt,3,3,"ng-container",ct),i.ic(26,"async"),i.yc(27,bt,3,5,"ng-template",null,it,i.zc),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ub(29,"app-button",at),i.cc("click",function(e){return t.send()}),i.Ac(30," Send "),i.Ob(),i.Ob(),i.Ub(31,"div",ot),i.Ub(32,"h3"),i.Ac(33,"Available BCH / Tokens"),i.Ob(),i.yc(34,ht,4,3,"app-coin-card",lt),i.ic(35,"async"),i.yc(36,_t,4,3,"app-coin-card",rt),i.ic(37,"async"),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e){var n=i.qc(28);i.vc(9),i.Bc(9,i.bc(" ",i.jc(10,11,t.selected$).name||"\xa0"," ")),i.vc(12),i.nc("ngModel",t.selectedAddress),i.vc(15),i.nc("min",0),i.nc("max",i.jc(16,13,t.selected$).balance),i.nc("ngModel",t.selectedAmount),i.vc(17),i.nc("ngIf",!i.jc(18,15,t.selected$).isToken),i.vc(21),i.Bc(21,i.bc("Fee: ",i.jc(22,17,t.fee)," USD")),i.vc(25),i.nc("ngIf",i.jc(26,19,t.selected$).isToken),i.nc("ngIfElse",n),i.vc(34),i.nc("ngIf",i.jc(35,21,t.bchDetails$)),i.vc(36),i.nc("ngForOf",i.jc(37,23,t.tokens$))}},directives:[ge.a,O.a,fe.a,x.a,a.c,a.h,a.l,a.o,c.t,v.a,c.s,J.a],pipes:[c.b,R.a,q.a],styles:['.wallet-send[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column}.wallet-send[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#f2f2f2;border:0;border-radius:4px;font-size:18px;height:30px;padding:20px 10px;width:100%}.wallet-send[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .wallet-send[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.wallet-send[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.wallet-send--title[_ngcontent-%COMP%]{color:#fff;margin-bottom:40px}.wallet-send__widget[_ngcontent-%COMP%]{align-items:center;flex-direction:column;justify-content:center;margin-bottom:50px;max-width:800px;width:100%}.wallet-send__widget[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:600;margin-bottom:20px}.wallet-send__widget--button[_ngcontent-%COMP%]{margin-top:80px}.wallet-send__select[_ngcontent-%COMP%]{display:flex;width:100%}.wallet-send__address[_ngcontent-%COMP%]{flex:1}.wallet-send__amount[_ngcontent-%COMP%]{flex:0 0 auto;margin-left:10px;width:280px}.wallet-send__amount__input-wrapper[_ngcontent-%COMP%]{position:relative}.wallet-send__amount__input-wrapper--usd[_ngcontent-%COMP%]{align-items:center;bottom:0;color:#828282;display:flex;font-size:11px;font-weight:600;pointer-events:none;position:absolute;right:10px;top:0}.wallet-send__amount--bottom[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:5px}.wallet-send__amount--bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#5ebd6d;cursor:pointer;font-size:12px;font-weight:600;margin-left:10px;text-align:right}.wallet-send__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:800px;width:100%}.wallet-send__list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:20px;margin-bottom:10px}.wallet-send__check[_ngcontent-%COMP%]{align-items:center;border:3px solid #e6e6e6;border-radius:100%;display:flex;height:22px;justify-content:center;margin-right:30px;width:22px}.wallet-send__check--selected[_ngcontent-%COMP%]{border-color:#5ebd6d}.wallet-send__check--selected[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:#5ebd6d;border-radius:100%;content:"";height:8px;width:8px}'],changeDetection:0}),e}(),mt=function(){function e(){}return e.prototype.ngOnInit=function(){},e.ngComponentDef=i.Cb({type:e,selectors:[["app-wallet"]],factory:function(t){return new(t||e)},consts:1,vars:0,template:function(e,t){1&e&&i.Jb(0,"router-outlet")},directives:[m.h],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;width:100%}"],changeDetection:0}),e}(),Ot=function(){function e(e,t){var n=this;this.router=e,this.cashContractsService=t,this.checkIfUserHasWallet=function(){return n.cashContractsService.listenIsSecretInStorage.pipe(Object(w.a)(1)).subscribe(function(e){e||n.router.navigate([_.a.wallet+"/"+_.a.walletCreate])}),!0}}return e.prototype.canActivate=function(){return this.checkIfUserHasWallet()},e.ngInjectableDef=i.Eb({token:e,factory:function(t){return new(t||e)(i.Zb(m.c),i.Zb(h.a))},providedIn:"root"}),e}(),xt=[{path:"",component:mt,children:[{path:_.a.walletCreate,component:D},{path:"",component:ue,canActivate:[Ot]},{path:_.a.walletReceive,component:qe,canActivate:[Ot]},{path:_.a.walletSend,component:wt,canActivate:[Ot]},{path:_.a.walletExport,component:Ae,canActivate:[Ot]}]}],vt=function(){function e(){}return e.ngModuleDef=i.Gb({type:e}),e.ngInjectorDef=i.Fb({factory:function(t){return new(t||e)},imports:[[m.g.forChild(xt)],m.g]}),e}();m.g.forChild(xt),n.d(t,"WalletModule",function(){return yt});var yt=function(){function e(){}return e.ngModuleDef=i.Gb({type:e}),e.ngInjectorDef=i.Fb({factory:function(t){return new(t||e)},imports:[[c.c,vt,g.a,b.a,p,a.e,d.a,u.a,l.a,o.a]]}),e}()}}]);