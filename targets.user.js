// ==UserScript==
// @match http://www.ingress.com/intel
// @match http://ingress.com/intel
// ==/UserScript==

//Stolen code used to break out of the greasemonkey/userscripts wrapper
if ('undefined' == typeof __PAGE_SCOPE_RUN__) {
  (function page_scope_runner() {
    // If we're _not_ already running in the page, grab the full source
    // of this script.
    var my_src = "(" + page_scope_runner.caller.toString() + ")();";

    // Create a script node holding this script, plus a marker that lets us
    // know we are running in the page scope (not the Greasemonkey sandbox).
    // Note that we are intentionally *not* scope-wrapping here.
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.textContent = "var __PAGE_SCOPE_RUN__ = true;\n" + my_src;

    // Insert the script node into the page, so it will run, and immediately
    // remove it to clean up.  Use setTimeout to force execution "outside" of
    // the user script scope completely.
    setTimeout(function() {
          document.body.appendChild(script);
          document.body.removeChild(script);
        }, 0);
  })();

  // Stop running, because we know Greasemonkey actually runs us in
  // an anonymous wrapper.
  return;
}
// For some reason I couldn't include CryptoJS via the same method datatables is included and have it work.
// I just copied all the code below to work around that issue.
//BEGIN CryptoJS
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(o,q){var l={},m=l.lib={},n=m.Base=function(){function a(){}return{extend:function(e){a.prototype=this;var c=new a;e&&c.mixIn(e);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),j=m.WordArray=n.extend({init:function(a,e){a=
this.words=a||[];this.sigBytes=e!=q?e:4*a.length},toString:function(a){return(a||r).stringify(this)},concat:function(a){var e=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)e[d+b>>>2]|=(c[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<c.length)for(b=0;b<a;b+=4)e[d+b>>>2]=c[b>>>2];else e.push.apply(e,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,e=this.sigBytes;a[e>>>2]&=4294967295<<32-8*(e%4);a.length=o.ceil(e/4)},clone:function(){var a=
n.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var e=[],c=0;c<a;c+=4)e.push(4294967296*o.random()|0);return j.create(e,a)}}),k=l.enc={},r=k.Hex={stringify:function(a){for(var e=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var b=e[d>>>2]>>>24-8*(d%4)&255;c.push((b>>>4).toString(16));c.push((b&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return j.create(c,b/2)}},p=k.Latin1={stringify:function(a){for(var b=
a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return j.create(c,b)}},h=k.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},b=m.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=j.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,f=this.blockSize,i=d/(4*f),i=a?o.ceil(i):o.max((i|0)-this._minBufferSize,0),a=i*f,d=o.min(4*a,d);if(a){for(var h=0;h<a;h+=f)this._doProcessBlock(c,h);h=c.splice(0,a);b.sigBytes-=d}return j.create(h,d)},clone:function(){var a=n.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});m.Hasher=b.extend({init:function(){this.reset()},
reset:function(){b.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=b.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return f.HMAC.create(a,c).finalize(b)}}});var f=l.algo={};return l}(Math);
(function(o){function q(b,f,a,e,c,d,g){b=b+(f&a|~f&e)+c+g;return(b<<d|b>>>32-d)+f}function l(b,f,a,e,c,d,g){b=b+(f&e|a&~e)+c+g;return(b<<d|b>>>32-d)+f}function m(b,f,a,e,c,d,g){b=b+(f^a^e)+c+g;return(b<<d|b>>>32-d)+f}function n(b,f,a,e,c,d,g){b=b+(a^(f|~e))+c+g;return(b<<d|b>>>32-d)+f}var j=CryptoJS,k=j.lib,r=k.WordArray,k=k.Hasher,p=j.algo,h=[];(function(){for(var b=0;64>b;b++)h[b]=4294967296*o.abs(o.sin(b+1))|0})();p=p.MD5=k.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,
2562383102,271733878])},_doProcessBlock:function(b,f){for(var a=0;16>a;a++){var e=f+a,c=b[e];b[e]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}for(var e=this._hash.words,c=e[0],d=e[1],g=e[2],i=e[3],a=0;64>a;a+=4)16>a?(c=q(c,d,g,i,b[f+a],7,h[a]),i=q(i,c,d,g,b[f+a+1],12,h[a+1]),g=q(g,i,c,d,b[f+a+2],17,h[a+2]),d=q(d,g,i,c,b[f+a+3],22,h[a+3])):32>a?(c=l(c,d,g,i,b[f+(a+1)%16],5,h[a]),i=l(i,c,d,g,b[f+(a+6)%16],9,h[a+1]),g=l(g,i,c,d,b[f+(a+11)%16],14,h[a+2]),d=l(d,g,i,c,b[f+a%16],20,h[a+3])):48>a?(c=
m(c,d,g,i,b[f+(3*a+5)%16],4,h[a]),i=m(i,c,d,g,b[f+(3*a+8)%16],11,h[a+1]),g=m(g,i,c,d,b[f+(3*a+11)%16],16,h[a+2]),d=m(d,g,i,c,b[f+(3*a+14)%16],23,h[a+3])):(c=n(c,d,g,i,b[f+3*a%16],6,h[a]),i=n(i,c,d,g,b[f+(3*a+7)%16],10,h[a+1]),g=n(g,i,c,d,b[f+(3*a+14)%16],15,h[a+2]),d=n(d,g,i,c,b[f+(3*a+5)%16],21,h[a+3]));e[0]=e[0]+c|0;e[1]=e[1]+d|0;e[2]=e[2]+g|0;e[3]=e[3]+i|0},_doFinalize:function(){var b=this._data,f=b.words,a=8*this._nDataBytes,e=8*b.sigBytes;f[e>>>5]|=128<<24-e%32;f[(e+64>>>9<<4)+14]=(a<<8|a>>>
24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(f.length+1);this._process();b=this._hash.words;for(f=0;4>f;f++)a=b[f],b[f]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360}});j.MD5=k._createHelper(p);j.HmacMD5=k._createHmacHelper(p)})(Math);
//END CryptoJS

//14201404787536b5f24a9867d7e981fb is the MD5 of the current version of function S.
//Since I just want to add a single line to the function, I have to ensure nothing has changed from the version I know.
var md5 = CryptoJS.MD5(String(S.prototype.constructor))
if (md5 != "14201404787536b5f24a9867d7e981fb")
{
  alert("NianticOps changed something, please get a new version\n\nCurrent version md5 =" + md5);
  return;
}

