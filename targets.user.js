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

if (String(Zc.prototype.constructor).indexOf("(a, b, c, d, e, f)") < 0 ||
    String(Zc.prototype.constructor).indexOf("type:\"POST\", url:\"/rpc/\"") < 0)
{
  alert("NianticOps changed something, please get a new version");
  return;
}


var portals = {}
var fields = []
var serverIsUp = true
var players = {}
var portalDataTable = undefined;
$.ajax({
  url: "http://ec2-50-112-48-5.us-west-2.compute.amazonaws.com/jsonp.php?callback=?",
  dataType: 'json',
  data: "request=init",
  timeout: 5000
}).always(readCallback)

function readCallback(response, status)
{
  if(status == "success")
  {
    players = response
  }
  else
  {
    serverIsUp = false
    players = {"fe9bcd8e259d4afb812b64d3e672794c.c":{"nickname":"Ariock","level":8,"faction":"ALIENS"},"0e1a81db8fc5400cab4244c8b76e00cd.c":{"nickname":"Auryn","level":8,"faction":"ALIENS"},"f0b4341372f74138b43ced8a4bf134bc.c":{"nickname":"badito","level":8,"faction":"ALIENS"},"32798c34ba4747849d4ed856b0e243d2.c":{"nickname":"beanieguy","level":8,"faction":"RESISTANCE"},"eca4c6e1ef3e42bba3d8eb0fa7fc9959.c":{"nickname":"DextroyRawr","level":8,"faction":"ALIENS"},"fb2b604dcb76458eb7846859a037cc2d.c":{"nickname":"DividedSky","level":8,"faction":"ALIENS"},"0af65bc7c3a24194aa8963d18913a5d3.c":{"nickname":"gloaming","level":8,"faction":"ALIENS"},"3eef7d1bbb114db7b3beceef50c1ce4a.c":{"nickname":"gosha","level":8,"faction":"RESISTANCE"},"d755adbf0aaa4ff38c1b94ee64444ed9.c":{"nickname":"iminurportalz","level":8,"faction":"RESISTANCE"},"460c531b543f42c397c5cde126a38bcf.c":{"nickname":"josh","level":8,"faction":"RESISTANCE"},"c9803ea0c84a41589ef769978e883ba2.c":{"nickname":"kirkalicious","level":8,"faction":"RESISTANCE"},"e37466fd5ffb434385a8e79ff2d26b8d.c":{"nickname":"majestic12","level":8,"faction":"ALIENS"},"d67232408c55463695f098e8280ec042.c":{"nickname":"mengo76","level":8,"faction":"ALIENS"},"0a65441a826c4dd29e895bb9a3d18f4e.c":{"nickname":"Montserrat","level":8,"faction":"RESISTANCE"},"82adb6fea5a447eb98ebf16fe997dca8.c":{"nickname":"Moritz","level":8,"faction":"ALIENS"},"a8d07113cdc840d88667a8edfb324527.c":{"nickname":"MrAnalytical","level":8,"faction":"RESISTANCE"},"ddd7d62b946841f1aafee622e9d5ac3c.c":{"nickname":"P1X3L","level":8,"faction":"ALIENS"},"f466a5a5ea0a43d8ab09ad11320f009e.c":{"nickname":"Rime","level":8,"faction":"ALIENS"},"13da0f008c9a4f1299e32a61b01eeff9.c":{"nickname":"romeoso","level":8,"faction":"RESISTANCE"},"75e0289116e54a49afc79f3a787f73e7.c":{"nickname":"scootle","level":8,"faction":"RESISTANCE"},"a9a70de32b474c4a94469f557954125c.c":{"nickname":"sheepcow","level":8,"faction":"ALIENS"},"36ca6a2bef0046139a95c94e40161d32.c":{"nickname":"Sun","level":8,"faction":"ALIENS"},"e460fadba42c4ba7ab59b677069c73d8.c":{"nickname":"tanzanite","level":8,"faction":"RESISTANCE"},"9c9a4b4945b04b6da8e9b2f323943756.c":{"nickname":"Thrakazog","level":8,"faction":"ALIENS"},"632fbac822064db2a3ce1f946bcc11ef.c":{"nickname":"0c001","level":7,"faction":"RESISTANCE"},"11f31a923ae84c95add6559305628071.c":{"nickname":"Adamantium","level":7,"faction":"RESISTANCE"},"a0206bdc7a794def9765b2baba071b51.c":{"nickname":"Berke","level":7,"faction":"RESISTANCE"},"3de5f2db05ba473f9047eaab50de3fa5.c":{"nickname":"bkmacdaddy","level":7,"faction":"RESISTANCE"},"e212f04404594afaa5ea41f54ead1504.c":{"nickname":"Cmonk","level":7,"faction":"RESISTANCE"},"f713f57130be4e779400b05cead45a75.c":{"nickname":"Cyclomania","level":8,"faction":"RESISTANCE"},"f7df1573d766469189de9709cb8ea2ce.c":{"nickname":"DestroyRawr","level":7,"faction":"ALIENS"},"b9fe6d2bdb6c43038e920eaafa6ba587.c":{"nickname":"firedrake","level":8,"faction":"ALIENS"},"619d78cb52c146fca419f87b3c3136ff.c":{"nickname":"fjws","level":7,"faction":"RESISTANCE"},"0c1958a4d58c4f57abe91a2cb88ec054.c":{"nickname":"Foxtrott","level":7,"faction":"RESISTANCE"},"a497819a951a4840b6c70b04b42267fc.c":{"nickname":"foobar","level":7,"faction":"ALIENS"},"0b65273203b640c2915f0b4dfaccb69a.c":{"nickname":"GeneralMac","level":7,"faction":"ALIENS"},"43162d2463744e83b5edf248cc26c5b0.c":{"nickname":"HolyFlameMaster","level":7,"faction":"RESISTANCE"},"bc22d7ecaba34a6c8e4a2c318c489266.c":{"nickname":"HSuke","level":7,"faction":"RESISTANCE"},"a7c99d8ba34e485296d6178662b61903.c":{"nickname":"hypercat","level":7,"faction":"ALIENS"},"5c26d3de8523408c97ddedc85fcf38bc.c":{"nickname":"Ichthyos","level":7,"faction":"ALIENS"},"9fce7d05a6064d9986470b29e44d0586.c":{"nickname":"JBQ","level":7,"faction":"RESISTANCE"},"27a4b2af6a5749809b806a8c60e7f736.c":{"nickname":"Jdban","level":7,"faction":"RESISTANCE"},"43f327975d7048cd9fa79341230a0e11.c":{"nickname":"Kuroshiro","level":7,"faction":"RESISTANCE"},"265bd94105f149c8901dee8a96102c89.c":{"nickname":"lipko","level":8,"faction":"RESISTANCE"},"2223ac94d906446b9cf62cced8f61ae5.c":{"nickname":"Luffi","level":8,"faction":"RESISTANCE"},"4cdacdfaddc64ffb8e24d7f2f7662145.c":{"nickname":"McBain","level":7,"faction":"RESISTANCE"},"54dc9c1c7e7a44a780554eddbfeae1f8.c":{"nickname":"mercurio","level":7,"faction":"ALIENS"},"82d83b3ab8a7404098e5ee094bd62e43.c":{"nickname":"misterikkit","level":7,"faction":"ALIENS"},"4cc1f9be50de4287856d770d06432342.c":{"nickname":"Moschops","level":8,"faction":"RESISTANCE"},"8291bbf37224470189aa3f3950d2a708.c":{"nickname":"Ninjai","level":7,"faction":"RESISTANCE"},"70e2bd6785d8407b832a077ed2fdc5bf.c":{"nickname":"raptor","level":8,"faction":"RESISTANCE"},"17de098a98f94f1aa7cadf2ae85f7625.c":{"nickname":"Ravenclaw","level":7,"faction":"ALIENS"},"77285f723fec4f8db86e29d52dcbf017.c":{"nickname":"rck","level":8,"faction":"RESISTANCE"},"d758ee87259e4dc1b202d608eef18786.c":{"nickname":"robeau","level":8,"faction":"ALIENS"},"9f572887898a4a92adec18ddec5ca3e2.c":{"nickname":"RobotAtlas","level":8,"faction":"ALIENS"},"0958eedd3ce647129b4d4d0db87f5a1c.c":{"nickname":"rongou","level":7,"faction":"RESISTANCE"},"f41509894f184329a4ee817c2e391c64.c":{"nickname":"RustyVenture","level":8,"faction":"ALIENS"},"09cee2784dbe446783781a19ce5e32eb.c":{"nickname":"sleepy","level":7,"faction":"RESISTANCE"},"8639ac057b434afaa299492969567eec.c":{"nickname":"Slipshod","level":7,"faction":"RESISTANCE"},"e91d2cbc0cc54366b884c4270b48a1a0.c":{"nickname":"splodey","level":8,"faction":"ALIENS"},"b26eae1f9dcd430c9a76df2feccbdc69.c":{"nickname":"SYBKing","level":8,"faction":"ALIENS"},"a39ea7d50867496ebb46869f9fa3aa21.c":{"nickname":"thakis","level":7,"faction":"RESISTANCE"},"4ffaff2af630477cbe78f575754e0fb4.c":{"nickname":"TheCurmudgeon","level":8,"faction":"RESISTANCE"},"9e9b5fb095894c11bb3a55bbdef869af.c":{"nickname":"Tiak","level":7,"faction":"RESISTANCE"},"4a2359c01580430cb595a0ae5659569b.c":{"nickname":"tspwh","level":7,"faction":"RESISTANCE"},"b4dec4cff79647b6bcd50aa44dd0097b.c":{"nickname":"weasel","level":8,"faction":"ALIENS"},"4eac31948bb243eaa85d357c95dee147.c":{"nickname":"xyzzy","level":7,"faction":"RESISTANCE"},"ed014398a77e4f5db141c9d7c4a09d6a.c":{"nickname":"Zorkstation","level":7,"faction":"RESISTANCE"},"28c53caba6594ab1881c59125771868b.c":{"nickname":"monkeyfarm","level":6,"faction":"RESISTANCE"},"4597286ea2c44b21a539ef964aeb813f.c":{"nickname":"money","level":5,"faction":"RESISTANCE"},"179693670e17421ebaa7751d2fdca0b4.c":{"nickname":"Jubal","level":6,"faction":"RESISTANCE"},"72fc8b83aeb04fef9f8381d784fc0ca0.c":{"nickname":"CGnex","level":6,"faction":"ALIENS"},"ef933910728c491b88f96f50577425db.c":{"nickname":"krousey","level":8,"faction":"ALIENS"},"73d3228a5ab2437b909604e132b9c621.c":{"nickname":"Aliquam","level":6,"faction":"RESISTANCE"},"407fe7d1e9a747d4b5353d239038892d.c":{"nickname":"zakuma","level":6,"faction":"RESISTANCE"},"cfddfa929c1d439596aa3d003e730298.c":{"nickname":"maxhazard","level":6,"faction":"ALIENS"},"219862422e30401fb51e3c4a648e013a.c":{"nickname":"Soulglo","level":6,"faction":"RESISTANCE"},"67a2126e1a2a469f87967753e5ca0692.c":{"nickname":"jiady","level":5,"faction":"RESISTANCE"},"4aaf39bafbe0458b8aa4a3d125898865.c":{"nickname":"izzador","level":5,"faction":"RESISTANCE"},"cc5ba126a8eb41d2b8fada587e53db5c.c":{"nickname":"Gregable","level":7,"faction":"RESISTANCE"},"289c21899d564bd08a3b1c7506345b12.c":{"nickname":"poser8","level":6,"faction":"RESISTANCE"},"11dd79a0c4e24b52931113c16ecb9caa.c":{"nickname":"","level":6,"faction":"ALIENS"},"fc457a3682ff4d6088c9b23dd5db39a7.c":{"nickname":"rotoiti","level":6,"faction":"ALIENS"},"68d8b47fd0644857a6792724d77b76b4.c":{"nickname":"2pi","level":6,"faction":"RESISTANCE"},"8b2303105c4148f9a937a890ffad2831.c":{"nickname":"merreborn","level":7,"faction":"ALIENS"},"0e346fae2ada47d9b55e2a01ed3c3655.c":{"nickname":"Epoch","level":6,"faction":"ALIENS"},"238edc79519a41b79aeee7efde3dc817.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"6efc7ef46b6242f49895f5c2c5d48b17.c":{"nickname":"Aerion","level":6,"faction":"RESISTANCE"},"2997af01f1f248189b2b7eb5ae5695f4.c":{"nickname":"Triple","level":6,"faction":"RESISTANCE"},"7d4479f8ad2e438893e4de1c14371a89.c":{"nickname":"evox","level":7,"faction":"ALIENS"},"6b32ad92aab84340ad104815f0a096d4.c":{"nickname":"Lemmy","level":6,"faction":"ALIENS"},"fccce7bd5f6648588b5576b4bdfc0c14.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"335f6eb3df5e4d3eacce473600a6c565.c":{"nickname":"owenb","level":6,"faction":"RESISTANCE"},"0d5a6e1bfe184d18960b9b4e7906e33c.c":{"nickname":"ojn2","level":7,"faction":"RESISTANCE"},"02cc6066dbcd4cb7af62ea4030835c68.c":{"nickname":"SkyHawkEcks","level":7,"faction":"ALIENS"},"de94288ced444e86b1885957b16641ac.c":{"nickname":"MISSY","level":6,"faction":"ALIENS"},"929180bc23ef4a6aa1f8cee3ef531159.c":{"nickname":"tyr","level":6,"faction":"ALIENS"},"d2a721ce9a1c42d99d6a888fcc8acc38.c":{"nickname":"Steve496","level":6,"faction":"RESISTANCE"},"ec1ef7c892c34e6caea71b1428a225b6.c":{"nickname":"Iocane","level":6,"faction":"ALIENS"},"b957d5f5a5944aef8ca4cd76523022ce.c":{"nickname":"ronin","level":6,"faction":"ALIENS"},"5e59e92f98674ad0b85489df1fbd9aef.c":{"nickname":"athui","level":6,"faction":"ALIENS"},"8344daec76de42d5b0468c9cfebcff75.c":{"nickname":"sts","level":6,"faction":"ALIENS"},"e07d13f29fcf4d36b01587f5ea003a8b.c":{"nickname":"Malyse","level":5,"faction":"ALIENS"},"1403d2afca994d0095347f9758122bfb.c":{"nickname":"jowens","level":6,"faction":"ALIENS"},"02a776dcbbd64851ae8bf8b7db099eae.c":{"nickname":"wax1wax0","level":7,"faction":"RESISTANCE"},"b6091079754244fe9159fde96b976c5a.c":{"nickname":"EpiphanyMachine","level":6,"faction":"RESISTANCE"},"2598764b354b4049bf8fa6997bc12640.c":{"nickname":"","level":6,"faction":"ALIENS"},"52d8d51ba03149c3933f320904ab0716.c":{"nickname":"yisunshin","level":6,"faction":"ALIENS"},"dd7b787fdee34869b2495902cb058552.c":{"nickname":"catdirt","level":7,"faction":"ALIENS"},"7fe502e888c047ec9441bbf12d54d07a.c":{"nickname":"OmonRa","level":5,"faction":"RESISTANCE"},"845975b056dd4babadc25110764592d0.c":{"nickname":"MrViper","level":5,"faction":"ALIENS"},"af68b60bf2574540a2a860744c0d5099.c":{"nickname":"ScooterB","level":5,"faction":"RESISTANCE"},"26d398cb457a4ef5ba4d20953a71bfb6.c":{"nickname":"Tantalum","level":6,"faction":"RESISTANCE"},"3ac7dcd25144468fa49ea23d10f819dc.c":{"nickname":"gestator","level":7,"faction":"ALIENS"},"7721c7a33ff34315bce28f0ef3321702.c":{"nickname":"radevel","level":6,"faction":"RESISTANCE"},"854998cf296945739920795e6ea461ea.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"0c2706e10e464699ad6343256234fb56.c":{"nickname":"Ganelon22","level":6,"faction":"RESISTANCE"},"b072bf1fab28438e8fafc7f0306b153b.c":{"nickname":"soulmark","level":6,"faction":"RESISTANCE"},"cdd37bc379a743509473ae64fb1109ea.c":{"nickname":"Moonshadow","level":6,"faction":"ALIENS"},"e73c5d0c7ce246c2a62622ef2d32d234.c":{"nickname":"lllllllll","level":7,"faction":"ALIENS"},"3e5c069b845d42aab4518e419e7c838d.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"c1fd622babf54a75b43e2f15ef32618d.c":{"nickname":"chameleon","level":7,"faction":"ALIENS"},"048b88f9344b4b2c871e20dcd7ff8ef3.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"26411f9a44054ad1b92c875a37f7ec80.c":{"nickname":"","level":6,"faction":"ALIENS"},"c3a3ab410f0e42ca8ee65cd508d12d0c.c":{"nickname":"3nvy","level":7,"faction":"RESISTANCE"},"ae4e736cc872457abedd8bd93abf4ff9.c":{"nickname":"Atoz","level":7,"faction":"RESISTANCE"},"938b1ed2f63f41d39a24b0c605ac371a.c":{"nickname":"","level":6,"faction":"ALIENS"},"48dbfa6f2b4d49d7943847a3fc378007.c":{"nickname":"Cynthios","level":6,"faction":"RESISTANCE"},"03242e1a25c2437e930a7ef40c8062fa.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"71cd74d6ccb1480e8e47bbc16a9ae4ca.c":{"nickname":"ditzyhorse","level":7,"faction":"ALIENS"},"66b22e38d72f42519c3bad4658c747c1.c":{"nickname":"Scarabeo","level":6,"faction":"ALIENS"},"cde2e0d94b80430895b7a48d2022fe17.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"d16ff3a28d84410d8183950ece596eb7.c":{"nickname":"Belphanior","level":7,"faction":"ALIENS"},"c06564d58bfb4b01b67964da4e198590.c":{"nickname":"unsynced","level":6,"faction":"RESISTANCE"},"4505d59deaaf49dbb01413d8299378d1.c":{"nickname":"urthling","level":8,"faction":"RESISTANCE"},"7aec1dbe60984660b8a7c176629105e5.c":{"nickname":"cbxzcm","level":6,"faction":"RESISTANCE"},"ab03aa8a47cb4722b98b4fc84e7c614f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"c60e59e454c344d8819a0a8b5a913fc7.c":{"nickname":"EC77","level":7,"faction":"RESISTANCE"},"eca9443b4df44579b7c86b7a4fe157c8.c":{"nickname":"dalycitysteven","level":5,"faction":"ALIENS"},"197436ef03c149669b0ea342d40d5f85.c":{"nickname":"BunnyJoe","level":7,"faction":"ALIENS"},"0d6ef97d2b3744379e057c992a7179b5.c":{"nickname":"johnsmith","level":7,"faction":"RESISTANCE"},"d3b7985d033443e6a742878d4eb0a9da.c":{"nickname":"sfpark","level":7,"faction":"ALIENS"},"b6dbee9e11684319a7bea2d79131c85c.c":{"nickname":"TheChin","level":6,"faction":"ALIENS"},"f24830af7cf4407085586680f145e550.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"bfda3774182d42899e40e330d7dc2850.c":{"nickname":"semar","level":6,"faction":"ALIENS"},"c90aa9c4478e429990f26a1462e00114.c":{"nickname":"gl0ver","level":6,"faction":"RESISTANCE"},"526024bfe46c49dda2eb63f4ebb34d4c.c":{"nickname":"psychcynic","level":7,"faction":"ALIENS"},"b325effb467840a682fb3c68caa102c1.c":{"nickname":"ctate","level":7,"faction":"RESISTANCE"},"a1825dfd5d0d43948429dced59c69e73.c":{"nickname":"thamentor","level":6,"faction":"RESISTANCE"},"ceb6954289e5418fb6571f4f0b82c414.c":{"nickname":"BlastTyrant","level":7,"faction":"ALIENS"},"7a63677bc9a04004856bdb27c8a40323.c":{"nickname":"nullstar","level":7,"faction":"ALIENS"},"69a02df6c4c64ed1a9ebd78704e50bc1.c":{"nickname":"Kairos","level":6,"faction":"RESISTANCE"},"f339ab7e590d4882963b20ca49e4d3c0.c":{"nickname":"ultimateway","level":5,"faction":"RESISTANCE"},"5e4e994fd8434a67bd33eb293fe5e9f8.c":{"nickname":"SpeldRong","level":6,"faction":"RESISTANCE"},"47ff29ae195b4e569477089df9784036.c":{"nickname":"groggygreggy","level":5,"faction":"RESISTANCE"},"b11d637bcab64afab0e860dea5b7e507.c":{"nickname":"jlapenna","level":6,"faction":"ALIENS"},"5a6647c4ca8848d383e2e5e62e221e5d.c":{"nickname":"Moskie","level":6,"faction":"ALIENS"},"a80f1f86b0234c3f9e17fc9ac058e67b.c":{"nickname":"","level":6,"faction":"ALIENS"},"9bcc819368fe4a5b9db04fe915bcd26e.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"a5ef3a21795549a592b908b55e6cf0bf.c":{"nickname":"ChibiWolfie","level":6,"faction":"RESISTANCE"},"79df0b9d0fa5466bbad45c2e66f7476f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"c5f5392a40e54c7f8234973a156c8d75.c":{"nickname":"","level":6,"faction":"ALIENS"},"cb92c46a1c224f8eb1861e9c128ae548.c":{"nickname":"gromit","level":6,"faction":"ALIENS"},"3a508c7a583c4b94b0278b6505924146.c":{"nickname":"","level":6,"faction":"ALIENS"},"fcb4e1d1967c4c13aa5b98acff5c7f70.c":{"nickname":"Nemo5150","level":7,"faction":"ALIENS"},"692e95c4c6dd4d5c98ee46a501fab810.c":{"nickname":"sefton","level":7,"faction":"ALIENS"},"a940982d5fc140e0979a6c9aef84d85a.c":{"nickname":"Peng1","level":6,"faction":"ALIENS"},"b3ddf94629d24c35a94cb248ebd4cf46.c":{"nickname":"","level":6,"faction":"ALIENS"},"775ca60f4682410ea08d2989044b674d.c":{"nickname":"severoon","level":5,"faction":"ALIENS"},"cdf80e1a9d534c789f23f79b565d8f9e.c":{"nickname":"Tyger","level":6,"faction":"RESISTANCE"},"fc6ebcc2d45d4327b95ca01c55b135b6.c":{"nickname":"ExSystema","level":5,"faction":"ALIENS"},"be737576e8724e7ea2f88eea4f119d06.c":{"nickname":"SHRIKE","level":5,"faction":"RESISTANCE"},"d8977efe02104144b797b9db6d9555ac.c":{"nickname":"huntsman","level":5,"faction":"RESISTANCE"},"26161c9ed5da487d97dd0b0d55853a3d.c":{"nickname":"neumino","level":6,"faction":"RESISTANCE"},"cee37f3a02fb44be9ebd7c884e110796.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"521d87ee95bc44ee8e485c41f0c1492c.c":{"nickname":"psyfluency","level":7,"faction":"ALIENS"},"3740766afc584504b2758c53e841911d.c":{"nickname":"PlatypusRex","level":7,"faction":"RESISTANCE"},"0e8d49c62c5c4d5c93bab9703bb1bd63.c":{"nickname":"","level":6,"faction":"ALIENS"},"9dda0bf6dd6346928a4a11a035bc15df.c":{"nickname":"ke7in","level":7,"faction":"RESISTANCE"},"be2a00f94fa7438fbe389fe63f633ebb.c":{"nickname":"TheOptimist","level":7,"faction":"RESISTANCE"},"df8aa3ffc03742888ce5a4d6092f69de.c":{"nickname":"sbarret","level":8,"faction":"RESISTANCE"},"9b1d99f1f03942c1ac3064078afeb9f7.c":{"nickname":"brasshat","level":6,"faction":"RESISTANCE"},"4706a865595b49e4807c1d58b77a812e.c":{"nickname":"","level":6,"faction":"ALIENS"},"301223a88a49401eb0f397d8c47ce56f.c":{"nickname":"","level":6,"faction":"ALIENS"},"fd6c3c0fa6654d3bb2a09a1dcf471999.c":{"nickname":"Alliecat","level":5,"faction":"RESISTANCE"},"07dcac54475742d796aa4ea70ebec636.c":{"nickname":"","level":7,"faction":"RESISTANCE"},"d267989962ca467a965fffb184dbc0a6.c":{"nickname":"Besodelamort","level":6,"faction":"ALIENS"},"d69455ba82f64d4186c8c88583f7603a.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"531b119e298141db8dacdec5877c1642.c":{"nickname":"oigres","level":6,"faction":"ALIENS"},"71de71cb74b448caab95067d09258791.c":{"nickname":"SgtSausagepants","level":5,"faction":"RESISTANCE"},"75ef6031f61a408e8f49334c29f97f79.c":{"nickname":"SeldomSeen","level":6,"faction":"RESISTANCE"},"5fb7263f7eef4dc8b5c3f0a24b11432d.c":{"nickname":"Telos","level":8,"faction":"ALIENS"},"2ee3b08726b5456d977afee7dfbf7b59.c":{"nickname":"d0gboy","level":8,"faction":"ALIENS"},"15c5b99d9ce747c183517ba5a3384b18.c":{"nickname":"iant","level":6,"faction":"ALIENS"},"da3cc45364484a199f6d6f8c68c330fd.c":{"nickname":"Chakram","level":7,"faction":"RESISTANCE"},"008de32fbf374b609367c843e0ea4538.c":{"nickname":"00panda","level":5,"faction":"RESISTANCE"},"ef3bcd54cda4408f926ada1d5a93170c.c":{"nickname":"","level":6,"faction":"ALIENS"},"f35d3331d3c64d3a9e859f26e56ead1b.c":{"nickname":"meggsie","level":5,"faction":"RESISTANCE"},"91fa1787397546e19a271b6750c782d1.c":{"nickname":"sherkan","level":5,"faction":"ALIENS"},"d3d0f4f7e8084ff38a8b012f2248ccf1.c":{"nickname":"hopfather","level":7,"faction":"RESISTANCE"},"995479d856d84d7e8ba2e9e707ae7785.c":{"nickname":"nullgiskard","level":5,"faction":"ALIENS"},"0295f6e570814ecd8870688431254a98.c":{"nickname":"SgtPinback","level":7,"faction":"ALIENS"},"f7704042bc824322bb3ad8086751ccce.c":{"nickname":"","level":6,"faction":"ALIENS"},"4707f6c711304ccea595090d49bd88ff.c":{"nickname":"hyperlinks","level":5,"faction":"ALIENS"},"5e04d004ba5d41c79972248c634c0c95.c":{"nickname":"","level":6,"faction":"ALIENS"},"679175a3809644fea821de92ae9a72cb.c":{"nickname":"earthtechling","level":6,"faction":"ALIENS"},"742f27d4988f48d1bbea004842066bf8.c":{"nickname":"quisdom","level":5,"faction":"RESISTANCE"},"1a42e584d5bc4b228ec3322f171d46ff.c":{"nickname":"Redditour","level":7,"faction":"ALIENS"},"140158b919314e0eab54db9eb2d2d9ba.c":{"nickname":"pardeboy","level":7,"faction":"ALIENS"},"1190bffe9a3b431a97bf14ec77ad5180.c":{"nickname":"JDub18","level":6,"faction":"ALIENS"},"e8264e4aaa3d47739f2cbd5f3a4ef904.c":{"nickname":"RobbieTheRabbit","level":5,"faction":"RESISTANCE"},"9e80c431a3d14fafa10a472e51196f69.c":{"nickname":"CommieIBanker","level":6,"faction":"ALIENS"},"dedd1064323f44f2bff4798c42cf7b32.c":{"nickname":"mistermister","level":5,"faction":"ALIENS"},"e7fe7becc8ae494dac352900ec066b6f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"35b0ad5564cc4029ac7ea4fdae14659c.c":{"nickname":"JKim","level":5,"faction":"RESISTANCE"},"0442cf0a289e4a14a38aeec8e1d67dd5.c":{"nickname":"Rome0","level":6,"faction":"ALIENS"},"17c346582ea646278f1785004f898d36.c":{"nickname":"HY4TNVK4","level":5,"faction":"ALIENS"},"ebbba2b780bf43b680f416ffc8ae0ec3.c":{"nickname":"CharChar","level":5,"faction":"ALIENS"},"0afb187e29bf49ceba913a1694f9adcc.c":{"nickname":"","level":6,"faction":"ALIENS"},"4fe469b456c340a18340418062d0524d.c":{"nickname":"hubris415","level":7,"faction":"ALIENS"},"07b26a752ba2435f941a87a4ba387040.c":{"nickname":"lordofcheese","level":7,"faction":"ALIENS"},"84463dc9ad1943338f70cf988fbc6c01.c":{"nickname":"","level":6,"faction":"ALIENS"},"b80f19cb6f4640fc92067b5e3f638eca.c":{"nickname":"swaps","level":6,"faction":"RESISTANCE"},"a18530309f0244a0a4001f7318590cda.c":{"nickname":"mints","level":7,"faction":"ALIENS"},"9de8e1d18c264524be46e85dad6053c0.c":{"nickname":"moppet","level":5,"faction":"ALIENS"},"f03fb3641bda45729cabbd620d5c04ee.c":{"nickname":"cdjj","level":5,"faction":"RESISTANCE"},"ffd32b9f7bd3437da39361dbf9e24fc7.c":{"nickname":"stolenveil","level":5,"faction":"ALIENS"},"2db528b8d2f348d88be0164bb0d403c9.c":{"nickname":"crediblethreat","level":5,"faction":"ALIENS"},"2b6661ddceeb4e9e8a1a1ef2db598fb8.c":{"nickname":"BobOBob","level":5,"faction":"ALIENS"},"9b1681911ed84437b2a4a534b98c56af.c":{"nickname":"osoblanco","level":5,"faction":"RESISTANCE"},"3317e2b6c9364951be9b21fca5038c52.c":{"nickname":"armida","level":5,"faction":"RESISTANCE"},"680789fdfa2245999904e9e989d4a0f8.c":{"nickname":"SilverMonkey","level":5,"faction":"RESISTANCE"},"f305201c30d34d7da7a59d089d7a9e3c.c":{"nickname":"Plethora","level":5,"faction":"ALIENS"},"cf46603f79374bec9d8f5bb2ba8b019e.c":{"nickname":"CristinG","level":6,"faction":"RESISTANCE"},"ea596a3f4a6946c6bd0cca515701fab4.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"e4bd851356474f2cb72468b89972c748.c":{"nickname":"jsnow","level":6,"faction":"ALIENS"},"de04ffb95630491d87a1789f1e48f972.c":{"nickname":"Tolkien","level":6,"faction":"ALIENS"},"30fc695795fb46d5bbbb1db7a078ec54.c":{"nickname":"ilarym","level":6,"faction":"ALIENS"},"524804a179e84e1a99e382f71f49a23e.c":{"nickname":"OnePercent","level":7,"faction":"ALIENS"},"9a00f357582644a39ba4b85a63e55262.c":{"nickname":"Whimsey","level":5,"faction":"RESISTANCE"},"c554c04c8e644fab9529ea494b2dff19.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"8c958e803a6942718691a42bb8eb4e2c.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"2a42f81569354ff7986ab154883fed7f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"b38d9a32bf124d22af0c1d59e7609ffb.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"8c4c2cd8c4c64d1085ac64f3bfc2fca2.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"f844206e754947dcb1bd183af131b85c.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"3ea7cc35a0ab4c1ba6c9b02baadcdcca.c":{"nickname":"kion","level":5,"faction":"RESISTANCE"},"3562cf64a1da4ca2a811fd168ac08c2a.c":{"nickname":"Olivetta","level":6,"faction":"ALIENS"},"be4903e709d44aafb98fbf357b200b59.c":{"nickname":"dikexin","level":6,"faction":"RESISTANCE"},"8d2fe7e157ca4212a86e213de492a699.c":{"nickname":"fate","level":6,"faction":"RESISTANCE"},"69bf5f80533c4c96863292d4513722d4.c":{"nickname":"plusev","level":7,"faction":"ALIENS"},"ddb0521cbf89421fb5e1d113358e8abc.c":{"nickname":"mundacity","level":5,"faction":"ALIENS"},"0565065d153244e28cdd665ef83164f1.c":{"nickname":"piccolo831","level":5,"faction":"RESISTANCE"},"695212130a71489f9e859d88aa02a443.c":{"nickname":"Bellemorte","level":5,"faction":"ALIENS"},"979e2613783443628ca19e63ead1e58d.c":{"nickname":"Apollo","level":7,"faction":"ALIENS"},"117d75db23704e66988937b7a3393c6d.c":{"nickname":"seahorse","level":7,"faction":"RESISTANCE"},"f40ee99fe2884da6a17d15974eeef524.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"b0a6d6ea8b424dd682efeb36e687997f.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"929775a9ba1e44e8a03fdafe92894e8a.c":{"nickname":"WuzzaBear","level":5,"faction":"ALIENS"},"740ead21848345fba9adf52cb23357ba.c":{"nickname":"AxialGentleman","level":5,"faction":"ALIENS"},"ad72cee95ca8400c91144eba34647e86.c":{"nickname":"UKThrill","level":5,"faction":"RESISTANCE"},"1a52ea5712a54a5590dae046a4c47f61.c":{"nickname":"RylisPro","level":7,"faction":"RESISTANCE"},"c9bb0c94bd144bf483d2cc22b884e877.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"e15fcebaa2df4297a37dbbd40a6c74d0.c":{"nickname":"SnoWake","level":6,"faction":"RESISTANCE"},"76789db11e3f4171b58ecfd3bb435040.c":{"nickname":"morfino","level":7,"faction":"RESISTANCE"},"fab866aaf609430c8cd116d72c5ca86c.c":{"nickname":"RobotHero","level":5,"faction":"RESISTANCE"},"be914319969a4a87bdc553a890c4e6ff.c":{"nickname":"","level":6,"faction":"ALIENS"},"1afa0a3ed070449584c38b3583da7564.c":{"nickname":"brandroid64","level":7,"faction":"RESISTANCE"},"4ad3b1a23ffd49139b553a2ce4253219.c":{"nickname":"DblTapered","level":6,"faction":"ALIENS"},"11b28f92281c433e99d424c27d344157.c":{"nickname":"XY662FYV","level":5,"faction":"ALIENS"},"a86d2c63029244e4a177a1beca808587.c":{"nickname":"daravinne","level":5,"faction":"ALIENS"},"09c3d153e56e4918b87bab2a1257a4a3.c":{"nickname":"","level":6,"faction":"ALIENS"},"39c4997ed5654adab8c71f4a25514eb5.c":{"nickname":"","level":6,"faction":"ALIENS"},"a80242843d2144009d76733457260294.c":{"nickname":"","level":6,"faction":"RESISTANCE"},"17c228fd43754de6b14f047b0966461f.c":{"nickname":"","level":6,"faction":"ALIENS"}}
  }
}

