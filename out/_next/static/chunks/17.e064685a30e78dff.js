(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{86094:function(e,b,a){"use strict";a.r(b),a.d(b,{OpenloginAdapter:function(){return m},getOpenloginDefaultOptions:function(){return j}});var f=a(3388),c=a(45624),g=a(4942),h=a(67845),d=a(72378),i=a.n(d);const j=(a,b)=>({adapterSettings:{network:f.dr.MAINNET,clientId:"",uxMode:f.$e.POPUP},chainConfig:a?(0,c.h2)(a,b):null,loginSettings:{}});function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){(0,g.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}class m extends c.J5{constructor(a){var d,e,h,i;super(),(0,g.Z)(this,"name",c.rW.OPENLOGIN),(0,g.Z)(this,"adapterNamespace",c.yk.MULTICHAIN),(0,g.Z)(this,"type",c.hN.IN_APP),(0,g.Z)(this,"openloginInstance",null),(0,g.Z)(this,"status",c.MP.NOT_READY),(0,g.Z)(this,"currentChainNamespace",c.EN.EIP155),(0,g.Z)(this,"openloginOptions",void 0),(0,g.Z)(this,"loginSettings",{}),(0,g.Z)(this,"privKeyProvider",null),c.cM.debug("const openlogin adapter",a);const b=j(null===(d=a.chainConfig)|| void 0===d?void 0:d.chainNamespace,null===(e=a.chainConfig)|| void 0===e?void 0:e.chainId);if(this.openloginOptions=l(l({clientId:"",network:f.dr.MAINNET},b.adapterSettings),a.adapterSettings||{}),this.loginSettings=l(l({},b.loginSettings),a.loginSettings),this.sessionTime=this.loginSettings.sessionTime||86400,null!==(h=a.chainConfig)&& void 0!==h&&h.chainNamespace){this.currentChainNamespace=null===(i=a.chainConfig)|| void 0===i?void 0:i.chainNamespace;const k=b.chainConfig?b.chainConfig:{};if(this.chainConfig=l(l({},k),null==a?void 0:a.chainConfig),c.cM.debug("const openlogin chainConfig",this.chainConfig),!this.chainConfig.rpcTarget&&a.chainConfig.chainNamespace!==c.EN.OTHER)throw c.Ty.invalidParams("rpcTarget is required in chainConfig")}}get chainConfigProxy(){return this.chainConfig?l({},this.chainConfig):null}get provider(){var a;return(null===(a=this.privKeyProvider)|| void 0===a?void 0:a.provider)||null}set provider(a){throw new Error("Not implemented")}async init(g){var a;if(super.checkInitializationRequirements(),!(null!==(a=this.openloginOptions)&& void 0!==a&&a.clientId))throw c.Ty.invalidParams("clientId is required before openlogin's initialization");if(!this.chainConfig)throw c.Ty.invalidParams("chainConfig is required before initialization");let b=!1;if(this.openloginOptions.uxMode===f.$e.REDIRECT){const d=(0,f.Gv)();Object.keys(d).length>0&&d._pid&&(b=!0)}this.openloginOptions=l(l({},this.openloginOptions),{},{replaceUrlOnRedirect:b}),this.openloginInstance=new f.ZP(this.openloginOptions),c.cM.debug("initializing openlogin adapter init"),await this.openloginInstance.init(),this.status=c.MP.READY,this.emit(c.n2.READY,c.rW.OPENLOGIN);try{c.cM.debug("initializing openlogin adapter"),this.openloginInstance.privKey&&(g.autoConnect||b)&&await this.connect()}catch(e){c.cM.error("Failed to connect with cached openlogin provider",e),this.emit("ERRORED",e)}}async connect(b){super.checkConnectionRequirements(),this.status=c.MP.CONNECTING,this.emit(c.n2.CONNECTING,l(l({},b),{},{adapter:c.rW.OPENLOGIN}));try{return await this.connectWithProvider(b),this.provider}catch(a){if(c.cM.error("Failed to connect with openlogin provider",a),this.status=c.MP.READY,this.emit(c.n2.ERRORED,a),null!=a&&a.message.includes("user closed popup"))throw c.RM.popupClosed();throw c.RM.connectionError("Failed to login with openlogin")}}async disconnect(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==c.MP.CONNECTED)throw c.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw c.Ty.notReady("openloginInstance is not ready");await this.openloginInstance.logout(),a.cleanup?(this.status=c.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=c.MP.READY,this.emit(c.n2.DISCONNECTED)}async authenticateUser(){if(this.status!==c.MP.CONNECTED)throw c.RM.notConnectedError("Not connected with wallet, Please login/connect first");const a=await this.getUserInfo();return{idToken:a.idToken}}async getUserInfo(){if(this.status!==c.MP.CONNECTED)throw c.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw c.Ty.notReady("openloginInstance is not ready");const a=await this.openloginInstance.getUserInfo();return a}setAdapterSettings(a){if(this.status===c.MP.READY)return;const b=j();this.openloginOptions=l(l(l({},b.adapterSettings),this.openloginOptions||{}),a),a.sessionTime&&(this.loginSettings=l(l({},this.loginSettings),{},{sessionTime:a.sessionTime}))}setChainConfig(a){super.setChainConfig(a),this.currentChainNamespace=a.chainNamespace}async connectWithProvider(b){if(!this.chainConfig)throw c.Ty.invalidParams("chainConfig is required before initialization");if(!this.openloginInstance)throw c.Ty.notReady("openloginInstance is not ready");if(this.currentChainNamespace===c.EN.SOLANA){const{SolanaPrivateKeyProvider:g}=await Promise.all([a.e(766),a.e(108),a.e(973),a.e(702)]).then(a.bind(a,44445));this.privKeyProvider=new g({config:{chainConfig:this.chainConfig}})}else if(this.currentChainNamespace===c.EN.EIP155){const{EthereumPrivateKeyProvider:j}=await Promise.all([a.e(482),a.e(62),a.e(646)]).then(a.bind(a,52062));this.privKeyProvider=new j({config:{chainConfig:this.chainConfig}})}else if(this.currentChainNamespace===c.EN.OTHER)this.privKeyProvider=new h.FL;else throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));if(!this.openloginInstance.privKey&&b){var e;this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===c.EN.SOLANA?f.x7.ED25519:f.x7.SECP256K1),await this.openloginInstance.login(i()(this.loginSettings,{loginProvider:b.loginProvider},{extraLoginOptions:l(l({},b.extraLoginOptions||{}),{},{login_hint:b.login_hint||(null===(e=b.extraLoginOptions)|| void 0===e?void 0:e.login_hint)})}))}let d=this.openloginInstance.privKey;if(d){if(this.currentChainNamespace===c.EN.SOLANA){const{getED25519Key:k}=await Promise.all([a.e(108),a.e(418)]).then(a.bind(a,33946));d=k(d).sk.toString("hex")}await this.privKeyProvider.setupProvider(d),this.status=c.MP.CONNECTED,this.emit(c.n2.CONNECTED,{adapter:c.rW.OPENLOGIN,reconnected:!b})}}}},64123:function(){}}])