var portals = {}
var fields = []
-var players = {"ea596a3f4a6946c6bd0cca515701fab4.c":{"name":"","level":5,"faction":"RESISTANCE"},"7721c7a33ff34315bce28f0ef3321702.c":{"name":"radevel","level":5,"faction":"RESISTANCE"},"75e0289116e54a49afc79f3a787f73e7.c":{"name":"scootle","level":8,"faction":"RESISTANCE"},"ae4e736cc872457abedd8bd93abf4ff9.c":{"name":"Atoz","level":6,"faction":"RESISTANCE"},"c3a3ab410f0e42ca8ee65cd508d12d0c.c":{"name":"3nvy","level":6,"faction":"RESISTANCE"},"0e0bafabf75846ac90878a3932463a18.c":{"name":"","level":4,"faction":"RESISTANCE"},"8004e8808b1144fdaff0f4cf42377a32.c":{"name":"Laerz103","level":3,"faction":"RESISTANCE"},"cc5ba126a8eb41d2b8fada587e53db5c.c":{"name":"Gregable","level":6,"faction":"RESISTANCE"},"68d8b47fd0644857a6792724d77b76b4.c":{"name":"2pi","level":6,"faction":"RESISTANCE"},"b1a5b2da69d14005af410414f2fcc4c9.c":{"name":"","level":1,"faction":"RESISTANCE"},"4ef9d69ea1f343fa893091c0ee333845.c":{"name":"","level":2,"faction":"RESISTANCE"},"9f572887898a4a92adec18ddec5ca3e2.c":{"name":"RobotAtlas","level":7,"faction":"ALIENS"},"da923c110b3d43928698df39deaa582d.c":{"name":"","level":3,"faction":"ALIENS"},"e6e1263ca96a4b82a0ab35e4737c32ec.c":{"name":"","level":3,"faction":"ALIENS"},"5e04d004ba5d41c79972248c634c0c95.c":{"name":"","level":5,"faction":"ALIENS"},"d16ff3a28d84410d8183950ece596eb7.c":{"name":"","level":6,"faction":"ALIENS"},"6b32ad92aab84340ad104815f0a096d4.c":{"name":"","level":6,"faction":"ALIENS"},"a722d5945f9f4b44b5fa02dbfd3b80b0.c":{"name":"","level":3,"faction":"ALIENS"},"c4ed0d0f5826422c93ea2de4546273a0.c":{"name":"","level":2,"faction":"RESISTANCE"},"e212f04404594afaa5ea41f54ead1504.c":{"name":"","level":7,"faction":"RESISTANCE"},"632fbac822064db2a3ce1f946bcc11ef.c":{"name":"","level":7,"faction":"RESISTANCE"},"23fea356352d497791ef76efb937b620.c":{"name":"","level":1,"faction":"RESISTANCE"},"0af65bc7c3a24194aa8963d18913a5d3.c":{"name":"","level":8,"faction":"ALIENS"},"0ea1a232723a4512b5d5f12093bdaf8e.c":{"name":"","level":3,"faction":"RESISTANCE"},"ed750f21e23745fb9707881fee7b3f1a.c":{"name":"","level":2,"faction":"RESISTANCE"},"66b22e38d72f42519c3bad4658c747c1.c":{"name":"","level":6,"faction":"ALIENS"},"6d50d84b4945438ca30af2ed176b8ef1.c":{"name":"","level":5,"faction":"RESISTANCE"},"a39ea7d50867496ebb46869f9fa3aa21.c":{"name":"","level":7,"faction":"RESISTANCE"},"d1a27377f13b4fab9fdd412ed5672e45.c":{"name":"","level":2,"faction":"ALIENS"},"192d2fc776b149caac33991c07c0e9bb.c":{"name":"","level":4,"faction":"RESISTANCE"},"3e5c069b845d42aab4518e419e7c838d.c":{"name":"","level":6,"faction":"RESISTANCE"},"f335038c1503415384a27ae92e9e1796.c":{"name":"","level":4,"faction":"RESISTANCE"},"f466a5a5ea0a43d8ab09ad11320f009e.c":{"name":"Rime","level":8,"faction":"ALIENS"},"bc22d7ecaba34a6c8e4a2c318c489266.c":{"name":"HSuke","level":7,"faction":"RESISTANCE"},"499e6d6f42dd4c04b99c87be637326bc.c":{"name":"Brookwall","level":3,"faction":"RESISTANCE"},"334b3353931646f2b1cbcfee5cf47e7e.c":{"name":"","level":4,"faction":"RESISTANCE"},"b4dec4cff79647b6bcd50aa44dd0097b.c":{"name":"","level":7,"faction":"ALIENS"},"0b65273203b640c2915f0b4dfaccb69a.c":{"name":"","level":7,"faction":"ALIENS"},"cd87c5d3ecaf4a5fa0516df83884e3ca.c":{"name":"XHGAGJJJ","level":3,"faction":"RESISTANCE"},"1cbca350dcd24ac5a7d6e2216a0be215.c":{"name":"","level":3,"faction":"ALIENS"},"13da0f008c9a4f1299e32a61b01eeff9.c":{"name":"romeoso","level":8,"faction":"RESISTANCE"},"3317e2b6c9364951be9b21fca5038c52.c":{"name":"","level":4,"faction":"RESISTANCE"},"fb2b604dcb76458eb7846859a037cc2d.c":{"name":"","level":8,"faction":"ALIENS"},"a8d07113cdc840d88667a8edfb324527.c":{"name":"MrAnalytical","level":7,"faction":"RESISTANCE"},"8b2303105c4148f9a937a890ffad2831.c":{"name":"merreborn","level":6,"faction":"ALIENS"},"742f27d4988f48d1bbea004842066bf8.c":{"name":"quisdom","level":5,"faction":"RESISTANCE"},"d10842f546964fb98b36deaf55266e10.c":{"name":"","level":3,"faction":"RESISTANCE"},"8639ac057b434afaa299492969567eec.c":{"name":"","level":7,"faction":"RESISTANCE"},"e73c5d0c7ce246c2a62622ef2d32d234.c":{"name":"lllllllll","level":5,"faction":"ALIENS"},"9a6a2f9d4e9449c69c6ddb743c061c79.c":{"name":"","level":4,"faction":"RESISTANCE"},"a7c99d8ba34e485296d6178662b61903.c":{"name":"hypercat","level":7,"faction":"ALIENS"},"7a96863c24154c04aedae29785558c96.c":{"name":"","level":3,"faction":"ALIENS"},"e91d2cbc0cc54366b884c4270b48a1a0.c":{"name":"","level":7,"faction":"ALIENS"},"cde2e0d94b80430895b7a48d2022fe17.c":{"name":"","level":6,"faction":"RESISTANCE"},"608e9d5272024ea98f38085c6047cf91.c":{"name":"","level":4,"faction":"RESISTANCE"},"3ac7dcd25144468fa49ea23d10f819dc.c":{"name":"gestator","level":6,"faction":"ALIENS"},"82d83b3ab8a7404098e5ee094bd62e43.c":{"name":"misterikkit","level":7,"faction":"ALIENS"},"de94288ced444e86b1885957b16641ac.c":{"name":"MISSY","level":5,"faction":"ALIENS"},"7741c7492c184b80b631995cfc660746.c":{"name":"","level":2,"faction":"ALIENS"},"ed014398a77e4f5db141c9d7c4a09d6a.c":{"name":"Zorkstation","level":7,"faction":"RESISTANCE"},"9e9a74717d364c65b7a2e23c108ea7a4.c":{"name":"","level":2,"faction":"RESISTANCE"},"fc457a3682ff4d6088c9b23dd5db39a7.c":{"name":"rotoiti","level":5,"faction":"ALIENS"},"ef485b865ef845a19b091626189ff12c.c":{"name":"","level":3,"faction":"RESISTANCE"},"cdd37bc379a743509473ae64fb1109ea.c":{"name":"","level":6,"faction":"ALIENS"},"4597286ea2c44b21a539ef964aeb813f.c":{"name":"money","level":5,"faction":"RESISTANCE"},"02a776dcbbd64851ae8bf8b7db099eae.c":{"name":"wax1wax0","level":6,"faction":"RESISTANCE"},"43f327975d7048cd9fa79341230a0e11.c":{"name":"","level":7,"faction":"RESISTANCE"},"b498e7dec4b64b26bb4d501a8538eb1a.c":{"name":"Daeris","level":1,"faction":"RESISTANCE"},"5c26d3de8523408c97ddedc85fcf38bc.c":{"name":"Ichthyos","level":7,"faction":"ALIENS"},"0e1a81db8fc5400cab4244c8b76e00cd.c":{"name":"Auryn","level":8,"faction":"ALIENS"},"43162d2463744e83b5edf248cc26c5b0.c":{"name":"","level":7,"faction":"RESISTANCE"},"0daf12e2cf654725bd0f719f8b8d61ac.c":{"name":"","level":2,"faction":"ALIENS"},"0958eedd3ce647129b4d4d0db87f5a1c.c":{"name":"rongou","level":7,"faction":"RESISTANCE"},"a1ceb41c87c345e3bfa85a89413f8b2f.c":{"name":"","level":3,"faction":"RESISTANCE"},"0c7152e70b2c4d2e80f9e3d50a27aff5.c":{"name":"","level":2,"faction":"RESISTANCE"},"ccb3f95e8782401db58c73286a1d85dc.c":{"name":"","level":2,"faction":"RESISTANCE"},"a497819a951a4840b6c70b04b42267fc.c":{"name":"","level":7,"faction":"ALIENS"},"680789fdfa2245999904e9e989d4a0f8.c":{"name":"","level":4,"faction":"RESISTANCE"},"2f23927120a54c1b9b856cd6eebd0089.c":{"name":"","level":2,"faction":"ALIENS"},"dd9e2dba4e5f442b90613f81e8fc4075.c":{"name":"","level":4,"faction":"RESISTANCE"},"c35836b5d9a8487284925a96c1469edb.c":{"name":"","level":4,"faction":"RESISTANCE"},"26d398cb457a4ef5ba4d20953a71bfb6.c":{"name":"Tantalum","level":6,"faction":"RESISTANCE"},"53591503fb2149df9702150a4f02605a.c":{"name":"","level":1,"faction":"RESISTANCE"},"cf46603f79374bec9d8f5bb2ba8b019e.c":{"name":"CristinG","level":4,"faction":"RESISTANCE"},"629e9e42d0d046a6878bdd945a406ce5.c":{"name":"","level":5,"faction":"RESISTANCE"},"038d11944f8848908be483661df22dbf.c":{"name":"","level":4,"faction":"ALIENS"},"5841465eaf6d42a28b620483cd0d7176.c":{"name":"","level":4,"faction":"RESISTANCE"},"aa337713df3a47fba43611622718e08c.c":{"name":"","level":2,"faction":"RESISTANCE"},"a0206bdc7a794def9765b2baba071b51.c":{"name":"","level":7,"faction":"RESISTANCE"},"3aae5a8bb38146f7a4bdbe5ea00e0906.c":{"name":"","level":1,"faction":"ALIENS"},"e1703d6b6d404fbfbba24909e3e5bdc5.c":{"name":"","level":2,"faction":"ALIENS"},"a940982d5fc140e0979a6c9aef84d85a.c":{"name":"","level":4,"faction":"ALIENS"},"9bbb164840a446de9538dc389bdfeffc.c":{"name":"","level":3,"faction":"RESISTANCE"},"c2400255aca94f529bf829345a3a5019.c":{"name":"","level":4,"faction":"RESISTANCE"},"f3acdd25847241379a4c533ed281c9ff.c":{"name":"","level":4,"faction":"ALIENS"},"8e8ef6730b3b4116b19331276de9ecbd.c":{"name":"","level":2,"faction":"RESISTANCE"},"2f87ff871b2b49e595f8d97534b54b74.c":{"name":"","level":3,"faction":"RESISTANCE"},"979ec42242784a67be646384354a9df8.c":{"name":"","level":1,"faction":"RESISTANCE"},"be737576e8724e7ea2f88eea4f119d06.c":{"name":"","level":5,"faction":"RESISTANCE"},"b072bf1fab28438e8fafc7f0306b153b.c":{"name":"","level":6,"faction":"RESISTANCE"},"1ec11c1d051b41fabe030ce40728dfff.c":{"name":"","level":5,"faction":"RESISTANCE"},"c99261233b964c14994f2da6ed23e728.c":{"name":"","level":3,"faction":"ALIENS"},"416bd863a5274efab2081af16ff032b8.c":{"name":"","level":3,"faction":"RESISTANCE"},"93bc3dd0bf204c2bb37013a3eaea5c75.c":{"name":"Takachan","level":4,"faction":"RESISTANCE"},"ec0741f4dc154b3ebdd91d0838dd9d72.c":{"name":"Kakow","level":2,"faction":"RESISTANCE"},"5f23ad3aea8a4eac81b103ece8445f41.c":{"name":"","level":3,"faction":"ALIENS"},"11ff823993ea429c9d4fb678ba8358eb.c":{"name":"","level":4,"faction":"RESISTANCE"},"af68b60bf2574540a2a860744c0d5099.c":{"name":"","level":5,"faction":"RESISTANCE"},"9e9b5fb095894c11bb3a55bbdef869af.c":{"name":"Tiak","level":7,"faction":"RESISTANCE"},"d06a74c4941b40e8849d0e8c652e41ef.c":{"name":"","level":3,"faction":"RESISTANCE"},"d2a721ce9a1c42d99d6a888fcc8acc38.c":{"name":"Steve496","level":5,"faction":"RESISTANCE"},"325c5702b0b049b6b312686cd8f7b935.c":{"name":"","level":1,"faction":"ALIENS"},"7178831f382c45c1959d207f438ffcc1.c":{"name":"","level":1,"faction":"RESISTANCE"},"2dee999291f04d28b9cbe868c22c5d3f.c":{"name":"","level":1,"faction":"ALIENS"},"5bc47c35c9e14191861f8d3f0b968e77.c":{"name":"","level":1,"faction":"ALIENS"},"712f5be957904ebb921f41d2bb5258ed.c":{"name":"","level":3,"faction":"RESISTANCE"},"d4dca72584c24fb1b65ae121fd516aeb.c":{"name":"NeuroticNarwhal","level":4,"faction":"RESISTANCE"},"70e2bd6785d8407b832a077ed2fdc5bf.c":{"name":"","level":7,"faction":"RESISTANCE"},"20f98e7ff89b4914bb705dfc8ea116eb.c":{"name":"eRadiated","level":4,"faction":"RESISTANCE"},"1436296f6b334104b9742037b651c337.c":{"name":"","level":4,"faction":"RESISTANCE"},"77285f723fec4f8db86e29d52dcbf017.c":{"name":"rck","level":7,"faction":"RESISTANCE"},"a79f381ac1a24e2ca43bb2f16c2ce2d6.c":{"name":"","level":2,"faction":"RESISTANCE"},"ffd32b9f7bd3437da39361dbf9e24fc7.c":{"name":"","level":1,"faction":"ALIENS"},"aceb6730d459493abae237be0c136d49.c":{"name":"","level":1,"faction":"ALIENS"},"985ceb85f3a645da84bc9ae05b19c394.c":{"name":"","level":2,"faction":"RESISTANCE"},"998d71fd517a4666972fc0444c892651.c":{"name":"","level":2,"faction":"RESISTANCE"},"c3c70477ce11428eaa4a19fdadc17eb2.c":{"name":"","level":2,"faction":"RESISTANCE"},"8e661e61b00b442da41e1c3504ea9fc9.c":{"name":"","level":2,"faction":"ALIENS"},"7b61d358d7594bc08b9434c9e9b5fe8a.c":{"name":"","level":1,"faction":"RESISTANCE"},"007bc5c105a849958adc8b67459de585.c":{"name":"","level":1,"faction":"ALIENS"},"a508073cc1ca49b6adbf2b0dc474c1ab.c":{"name":"","level":1,"faction":"ALIENS"},"42d50def00b94d47970bd4a18cd2bdc5.c":{"name":"","level":1,"faction":"ALIENS"},"9a22b6eea2dc4eaf9432aa2be273836f.c":{"name":"","level":1,"faction":"ALIENS"},"a3720da7985040919d3b5919807ef26e.c":{"name":"","level":2,"faction":"RESISTANCE"},"460c531b543f42c397c5cde126a38bcf.c":{"name":"","level":8,"faction":"RESISTANCE"},"c06564d58bfb4b01b67964da4e198590.c":{"name":"","level":6,"faction":"RESISTANCE"},"407fe7d1e9a747d4b5353d239038892d.c":{"name":"","level":6,"faction":"RESISTANCE"},"345b755f4aac40cfa77e090e94dd9818.c":{"name":"lingshu","level":4,"faction":"ALIENS"},"0a65441a826c4dd29e895bb9a3d18f4e.c":{"name":"Montserrat","level":7,"faction":"RESISTANCE"},"8291bbf37224470189aa3f3950d2a708.c":{"name":"Ninjai","level":7,"faction":"RESISTANCE"},"3eef7d1bbb114db7b3beceef50c1ce4a.c":{"name":"gosha","level":8,"faction":"RESISTANCE"},"4cdacdfaddc64ffb8e24d7f2f7662145.c":{"name":"","level":7,"faction":"RESISTANCE"},"99641d32f9c44dc68c35c3e0fb7b5776.c":{"name":"","level":3,"faction":"RESISTANCE"},"4a2359c01580430cb595a0ae5659569b.c":{"name":"tspwh","level":7,"faction":"RESISTANCE"},"2223ac94d906446b9cf62cced8f61ae5.c":{"name":"Luffi","level":7,"faction":"RESISTANCE"},"11f31a923ae84c95add6559305628071.c":{"name":"","level":7,"faction":"RESISTANCE"},"c9803ea0c84a41589ef769978e883ba2.c":{"name":"kirkalicious","level":8,"faction":"RESISTANCE"},"47ff29ae195b4e569477089df9784036.c":{"name":"groggygreggy","level":5,"faction":"RESISTANCE"},"e1518877f37448feba249c4ce7e1dbaf.c":{"name":"","level":4,"faction":"ALIENS"},"eca9443b4df44579b7c86b7a4fe157c8.c":{"name":"dalycitysteven","level":5,"faction":"ALIENS"},"ceb6954289e5418fb6571f4f0b82c414.c":{"name":"BlastTyrant","level":6,"faction":"ALIENS"},"d755adbf0aaa4ff38c1b94ee64444ed9.c":{"name":"","level":8,"faction":"RESISTANCE"},"48dbfa6f2b4d49d7943847a3fc378007.c":{"name":"","level":6,"faction":"RESISTANCE"},"69a02df6c4c64ed1a9ebd78704e50bc1.c":{"name":"Kairos","level":6,"faction":"RESISTANCE"},"ff683783943a48829cb9f92dd1d24f28.c":{"name":"","level":4,"faction":"RESISTANCE"},"b7a83de97e564632beee0ab30ba18172.c":{"name":"","level":3,"faction":"ALIENS"},"ec0f5112870246bba9a6a79e58b79871.c":{"name":"","level":3,"faction":"ALIENS"},"11dd79a0c4e24b52931113c16ecb9caa.c":{"name":"","level":6,"faction":"ALIENS"},"bf727ad4e8e74fb695926f27492bd696.c":{"name":"","level":3,"faction":"RESISTANCE"},"32798c34ba4747849d4ed856b0e243d2.c":{"name":"","level":8,"faction":"RESISTANCE"},"26161c9ed5da487d97dd0b0d55853a3d.c":{"name":"","level":5,"faction":"RESISTANCE"},"9a00f357582644a39ba4b85a63e55262.c":{"name":"","level":2,"faction":"RESISTANCE"},"2997af01f1f248189b2b7eb5ae5695f4.c":{"name":"Triple","level":6,"faction":"RESISTANCE"},"5e59e92f98674ad0b85489df1fbd9aef.c":{"name":"athui","level":6,"faction":"ALIENS"},"72fc8b83aeb04fef9f8381d784fc0ca0.c":{"name":"CGnex","level":5,"faction":"ALIENS"},"a1825dfd5d0d43948429dced59c69e73.c":{"name":"thamentor","level":6,"faction":"RESISTANCE"},"f24830af7cf4407085586680f145e550.c":{"name":"","level":6,"faction":"RESISTANCE"},"619d78cb52c146fca419f87b3c3136ff.c":{"name":"","level":7,"faction":"RESISTANCE"},"0fdd42a78d6845f1a52ad8f2120b43c3.c":{"name":"iconoclast","level":3,"faction":"RESISTANCE"},"6eac854301c844f7ab983628c06640b5.c":{"name":"dragon","level":4,"faction":"ALIENS"},"0e346fae2ada47d9b55e2a01ed3c3655.c":{"name":"Epoch","level":6,"faction":"ALIENS"},"9de8e1d18c264524be46e85dad6053c0.c":{"name":"moppet","level":4,"faction":"ALIENS"},"f7df1573d766469189de9709cb8ea2ce.c":{"name":"DestroyRawr","level":7,"faction":"ALIENS"},"eca4c6e1ef3e42bba3d8eb0fa7fc9959.c":{"name":"DextroyRawr","level":8,"faction":"ALIENS"},"3ea45eebfb95408f88b1a7ddd4841031.c":{"name":"thorium","level":5,"faction":"ALIENS"},"2139f981dbb14a5ea6acc645e5f23e64.c":{"name":"WickedSon","level":3,"faction":"ALIENS"},"ef933910728c491b88f96f50577425db.c":{"name":"","level":6,"faction":"ALIENS"},"0d5a6e1bfe184d18960b9b4e7906e33c.c":{"name":"","level":6,"faction":"RESISTANCE"},"7bc85724486e426abfe7e2a87b7138f4.c":{"name":"","level":3,"faction":"RESISTANCE"},"d0ee640bc11d47adbeaca597739913da.c":{"name":"","level":4,"faction":"RESISTANCE"},"9fce7d05a6064d9986470b29e44d0586.c":{"name":"","level":7,"faction":"RESISTANCE"},"140158b919314e0eab54db9eb2d2d9ba.c":{"name":"","level":5,"faction":"ALIENS"},"f713f57130be4e779400b05cead45a75.c":{"name":"Cyclomania","level":7,"faction":"RESISTANCE"},"cee37f3a02fb44be9ebd7c884e110796.c":{"name":"","level":3,"faction":"RESISTANCE"},"d67232408c55463695f098e8280ec042.c":{"name":"mengo76","level":8,"faction":"ALIENS"},"d3b7985d033443e6a742878d4eb0a9da.c":{"name":"","level":6,"faction":"ALIENS"},"929775a9ba1e44e8a03fdafe92894e8a.c":{"name":"WuzzaBear","level":4,"faction":"ALIENS"},"f0b4341372f74138b43ced8a4bf134bc.c":{"name":"badito","level":8,"faction":"ALIENS"},"cb92c46a1c224f8eb1861e9c128ae548.c":{"name":"gromit","level":5,"faction":"ALIENS"},"d52ad2377400452ab47c4a4f03e3ea88.c":{"name":"","level":4,"faction":"RESISTANCE"},"45884d7716074817b2bf355b87ae9357.c":{"name":"","level":3,"faction":"ALIENS"},"7a63677bc9a04004856bdb27c8a40323.c":{"name":"nullstar","level":6,"faction":"ALIENS"},"3e06c1c757304cbd969c4693f1004e90.c":{"name":"","level":2,"faction":"ALIENS"},"0d6ef97d2b3744379e057c992a7179b5.c":{"name":"","level":6,"faction":"RESISTANCE"},"e09b4005fa7344e78e86b00f3e0098ac.c":{"name":"","level":3,"faction":"RESISTANCE"},"e97f9aacb903476b9b77059e0c6fd2ef.c":{"name":"","level":4,"faction":"RESISTANCE"},"12504b78f10041078c9e5a2587d5b0c7.c":{"name":"","level":4,"faction":"ALIENS"},"f339ab7e590d4882963b20ca49e4d3c0.c":{"name":"","level":5,"faction":"RESISTANCE"},"71de71cb74b448caab95067d09258791.c":{"name":"","level":5,"faction":"RESISTANCE"},"094c4e1463704297bc2b0f3ac8b8c956.c":{"name":"","level":3,"faction":"RESISTANCE"},"0e4c6af25dfd44f8a92dfe2c71d5ef9c.c":{"name":"","level":5,"faction":"RESISTANCE"},"b6091079754244fe9159fde96b976c5a.c":{"name":"EpiphanyMachine","level":6,"faction":"RESISTANCE"},"fc0e50b1184c4af9a381250e019bf4ff.c":{"name":"","level":3,"faction":"RESISTANCE"},"cc80e50dc7754d78b21061164a385c92.c":{"name":"devin","level":5,"faction":"RESISTANCE"},"b91f43838bb54a0f8d320c48dd96a09a.c":{"name":"","level":4,"faction":"RESISTANCE"},"8d2fe7e157ca4212a86e213de492a699.c":{"name":"","level":4,"faction":"RESISTANCE"},"a5ef3a21795549a592b908b55e6cf0bf.c":{"name":"ChibiWolfie","level":6,"faction":"RESISTANCE"},"e12c49676ccc43c5aa2bd761cbb772c1.c":{"name":"","level":3,"faction":"ALIENS"},"1190bffe9a3b431a97bf14ec77ad5180.c":{"name":"","level":5,"faction":"ALIENS"},"265bd94105f149c8901dee8a96102c89.c":{"name":"","level":7,"faction":"RESISTANCE"},"83c85020a89c4531934779baa5864752.c":{"name":"","level":1,"faction":"RESISTANCE"},"e07d13f29fcf4d36b01587f5ea003a8b.c":{"name":"Malyse","level":5,"faction":"ALIENS"},"35285eb0aa8345d8a2cc4b4b9b08c6ea.c":{"name":"","level":4,"faction":"ALIENS"},"60439816c34b4b51a61e1b327d41176b.c":{"name":"","level":2,"faction":"RESISTANCE"},"67a2126e1a2a469f87967753e5ca0692.c":{"name":"","level":5,"faction":"RESISTANCE"},"1a87482e6b854204a3122a33b9440922.c":{"name":"","level":4,"faction":"RESISTANCE"},"775ca60f4682410ea08d2989044b674d.c":{"name":"severoon","level":4,"faction":"ALIENS"},"e2570c433f3b42ec943254b8bb1d1592.c":{"name":"","level":5,"faction":"ALIENS"},"077eedbbf6ae4b028c7cf3bbc8548313.c":{"name":"","level":3,"faction":"ALIENS"},"410119a441fd44d38c3cc033ffaed257.c":{"name":"StoneMonk","level":2,"faction":"ALIENS"},"a80f1f86b0234c3f9e17fc9ac058e67b.c":{"name":"","level":6,"faction":"ALIENS"},"2b5c8ac057294af0abf19bcce926a168.c":{"name":"","level":2,"faction":"ALIENS"},"b50ae5826ec345a885166325705091c3.c":{"name":"","level":3,"faction":"RESISTANCE"},"6e0d4fe53bc347428370ccef5ac5a626.c":{"name":"","level":3,"faction":"ALIENS"},"b3a195fe814d4dea90d0f9a349b7ed6e.c":{"name":"","level":3,"faction":"ALIENS"},"dffd485f9f444b17886d3c8e58ae8a07.c":{"name":"","level":4,"faction":"ALIENS"},"69f4d060b7314d3d9ab8848f9ebd467b.c":{"name":"","level":3,"faction":"ALIENS"},"03242e1a25c2437e930a7ef40c8062fa.c":{"name":"","level":6,"faction":"RESISTANCE"},"49dc2861f1cf46fc87c693d22105276b.c":{"name":"","level":3,"faction":"ALIENS"},"1f5758372afa4f5cb67bee8b3097688c.c":{"name":"","level":1,"faction":"ALIENS"},"b9fe6d2bdb6c43038e920eaafa6ba587.c":{"name":"firedrake","level":7,"faction":"ALIENS"},"8344daec76de42d5b0468c9cfebcff75.c":{"name":"sts","level":6,"faction":"ALIENS"},"7aec1dbe60984660b8a7c176629105e5.c":{"name":"cbxzcm","level":6,"faction":"RESISTANCE"},"704e3093a2bf42298d19422449cdde10.c":{"name":"Edgedog","level":4,"faction":"RESISTANCE"},"8c958e803a6942718691a42bb8eb4e2c.c":{"name":"Klingfree","level":5,"faction":"RESISTANCE"},"64aa80cec2fa4eccb09228d771bf018b.c":{"name":"","level":1,"faction":"RESISTANCE"},"2598764b354b4049bf8fa6997bc12640.c":{"name":"Q91Y","level":6,"faction":"ALIENS"},"02cc6066dbcd4cb7af62ea4030835c68.c":{"name":"SkyHawkEcks","level":5,"faction":"ALIENS"},"28c53caba6594ab1881c59125771868b.c":{"name":"monkeyfarm","level":6,"faction":"RESISTANCE"},"bd60157540764e3ea05896be2266a49d.c":{"name":"","level":4,"faction":"RESISTANCE"},"4ffaff2af630477cbe78f575754e0fb4.c":{"name":"TheCurmudgeon","level":7,"faction":"RESISTANCE"},"4eac31948bb243eaa85d357c95dee147.c":{"name":"xyzzy","level":7,"faction":"RESISTANCE"},"f40ee99fe2884da6a17d15974eeef524.c":{"name":"","level":5,"faction":"RESISTANCE"},"b957d5f5a5944aef8ca4cd76523022ce.c":{"name":"ronin","level":5,"faction":"ALIENS"},"09cee2784dbe446783781a19ce5e32eb.c":{"name":"sleepy","level":7,"faction":"RESISTANCE"},"da3cc45364484a199f6d6f8c68c330fd.c":{"name":"","level":4,"faction":"RESISTANCE"},"d3c86242311e404295df930c207ecc18.c":{"name":"","level":2,"faction":"RESISTANCE"},"ac8b5ca63c96455890d0717fe42c0654.c":{"name":"","level":5,"faction":"RESISTANCE"},"d47a09600b2c4c809411a17787d3b2ff.c":{"name":"","level":2,"faction":"RESISTANCE"},"238edc79519a41b79aeee7efde3dc817.c":{"name":"","level":6,"faction":"RESISTANCE"},"146224d3054f487c8e7c6dfe7297eb6e.c":{"name":"","level":3,"faction":"ALIENS"},"9a01c82d1d9447dda247fab824837995.c":{"name":"","level":5,"faction":"RESISTANCE"},"179693670e17421ebaa7751d2fdca0b4.c":{"name":"Jubal","level":5,"faction":"RESISTANCE"},"1d37ea76405d4d63bb4703791e2ac584.c":{"name":"chalex","level":4,"faction":"ALIENS"},"6efc7ef46b6242f49895f5c2c5d48b17.c":{"name":"","level":6,"faction":"RESISTANCE"},"d758ee87259e4dc1b202d608eef18786.c":{"name":"robeau","level":7,"faction":"ALIENS"},"9b1d99f1f03942c1ac3064078afeb9f7.c":{"name":"","level":4,"faction":"RESISTANCE"},"fccce7bd5f6648588b5576b4bdfc0c14.c":{"name":"","level":6,"faction":"RESISTANCE"},"335f6eb3df5e4d3eacce473600a6c565.c":{"name":"owenb","level":5,"faction":"RESISTANCE"},"9843985922d342e282676ee4c721c9ce.c":{"name":"","level":3,"faction":"RESISTANCE"},"895ccecca50b4939b08d6368bacf5d88.c":{"name":"","level":1,"faction":"ALIENS"},"b38d9a32bf124d22af0c1d59e7609ffb.c":{"name":"","level":3,"faction":"RESISTANCE"},"1403d2afca994d0095347f9758122bfb.c":{"name":"jowens","level":6,"faction":"ALIENS"},"72e96b6b350644af8c4a6cfa302ded82.c":{"name":"","level":2,"faction":"ALIENS"},"6668b87d267547cb9b62bd540c5d124f.c":{"name":"","level":4,"faction":"ALIENS"},"929180bc23ef4a6aa1f8cee3ef531159.c":{"name":"","level":6,"faction":"ALIENS"},"d267989962ca467a965fffb184dbc0a6.c":{"name":"","level":2,"faction":"ALIENS"},"82adb6fea5a447eb98ebf16fe997dca8.c":{"name":"Moritz","level":8,"faction":"ALIENS"},"a7b047391e5645d3a21db6335b6a477a.c":{"name":"","level":2,"faction":"RESISTANCE"},"92bea4d5e9684a79815900221b507b9a.c":{"name":"","level":4,"faction":"RESISTANCE"},"886b63fc4652447db11ce34b254d43e5.c":{"name":"","level":3,"faction":"RESISTANCE"},"7d4479f8ad2e438893e4de1c14371a89.c":{"name":"","level":4,"faction":"ALIENS"},"52df11947c0947c794ae53fcc24a5390.c":{"name":"","level":4,"faction":"RESISTANCE"},"5285aa0b79f24f54aa2d775dc07441fd.c":{"name":"","level":2,"faction":"RESISTANCE"},"67dfe8649f3f4c939e73ac9069106f86.c":{"name":"","level":2,"faction":"ALIENS"},"e460fadba42c4ba7ab59b677069c73d8.c":{"name":"tanzanite","level":8,"faction":"RESISTANCE"},"bf4ea63d6e944007a660fc46e540ef95.c":{"name":"","level":4,"faction":"RESISTANCE"},"ec1ef7c892c34e6caea71b1428a225b6.c":{"name":"","level":6,"faction":"ALIENS"},"38f225710d6545298af060ea44d30698.c":{"name":"","level":4,"faction":"ALIENS"},"096a477bcb914387a352e7ff8d83ef4f.c":{"name":"","level":3,"faction":"RESISTANCE"},"04a6ab5519e34c7181fc9e3f2af04e72.c":{"name":"polarbear88","level":2,"faction":"ALIENS"},"057814ddbef74d29844fb1ecb8b986d8.c":{"name":"","level":1,"faction":"RESISTANCE"},"852c210bc0ae44ee848931f3ae021ebe.c":{"name":"","level":1,"faction":"RESISTANCE"},"1ed9f2ab0179461c9220831b96ada534.c":{"name":"","level":3,"faction":"RESISTANCE"},"e0c35754ae4d4f9192622a42135bb5f0.c":{"name":"","level":1,"faction":"RESISTANCE"},"659bed7d0b4c4447846e985640a8b339.c":{"name":"","level":1,"faction":"RESISTANCE"},"0c1958a4d58c4f57abe91a2cb88ec054.c":{"name":"","level":7,"faction":"RESISTANCE"},"7148aeb8fc274e0eb263d7f1ca8d549c.c":{"name":"","level":2,"faction":"RESISTANCE"},"aa1dd289adaa4778af0cc967555ea8cd.c":{"name":"G34BDBGK","level":3,"faction":"RESISTANCE"},"a5315d4563dc4ab3a3e68084c7a60c55.c":{"name":"","level":3,"faction":"RESISTANCE"},"9c9a4b4945b04b6da8e9b2f323943756.c":{"name":"","level":8,"faction":"ALIENS"},"9fc55eee6b7b48a183330c876ce0a755.c":{"name":"","level":3,"faction":"RESISTANCE"},"416f53a3809d4b51970f8b78fccd3f65.c":{"name":"","level":1,"faction":"ALIENS"},"bc7c529eda7040619d42781a4597744e.c":{"name":"","level":1,"faction":"ALIENS"},"dd53118494ba42f8befeebb02416a5bf.c":{"name":"","level":1,"faction":"RESISTANCE"},"008de32fbf374b609367c843e0ea4538.c":{"name":"","level":4,"faction":"RESISTANCE"},"75ef6031f61a408e8f49334c29f97f79.c":{"name":"","level":5,"faction":"RESISTANCE"},"41d973376f6640b49c16a89851e01107.c":{"name":"","level":1,"faction":"RESISTANCE"},"7cf9820292fd4bc6a9cc08dc06d79ceb.c":{"name":"","level":2,"faction":"ALIENS"},"c3dd7375ab564811a7c8422ad8822ee7.c":{"name":"","level":1,"faction":"RESISTANCE"},"a633e158975e4a0aad21bc650dc0d219.c":{"name":"","level":2,"faction":"ALIENS"},"1c97cc1896ee429e91c5cb4750c3e427.c":{"name":"","level":2,"faction":"RESISTANCE"},"27a4b2af6a5749809b806a8c60e7f736.c":{"name":"Jdban","level":7,"faction":"RESISTANCE"},"9f93ea623a2a46088978ea7b419282ba.c":{"name":"","level":5,"faction":"ALIENS"},"151e7d80336f44aaa9dfff73b73d7d5c.c":{"name":"","level":4,"faction":"ALIENS"},"93939829477745deb2cf5cabf9f44d48.c":{"name":"Vanarakama","level":3,"faction":"ALIENS"},"8ea1dbf67b1947c8b148938c17aee618.c":{"name":"","level":3,"faction":"ALIENS"},"08e6df0f4ad64e6c870fe3b0ba7580ae.c":{"name":"","level":3,"faction":"RESISTANCE"},"10dd10f0255c4ee59de3379dfc89d1d0.c":{"name":"","level":2,"faction":"RESISTANCE"},"a5a3d5986eb949bfab0c4fbc725d80e6.c":{"name":"","level":1,"faction":"ALIENS"},"695212130a71489f9e859d88aa02a443.c":{"name":"Bellemorte","level":4,"faction":"ALIENS"},"f8dce868bbcf4397b57de78a1f147f17.c":{"name":"ramasan","level":3,"faction":"ALIENS"},"fc2282cbe5bb40d9a23e759be3fc02df.c":{"name":"","level":5,"faction":"RESISTANCE"},"130e83b80a9b4a7aba229aee216974fb.c":{"name":"cryptanalyst","level":4,"faction":"RESISTANCE"},"679175a3809644fea821de92ae9a72cb.c":{"name":"","level":4,"faction":"ALIENS"},"bd1b08e1b01a4b0bbae5c8faa205aee5.c":{"name":"","level":4,"faction":"ALIENS"},"3cc6ed2349ab4d5db277b6a3d55d43c1.c":{"name":"","level":4,"faction":"ALIENS"},"f95f7753f7e444b7908d5c63c3b2eabd.c":{"name":"","level":2,"faction":"ALIENS"},"4707f6c711304ccea595090d49bd88ff.c":{"name":"hyperlinks","level":4,"faction":"ALIENS"},"b97bc860347144a7b81e9171a55303ea.c":{"name":"","level":4,"faction":"RESISTANCE"},"c1fd622babf54a75b43e2f15ef32618d.c":{"name":"","level":6,"faction":"ALIENS"},"0c2706e10e464699ad6343256234fb56.c":{"name":"Ganelon22","level":5,"faction":"RESISTANCE"},"d8977efe02104144b797b9db6d9555ac.c":{"name":"","level":4,"faction":"RESISTANCE"},"2f2d144684d649798db0517f065cd49c.c":{"name":"","level":2,"faction":"RESISTANCE"},"f35d3331d3c64d3a9e859f26e56ead1b.c":{"name":"","level":4,"faction":"RESISTANCE"},"52d8d51ba03149c3933f320904ab0716.c":{"name":"","level":5,"faction":"ALIENS"},"048b88f9344b4b2c871e20dcd7ff8ef3.c":{"name":"","level":6,"faction":"RESISTANCE"},"389c9e6a993b42388394e1e3c631df8b.c":{"name":"","level":1,"faction":"RESISTANCE"},"854998cf296945739920795e6ea461ea.c":{"name":"","level":6,"faction":"RESISTANCE"},"f8a9b133610b4c73804e6a5b3469910f.c":{"name":"","level":3,"faction":"RESISTANCE"},"cd3391b00cc84b82a04745ae5d0c05eb.c":{"name":"","level":4,"faction":"ALIENS"},"31d0fdaa4daa425baa2babee12114f65.c":{"name":"","level":3,"faction":"RESISTANCE"},"a9a70de32b474c4a94469f557954125c.c":{"name":"","level":8,"faction":"ALIENS"},"f2431ebe4c404026934caa4c6497e670.c":{"name":"","level":5,"faction":"RESISTANCE"},"bc44cbc15817456dae34c92ddd31ffaf.c":{"name":"","level":3,"faction":"ALIENS"},"938b1ed2f63f41d39a24b0c605ac371a.c":{"name":"","level":6,"faction":"ALIENS"},"5f992e5e5f954e728a6e8a7316a49374.c":{"name":"","level":1,"faction":"ALIENS"},"2f55fd37098247c08c1d2694dd69fe38.c":{"name":"","level":3,"faction":"RESISTANCE"},"475fb451100044658ce99b33c40f5a8a.c":{"name":"","level":3,"faction":"ALIENS"},"efd9dc660d1048418deae71203020adf.c":{"name":"","level":2,"faction":"ALIENS"},"fdeba1c372024f34b32ba4a3ee1bb04d.c":{"name":"","level":1,"faction":"ALIENS"},"2e31af11698c499782fdc46d8a1de81e.c":{"name":"","level":1,"faction":"ALIENS"},"60ab5bae23824c369ce4b0598eb7ff67.c":{"name":"","level":1,"faction":"ALIENS"},"7d0448f01bbf4cf496d266e03ed33ce0.c":{"name":"","level":1,"faction":"ALIENS"},"30fc695795fb46d5bbbb1db7a078ec54.c":{"name":"","level":1,"faction":"ALIENS"},"6c973be080ad4ef7a77e5c06226bdc8f.c":{"name":"","level":2,"faction":"RESISTANCE"},"1c26e0999c3f4a96bc1e20fe5f74c56c.c":{"name":"","level":2,"faction":"RESISTANCE"},"73d3228a5ab2437b909604e132b9c621.c":{"name":"","level":6,"faction":"RESISTANCE"},"219862422e30401fb51e3c4a648e013a.c":{"name":"Soulglo","level":6,"faction":"RESISTANCE"},"c5537a8a06e840a1b068bb2fb03d95c3.c":{"name":"","level":4,"faction":"RESISTANCE"},"d3d0f4f7e8084ff38a8b012f2248ccf1.c":{"name":"","level":4,"faction":"RESISTANCE"},"4aaf39bafbe0458b8aa4a3d125898865.c":{"name":"izzador","level":5,"faction":"RESISTANCE"},"289c21899d564bd08a3b1c7506345b12.c":{"name":"","level":6,"faction":"RESISTANCE"},"4cc1f9be50de4287856d770d06432342.c":{"name":"Moschops","level":7,"faction":"RESISTANCE"},"ad72cee95ca8400c91144eba34647e86.c":{"name":"","level":2,"faction":"RESISTANCE"},"b26eae1f9dcd430c9a76df2feccbdc69.c":{"name":"","level":7,"faction":"ALIENS"},"c6f77c5badb44c88aafa953501258caa.c":{"name":"","level":1,"faction":"ALIENS"},"61a83a329cac43bc8399ea3db65e4393.c":{"name":"","level":3,"faction":"ALIENS"},"17de098a98f94f1aa7cadf2ae85f7625.c":{"name":"","level":7,"faction":"ALIENS"},"fd6c3c0fa6654d3bb2a09a1dcf471999.c":{"name":"","level":5,"faction":"RESISTANCE"},"dd9f561e15174a968ee94c13df517b44.c":{"name":"wrx4me","level":4,"faction":"ALIENS"},"e0902ee07bb245288810820eee083ec6.c":{"name":"mistermocha","level":4,"faction":"RESISTANCE"},"be2a00f94fa7438fbe389fe63f633ebb.c":{"name":"","level":5,"faction":"RESISTANCE"},"c5dda703a00c4900a10d75e05a90ea51.c":{"name":"","level":3,"faction":"ALIENS"},"f00d25a998ff41e89e14cc537e9cae23.c":{"name":"","level":4,"faction":"RESISTANCE"},"cfddfa929c1d439596aa3d003e730298.c":{"name":"","level":5,"faction":"ALIENS"},"66824e0e55e94f0f893a1aa2737674b8.c":{"name":"","level":4,"faction":"ALIENS"},"61bb50e970c14d68a37904bed443d264.c":{"name":"","level":1,"faction":"ALIENS"},"fab866aaf609430c8cd116d72c5ca86c.c":{"name":"","level":3,"faction":"RESISTANCE"},"a947e0e901f04fdfa36bccc234e958fd.c":{"name":"","level":4,"faction":"RESISTANCE"},"f7704042bc824322bb3ad8086751ccce.c":{"name":"","level":5,"faction":"ALIENS"},"c8dcf073494f45eea20d7650c13440f4.c":{"name":"","level":2,"faction":"RESISTANCE"},"bf2165f136c34be6bfb6aedf1a1b06ca.c":{"name":"","level":2,"faction":"RESISTANCE"},"3ee965c609ec4cecbf2eb080cf13d027.c":{"name":"","level":3,"faction":"ALIENS"},"09e9e36e390d495386dcffc8faa79259.c":{"name":"","level":2,"faction":"RESISTANCE"},"8d1e0155c92345e3a7513c2a85521c46.c":{"name":"","level":5,"faction":"ALIENS"},"a5f80fe8ba7847e897d76759cd519d59.c":{"name":"","level":4,"faction":"ALIENS"},"65955046f52748318842da91da459c41.c":{"name":"","level":4,"faction":"ALIENS"},"a256eb466ac34f05bc854e6badecc5b6.c":{"name":"","level":1,"faction":"ALIENS"},"5462b0eace264f7d92896e3b2825c7f2.c":{"name":"shewfig","level":4,"faction":"ALIENS"},"f2fc1b95cf0e438b87e5f0457dc64685.c":{"name":"","level":4,"faction":"ALIENS"},"0d84597762ad434c853a907281099aed.c":{"name":"","level":2,"faction":"ALIENS"},"dd7b787fdee34869b2495902cb058552.c":{"name":"catdirt","level":6,"faction":"ALIENS"},"8faab76165ba4c788cbb5410db6f6c4c.c":{"name":"","level":3,"faction":"RESISTANCE"},"7b97ec774b724fbaa2a3c7448c8c4ec7.c":{"name":"","level":3,"faction":"RESISTANCE"},"845975b056dd4babadc25110764592d0.c":{"name":"MrViper","level":5,"faction":"ALIENS"},"d35252fda3c144568d841677b15b720e.c":{"name":"","level":3,"faction":"RESISTANCE"},"f844206e754947dcb1bd183af131b85c.c":{"name":"sparky","level":4,"faction":"RESISTANCE"},"571c62c3ff044f81bf125d24df8c4022.c":{"name":"","level":4,"faction":"RESISTANCE"},"f82b6f68031548e8817c2cb354a7d438.c":{"name":"","level":5,"faction":"ALIENS"},"8889d7f4b1704581b273655d72cf7d06.c":{"name":"","level":5,"faction":"RESISTANCE"},"3225da739b344bca8c3a3772507b21be.c":{"name":"","level":3,"faction":"RESISTANCE"},"d1c19df5bf544ece9b6d4ac560474dd8.c":{"name":"","level":3,"faction":"RESISTANCE"},"804d8a2dacdf4c44b7a4cfd43e98543b.c":{"name":"bargle","level":2,"faction":"RESISTANCE"},"0d4e034d17764e6cb6561e3fefcc4ffe.c":{"name":"","level":2,"faction":"ALIENS"},"1bbe76cc786a44af86c361794a06d72b.c":{"name":"","level":3,"faction":"ALIENS"},"ba1b29aee0dc46a28a09b7ccb343250b.c":{"name":"","level":1,"faction":"RESISTANCE"},"ca0bc1b3820b4e2597c7abdb5c6a9f7f.c":{"name":"","level":4,"faction":"ALIENS"},"71cd74d6ccb1480e8e47bbc16a9ae4ca.c":{"name":"","level":6,"faction":"ALIENS"},"5f4a62a3002240df9d995c662b653dff.c":{"name":"","level":3,"faction":"RESISTANCE"},"4d9aadd50fff4c599f17f70999ec12bc.c":{"name":"","level":4,"faction":"RESISTANCE"},"efdbf5256e824bc0a1c395d0d026b132.c":{"name":"","level":1,"faction":"RESISTANCE"},"0fa011507e164954b0bf1bec32d5b1aa.c":{"name":"MisterP","level":2,"faction":"RESISTANCE"},"055ce705a8f04263a9c217fe3b1901f8.c":{"name":"shadwfax","level":1,"faction":"RESISTANCE"},"fe9bcd8e259d4afb812b64d3e672794c.c":{"name":"Ariock","level":8,"faction":"ALIENS"},"e37466fd5ffb434385a8e79ff2d26b8d.c":{"name":"majestic12","level":8,"faction":"ALIENS"},"4505d59deaaf49dbb01413d8299378d1.c":{"name":"urthling","level":6,"faction":"RESISTANCE"},"cd6bdc6c7a004b1d92113ca289f8bdf2.c":{"name":"","level":2,"faction":"RESISTANCE"},"f41509894f184329a4ee817c2e391c64.c":{"name":"","level":7,"faction":"ALIENS"},"197436ef03c149669b0ea342d40d5f85.c":{"name":"","level":6,"faction":"ALIENS"},"dedd1064323f44f2bff4798c42cf7b32.c":{"name":"mistermister","level":5,"faction":"ALIENS"},"ebbba2b780bf43b680f416ffc8ae0ec3.c":{"name":"","level":3,"faction":"ALIENS"},"91fa1787397546e19a271b6750c782d1.c":{"name":"sherkan","level":5,"faction":"ALIENS"},"ddd7d62b946841f1aafee622e9d5ac3c.c":{"name":"P1X3L","level":8,"faction":"ALIENS"},"8c4c2cd8c4c64d1085ac64f3bfc2fca2.c":{"name":"","level":4,"faction":"RESISTANCE"},"65b16a7a787640a590d08022e9e821f4.c":{"name":"","level":3,"faction":"ALIENS"},"b325effb467840a682fb3c68caa102c1.c":{"name":"","level":6,"faction":"RESISTANCE"},"3acf3fb5fccf4132875f6a74df1810c1.c":{"name":"","level":4,"faction":"ALIENS"},"15c5b99d9ce747c183517ba5a3384b18.c":{"name":"iant","level":5,"faction":"ALIENS"},"e32a24e4989d4221ad5a3ddf665b926b.c":{"name":"rxuor","level":4,"faction":"ALIENS"},"8c4c7ec2692c4ac3adcea686749cb220.c":{"name":"chaz","level":2,"faction":"RESISTANCE"},"a11043a0870b4c46b8a85b6eb94e329d.c":{"name":"rjhintz","level":5,"faction":"RESISTANCE"},"9bcc819368fe4a5b9db04fe915bcd26e.c":{"name":"wildflower","level":6,"faction":"RESISTANCE"},"65240904584f457382ba55a9fa144c18.c":{"name":"","level":5,"faction":"RESISTANCE"},"532c5d8fbc4942889bb1466a1afe7803.c":{"name":"","level":5,"faction":"RESISTANCE"},"4dbca762ee2f45e78e29ac599e2cb8d4.c":{"name":"","level":4,"faction":"RESISTANCE"},"be914319969a4a87bdc553a890c4e6ff.c":{"name":"","level":4,"faction":"ALIENS"},"c9bb0c94bd144bf483d2cc22b884e877.c":{"name":"","level":4,"faction":"RESISTANCE"},"69013249bcaa493ca3518e11d7212c8c.c":{"name":"Blackfoot","level":4,"faction":"RESISTANCE"},"531b119e298141db8dacdec5877c1642.c":{"name":"SergioFeria","level":3,"faction":"ALIENS"},"e185a3c32a15450596039c848720202e.c":{"name":"","level":3,"faction":"ALIENS"},"ab03aa8a47cb4722b98b4fc84e7c614f.c":{"name":"noexit","level":6,"faction":"RESISTANCE"},"5a6647c4ca8848d383e2e5e62e221e5d.c":{"name":"","level":6,"faction":"ALIENS"},"4fb9080a729f47578f3a1f658662b250.c":{"name":"","level":5,"faction":"RESISTANCE"},"1c44442cbb814bdfbfe4822820cd59ba.c":{"name":"","level":3,"faction":"RESISTANCE"},"063f0d119d8646d48edc45ffa0c3dc78.c":{"name":"","level":2,"faction":"RESISTANCE"},"18221cd9775349ebb82ddad3f8062f43.c":{"name":"","level":2,"faction":"RESISTANCE"},"57113d5161ea44ebad81288c5857c13b.c":{"name":"","level":2,"faction":"ALIENS"},"fda1acbc703342d9bce333cd8de67833.c":{"name":"","level":3,"faction":"RESISTANCE"},"9390f86c9bbd4c42b206eff09a1a5926.c":{"name":"","level":1,"faction":"ALIENS"},"17c346582ea646278f1785004f898d36.c":{"name":"","level":3,"faction":"ALIENS"},"a86d2c63029244e4a177a1beca808587.c":{"name":"","level":4,"faction":"ALIENS"},"36ca6a2bef0046139a95c94e40161d32.c":{"name":"Sun","level":8,"faction":"ALIENS"},"b80f19cb6f4640fc92067b5e3f638eca.c":{"name":"","level":4,"faction":"RESISTANCE"},"c60e59e454c344d8819a0a8b5a913fc7.c":{"name":"EC77","level":6,"faction":"RESISTANCE"},"54dc9c1c7e7a44a780554eddbfeae1f8.c":{"name":"","level":7,"faction":"ALIENS"},"eee6e768493145d8b8a0629ae594fbe3.c":{"name":"","level":2,"faction":"RESISTANCE"},"35b0ad5564cc4029ac7ea4fdae14659c.c":{"name":"JKim","level":4,"faction":"RESISTANCE"},"0c1f52c353394c49b704811872fd1414.c":{"name":"","level":4,"faction":"RESISTANCE"},"b6dbee9e11684319a7bea2d79131c85c.c":{"name":"","level":5,"faction":"ALIENS"},"25e24f3dc274471586a7b2bcab89f7d5.c":{"name":"","level":3,"faction":"RESISTANCE"},"b3ddf94629d24c35a94cb248ebd4cf46.c":{"name":"Mathew","level":5,"faction":"ALIENS"},"bfda3774182d42899e40e330d7dc2850.c":{"name":"semar","level":6,"faction":"ALIENS"},"c90aa9c4478e429990f26a1462e00114.c":{"name":"gl0ver","level":5,"faction":"RESISTANCE"},"6b7f601837cd471c97b56e695de35f00.c":{"name":"","level":3,"faction":"RESISTANCE"},"4d51665aea1641abaaaa03a393f7f399.c":{"name":"","level":3,"faction":"RESISTANCE"},"0560dfe7afde4944bd1b48e0e3e06aee.c":{"name":"","level":4,"faction":"ALIENS"},"e2c81c786fd745dab56c8afd9d23f050.c":{"name":"","level":3,"faction":"ALIENS"},"f03fb3641bda45729cabbd620d5c04ee.c":{"name":"","level":5,"faction":"RESISTANCE"},"69e2d8a8287e4b8a953c7d3fbf9936a7.c":{"name":"","level":2,"faction":"ALIENS"},"656283580bae46fab68bb8e83ec7446c.c":{"name":"","level":3,"faction":"RESISTANCE"},"b96e90f096d9403cb0e1d5c93db0d918.c":{"name":"","level":3,"faction":"RESISTANCE"},"51943cc710b240d1ac67178a7637312b.c":{"name":"","level":1,"faction":"RESISTANCE"},"6e0b49b5088f44dfbe2bc3c2a12facfc.c":{"name":"","level":3,"faction":"ALIENS"},"8116888f2666495d92f581ac7ae38638.c":{"name":"","level":5,"faction":"RESISTANCE"},"a7661d5a509f41acbc62554d01bea9a9.c":{"name":"","level":4,"faction":"RESISTANCE"},"526024bfe46c49dda2eb63f4ebb34d4c.c":{"name":"","level":6,"faction":"ALIENS"},"ef68fc9c61ed4ed39cf3f5550104cbf5.c":{"name":"","level":1,"faction":"RESISTANCE"},"39c4997ed5654adab8c71f4a25514eb5.c":{"name":"","level":4,"faction":"ALIENS"},"f0952621281e457aba1dd336b9823fb0.c":{"name":"","level":3,"faction":"RESISTANCE"},"5e4e994fd8434a67bd33eb293fe5e9f8.c":{"name":"","level":5,"faction":"RESISTANCE"},"9b5134f489e045dbabc88985158a5da8.c":{"name":"","level":1,"faction":"RESISTANCE"},"201fdabd43b54c5797e50dcbddca1d13.c":{"name":"","level":4,"faction":"ALIENS"},"0bc6df43523f47b88ee3ed149a4b01ca.c":{"name":"sepulworld","level":5,"faction":"RESISTANCE"},"7b6dea34e25b4d52a02d3dc993d487b7.c":{"name":"","level":5,"faction":"RESISTANCE"},"0442cf0a289e4a14a38aeec8e1d67dd5.c":{"name":"","level":5,"faction":"ALIENS"},"b11d637bcab64afab0e860dea5b7e507.c":{"name":"","level":6,"faction":"ALIENS"},"de646af93f3f40699c687b55aea5fe2d.c":{"name":"","level":3,"faction":"ALIENS"},"740ead21848345fba9adf52cb23357ba.c":{"name":"","level":4,"faction":"ALIENS"},"3b25cf3f531c4166b834bc8f31a121f3.c":{"name":"","level":1,"faction":"RESISTANCE"},"8ad44c9643fd42c28256cd46380b9deb.c":{"name":"","level":4,"faction":"ALIENS"},"fe7843a6a2e8449ab3075d5da501ce01.c":{"name":"","level":4,"faction":"ALIENS"},"e0b57a524c974313b100423b2ddcfed8.c":{"name":"","level":1,"faction":"ALIENS"},"85204ed625474b379277052fe250cbf7.c":{"name":"","level":1,"faction":"RESISTANCE"},"0a7c8d03af26485287a5258fa1d793bc.c":{"name":"","level":4,"faction":"ALIENS"},"b47c99ca57104b608aee0760ff532f2b.c":{"name":"","level":3,"faction":"RESISTANCE"},"a282c71acfed4e4dbdf2e6003cdbcc8c.c":{"name":"","level":3,"faction":"RESISTANCE"},"502181bb7caf4bdb8bb6f301c4f605e9.c":{"name":"","level":1,"faction":"ALIENS"},"359959c3d43746e7a3267eaae53f74a2.c":{"name":"","level":5,"faction":"ALIENS"},"8f26a8f40e634552bef9a9fcc4d14f74.c":{"name":"","level":2,"faction":"RESISTANCE"},"9843a20ecefa49a59ef5bb59d55c52f2.c":{"name":"","level":1,"faction":"RESISTANCE"},"79df0b9d0fa5466bbad45c2e66f7476f.c":{"name":"","level":6,"faction":"RESISTANCE"},"4f3da6c994564256a11b720de7f6aca2.c":{"name":"","level":4,"faction":"RESISTANCE"},"e8354c18781447d48e7dfdbd8a74dae5.c":{"name":"","level":1,"faction":"RESISTANCE"},"68a1d929998f43b29a37ff9288e39828.c":{"name":"","level":1,"faction":"RESISTANCE"},"f907f0fcea3f40a282a1d8c091e29f18.c":{"name":"","level":2,"faction":"ALIENS"},"7600aa4328fd4605a20ce49ed236defb.c":{"name":"","level":1,"faction":"RESISTANCE"},"c2ae5dad793740a4853c807e63c79367.c":{"name":"","level":3,"faction":"ALIENS"},"2e0bc582a77645e086343393a937c265.c":{"name":"","level":3,"faction":"RESISTANCE"},"c5f5392a40e54c7f8234973a156c8d75.c":{"name":"","level":6,"faction":"ALIENS"},"e400bb384b6142c38d7af9391aa6d8b4.c":{"name":"","level":3,"faction":"RESISTANCE"},"00fd3315241e48f6bea83c78e64133bf.c":{"name":"","level":3,"faction":"RESISTANCE"},"35555deb685c455aaa7c5d8ee1ab4026.c":{"name":"","level":3,"faction":"RESISTANCE"},"e7fe7becc8ae494dac352900ec066b6f.c":{"name":"","level":5,"faction":"RESISTANCE"},"3d0612d6f8e347e1b33cb5438655f81e.c":{"name":"","level":3,"faction":"RESISTANCE"},"b2b38cbd558448ceaf945a4a6d4d568a.c":{"name":"","level":2,"faction":"RESISTANCE"},"d45521a9675244f895dda80c9512e9c5.c":{"name":"","level":3,"faction":"RESISTANCE"},"89e52722efe44ca19746cd7a4723eab0.c":{"name":"","level":1,"faction":"RESISTANCE"},"d72337ae8dea4511937e8660141a70e6.c":{"name":"","level":2,"faction":"RESISTANCE"},"385cd439088c4beebaeb9c90fd1aa14c.c":{"name":"","level":1,"faction":"ALIENS"},"f6414b459dfc46acabcbb416de8d69da.c":{"name":"","level":2,"faction":"RESISTANCE"},"4b9afe3e048b45148b4f0f9b062a1530.c":{"name":"","level":2,"faction":"RESISTANCE"},"0afb187e29bf49ceba913a1694f9adcc.c":{"name":"","level":5,"faction":"ALIENS"},"f8c5cfb8e0204e1c982936fd76ac4944.c":{"name":"","level":1,"faction":"ALIENS"},"a32f5f20320d4935938c1eaba087584a.c":{"name":"","level":1,"faction":"RESISTANCE"},"91facae30baf47958ad2c673eec9e983.c":{"name":"","level":1,"faction":"RESISTANCE"},"192cac144a95434982497386f0c45337.c":{"name":"","level":3,"faction":"RESISTANCE"},"573956055348454e8f182ead653f7d97.c":{"name":"","level":2,"faction":"RESISTANCE"},"2e448e586cb046f795b01d7e8582ce8c.c":{"name":"","level":1,"faction":"RESISTANCE"},"11b28f92281c433e99d424c27d344157.c":{"name":"","level":4,"faction":"ALIENS"},"85bafb38de0848099bd82eac6f52f831.c":{"name":"","level":3,"faction":"RESISTANCE"},"296a4064f58b488396c03d3808e2e67a.c":{"name":"","level":4,"faction":"RESISTANCE"},"df8aa3ffc03742888ce5a4d6092f69de.c":{"name":"","level":6,"faction":"RESISTANCE"},"387e29b6894e40cf8c635a1de993ffb1.c":{"name":"","level":2,"faction":"ALIENS"},"5f19c3e28ca64115ade534bda605b047.c":{"name":"","level":4,"faction":"ALIENS"},"3ff8f67e88614300a56f809464a49f78.c":{"name":"","level":2,"faction":"ALIENS"},"d69455ba82f64d4186c8c88583f7603a.c":{"name":"","level":6,"faction":"RESISTANCE"},"ebd6b0ca7bd043c6b1f841099aae6aef.c":{"name":"","level":5,"faction":"ALIENS"},"07b26a752ba2435f941a87a4ba387040.c":{"name":"","level":5,"faction":"ALIENS"},"bc4cf6055d6e4577aaae10e42ac648e6.c":{"name":"","level":3,"faction":"RESISTANCE"},"4fe469b456c340a18340418062d0524d.c":{"name":"","level":5,"faction":"ALIENS"},"3c3a73bee5434187a96ebc1339a17fd2.c":{"name":"","level":1,"faction":"ALIENS"},"00a3c75ad9e24e2a8a73f199ac852d60.c":{"name":"","level":3,"faction":"RESISTANCE"},"f19882e240b74f9480443a51b5c5290b.c":{"name":"","level":2,"faction":"ALIENS"},"95c6a18234b748b7b07a0fa9c746101d.c":{"name":"","level":1,"faction":"ALIENS"},"8adf7e5f6c394112aad3d82c545fa1b2.c":{"name":"","level":2,"faction":"RESISTANCE"},"a207e0c1620a45e1896fe4060912431e.c":{"name":"","level":5,"faction":"RESISTANCE"},"3792473d38264e5f8dde99a646a4b1df.c":{"name":"","level":4,"faction":"RESISTANCE"},"3de5f2db05ba473f9047eaab50de3fa5.c":{"name":"","level":7,"faction":"RESISTANCE"},"b918e1c769ab4a4a8eba091971916980.c":{"name":"","level":4,"faction":"ALIENS"},"c2c08f8d88e443db84cb169531e87bb4.c":{"name":"","level":3,"faction":"ALIENS"},"86eb8836ea3b4ac6bed61fd2e97596ea.c":{"name":"","level":3,"faction":"RESISTANCE"},"03d43dcd9dba48b5ac7f6606facb8140.c":{"name":"","level":3,"faction":"RESISTANCE"},"3a508c7a583c4b94b0278b6505924146.c":{"name":"","level":6,"faction":"ALIENS"},"b0ae88b099a245b08bfb3f6c7e3d1b76.c":{"name":"wenzor","level":1,"faction":"ALIENS"},"fcb4e1d1967c4c13aa5b98acff5c7f70.c":{"name":"","level":4,"faction":"ALIENS"}}