var resonator_energy = [0, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 6000]

//collect all relevant portal info into a global variable for use when creating the table.
function CollectPortalInfo(a)
{
  if (("result" in a))
  {
    if (typeof a.result == "object" &&
        "map" in a.result)
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
              if (properties.portalV2.descriptiveText.TITLE)
              {
                  portals[guid].title = properties.portalV2.descriptiveText.TITLE
              }
              else
              {
                  // For example http://www.ingress.com/intel?latE6=42731743&lngE6=-84476957&z=19
                  // Shown as no name in map, but [Unnamed Portal] in comms
                  portals[guid].title = "[Unnamed Portal]"
              }
              portals[guid].address = properties.portalV2.descriptiveText.ADDRESS
              portals[guid].latE6 = properties.locationE6.latE6
              portals[guid].lngE6 = properties.locationE6.lngE6
              portals[guid].region = getRegion(guid)
              portals[guid].intelLink = "<a href='http://www.ingress.com/intel?latE6=" + String(portals[guid].latE6) +
                                        "&lngE6=" + String(portals[guid].lngE6) + "&z=19'>Link</a>"
              portals[guid].coords = String(portals[guid].latE6 / 1E6) + ", " + String(portals[guid].lngE6 / 1E6)
              portals[guid].level = 0
              portals[guid].resonators = ""
              portals[guid].numResonators = 0
              portals[guid].players = ""
              portals[guid].avgResonatorSpacing = 0
              portals[guid].actual_energy = 0
              portals[guid].max_energy = 0
              if (properties.imageByUrl && properties.imageByUrl.imageUrl)
              {
                portals[guid].imageLink = "<a href='" + properties.imageByUrl.imageUrl + "'>Link</a>"
              }
              else
              {
                portals[guid].imageLink = ""
              }
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
                  portals[guid].avgResonatorSpacing += resonator.distanceToPortal
                  portals[guid].actual_energy += resonator.energyTotal
                  portals[guid].max_energy += resonator_energy[level]
                  var data = {}
                  if (typeof players[resonator.ownerGuid] == 'undefined')
                  {
                    data = {"guid": resonator.ownerGuid, "level": level, "faction": portals[guid].faction}
                    players[resonator.ownerGuid] = {"nickname": "", "level": level, "faction": portals[guid].faction}
                  }
                  else
                  {
                    if (players[resonator.ownerGuid].level < level)
                    {
                      data = {"guid": resonator.ownerGuid, "level": level, "faction": portals[guid].faction}
                      players[resonator.ownerGuid].level = level
                    }
                    if (players[resonator.ownerGuid].nickname)
                      portals[guid].players += players[resonator.ownerGuid].nickname + " "
                  }
                  if ("guid" in data && serverIsUp)
                  {
                    $.ajax({url: "http://ec2-50-112-48-5.us-west-2.compute.amazonaws.com/jsonp.php?request=storeLevel&callback=?", dataType: 'json', data: data, complete: callback2, timeout: 3000 })
                  }
                  players[resonator.ownerGuid].resonators = (typeof players[resonator.ownerGuid].resonators == 'undefined') ? 1 : players[resonator.ownerGuid].resonators + 1
                }
                else
                {
                  portals[guid].resonators += "0"
                }
              }
              if (portals[guid].numResonators > 0) 
              {
                portals[guid].avgResonatorSpacing /=  portals[guid].numResonators
              }
              if (portals[guid].actual_energy > 0)
              {
                portals[guid].health = Math.round(portals[guid].actual_energy / portals[guid].max_energy * 10000) / 100
              }
              else
              {
                portals[guid].health = 0
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
        if (typeof players[guid] == 'undefined')
        {
          players[guid] = {"nickname": "", "level": 0, "faction": "UNKNOWN"}
          if (serverIsUp)
            $.ajax({"url": "http://ec2-50-112-48-5.us-west-2.compute.amazonaws.com/jsonp.php?request=storeLevel&callback=?", "dataType": "json", "data": {"guid": guid, "level": 0, "faction": "UNKNOWN"}, complete: callback2, timeout: 3000 })
        }
        if (typeof players[guid].nickname == 'undefined' || players[guid].nickname == "")
        {
          var nickname = a.result[i].nickname
          players[guid].nickname = nickname;
          if (serverIsUp)
          {
            var data = {"guid": guid, "nickname": nickname}
            $.ajax({url: "http://ec2-50-112-48-5.us-west-2.compute.amazonaws.com/jsonp.php?request=storeName&callback=?", dataType: 'json', data: data, complete: callback2, timeout: 3000 })
          }
        }
      }
    }
  }
}

