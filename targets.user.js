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
var players = {"fe9bcd8e259d4afb812b64d3e672794c.c":{"nickname":"Ariock","level":8,"faction":"ALIENS"},"0e1a81db8fc5400cab4244c8b76e00cd.c":{"nickname":"Auryn","level":8,"faction":"ALIENS"},"f0b4341372f74138b43ced8a4bf134bc.c":{"nickname":"badito","level":8,"faction":"ALIENS"},"32798c34ba4747849d4ed856b0e243d2.c":{"nickname":"beanieguy","level":8,"faction":"RESISTANCE"},"eca4c6e1ef3e42bba3d8eb0fa7fc9959.c":{"nickname":"DextroyRawr","level":8,"faction":"ALIENS"},"fb2b604dcb76458eb7846859a037cc2d.c":{"nickname":"DividedSky","level":8,"faction":"ALIENS"},"0af65bc7c3a24194aa8963d18913a5d3.c":{"nickname":"gloaming","level":8,"faction":"ALIENS"},"3eef7d1bbb114db7b3beceef50c1ce4a.c":{"nickname":"gosha","level":8,"faction":"RESISTANCE"},"d755adbf0aaa4ff38c1b94ee64444ed9.c":{"nickname":"iminurportalz","level":8,"faction":"RESISTANCE"},"460c531b543f42c397c5cde126a38bcf.c":{"nickname":"josh","level":8,"faction":"RESISTANCE"},"c9803ea0c84a41589ef769978e883ba2.c":{"nickname":"kirkalicious","level":8,"faction":"RESISTANCE"},"e37466fd5ffb434385a8e79ff2d26b8d.c":{"nickname":"majestic12","level":8,"faction":"ALIENS"},"d67232408c55463695f098e8280ec042.c":{"nickname":"mengo76","level":8,"faction":"ALIENS"},"0a65441a826c4dd29e895bb9a3d18f4e.c":{"nickname":"Montserrat","level":8,"faction":"RESISTANCE"},"82adb6fea5a447eb98ebf16fe997dca8.c":{"nickname":"Moritz","level":8,"faction":"ALIENS"},"a8d07113cdc840d88667a8edfb324527.c":{"nickname":"MrAnalytical","level":8,"faction":"RESISTANCE"},"ddd7d62b946841f1aafee622e9d5ac3c.c":{"nickname":"P1X3L","level":8,"faction":"ALIENS"},"f466a5a5ea0a43d8ab09ad11320f009e.c":{"nickname":"Rime","level":8,"faction":"ALIENS"},"13da0f008c9a4f1299e32a61b01eeff9.c":{"nickname":"romeoso","level":8,"faction":"RESISTANCE"},"75e0289116e54a49afc79f3a787f73e7.c":{"nickname":"scootle","level":8,"faction":"RESISTANCE"},"a9a70de32b474c4a94469f557954125c.c":{"nickname":"sheepcow","level":8,"faction":"ALIENS"},"36ca6a2bef0046139a95c94e40161d32.c":{"nickname":"Sun","level":8,"faction":"ALIENS"},"e460fadba42c4ba7ab59b677069c73d8.c":{"nickname":"tanzanite","level":8,"faction":"RESISTANCE"},"9c9a4b4945b04b6da8e9b2f323943756.c":{"nickname":"Thrakazog","level":8,"faction":"ALIENS"},"632fbac822064db2a3ce1f946bcc11ef.c":{"nickname":"0c001","level":7,"faction":"RESISTANCE"},"11f31a923ae84c95add6559305628071.c":{"nickname":"Adamantium","level":7,"faction":"RESISTANCE"},"a0206bdc7a794def9765b2baba071b51.c":{"nickname":"Berke","level":7,"faction":"RESISTANCE"},"3de5f2db05ba473f9047eaab50de3fa5.c":{"nickname":"bkmacdaddy","level":7,"faction":"RESISTANCE"},"e212f04404594afaa5ea41f54ead1504.c":{"nickname":"Cmonk","level":7,"faction":"RESISTANCE"},"f713f57130be4e779400b05cead45a75.c":{"nickname":"Cyclomania","level":7,"faction":"RESISTANCE"},"f7df1573d766469189de9709cb8ea2ce.c":{"nickname":"DestroyRawr","level":7,"faction":"ALIENS"},"b9fe6d2bdb6c43038e920eaafa6ba587.c":{"nickname":"firedrake","level":8,"faction":"ALIENS"},"619d78cb52c146fca419f87b3c3136ff.c":{"nickname":"fjws","level":7,"faction":"RESISTANCE"},"0c1958a4d58c4f57abe91a2cb88ec054.c":{"nickname":"Foxtrott","level":7,"faction":"RESISTANCE"},"a497819a951a4840b6c70b04b42267fc.c":{"nickname":"foobar","level":7,"faction":"ALIENS"},"0b65273203b640c2915f0b4dfaccb69a.c":{"nickname":"GeneralMac","level":7,"faction":"ALIENS"},"43162d2463744e83b5edf248cc26c5b0.c":{"nickname":"HolyFlameMaster","level":7,"faction":"RESISTANCE"},"bc22d7ecaba34a6c8e4a2c318c489266.c":{"nickname":"HSuke","level":7,"faction":"RESISTANCE"},"a7c99d8ba34e485296d6178662b61903.c":{"nickname":"hypercat","level":7,"faction":"ALIENS"},"5c26d3de8523408c97ddedc85fcf38bc.c":{"nickname":"Ichthyos","level":7,"faction":"ALIENS"},"9fce7d05a6064d9986470b29e44d0586.c":{"nickname":"JBQ","level":7,"faction":"RESISTANCE"},"27a4b2af6a5749809b806a8c60e7f736.c":{"nickname":"Jdban","level":7,"faction":"RESISTANCE"},"43f327975d7048cd9fa79341230a0e11.c":{"nickname":"Kuroshiro","level":7,"faction":"RESISTANCE"},"265bd94105f149c8901dee8a96102c89.c":{"nickname":"lipko","level":7,"faction":"RESISTANCE"},"2223ac94d906446b9cf62cced8f61ae5.c":{"nickname":"Luffi","level":7,"faction":"RESISTANCE"},"4cdacdfaddc64ffb8e24d7f2f7662145.c":{"nickname":"McBain","level":7,"faction":"RESISTANCE"},"54dc9c1c7e7a44a780554eddbfeae1f8.c":{"nickname":"mercurio","level":7,"faction":"ALIENS"},"82d83b3ab8a7404098e5ee094bd62e43.c":{"nickname":"misterikkit","level":7,"faction":"ALIENS"},"4cc1f9be50de4287856d770d06432342.c":{"nickname":"Moschops","level":7,"faction":"RESISTANCE"},"8291bbf37224470189aa3f3950d2a708.c":{"nickname":"Ninjai","level":7,"faction":"RESISTANCE"},"70e2bd6785d8407b832a077ed2fdc5bf.c":{"nickname":"raptor","level":7,"faction":"RESISTANCE"},"17de098a98f94f1aa7cadf2ae85f7625.c":{"nickname":"Ravenclaw","level":7,"faction":"ALIENS"},"77285f723fec4f8db86e29d52dcbf017.c":{"nickname":"rck","level":8,"faction":"RESISTANCE"},"d758ee87259e4dc1b202d608eef18786.c":{"nickname":"robeau","level":7,"faction":"ALIENS"},"9f572887898a4a92adec18ddec5ca3e2.c":{"nickname":"RobotAtlas","level":8,"faction":"ALIENS"},"0958eedd3ce647129b4d4d0db87f5a1c.c":{"nickname":"rongou","level":7,"faction":"RESISTANCE"},"f41509894f184329a4ee817c2e391c64.c":{"nickname":"RustyVenture","level":7,"faction":"ALIENS"},"09cee2784dbe446783781a19ce5e32eb.c":{"nickname":"sleepy","level":7,"faction":"RESISTANCE"},"8639ac057b434afaa299492969567eec.c":{"nickname":"Slipshod","level":7,"faction":"RESISTANCE"},"e91d2cbc0cc54366b884c4270b48a1a0.c":{"nickname":"splodey","level":7,"faction":"ALIENS"},"b26eae1f9dcd430c9a76df2feccbdc69.c":{"nickname":"SYBKing","level":7,"faction":"ALIENS"},"a39ea7d50867496ebb46869f9fa3aa21.c":{"nickname":"thakis","level":7,"faction":"RESISTANCE"},"4ffaff2af630477cbe78f575754e0fb4.c":{"nickname":"TheCurmudgeon","level":7,"faction":"RESISTANCE"},"9e9b5fb095894c11bb3a55bbdef869af.c":{"nickname":"Tiak","level":7,"faction":"RESISTANCE"},"4a2359c01580430cb595a0ae5659569b.c":{"nickname":"tspwh","level":7,"faction":"RESISTANCE"},"b4dec4cff79647b6bcd50aa44dd0097b.c":{"nickname":"weasel","level":8,"faction":"ALIENS"},"4eac31948bb243eaa85d357c95dee147.c":{"nickname":"xyzzy","level":7,"faction":"RESISTANCE"},"ed014398a77e4f5db141c9d7c4a09d6a.c":{"nickname":"Zorkstation","level":7,"faction":"RESISTANCE"},"28c53caba6594ab1881c59125771868b.c":{"nickname":"monkeyfarm","level":6,"faction":"RESISTANCE"},"4597286ea2c44b21a539ef964aeb813f.c":{"nickname":"money","level":5,"faction":"RESISTANCE"},"179693670e17421ebaa7751d2fdca0b4.c":{"nickname":"Jubal","level":5,"faction":"RESISTANCE"},"72fc8b83aeb04fef9f8381d784fc0ca0.c":{"nickname":"CGnex","level":5,"faction":"ALIENS"},"ef933910728c491b88f96f50577425db.c":{"nickname":"krousey","level":7,"faction":"ALIENS"},"73d3228a5ab2437b909604e132b9c621.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"407fe7d1e9a747d4b5353d239038892d.c":{"nickname":"zakuma","level":6,"faction":"RESISTANCE"},"cfddfa929c1d439596aa3d003e730298.c":{"nickname":"maxhazard","level":5,"faction":"ALIENS"},"219862422e30401fb51e3c4a648e013a.c":{"nickname":"Soulglo","level":6,"faction":"RESISTANCE"},"67a2126e1a2a469f87967753e5ca0692.c":{"nickname":"jiady","level":5,"faction":"RESISTANCE"},"4aaf39bafbe0458b8aa4a3d125898865.c":{"nickname":"izzador","level":5,"faction":"RESISTANCE"},"cc5ba126a8eb41d2b8fada587e53db5c.c":{"nickname":"Gregable","level":6,"faction":"RESISTANCE"},"289c21899d564bd08a3b1c7506345b12.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"11dd79a0c4e24b52931113c16ecb9caa.c":{"nickname":"","level":6,"faction":"ALIENS"},"fc457a3682ff4d6088c9b23dd5db39a7.c":{"nickname":"rotoiti","level":5,"faction":"ALIENS"},"68d8b47fd0644857a6792724d77b76b4.c":{"nickname":"2pi","level":6,"faction":"RESISTANCE"},"8b2303105c4148f9a937a890ffad2831.c":{"nickname":"merreborn","level":6,"faction":"ALIENS"},"0e346fae2ada47d9b55e2a01ed3c3655.c":{"nickname":"Epoch","level":6,"faction":"ALIENS"},"238edc79519a41b79aeee7efde3dc817.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"6efc7ef46b6242f49895f5c2c5d48b17.c":{"nickname":"Aerion","level":6,"faction":"RESISTANCE"},"2997af01f1f248189b2b7eb5ae5695f4.c":{"nickname":"Triple","level":6,"faction":"RESISTANCE"},"7d4479f8ad2e438893e4de1c14371a89.c":{"nickname":"evox","level":6,"faction":"ALIENS"},"6b32ad92aab84340ad104815f0a096d4.c":{"nickname":"","level":6,"faction":"ALIENS"},"fccce7bd5f6648588b5576b4bdfc0c14.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"335f6eb3df5e4d3eacce473600a6c565.c":{"nickname":"owenb","level":5,"faction":"RESISTANCE"},"0d5a6e1bfe184d18960b9b4e7906e33c.c":{"nickname":"ojn2","level":6,"faction":"RESISTANCE"},"02cc6066dbcd4cb7af62ea4030835c68.c":{"nickname":"SkyHawkEcks","level":5,"faction":"ALIENS"},"de94288ced444e86b1885957b16641ac.c":{"nickname":"MISSY","level":5,"faction":"ALIENS"},"929180bc23ef4a6aa1f8cee3ef531159.c":{"nickname":"tyr","level":6,"faction":"ALIENS"},"d2a721ce9a1c42d99d6a888fcc8acc38.c":{"nickname":"Steve496","level":5,"faction":"RESISTANCE"},"ec1ef7c892c34e6caea71b1428a225b6.c":{"nickname":"Iocane","level":6,"faction":"ALIENS"},"b957d5f5a5944aef8ca4cd76523022ce.c":{"nickname":"ronin","level":5,"faction":"ALIENS"},"5e59e92f98674ad0b85489df1fbd9aef.c":{"nickname":"","level":6,"faction":"ALIENS"},"8344daec76de42d5b0468c9cfebcff75.c":{"nickname":"sts","level":6,"faction":"ALIENS"},"e07d13f29fcf4d36b01587f5ea003a8b.c":{"nickname":"Malyse","level":5,"faction":"ALIENS"},"1403d2afca994d0095347f9758122bfb.c":{"nickname":"","level":6,"faction":"ALIENS"},"02a776dcbbd64851ae8bf8b7db099eae.c":{"nickname":"wax1wax0","level":6,"faction":"RESISTANCE"},"b6091079754244fe9159fde96b976c5a.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"2598764b354b4049bf8fa6997bc12640.c":{"nickname":"","level":6,"faction":"ALIENS"},"52d8d51ba03149c3933f320904ab0716.c":{"nickname":"yisunshin","level":5,"faction":"ALIENS"},"dd7b787fdee34869b2495902cb058552.c":{"nickname":"catdirt","level":7,"faction":"ALIENS"},"7fe502e888c047ec9441bbf12d54d07a.c":{"nickname":"OmonRa","level":5,"faction":"RESISTANCE"},"845975b056dd4babadc25110764592d0.c":{"nickname":"MrViper","level":5,"faction":"ALIENS"},"af68b60bf2574540a2a860744c0d5099.c":{"nickname":"ScooterB","level":5,"faction":"RESISTANCE"},"26d398cb457a4ef5ba4d20953a71bfb6.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"3ac7dcd25144468fa49ea23d10f819dc.c":{"nickname":"gestator","level":7,"faction":"ALIENS"},"7721c7a33ff34315bce28f0ef3321702.c":{"nickname":"radevel","level":5,"faction":"RESISTANCE"},"854998cf296945739920795e6ea461ea.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"0c2706e10e464699ad6343256234fb56.c":{"nickname":"Ganelon22","level":6,"faction":"RESISTANCE"},"b072bf1fab28438e8fafc7f0306b153b.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"cdd37bc379a743509473ae64fb1109ea.c":{"nickname":"","level":6,"faction":"ALIENS"},"e73c5d0c7ce246c2a62622ef2d32d234.c":{"nickname":"lllllllll","level":6,"faction":"ALIENS"},"3e5c069b845d42aab4518e419e7c838d.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"c1fd622babf54a75b43e2f15ef32618d.c":{"nickname":"","level":6,"faction":"ALIENS"},"048b88f9344b4b2c871e20dcd7ff8ef3.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"26411f9a44054ad1b92c875a37f7ec80.c":{"nickname":"","level":6,"faction":"ALIENS"},"c3a3ab410f0e42ca8ee65cd508d12d0c.c":{"nickname":"3nvy","level":6,"faction":"RESISTANCE"},"ae4e736cc872457abedd8bd93abf4ff9.c":{"nickname":"Atoz","level":6,"faction":"RESISTANCE"},"938b1ed2f63f41d39a24b0c605ac371a.c":{"nickname":"","level":6,"faction":"ALIENS"},"48dbfa6f2b4d49d7943847a3fc378007.c":{"nickname":"Cynthios","level":6,"faction":"RESISTANCE"},"03242e1a25c2437e930a7ef40c8062fa.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"71cd74d6ccb1480e8e47bbc16a9ae4ca.c":{"nickname":"","level":6,"faction":"ALIENS"},"66b22e38d72f42519c3bad4658c747c1.c":{"nickname":"Scarabeo","level":6,"faction":"ALIENS"},"cde2e0d94b80430895b7a48d2022fe17.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"d16ff3a28d84410d8183950ece596eb7.c":{"nickname":"Belphanior","level":6,"faction":"ALIENS"},"c06564d58bfb4b01b67964da4e198590.c":{"nickname":"unsynced","level":6,"faction":"RESISTANCE"},"4505d59deaaf49dbb01413d8299378d1.c":{"nickname":"urthling","level":6,"faction":"RESISTANCE"},"7aec1dbe60984660b8a7c176629105e5.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"ab03aa8a47cb4722b98b4fc84e7c614f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"c60e59e454c344d8819a0a8b5a913fc7.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"eca9443b4df44579b7c86b7a4fe157c8.c":{"nickname":"dalycitysteven","level":5,"faction":"ALIENS"},"197436ef03c149669b0ea342d40d5f85.c":{"nickname":"BunnyJoe","level":6,"faction":"ALIENS"},"0d6ef97d2b3744379e057c992a7179b5.c":{"nickname":"johnsmith","level":6,"faction":"RESISTANCE"},"d3b7985d033443e6a742878d4eb0a9da.c":{"nickname":"sfpark","level":6,"faction":"ALIENS"},"b6dbee9e11684319a7bea2d79131c85c.c":{"nickname":"TheChin","level":5,"faction":"ALIENS"},"f24830af7cf4407085586680f145e550.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"bfda3774182d42899e40e330d7dc2850.c":{"nickname":"semar","level":6,"faction":"ALIENS"},"c90aa9c4478e429990f26a1462e00114.c":{"nickname":"gl0ver","level":5,"faction":"RESISTANCE"},"526024bfe46c49dda2eb63f4ebb34d4c.c":{"nickname":"psychcynic","level":6,"faction":"ALIENS"},"b325effb467840a682fb3c68caa102c1.c":{"nickname":"ctate","level":7,"faction":"RESISTANCE"},"a1825dfd5d0d43948429dced59c69e73.c":{"nickname":"thamentor","level":6,"faction":"RESISTANCE"},"ceb6954289e5418fb6571f4f0b82c414.c":{"nickname":"BlastTyrant","level":6,"faction":"ALIENS"},"7a63677bc9a04004856bdb27c8a40323.c":{"nickname":"nullstar","level":7,"faction":"ALIENS"},"69a02df6c4c64ed1a9ebd78704e50bc1.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"f339ab7e590d4882963b20ca49e4d3c0.c":{"nickname":"ultimateway","level":5,"faction":"RESISTANCE"},"5e4e994fd8434a67bd33eb293fe5e9f8.c":{"nickname":"SpeldRong","level":5,"faction":"RESISTANCE"},"47ff29ae195b4e569477089df9784036.c":{"nickname":"groggygreggy","level":5,"faction":"RESISTANCE"},"b11d637bcab64afab0e860dea5b7e507.c":{"nickname":"jlapenna","level":6,"faction":"ALIENS"},"5a6647c4ca8848d383e2e5e62e221e5d.c":{"nickname":"","level":6,"faction":"ALIENS"},"a80f1f86b0234c3f9e17fc9ac058e67b.c":{"nickname":"","level":6,"faction":"ALIENS"},"9bcc819368fe4a5b9db04fe915bcd26e.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"a5ef3a21795549a592b908b55e6cf0bf.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"79df0b9d0fa5466bbad45c2e66f7476f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"c5f5392a40e54c7f8234973a156c8d75.c":{"nickname":"","level":6,"faction":"ALIENS"},"cb92c46a1c224f8eb1861e9c128ae548.c":{"nickname":"gromit","level":5,"faction":"ALIENS"},"3a508c7a583c4b94b0278b6505924146.c":{"nickname":"","level":6,"faction":"ALIENS"},"fcb4e1d1967c4c13aa5b98acff5c7f70.c":{"nickname":"Nemo5150","level":7,"faction":"ALIENS"},"692e95c4c6dd4d5c98ee46a501fab810.c":{"nickname":"sefton","level":7,"faction":"ALIENS"},"a940982d5fc140e0979a6c9aef84d85a.c":{"nickname":"","level":6,"faction":"ALIENS"},"b3ddf94629d24c35a94cb248ebd4cf46.c":{"nickname":"","level":6,"faction":"ALIENS"}} 

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
                    players[resonator.ownerGuid] = {"nickname": "", "level": level, "faction": portals[guid].faction}
                  }
                  else
                  {
                    if (players[resonator.ownerGuid].level < level)
                    {
                      players[resonator.ownerGuid].level = level
                      if (level > 6 && players[resonator.ownerGuid].nickname)
                        alert("Player leveled to L" + level + " recently: " + resonator.ownerGuid + " " + players[resonator.ownerGuid].nickname)
                    }
                    players[resonator.ownerGuid].level = players[resonator.ownerGuid].level < level ? level : players[resonator.ownerGuid].level
                    if (players[resonator.ownerGuid].nickname)
                      portals[guid].players += players[resonator.ownerGuid].nickname + " "
                  }
                  players[resonator.ownerGuid].resonators = (typeof players[resonator.ownerGuid].resonators == 'undefined') ? 1 : players[resonator.ownerGuid].resonators + 1
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
        players[guid].nickname = a.result[i].nickname
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
  <table id="targetTable"></table><br/> \
  <table id="playerTable"></table> \
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
  var targetData = []
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
    targetData.push(portal)
  }

  var targetColumns = [
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
  $("#targetTable").dataTable({"aaData": targetData, "aoColumns": targetColumns, "aaSorting": [[ 8, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })
  $("div#targetTable_wrapper").css("border","2px solid #59FBEA")
}

function makePlayersTable()
{
  var levels = []
  $("input[type='checkbox'][name='level']:checked").each(function(){levels.push($(this).attr('value'))} )
  var factions = []
  $("input[type='checkbox'][name='faction']:checked").each(function(){factions.push($(this).attr('value'))} )
  var playerData = []
  var playersToExport = {}
  for (var guid in players)
  {
    var player = players[guid]
    if ($.inArray(String(player.faction), factions) == -1)
      continue;
    if ($.inArray(String(player.level | 0), levels) == -1)
      continue;
    if (player.nickname || (player.level > 5))
      playersToExport[guid] = {"nickname": player.nickname, "level": player.level, "faction": player.faction}
    player.name = player.nickname ? player.nickname : guid
    player.resonatorsFound = (typeof player.resonators == 'undefined') ? "None" : "One or more"
    playerData.push(player)
  }

  console.log(JSON.stringify(playersToExport))

  var playerColumns = [
    { "sTitle": "Name",   "mData": "name", sWidth: '230px'},
    { "sTitle": "Level",  "mData": "level", sWidth: '60px'},
    { "sTitle": "Resonators Found", "mData": "resonatorsFound", sWidth: '200px'},
    { "sTitle": "Faction",  "mData": "faction",  "bSearchable": false, "bVisible": false}
  ]
  $("#playerTable").dataTable({"aaData": playerData, "aoColumns": playerColumns, "aaSorting": [[ 1, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })
  $("div#playerTable_wrapper").css("border","2px solid #59FBEA")
}