//collect all relevant portal info into a global variable for use when creating the table.
function CollectPortalInfo(a)
{
  if (("result" in a))
  {
    if ("map" in a.result)
    {
      for (var idThing in a.result.map)
      {
        var idThing = a.result.map[idThing]
        if ("gameEntities" in idThing)
        {
          for (var entity in idThing.gameEntities)
          {
            var entity = idThing.gameEntities[entity];
            var guid = entity[0]
            var properties = entity[2]
            if ("portalV2" in properties)
            {
              if (typeof portals[guid] == 'undefined')
              {
                portals[guid] = {"fields": 0, "MU": 0}
              }
              else
              {
                portals[guid] = {"fields": portals[guid].fields, "MU": portals[guid].MU}
              }
              portals[guid].faction = properties.controllingTeam.team
              portals[guid].title = properties.portalV2.descriptiveText.TITLE
              portals[guid].address = properties.portalV2.descriptiveText.ADDRESS
              portals[guid].latE6 = properties.locationE6.latE6
              portals[guid].lngE6 = properties.locationE6.lngE6
              portals[guid].intelLink = "<a href='http://www.ingress.com/intel?latE6=" + String(portals[guid].latE6) +
                                        "&lngE6=" + String(portals[guid].lngE6) + "&z=19'>Link</a>"
              portals[guid].coords = String(portals[guid].latE6 / 1E6) + ", " + String(portals[guid].lngE6 / 1E6)
              portals[guid].level = 0
              portals[guid].resonators = ""
              portals[guid].numResonators = 0
              for (var i in properties.resonatorArray.resonators)
              {
                var resonator = properties.resonatorArray.resonators[i]
                if (resonator != null)
                {
                  var level = resonator.level
                  portals[guid].level += level / 8
                  portals[guid].resonators += String(level)
                  portals[guid].numResonators++
                  portals[guid].players += String(resonator.ownerGuid) + " "
                  if (typeof players[resonator.ownerGuid] == 'undefined')
                  {
                    players[resonator.ownerGuid] = {"name": "", "level": level, "faction": portals[guid].faction}
                  }
                  else
                  {
                    players[resonator.ownerGuid].level = players[resonator.ownerGuid].level < level ? level : players[resonator.ownerGuid].level
                  }
                }
                else
                {
                  portals[guid].resonators += "0"
                }
              }
              portals[guid].sortedResonators = Number(portals[guid].resonators.split('').sort().reverse().join(''))
              portals[guid].mitigation = 0
              portals[guid].mods = ""
              for (var i in properties.portalV2.linkedModArray)
              {
                if (properties.portalV2.linkedModArray[i] != null)
                {
                  var mod = properties.portalV2.linkedModArray[i].stats.MITIGATION
                  portals[guid].mitigation += Number(mod)
                  portals[guid].mods += "(" + mod + ")"
                }
              }
              portals[guid].links = 0
              if ("linkedEdges" in properties.portalV2)
              {
                for (var i in properties.portalV2.linkedEdges)
                {
                  if (properties.portalV2.linkedEdges[i] != null)
                  {
                      portals[guid].links++
                  }
                }
              }
            }
            else
            {
              if ("capturedRegion" in properties)
              {
                if ($.inArray(guid, fields) == -1)
                {
                  fields.push(guid)
                  for (var vertex in properties.capturedRegion)
                  {
                    var guid = properties.capturedRegion[vertex].guid
                    if (typeof portals[guid] == 'undefined')
                    {
                      portals[guid] = {"fields": 0, "MU": 0}
                    }
                    if (typeof portals[guid].fields == 'undefined')
                    {
                      portals[guid].fields = 0
                      portals[guid].MU = 0
                    }
                    portals[guid].fields += 1
                    portals[guid].MU += Number(properties.entityScore.entityScore)
                  }
                }
              }
              else
              {
                if ("edge" in properties)
                {
                  //using edge entities sucks for counting links
                }
              }
            }
          }
        }
      }
    }
    if (($.isArray(a.result)) && ("nickname" in a.result[0]))
    {
      for (var i in a.result)
      {
        var guid = a.result[i].guid
        players[guid].name = a.result[i].nickname
      }
    }
  }
}
//This *SHOULD* work, but it doesn't. I think it has something to do with the greasemonkey/userscript wrapper.
/*
window.S = new Function (
  "a", "b", "c", "d", "e",
  String(S.prototype.constructor)
    .replace("success:function(a) {", "success:function(a) {\n    CollectPortalInfo(a)")
    .replace(/^function[^{]+{/i,"")  // remove everything up to and including the first curly bracket
    .replace(/}[^}]*$/i, "")  // remove last curly bracket and everything after
);
*/