function callback2(response, status)
{
  if (status == "timeout")
    serverIsUp = false
}


var REGIONS = {'SF - FiDi' : [37.794683, -122.398424],
               'SF - GGP' : [37.767916, -122.476466],
               'SF - Mission' : [37.759046, -122.409629],
               'SF - Sunset' : [37.74278, -122.485225],
               'Oakland' : [37.837028, -122.267815],
               'San Mateo' : [37.563538, -122.325053],
               'Palo Alto' : [37.4414, -122.1578],
               'Mtn View' : [37.393232, -122.077812],
               'Sunnyvale' : [37.39025, -122.031046],
               'Cupertino' : [37.321643, -122.043707],
               'San Jose North' : [37.381656, -121.899831],
               'San Jose South' : [37.272044, -121.890409],
               'Fremont' : [37.548608, -121.987784],
               'Hayward' : [37.6708, -122.089617],
               }

function getRegion(guid) {
	best = 25
	closest = '-'
	for (var region in REGIONS)
	{
		dist = getDistance(guid, REGIONS[region][0], REGIONS[region][1])
		if (dist < best) {
			best = dist
			closest = region
		}
	}
	return closest
}

function getDistance(guid, lat2, lon2) {
  var PI = 3.14159265859
  var R = 3959 // Radius of the earth in miles
  var lat1 = portals[guid].latE6 / 1E6
  var lon1 = portals[guid].lngE6 / 1E6  
  var latDelta = (lat2-lat1) * PI / 180
  var lonDelta = (lon2-lon1) * PI / 180
  var lat1Rad = lat1 * PI / 180
  var lat2Rad = lat2 * PI / 180
  var sinHalfLatDelta = Math.sin(latDelta/2)
  var sinHalfLonDelta = Math.sin(lonDelta/2)
  var cosLat1 = Math.cos(lat1Rad)
  var cosLat2 = Math.cos(lat2Rad)

  var a = sinHalfLatDelta * sinHalfLatDelta +
          sinHalfLonDelta * sinHalfLonDelta * cosLat1 * cosLat2
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  var distance = R * c
  return Math.round(distance * 1000) / 1000  
}

