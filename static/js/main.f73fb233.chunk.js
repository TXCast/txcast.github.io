(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a.p+"static/media/logo.21f31404.svg"},172:function(e,t,a){e.exports=a(458)},177:function(e,t,a){},211:function(e,t){},213:function(e,t){},238:function(e,t){},281:function(e,t){},283:function(e,t){},284:function(e,t){},290:function(e,t){},293:function(e,t){},320:function(e,t){},323:function(e,t){},340:function(e,t){},343:function(e,t){},347:function(e,t){},382:function(e,t){},451:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(27),l=a.n(r),c=(a(177),a(25)),o=a.n(c),i=a(36),u=a(28),m=a(8),d=a(9),h=a(11),p=a(10),b=a(12),f=a(13),g=a(16),E=a(6),v=function(e){return s.a.createElement(E.f,{isOpen:e.modal,toggle:e.toggle},e.innerHTML.body({params:e.params}),e.innerHTML.footer({toggle:e.toggle,action:e.action,params:e.params}))},y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).toggle=function(){a.setState(function(e){return{toggle:!e.toggle}})},a.state={toggle:!1,filter:""},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"setFilter",value:function(e){this.setState(Object(g.a)({},this.state,{filter:e}))}},{key:"render",value:function(){var e=this;return s.a.createElement(E.b,{className:"input-group-append",isOpen:this.state.toggle,toggle:this.toggle},s.a.createElement(E.e,{caret:!0,className:"btn-secondary dropdown-toggle"},this.props.currency),s.a.createElement(E.d,null,this.props.symbols.filter(function(t){return t.toUpperCase().search(e.state.filter.toUpperCase())>-1}).map(function(t){return s.a.createElement(E.c,{key:t,href:"#",onClick:function(){return e.props.setCurrency(t)}},t)})))}}]),t}(n.Component),N=function(e){return s.a.createElement("a",{onClick:function(){return e.onCollapse()}},s.a.createElement("i",{className:"float-right fas fa-"+(e.collapsed?"plus":"minus")+"-square"}))},w=function(e){return s.a.createElement("a",{onClick:function(){return e.onToggleBlocks()}},s.a.createElement("i",{"data-tip":"Toggle block schedule or approximate UTC time.",className:"float-right mr-4 fas fa-toggle-"+(e.blocksFormat?"on":"off")}))},k=function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-ellipsis-h"})),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("ul",{className:"list-inline social-buttons"},s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{href:"https://discord.gg/Z2bMx5V",target:"_blank"},s.a.createElement("i",{className:"fab fa-discord"}))))),s.a.createElement("div",{className:"col-md-12 py-5"},s.a.createElement("span",{className:"text-white text-monospace"},"TXCast 2018")))))},x=function(){return s.a.createElement("svg",{height:"100%",width:"100%"},s.a.createElement("defs",null,s.a.createElement("pattern",{id:"basicPattern",x:"0",y:"0",width:"60",height:"30",patternUnits:"userSpaceOnUse"},s.a.createElement("polygon",{points:"0,0 30,15 30,-15"}),s.a.createElement("polygon",{points:"0,0 30,15 0,30"}),s.a.createElement("polygon",{points:"0,30 30,15 30,45"}),s.a.createElement("polygon",{points:"60,0 30,15 30,-15"}),s.a.createElement("polygon",{points:"60,0 30,15 60,30"}),s.a.createElement("polygon",{points:"60,30 30,15 30,45"}))),s.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",stroke:"#333333",strokeWidth:"1",fill:"url(#basicPattern)"}))},C=function(e){var t=e.active?"text-secondary":"text-danger",a=e.active?" Active":" Inactive",n=e.active?"check":"times";return s.a.createElement("span",{className:"navbar-text"},"TXC Sub:",s.a.createElement("span",{className:t},a),s.a.createElement("i",{"data-tip":"Active subs are addresses that hold at least 1 TXC and do not pay the 40% fee.",className:"ml-1 fas fa-"+n+"-circle "+t}))},O=a(87),T=a.n(O),j=a(168),D=a.n(j),S=a(50),X=a.n(S),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).toggle=a.toggle.bind(Object(f.a)(Object(f.a)(a))),a.state={isOpen:!1},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=void 0!=this.props.addressList[0];return s.a.createElement("div",null,s.a.createElement(E.l,{className:"text-monospace bg-white text-black",color:"#FFF",light:!0,expand:"md"},s.a.createElement("img",{src:this.props.logo,width:"30",height:"30",className:"d-inline-block align-top mx-3",alt:"txcast logo"}),s.a.createElement(E.m,{className:"font-weight-bold",style:{letterSpacing:"7px"}},"TXCast"),s.a.createElement(E.n,{onClick:this.toggle}),s.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(E.i,{className:"ml-auto",navbar:!0},s.a.createElement(E.j,{className:"mr-3"},s.a.createElement(E.k,{"data-tip":"Under construction",className:"text-secondary"},"Help")),s.a.createElement(E.j,{className:"mr-3"},s.a.createElement(C,{active:!!this.props.hasTXC})),s.a.createElement(E.o,{nav:!0,inNavbar:!0},s.a.createElement(E.e,{nav:!0,caret:!0},"Address and Blocks"),s.a.createElement(E.d,{right:!0},s.a.createElement(E.c,{disabled:!0},s.a.createElement("small",{className:"float-right hex-address"},s.a.createElement("i",{style:{color:"1"===this.props.netid?"teal":"purple"},className:"fas fa-wifi mr-2"}),"Active TXCast Address: ",s.a.createElement("a",{href:this.props.ethsUrl,target:"_blank",className:"text-monospace"},this.props.ethsAddress))),this.props.addressList[0]&&s.a.createElement(B,this.props),s.a.createElement(E.c,{style:{borderTopColor:"gray"},divider:!0}),s.a.createElement(E.c,{disabled:!0},s.a.createElement("small",{className:"float-left"},s.a.createElement("i",{className:"fa"+(e?"s":"r")+" fa-circle text-"+(e?"primary":"danger")})," web3 ",e?"enabled":"disabled"),s.a.createElement("small",{className:"float-right"},"Current block: ",s.a.createElement("span",{className:"text-monospace"},this.props.blockNumber)))))))))}}]),t}(s.a.Component),B=function(e){return s.a.createElement(E.c,{disabled:!0},s.a.createElement("small",{className:"float-right hex-address"},"Your address: ",s.a.createElement("a",{href:e.coinbaseUrl,target:"_blank",className:"text-monospace"},e.addressList[0])))},A=I,F={signData:{body:function(e){var t=e.params,a=t.web3.utils.toBN(t.dataArray.reward).add(t.web3.utils.toBN(t.dataArray.amount)),n=a.lte(t.web3.utils.toBN(t.balance));return s.a.createElement(E.g,null,s.a.createElement("h2",{className:"text-black"},"TX Request"),s.a.createElement("p",null,"You are about to sign a TX request. This can still be cancelled before someone broadcasts it."),s.a.createElement("h5",{className:"text-black"},"Your input data is the following:"),s.a.createElement("p",null,"Receiver:",s.a.createElement("small",{className:"text-monospace float-right"}," ",t.dataArray.address),s.a.createElement("br",null),"Schedule: ",s.a.createElement("span",{className:"float-right"},"Block ",t.dataArray.schedule),s.a.createElement("br",null),"TX hash: ",s.a.createElement("span",{className:"text-monospace float-right"},t.web3.utils.hexToAscii(t.hash))),s.a.createElement("hr",null),s.a.createElement("p",null,"Amount: ",s.a.createElement("span",{className:"float-right"},t.web3.utils.fromWei(t.dataArray.amount,"ether")," ",t.currency),s.a.createElement("br",null),"Reward: ",s.a.createElement("span",{className:"float-right"},t.web3.utils.fromWei(t.dataArray.reward,"ether")," ",t.currency)),s.a.createElement("hr",null),s.a.createElement("p",null,"Total TX request: ",s.a.createElement("span",{className:"float-right"},t.web3.utils.fromWei(a.toString(),"ether")," ",t.currency),s.a.createElement("br",null),"Current balance: ",s.a.createElement("span",{className:"float-right text-"+(n?"success":"danger")},t.web3.utils.fromWei(t.balance.toString(),"ether")," ETH"),function(e,t){var a="USD"==e.currency?"You are scheduling a TX in USD prices. By the time it is fulfilled your available balance may not be enough to cover the request.":"The total amount you're requesting is higher than your balance. Make sure to deposit enough ETH to cover the TX amount and reward.";return s.a.createElement("span",null,s.a.createElement("br",null),!t&&s.a.createElement("small",{className:"text-danger float-right"},s.a.createElement("i",{className:"fas fa-exclamation-triangle"})," ",a))}(t,n)))},footer:function(e){var t=e.toggle,a=e.action,n=e.params;return s.a.createElement(E.h,null,s.a.createElement("button",{className:"btn btn-info",onClick:t},"Back"),s.a.createElement("button",{className:"btn btn-success",onClick:function(){return a(n.hash,n.signer,n.dataArray,n.method)}},"Sign TX")," ")}},cancelData:{body:function(){return s.a.createElement(E.g,null,s.a.createElement("h2",{className:"text-black"},"TX Cancellation"),s.a.createElement("p",null,"Cancelling a TX has two steps: Cancelling the request on the blockchain and removing the request from the TXCast server."),s.a.createElement("p",null,"You will be prompted for two signatures:",s.a.createElement("br",null),"one with a 0.001 ETH cost to cancel on the blockchain,",s.a.createElement("br",null),"and one with no cost to remove the request."),s.a.createElement("p",null,"It is ",s.a.createElement("b",null,"absolutely necessary")," to send the 0.001 ETH transaction, since that is the only 100% guarantee that your request is fully invalidated. The zero cost transaction will remove your request from the servers, but if someone has a copy of your signature, it can still be used."))},footer:function(e){var t=e.toggle,a=e.action,n=e.params;return s.a.createElement(E.h,null,s.a.createElement("button",{className:"btn btn-info",onClick:t},"Back"),s.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a(n.signature,n.nonce)}},"Cancel TX")," ")}}},H=a(88),q=a(37),R=a.n(q);function W(e){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(o.a.mark(function e(t){var a,n,s,r,l,c,i,u=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getBlock("latest");case 2:return a=e.sent,n={address:t.address,amount:this.web3.utils.toWei(t.amount.toString(),"ether"),reward:this.web3.utils.toWei(t.reward.toString(),"ether"),byBlocks:!0,schedule:parseInt(t.blocks)+parseInt(a.number),nonce:Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),netID:this.state.netID,USD:"USD"==t.currency},s="USD"==t.currency?"0x51004bf5":"0x392482d1",r={to:this.addresses[this.state.netID].eths,data:"0x03c14526"+this.web3.eth.abi.encodeParameters(this.abiTypes.eths.withoutSignature,R()(n)).substr(2)},e.next=8,this.web3.eth.call(r);case 8:l=e.sent,c=this.state.addressList[0],i={to:this.addresses[this.state.netID].eths,data:"0x70a08231"+this.web3.eth.abi.encodeParameters(["address"],[c]).substr(2)},this.web3.eth.call(i).then(function(e,a){var r=u.web3.utils.toBN(e).toString();u.setState({modal:!0,params:{hash:l,signer:c,dataArray:n,balance:r,currency:t.currency,method:s,web3:u.web3},innerHTML:u.Modals.signData,action:u.signTX})});case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function U(){var e=this.state.addressList[0],t={from:e,value:this.web3.utils.toWei("1","ether"),to:this.addresses[this.state.netID].txcsale,data:"0xec8ac4d80"+this.web3.eth.abi.encodeParameters(["address"],[e]).substr(2)};this.sendTX(t)}function P(e,t){this.setState({modal:!0,params:{signature:e,nonce:t},innerHTML:this.Modals.cancelData,action:this.cancelTX})}function M(e){var t=this.state.addressList[0],a={from:t,value:this.web3.utils.toWei(e.amount.toString(),"ether"),to:this.addresses[this.state.netID].eths,data:"0xf340fa01"+this.web3.eth.abi.encodeParameters(["address"],[t]).substr(2)};this.sendTX(a).then(console.log)}function $(e){var t=this,a={to:this.addresses[this.state.netID].eths,data:"0x70a08231"+this.web3.eth.abi.encodeParameters(["address"],[e.address]).substr(2)};this.web3.eth.call(a).then(function(e,a){var n=t.web3.utils.fromWei(t.web3.utils.toBN(e).toString(),"ether");t.setState({balance:n})})}function Y(e){var t,a={address:(t=e.callDataTX).address,amount:t.amount,reward:t.reward,byBlocks:t.byBlocks,schedule:t.schedule,nonce:t.nonce,netID:t.netID,sig:t.sig},n=e.callDataTX.method,s={to:this.addresses[this.state.netID].eths,data:n+this.web3.eth.abi.encodeParameters(this.abiTypes.eths.withSignature,Object(H.a)(R()(a))).substr(2)};this.sendTX(s)}function _(e){var t,a=this,n={address:(t=e).address,amount:t.amount,reward:t.reward,byBlocks:t.byBlocks,schedule:t.schedule,nonce:t.nonce,netID:t.netID,sig:t.sig},s=e.method,r={to:this.addresses[this.state.netID].eths,data:s+this.web3.eth.abi.encodeParameters(this.abiTypes.eths.withSignature,Object(H.a)(R()(n))).substr(2)};this.sendTX(r).then(function(){a.fetchData()})}var J=a(169),Z=a.n(J),G=(a(451),a(170)),Q=function(e){return function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this))).state={collapsed:!1},t.onCollapse=t.onCollapse.bind(Object(f.a)(Object(f.a)(t))),t}return Object(b.a)(a,t),Object(d.a)(a,[{key:"onCollapse",value:function(){this.setState(Object(g.a)({},this.state,{collapsed:!this.state.collapsed}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(e,Object.assign({},this.props,{collapsed:this.state.collapsed,onCollapse:this.onCollapse})))}}]),a}(s.a.Component)},V=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h2",{className:"text-monospace font-weight-bold"},"TX Queue",s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}),s.a.createElement(w,{onToggleBlocks:e.onToggleBlocks,blocksFormat:e.blocksFormat}),s.a.createElement("i",{"data-multiline":!0,"data-tip":"These are the registered TXs requested by other users.<br/>Anyone can claim the reward offered by the poster once their schedule is met.",className:"ml-3 small fas fa-question-circle"}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement("div",{className:"table-container"},s.a.createElement("table",{className:"table table-hover"},s.a.createElement("thead",{className:"bg-white text-monospace"},s.a.createElement("tr",{className:"text-black d-flex",style:{height:"30px"}},s.a.createElement("th",{scope:"col",className:"col-5"},"Requester"),s.a.createElement("th",{scope:"col",className:"col-3 text-center"},s.a.createElement("i",{className:"fas fa-"+(e.blocksFormat?"cube":"calendar")})," ",s.a.createElement("span",null,"Schedule")),s.a.createElement("th",{scope:"col",className:"col-4 text-center"},"Reward"))),s.a.createElement("tbody",{className:"text-black text-monospace"},e.posts.map(function(t){return s.a.createElement(z,Object.assign({},t,{key:t.sig,account:e.account,onCancel:e.onCancel,onFulfill:e.onFulfill,fromWei:e.fromWei}))})," ",e.requests.map(function(t){var a;return s.a.createElement(K,Object.assign({},t,(a={key:t.sig,account:e.account,blocksFormat:e.blocksFormat},Object(u.a)(a,"account",e.account),Object(u.a)(a,"onCancel",e.onCancel),Object(u.a)(a,"fromWei",e.fromWei),a)))}))))))},z=function(e){var t="true"===e.USD?"USD":"ETH";return s.a.createElement("tr",{className:"table-success text-black d-flex hoverHide"},s.a.createElement("td",{className:"col-5 pl-3"},s.a.createElement("span",{className:"sendSpan"},e.signer),s.a.createElement("button",{className:"btn btn-sm btn-success btn-block table-button",onClick:function(){return e.onFulfill(e)}},s.a.createElement("i",{className:"fas fa-paper-plane"})," Send this TX")),s.a.createElement("td",{className:"col-3 text-center"},"Ready"),s.a.createElement("td",{className:"col-4 text-center"},e.account===e.signer?s.a.createElement(ee,Object.assign({currency:t},e)):e.fromWei(e.reward,"ether")+" "+t))},K=function(e){var t="true"===e.USD?"USD":"ETH";return s.a.createElement("tr",{className:"table-danger text-black d-flex hoverHide"},s.a.createElement("td",{className:"col-5 pl-3"},s.a.createElement("span",{className:"sendSpan"},e.signer),s.a.createElement(G.CopyToClipboard,{text:JSON.stringify(e)},s.a.createElement("button",{className:"btn btn-sm btn-danger btn-block table-button",onClick:function(e){return 0}},s.a.createElement("i",{className:"fas fa-clipboard"})," Copy Signature"))),s.a.createElement("td",{className:"col-3 text-center"},s.a.createElement(te,e)),s.a.createElement("td",{className:"col-4 text-center"},e.account===e.signer?s.a.createElement(ee,Object.assign({currency:t},e)):e.fromWei(e.reward,"ether")+" "+t))},ee=function(e){return s.a.createElement("span",null,s.a.createElement("span",{className:"sendSpan"},e.fromWei(e.reward,"ether")," ",e.currency),s.a.createElement("button",{className:"btn btn-sm btn-danger btn-block table-button",onClick:function(){return e.onCancel(e.sig,e.nonce)}},s.a.createElement("i",{className:"fas fa-ban"})," Cancel TX"))},te=function(e){return s.a.createElement("span",null,e.blocksFormat?e.schedule:e.timestampDisplay)},ae=Q(function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this))).state={blocksFormat:!0},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.mountFinished()}},{key:"onToggleBlocks",value:function(){this.setState({blocksFormat:!this.state.blocksFormat}),console.log(this.state)}},{key:"render",value:function(){var e=this,t=R()(this.props.queue),a=Object.keys(this.props.queue),n=t.forEach(function(e,t){return e.sig=a[t]})||t,r=this.state.blocksFormat?n:n.forEach(function(t){t.timestampDisplay=new Date(Date.now()+15*(t.schedule-e.props.blockNumber)).toISOString().replace("T"," ").split(":").slice(0,2),t.timestamp=new Date(Date.now()+15*(t.schedule-e.props.blockNumber)).toISOString()})||n;console.log("txq",n);var l=r.filter(function(t){return t.schedule<e.props.blockNumber}),c=r.filter(function(t){return t.schedule>=e.props.blockNumber});return s.a.createElement(V,Object.assign({},this.props,{posts:l,requests:c,blocksFormat:this.state.blocksFormat,onCancel:this.props.onCancel,onToggleBlocks:this.onToggleBlocks.bind(this),onFulfill:this.props.onFulfill,fromWei:this.props.fromWei}))}}]),t}(n.Component)),ne=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",{className:"text-monospace flex-header"},"Post Scheduled TX",s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement(se,{getTime:e.getTime,onInputChange:e.onInputChange,onSign:e.onSign,setCurrency:e.setCurrency,inputData:e.inputData,symbols:e.symbols})))},se=function(e){return s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Receiver Address"),s.a.createElement("input",{onFocus:function(e){return e.target.select()},onChange:function(t){return e.onInputChange(Object(g.a)({},e.inputData,{address:t.target.value}))},className:"form-control text-monospace",id:"recieverAddress",value:e.inputData.address}),s.a.createElement("small",{id:"raHelp",className:"form-text text-gray"},"Address of the end-recipient of your transaction.")),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Amount"),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{onFocus:function(e){return e.target.select()},onChange:function(t){return e.onInputChange(Object(g.a)({},e.inputData,{amount:t.target.value}))},className:"form-control text-monospace",id:"amount",value:e.inputData.amount}),s.a.createElement(y,{symbols:e.symbols,currency:e.inputData.currency,setCurrency:e.setCurrency})),s.a.createElement("small",{id:"aHelp",className:"form-text text-gray"},"Amount to send to the receiver address.")),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Reward"),s.a.createElement("i",{"data-tip":"The reward implicitly includes the network transaction fee.",className:"fas fa-info-circle ml-2"}),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{onFocus:function(e){return e.target.select()},onChange:function(t){return e.onInputChange(Object(g.a)({},e.inputData,{reward:t.target.value}))},className:"form-control text-monospace",id:"reward",value:e.inputData.reward}),s.a.createElement(y,{className:"disabled",symbols:e.symbols,currency:e.inputData.currency,setCurrency:e.setCurrency})),s.a.createElement("small",{id:"rwHelp",className:"form-text text-gray"},"Amount awarded to the address that fulfills your request.")),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Blocks"),s.a.createElement("i",{"data-tip":"Blocks till your TX is available for mining. One block is mined every ~15 seconds.",className:"fas fa-info-circle ml-2"}),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{onFocus:function(e){return e.target.select()},onChange:function(t){return e.onInputChange(Object(g.a)({},e.inputData,{blocks:t.target.value}))},className:"form-control text-monospace",id:"blocks",value:e.inputData.blocks}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("div",{style:{cursor:"help"},"data-tip":e.getTime(e.inputData.blocks),className:"btn btn-primary disabled"},"Blocks"))),s.a.createElement("small",{id:"bHelp",className:"form-text text-gray"},"Blocks to wait before the transaction is broadcasted.")),s.a.createElement("button",{onClick:function(t){return e.onSign(t)},className:"btn btn-block btn-lg btn-secondary"},"Sign and Schedule"))},re=Q(function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).symbols=["ETH","USD"],a.state={address:"0x0000000000000000000000000000000000000000",amount:0,reward:0,blocks:10,currency:a.symbols[0]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(ne,Object.assign({},this.props,{getTime:this.getTime.bind(this),onInputChange:this.onInputChange.bind(this),onSign:this.onSign.bind(this),inputData:this.state,symbols:this.symbols,setCurrency:this.setCurrency.bind(this)}))}},{key:"setCurrency",value:function(e){this.setState({currency:e})}},{key:"getTime",value:function(e){var t=15*e/3600;return t<2?"Your input is equivalent to ~"+(60*t).toFixed(2)+" minutes.":"Your input is equivalent to ~"+t.toFixed(2)+" hours."}},{key:"onSign",value:function(e){e.preventDefault(),this.props.onSign(this.state)}},{key:"onInputChange",value:function(e){/(^[0-9][0-9]{0,5}$)|(^$)/.test(e.blocks)&&/(^[0-9]+\.?[0-9]{0,18}$)|(^$)/.test(e.reward)&&/(^[0-9]+\.?[0-9]{0,18}$)|(^$)/.test(e.amount)&&/^0x[0-9a-f]{40}$/i.test(e.address)&&this.setState(e)}}]),t}(n.Component)),le=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",{className:"text-monospace"},"Buy TXC",s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement("p",{className:"lead"},"TXC is the subscription badge of TXCast. Every posted transaction charges a 40% fee of the reward. Addresses with at least 1 TXC do not pay this fee. Subscriptions can be transferred to other addresses and never expire."),s.a.createElement("p",{className:"small"},"There will only be a total of 10000 TXC subscriptions, and their price is fixed at 1 TXC = 0.2 ETH for the duration of the sale. TXC isn't subdivisible, so the minimum amount for sale is 1 TXC. However, an address can buy as many whole units of TXC as it wishes. After the 10000 subscriptions are sold, new users will have buy the subscriptions from previous owners."),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{type:"button",onClick:function(){return e.onBuy()},className:"btn btn-secondary btn-lg btn-block"},"Buy TXC"))))},ce=Q(function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(le,this.props)}}]),t}(n.Component)),oe=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",{className:"text-monospace"},"Notices",s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement("p",null,"TXCast is in beta release. Proceed with caution and make sure to read what each sub-app does.")))},ie=Q(function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(oe,this.props)}}]),t}(n.Component)),ue=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",{className:"text-monospace flex-header"},"Ether Deposits",s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement(me,e)))},me=function(e){return s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Beneficiary's Address"),s.a.createElement("i",{"data-tip":"Until release, the beneficiary is the unlocked wallet.",className:"fas fa-info-circle ml-2"}),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{disabled:!0,className:"form-control text-monospace bg-primary",id:"beneficiaryAddress",value:e.address})),s.a.createElement("small",{id:"raHelp",className:"form-text text-gray"},"Address of the beneficiary of your deposit.")),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Amount"),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{onChange:function(t){return e.onInputChange(Object(g.a)({},e.inputData,{amount:t.target.value}))},className:"form-control text-monospace",id:"depositAmount",value:e.inputData.amount})),s.a.createElement("small",{id:"aHelp",className:"form-text text-gray"},"Amount to deposit to the beneficiary.")),s.a.createElement("button",{onClick:function(t){return e.onDeposit(t)},className:"btn btn-block btn-lg btn-secondary"},"Deposit"))},de=Q(function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={amount:0,selfDepositToggle:!0},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(ue,Object.assign({},this.props,{onInputChange:this.onInputChange.bind(this),onDeposit:this.onDeposit.bind(this),toggleSelfDeposit:this.toggleSelfDeposit.bind(this),inputData:this.state,symbols:["ETH","ZRX","DAI","REP"]}))}},{key:"onDeposit",value:function(e){e.preventDefault(),this.props.onDeposit(this.state)}},{key:"toggleSelfDeposit",value:function(){this.setState(Object(g.a)({},this.state,{selfDepositToggle:!this.state.selfDepositToggle}))}},{key:"onInputChange",value:function(e){/(^[0-9]+\.?[0-9]{0,18}$)|(^$)/.test(e.amount)&&this.setState(e)}}]),t}(n.Component)),he=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",{className:"text-monospace flex-header"},s.a.createElement("span",null,"Deposited Balance"),s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement(pe,e)))},pe=function(e){return s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Address"),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{onFocus:function(e){return e.target.select()},onChange:function(t){return e.onInputChange(Object(g.a)({},e.inputData,{address:t.target.value}))},className:"form-control text-monospace",id:"address",value:e.inputData.address}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{onClick:function(t){return e.onBalance(t)},className:"btn btn-secondary"},"Check")),s.a.createElement("small",{id:"raHelp",className:"form-text text-gray"}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("h3",null,"ETH: ",s.a.createElement("span",{className:"float-right"},parseFloat(e.balance).toFixed(5)))))},be=Q(function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={address:"0x0000000000000000000000000000000000000000",amount:0},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(he,Object.assign({},this.props,{onInputChange:this.onInputChange.bind(this),onBalance:this.onBalance.bind(this),inputData:this.state,symbols:["ETH","ZRX","DAI","REP"]}))}},{key:"onBalance",value:function(e){e.preventDefault(),this.props.onBalance(this.state)}},{key:"onInputChange",value:function(e){/^0x[0-9a-f]{40}$/i.test(e.address)&&this.setState(e)}}]),t}(n.Component)),fe=function(e){return s.a.createElement("div",{className:"card text-white mb-3"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",{className:"text-monospace"},"Broadcast TX",s.a.createElement(N,{onCollapse:e.onCollapse,collapsed:e.collapsed}))),s.a.createElement("div",{className:"card-body"+(e.collapsed?" card-collapse":"")},s.a.createElement(ge,e)))},ge=function(e){return s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"TX Data"),s.a.createElement("i",{"data-tip":"These data can be copied to the clipboard from the TX Queue sub-app.",className:"fas fa-info-circle ml-2"}),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{onChange:function(t){return e.onInputChange({callDataTX:JSON.parse(t.target.value)})},className:"form-control text-monospace",id:"address",value:JSON.stringify(e.inputData.callDataTX)}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{onClick:function(t){return e.onSendRaw(t)},className:"btn btn-secondary"},"Broadcast TX")),s.a.createElement("small",{id:"raHelp",className:"form-text text-gray"}))))},Ee=Q(function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={callDataTX:{}},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(fe,Object.assign({},this.props,{onInputChange:this.onInputChange.bind(this),onSendRaw:this.onSendRaw.bind(this),inputData:this.state,symbols:["ETH","ZRX","DAI","REP"]}))}},{key:"onSendRaw",value:function(e){e.preventDefault(),this.props.onSendRaw(this.state)}},{key:"onInputChange",value:function(e){this.setState(e)}}]),t}(n.Component)),ve=function(e){function t(){var e,a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this))).state={addressList:[],queue:{},blockNumber:0,balance:0,netID:1,hasTXC:!1,blocksFormat:!0,server:"prod",modal:!1},a.Modals=F,a.web3=new T.a(T.a.givenProvider||"http://localhost:8545"),a.mew="https://www.myetherwallet.com/signmsg.html",a.addresses=(e={},Object(u.a)(e,42,{eths:"0xa0475d202be30019e56306cc08f8998887135258",eths_old:"0xe49bb13f1e57de8364586bbb82bf79d0c8aac074",txcsale:"0x2ffbee1b7eda9d6187f4f875899c9f8f28d927ed",txc:"0x12C942fDbE9981E68DC153CC92dA2e2c301F5a9A"}),Object(u.a)(e,1,{eths:"0x0de3f0cd422e25d1c20fc8124e8bd0181e68fa30",eths_old:"0xf99E87098f4F1C8d8bd6a3df7181B3acdc21848A",txcsale:"0x02e48bb0dbdc0ebbc041e725a12784239a2d10df",txc:"0x390e0070323df12b024617854f698cef5d309a93"}),e),a.urls={dev:"http://localhost:5000",devrem:"http://txcast.io:5000",prod:"https://api.txcast.io"},a.abiTypes={eths:{withoutSignature:["address","uint256","uint256","bool","uint256","uint256","uint256","bool"],withSignature:["address","uint256","uint256","bool","uint256","uint256","uint256","bytes"]}},a.toggle=a.toggle.bind(Object(f.a)(Object(f.a)(a))),a.updateBlock=a.updateBlock.bind(Object(f.a)(Object(f.a)(a))),a.cancelTX=function(e,t){var a=this;this.toggle();var n={to:this.addresses[this.state.netID].eths,data:"0x8e7baff6"+this.web3.eth.abi.encodeParameters(["uint"],[t]).substr(2)};this.sendTX(n),this.web3.eth.personal.sign("Cancel TX "+t,this.state.addressList[0]).then(function(n){var s={signature:e,nonce:t,verified:n},r=new FormData;Object.keys(s).forEach(function(e){r.set(e,s[e])});var l={url:a.urls[a.state.server]+"/signature/"+e,data:r,method:"DELETE"};X()(l).then(a.fetchData.bind(a)).catch(console.error)})}.bind(Object(f.a)(Object(f.a)(a))),a.signTX=function(e,t,a,n){var s=this;this.toggle(),this.web3.eth.personal.sign(e,t).then(function(e){var r=Object(g.a)({method:n,signer:t},a),l=new FormData;Object.keys(r).forEach(function(e){l.set(e,r[e])});var c={url:s.urls[s.state.server]+"/signature/"+e,data:l,method:"PUT"};X()(c).then(function(t){var a=s.state.queue.slice(0);a[e]=r,console.log(a),s.setState({queue:a},function(e){return console.log})}).catch(function(e){e.response&&console.log("error",e.response.data.message)}).finally(function(){return s.fetchData()})})}.bind(Object(f.a)(Object(f.a)(a))),a.sendTX=function(e){var t=this.state.addressList[0],a=Object(g.a)({},e,{from:t});return console.log(a),this.web3.eth.sendTransaction(a)}.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark(function e(){var t,a,n,s,r=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:return e.next=5,this.web3.eth.getAccounts();case 5:return t=e.sent,e.next=8,this.web3.eth.net.getId();case 8:return a=e.sent,e.next=11,this.setState({addressList:t,netID:a});case 11:n=t[0],s={to:this.addresses[this.state.netID].txc,data:"0x70a08231"+this.web3.eth.abi.encodeParameters(["address"],[n]).substr(2)},this.web3.eth.call(s).then(function(e,t){r.setState({hasTXC:parseInt(e)>0})}),this.web3.currentProvider.publicConfigStore.on("update",function(e){r.setState({addressList:[r.web3.utils.toChecksumAddress(e.selectedAddress)],netID:e.networkVersion})}),setInterval(this.updateBlock,5e3),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0,"no web3");case 21:case"end":return e.stop()}},e,this,[[0,18]])}));return function(){return e.apply(this,arguments)}}()},{key:"mountFinished",value:function(){var e=this;setInterval(function(){return e.fetchData()},2e3)}},{key:"fetchData",value:function(){var e=this,t={url:this.urls[this.state.server]+"/signature",method:"GET"};X()(t).then(function(t){var a=t.data.reduce(function(e,t){return e[t[0]]=t[1],e},{});e.setState({queue:a})})}},{key:"updateBlock",value:function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getBlock("latest");case 2:null!==(t=e.sent)&&/[0-9]*/.test(t)&&this.setState({blockNumber:t.number});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.netID,t=this.addresses[e].eths,a={netid:e,ethsAddress:t,ethsUrl:"https://"+("1"===e?"www":"kovan")+".etherscan.io/address/"+t,coinbaseUrl:"https://"+("1"===e?"www":"kovan")+".etherscan.io/address/"+this.state.addressList[0]},n=this.state.modal?s.a.createElement(v,{innerHTML:this.state.innerHTML,params:this.state.params,action:this.state.action,toggle:this.toggle,modal:this.state.modal}):"";return s.a.createElement("div",null,s.a.createElement(x,null),s.a.createElement(D.a,null),s.a.createElement(A,Object.assign({logo:Z.a},this.state,a)),n,s.a.createElement("div",{className:"container-fluid px-4 mt-4"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-5"},s.a.createElement(ae,{account:this.state.addressList[0],queue:this.state.queue,blockNumber:this.state.blockNumber,onFulfill:_.bind(this),onCancel:P.bind(this),mountFinished:this.mountFinished.bind(this),fromWei:this.web3.utils.fromWei}),s.a.createElement(Ee,{onSendRaw:Y.bind(this)})),s.a.createElement("div",{className:"col-lg-7"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-7"},s.a.createElement(re,{onSign:W.bind(this)}),s.a.createElement(ce,{onBuy:U.bind(this)})),s.a.createElement("div",{className:"col-lg-5"},s.a.createElement(de,{address:this.state.addressList[0],onDeposit:M.bind(this)}),s.a.createElement(be,{address:this.state.addressList[0],balance:this.state.balance,onBalance:$.bind(this)}),s.a.createElement(ie,null)))))),s.a.createElement(k,null))}}]),t}(n.Component),ye=a(171),Ne=a.n(ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Ne.a.load({google:{families:["Roboto","Roboto Mono"]}}),l.a.render(s.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,2,1]]]);
//# sourceMappingURL=main.f73fb233.chunk.js.map