//Since I can't just insert the line I want, I have to overwrite the entire function with the last known function + the included line.
//This is why I break out if the function changes from my known version.
window.S = function (a, b, c, d, e) {
  c.method = b;
  var f = t(a.Fc, a, b, e), g = t(a.cd, a, b, d), h = t(a.jd, a);
  _gaq.push(["_trackEvent", "RPC", b]);
  c = $.ajax({type:"POST", url:"/rpc/" + b, dataType:"json", contentType:"application/json; charset=utf-8", data:JSON.stringify(c), Jd:function() {
    f()
  }, success:function(a) {
    CollectPortalInfo(a)
    g(a)
  }, error:function() {
    _gaq.push(["_trackEvent", "RPC_error", b])
  }, complete:function(a) {
    h(b, a)
  }});
  Mc(a, b).push(c)
}

//include datatables
var script = document.createElement('script')
script.src = "http://datatables.net/download/build/jquery.dataTables.min.js"
document.getElementsByTagName('head')[0].appendChild(script);

//Add a div below the footer. Completely hidden from view without scrolling down.
$("#footer").after(' \
<div style="width: 100%; height: 100%; margin-top: 70px; min-width: 700px;" id="target"> \
  <table style="border: 2px solid #59FBEA; display:inline-block;"> \
    <tr> \
      <td>Show:</td> \
      <td><input type="checkbox" name="level" value="0" checked="checked">L0</input></td> \
      <td><input type="checkbox" name="level" value="1" checked="checked">L1</input></td> \
      <td><input type="checkbox" name="level" value="2" checked="checked">L2</input></td> \
      <td><input type="checkbox" name="level" value="3" checked="checked">L3</input></td> \
      <td><input type="checkbox" name="level" value="4" checked="checked">L4</input></td> \
      <td><input type="checkbox" name="level" value="5" checked="checked">L5</input></td> \
      <td><input type="checkbox" name="level" value="6" checked="checked">L6</input></td> \
      <td><input type="checkbox" name="level" value="7" checked="checked">L7</input></td> \
      <td><input type="checkbox" name="level" value="8" checked="checked">L8</input></td> \
      <td><input type="checkbox" name="faction" value="NEUTRAL">Unclaimed</input></td> \
      <td><input type="checkbox" name="faction" value="ALIENS" checked="checked">Aliens</input></td> \
      <td><input type="checkbox" name="faction" value="RESISTANCE">Resistance</input></td> \
    </tr> \
  </table> \
  <table style="border: 2px solid red; display:inline-block;"><tr><td><span id="refresh" style="cursor: pointer">Refresh Targets</span></td></tr></table> \
  <table style="border: 2px solid gray; display:inline-block;"><tr><td><span id="export" style="cursor: pointer">Export Player List</span></td></tr></table><br/> \
  <table id="targetTable"></table> \
</div> \
')
$("#refresh").click(makeTargetsTable)
$("#export").click(makePlayersTable)