function getScores() {
  var scores = {};
  for (var guid in portals) {
    var portal = portals[guid];

    // If anything's not defined, skip
    if (!portal ||
        !portal.faction ||
        !portal.level ||
        !portal.address) continue;

    // This rounds down... seems like magic
    var level = portal.level | 0;

    // Initialize
    if ( !(portal.faction in scores) )
      scores[portal.faction] = {};
    if ( !(level in scores[portal.faction]) )
      scores[portal.faction][level] = 0;

    // Count
    ++scores[portal.faction][level];
  }

  var alertText = "";
  for (var lvl=0; lvl<=8; lvl++) {
    alertText += (scores['RESISTANCE'][lvl] || 0) + "\t" + (scores['ALIENS'][lvl] || 0) + "\t";
  }
  alertText += (new Date()).toLocaleString();
  document.querySelector("#graphCoords").innerHTML = alertText;
  document.querySelector("#graphCoords").select();

  /* Old, leaving here for now...
  alert("Portal counts:\nResistance L6,L7,L8\nEnlightened L6,L7,L8\n\n" + 
        (scores['RESISTANCE'][6] || 0) + "\t" + 
        (scores['RESISTANCE'][7] || 0) + "\t" + 
        (scores['RESISTANCE'][8] || 0) + "\t" + 
        (scores['ALIENS'][6] || 0) + "\t" + 
        (scores['ALIENS'][7] || 0) + "\t" + 
        (scores['ALIENS'][8] || 0) + "\t" + (new Date()).toLocaleString());
  */
}

function gatherCoordinates() {
  var filteredData = portalDataTable._('tr', {"filter": "applied"});
  var latLongs = "";
  for (var obj in filteredData) {
    latLongs += filteredData[obj].coords.replace(/\s/g, '') + "\n";
  }
  document.querySelector("#graphCoords").innerHTML = latLongs;
  document.querySelector("#graphCoords").select();
}

eval(String(Zc.prototype.constructor).replace("success:function(a) {", "success:function(a) {\n    CollectPortalInfo(a)").replace("function Zc", "window.Zc = function"))

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
      <td><input type="checkbox" name="level" value="0" id=lv0> \
          <label for=lv0>L0</label></td> \
      <td><input type="checkbox" name="level" value="1" id=lv1> \
          <label for=lv1>L1</label></td> \
      <td><input type="checkbox" name="level" value="2" id=lv2> \
          <label for=lv2>L2</label></td> \
      <td><input type="checkbox" name="level" value="3" id=lv3> \
          <label for=lv3>L3</label></td> \
      <td><input type="checkbox" name="level" value="4" id=lv4> \
          <label for=lv4>L4</label></td> \
      <td><input type="checkbox" name="level" value="5" checked="checked" id=lv5> \
          <label for=lv5>L5</label></td> \
      <td><input type="checkbox" name="level" value="6" checked="checked" id=lv6> \
          <label for=lv6>L6</label></td> \
      <td><input type="checkbox" name="level" value="7" checked="checked" id=lv7> \
          <label for=lv7>L7</label></td> \
      <td><input type="checkbox" name="level" value="8" checked="checked" id=lv8> \
          <label for=lv8>L8</label></td> \
      <td><input type="checkbox" name="faction" value="NEUTRAL" id=f_n> \
          <label for=f_n>Unclaimed</label></td> \
      <td><input type="checkbox" name="faction" value="ALIENS" checked="checked" id=f_al> \
          <label for=f_al>Aliens</label></td> \
      <td><input type="checkbox" name="faction" value="RESISTANCE" checked="checked" id=f_res> \
          <label for=f_res>Resistance</label></td> \
    </tr> \
  </table> \
  <table style="border: 2px solid red; display:inline-block;"><tr><td><span id="refresh" style="cursor: pointer">Refresh Targets</span></td></tr></table> \
  <table style="border: 2px solid gray; display:inline-block;"><tr><td><span id="export" style="cursor: pointer">Export Player List</span></td></tr></table> \
  <table style="border: 2px solid gray; display:inline-block;"><tr><td><input type="checkbox" name="FilterPlayers" value="res" checked="checked" id=p_res><label for=p_res>Filter Players without Resonators</label></td></tr></table><br/> \
  <table id="targetTable"></table><br/> \
  <table id="playerTable"></table> \
  <textarea id="graphCoords"></textarea> \
  <table style="border: 2px solid gray; display:inline-block;"><tr><td><span id="grab_coords" style="cursor: pointer">Grab Coordinates</span></td></tr></table> \
  <table style="border: 2px solid gray; display:inline-block;"><tr><td><span id="get_score" style="cursor: pointer">Get Portal Counts</span></td></tr></table><br/> \
  <span style="font-size:smaller">For pasting in here: <a href="http://www.darrinward.com/lat-long/">http://www.darrinward.com/lat-long/</a></span> \