//Populate the table with data.
function colorRows(nRow, aData, iDisplayIndex, iDisplayIndexFull)
{
  if ( aData.faction == "ALIENS" )
  {
    $(nRow).css( { 'background-color': 'darkgreen'} )
  }
  else
  {
    if (aData.faction == "RESISTANCE")
    {
      $(nRow).css( { 'background-color': 'darkblue' } )
    }
    else
    {
      $(nRow).css( { 'background-color': 'darkgrey' } )
    }
  }
}

function makeTargetsTable()
{
  var levels = []
  $("input[type='checkbox'][name='level']:checked").each(function(){levels.push($(this).attr('value'))} )
  var factions = []
  $("input[type='checkbox'][name='faction']:checked").each(function(){factions.push($(this).attr('value'))} )
  var aaData = []
  for (var guid in portals)
  {
    var portal = portals[guid]
    if ($.inArray(String(portal.faction), factions) == -1)
      continue;
    if ($.inArray(String(portal.level | 0), levels) == -1)
      continue;
    if ( typeof portal.address == 'undefined')
      continue;
    portal.res = "<span title='" + portal.resonators + "'>" + portal.sortedResonators + "</span>"
    portal.AP = portal.fields * 750 + portal.links * 187 + portal.numResonators * 75
    aaData.push(portal)
  }

  var aoColumns = [
    { "sTitle": "Title",   "mData": "title", sWidth: '230px'},
    { "sTitle": "Address",  "mData": "address", sWidth: '300px'},
    { "sTitle": "Coordinates", "mData": "coords", sWidth: '170px'},
    { "sTitle": "Level",  "mData": "level", sWidth: '60px'},
    { "sTitle": "Resonators",    "mData": "res", sWidth: '70px'},
    { "sTitle": "Mods",    "mData": "mods", sWidth: '100px'},
    { "sTitle": "Links",    "mData": "links", sWidth: '20px'},
    { "sTitle": "Fields",    "mData": "fields", sWidth: '20px'},
    { "sTitle": "AP",    "mData": "AP", sWidth: '70px'},
    { "sTitle": "MU",    "mData": "MU", sWidth: '90px'},
    { "sTitle": "Intel",    "mData": "intelLink", sWidth: '35px'},
    { "sTitle": "Faction",  "mData": "faction", "bSearchable": false, "bVisible": false},
    { "sTitle": "Players",  "mData": "players", "bSearchable": true, "bVisible": false}
  ]
  $("#targetTable").dataTable({"aaData": aaData, "aoColumns": aoColumns, "aaSorting": [[ 8, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })
}

function makePlayersTable()
{
  var levels = []
  $("input[type='checkbox'][name='level']:checked").each(function(){levels.push($(this).attr('value'))} )
  var factions = []
  $("input[type='checkbox'][name='faction']:checked").each(function(){factions.push($(this).attr('value'))} )
  var aaData = []
  var playersToExport = {}
  for (var guid in players)
  {
    var player = players[guid]
    if ($.inArray(String(player.faction), factions) == -1)
      continue;
    if ($.inArray(String(player.level | 0), levels) == -1)
      continue;
    if (player.name || (player.level > 5))
      playersToExport[guid] = JSON.parse(JSON.stringify(players[guid]))
    player.name = player.name ? "<span title=" + guid + ">" + player.name + "</span>" : guid
    aaData.push(player)
  }

  console.log(JSON.stringify(playersToExport))

  var aoColumns = [
    { "sTitle": "Name",   "mData": "name", sWidth: '230px'},
    { "sTitle": "Level",  "mData": "level", sWidth: '60px'},
    { "sTitle": "Faction",  "mData": "faction",  "bSearchable": false, "bVisible": false}
  ]
  $("#targetTable").dataTable({"aaData": aaData, "aoColumns": aoColumns, "aaSorting": [[ 1, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })

}