</div> \
')
$("#refresh").click(makeTargetsTable)
$("#export").click(makePlayersTable)
$("#get_score").click(getScores)
$("#grab_coords").click(gatherCoordinates)


//Populate the tables with data.
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
	{ "sTitle": "Region", "mData": "region", sWidth: '120px'},
	{ "sTitle": "Level",  "mData": "level", sWidth: '60px'},
	{ "sTitle": "Health %",  "mData": "health", sWidth: '70px'},
	{ "sTitle": "Spacing",    "mData": "avgResonatorSpacing", sWidth: '70px'},
	{ "sTitle": "Resonators",    "mData": "res", sWidth: '70px'},
	{ "sTitle": "Mods",    "mData": "mods", sWidth: '100px'},
	{ "sTitle": "Links",    "mData": "links", sWidth: '20px'},
	{ "sTitle": "Fields",    "mData": "fields", sWidth: '20px'},
	{ "sTitle": "AP",    "mData": "AP", sWidth: '70px'},
	{ "sTitle": "MU",    "mData": "MU", sWidth: '90px'},
	{ "sTitle": "Intel",    "mData": "intelLink", sWidth: '35px'},
	{ "sTitle": "Image",    "mData": "imageLink", sWidth: '35px'},
	{ "sTitle": "Faction",  "mData": "faction", "bSearchable": false, "bVisible": false},
	{ "sTitle": "Players",  "mData": "players", "bSearchable": true, "bVisible": false}
  ]
  portalDataTable = $("#targetTable").dataTable({"aaData": targetData, "aoColumns": targetColumns, "aaSorting": [[ 11, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })
  $("div#targetTable_wrapper").css("border","2px solid #59FBEA")
}

function makePlayersTable()
{
  var levels = []
  $("input[type='checkbox'][name='level']:checked").each(function(){levels.push($(this).attr('value'))} )
  var factions = []
  $("input[type='checkbox'][name='faction']:checked").each(function(){factions.push($(this).attr('value'))} )
  var filter = false
  if ($("input[type='checkbox'][name='FilterPlayers']:checked").length)
    filter = true
  var playerData = []
  for (var guid in players)
  {
    var player = players[guid]
    if ($.inArray(String(player.faction), factions) == -1)
      continue;
    if ($.inArray(String(player.level | 0), levels) == -1)
      continue;
    if (filter && typeof player.resonators == 'undefined' )
      continue;
    player.name = player.nickname ? "<span title='" + guid + "'>" + player.nickname + "</span>" : guid
    player.resonatorsFound = (typeof player.resonators == 'undefined') ? "None" : "One or more"
    playerData.push(player)
  }

  var playerColumns = [
    { "sTitle": "Name",   "mData": "name", sWidth: '230px'},
    { "sTitle": "Level",  "mData": "level", sWidth: '60px'},
    { "sTitle": "Resonators Found", "mData": "resonatorsFound", sWidth: '200px'},
    { "sTitle": "Faction",  "mData": "faction",  "bSearchable": false, "bVisible": false}
  ]
  $("#playerTable").dataTable({"aaData": playerData, "aoColumns": playerColumns, "aaSorting": [[ 1, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })
  $("div#playerTable_wrapper").css("border","2px solid #59FBEA")
}
