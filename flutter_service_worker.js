'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "555a75d2c81e6428818b2d38b9b8f044",
".git/config": "9121b36c1cea91329d01547512513520",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e1b38eb77d07cf7ddfbbf73e923f52ff",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7ccbd34b339034016c7a5ec0041d8a17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "352778e2d60754737dccf2ff31bd2551",
".git/logs/refs/heads/main": "cb4895e319e6a4792a39918de329afce",
".git/logs/refs/remotes/origin/main": "9ef78c82c5198db3dc4997894fbba70c",
".git/objects/00/db2e0bd907301fddf9d64a8b5d6bc6bd606621": "74f982769e65b298a126564514aa0cf1",
".git/objects/02/f57843cf5c836dcd349ac53e093c7a0cf4ebd8": "6dfcca116ea403b7626dd4f8ac2f1ed0",
".git/objects/05/c49b5d6f1764266566c1219c10cc88d3d121c0": "54ad520b7afb1982d63d04bf202beb04",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/eb2f731f42a94106e5452103de3ad3737b2f1e": "4f098385ed6d3ed964a1dde2769ec7b0",
".git/objects/09/27b8133cfc1ed1c326677f8f1275fae4529606": "a610c88a483a5433f49298b8a9c2bfdc",
".git/objects/09/ac12e5e5e317bc317bb83a9a713ab4d01236ce": "5f9e98f4ee6d033666b9a823d124b588",
".git/objects/0b/27b2208750172d732a850b62c4de2a2694d9bf": "5fdced8efbb983a65ea655586607b0ee",
".git/objects/0b/5fa7973d374325f33ff36ba2932195f41ec2a3": "b827c6c6aa546dac68d37341b7b803a0",
".git/objects/0d/f4bf6a86b58a799fc94802fc6cbf83ff003ccb": "b6bffc4679bdc04bc00962a40c1b1bea",
".git/objects/10/cfb2f0b772c7ff0a19ec07c61ffe299eec80d3": "fdf553613d0214354551449409669998",
".git/objects/13/c50f4ee9e81e62690194afc822f441cb5e7ff0": "9195890da0dc6ad999e45633e92b3cb1",
".git/objects/15/f60ad78496a32eaaf1b1445910b6d22433461d": "98af5cd5ef4d4dd961b06dcdd1ef85db",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/18/c1c5449811b32fe30b50c85e3e981f3f27afeb": "9321d45e8312483098f8a45f5130390b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/a4f42362c01af1dc6ac3576a651f42624c72b0": "f844d6fa68133f0a99e180981ca1767a",
".git/objects/25/78fb51b7e34f857e6bbcf44ed164e68cf6b90d": "5d04b21ba7f66aba1342f457c3af14eb",
".git/objects/26/7c40ef3814826625848dcf5bcb023ea953a283": "adc64b991aa4b279dc7efff9719a9e52",
".git/objects/2f/076f5e455a00b6a07c438e4f3a7d9a02822b6a": "2c42ee1333d95c8015bab0ebe92f55a5",
".git/objects/30/5a93340ddd0875506f306cd906e6658691ab9c": "8a332a4ff2f722edb27472290115191d",
".git/objects/32/20d8abf2c98cc7a8a63c5ba53afb2c0fdf9627": "cfee6a421b7e888ff27a8afd7dcef482",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/a0c3274deec4a25cf84269cdf9363b121e8453": "703b758033d66438e9db0fd0e6633ca0",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/20b67b4ad0625ce3e806e12a8b4ca921cd3415": "91022420501a3e94fb66585d4bf22a0b",
".git/objects/3f/1c3910c471e7fa46fefdb05bdce1edc9af5998": "26c351176ca3230b539be366a7b87bfa",
".git/objects/3f/3a1d25b1356b77b898fd2db7fbf32d8f91c233": "3d2db07257dba9454e400560f6344d66",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/44/988328383c31fce77f63e5ad180dcee18a9a8b": "460806083351bd32389e1967d1e56ebe",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/b1dd119d5a2bcb91bbed7ee8f8d137497148e9": "050298faddd04c7bef7eb80fc9fb0e27",
".git/objects/46/294cd0f27c755f5f5771f78488d626d79176ec": "bec87e1db01df78194c7645c3b3210ec",
".git/objects/47/d7c7fe9a48624a5e165587afbb68f4af5c2699": "b407fc810351077b4282cd6d7400f468",
".git/objects/48/bd1ba1af3d3eba8ac5302ea59d1eeb0b301da7": "f17367c94c1a67740ac82e09755c55f8",
".git/objects/48/d0de1e9baf53019d25b84fbf841c8e13938005": "ebbaabe03abbe8e36b0b6204d02221b1",
".git/objects/4c/2402efb3abd4c42944dacd564e8acfeaeeab9d": "3fd9fa0329f73b9f54b3c6687cc88abf",
".git/objects/4c/498b46508541e87df76e834fb2a1992c947510": "85f87e7f499a0b55b3529dfa15ac7669",
".git/objects/4c/59d861872842ea49a4ec8241ef5e197901df61": "717e362a317cef43b76be3905344cd3d",
".git/objects/51/1fd92b425f9ed81086778a373264f2ec103401": "4a79277314bcfb580b546b8c7260756c",
".git/objects/56/eb1ed3ae2425309e7d9bd1c6b395545cacc6c7": "4631da976f74e92eab9430728a98dc91",
".git/objects/64/159a965cb973a1678914c7de28bb41caca5b52": "ad7927e56f4f9e324699777a0facc2f7",
".git/objects/65/23ffc3b1a0b3bf301de913519adc0937440b01": "b8c51b796c438cbd0a7a004f27001dc4",
".git/objects/65/d532bb36720588fc83169add3873bf15bea922": "f0201ac7461f38f12a43a77d829f3dbd",
".git/objects/67/3b985246d03259e0a6a400035009ea266a26dd": "7a798384d179fe60c6564b179433fc22",
".git/objects/6a/2c9d4c1f242183b5e005bc9c46343754a65982": "78809a2a2c9316ffcd81b6342cb4c1b7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/005671f63de0134d65489dbcca38171b67100f": "25b82dd3c8210421edf0080637254ee1",
".git/objects/6f/bfad1ade1ac4e4e4aab8040ec8961a21916fa9": "01964d39b4651fbfab77f42eadab8818",
".git/objects/75/5d653c652e2be7142b0f50afac4493f9ba69cd": "0c1d9249bab21da4ea673ac0b8f429b5",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/7a/f9fb4420e3851e67c228388a491b908d08b63b": "c3fddd40d590a847ae43452253325766",
".git/objects/7d/085bba948901e1f61812a5bff6082591506ca5": "73b494a798e962b4febfa8544d1b481a",
".git/objects/81/7a0b8ec612775293a88da40606acb517e547ec": "51219aa04d51c482c3fe43d0832451c0",
".git/objects/81/cc32631f1602c3e2e8e32a2a8d1f16c32b3043": "e21e9d4e6341f11611e04986e62ac5d8",
".git/objects/82/8ed0a70b063272f4431aaee5e48202828a5e40": "750be09133a440604517755c8830f6ec",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/b2539406cd93f9aff24809ef62223bab691581": "201a99c1052bc64c819c1b1a68f4a5c7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8c2430113d0a801cee9850d701f10213e2908f": "eb24e72b6b5d54568e8a0478216f2fb3",
".git/objects/86/a53b41e0b428ae07aebcf8083ae497e385438c": "ddbeff70344df5d10443462576b9f67f",
".git/objects/87/46c57477af2faa247d386a37406ed46c7f1f4b": "8ace45d28a6b3e8351cad2b51dccf8ea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a56c1771aa9e07aad4509a7274b4fb1a1cae3e": "db816259985f492de3a14379d54edbf4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4cbb48d4d9724877257080e12d88007412cce7": "8cbb8edf0324f6e6b6859b4f3692ab47",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/4f1bc5dcf341d776301633fcf368dd2403426e": "3a52350b57f20269f917366995e2476c",
".git/objects/92/fc3013c2283ccd5c4d8cd47f391d0434ddbbb5": "db000bbd38ffa675794ca937c89bc030",
".git/objects/95/942696c08eb58be8627da29e575e3125c1da7b": "955cb3a8abb87fa5a14677c2b924834e",
".git/objects/96/a83597e76f08ca72952c3e0b55cf621c817ff6": "6a543486435698a96162d8a606abf1da",
".git/objects/97/14009df6ae2cdd93239dd88b4e835789751ef9": "f0b8f9e18cdf0ba81d7e8c3b87014387",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c10f11e0e8003c07426eda037604dfe67f1aa9": "20147db378af6001bbb5191b6471b20f",
".git/objects/98/f6292f7c8f828a8ef8d49e2245aa34b9c860f5": "699ccbb02e61e9789942f515d77d6ddf",
".git/objects/9a/6315e59fae1dc6aa8541e3fa6aac491fe4a4ba": "f0e7669660f0c2ae3f245fe27a8b8142",
".git/objects/9a/c1fa4fcd9d7871aad97077ca9b09c0f24fa040": "c8a07f6f6fdc4ac3c5d7e53a33a1d5fa",
".git/objects/9b/2626a34fb779263f6ab9b0735d2e1280efa8b6": "e8d191d7f3938494af4c4384914cab26",
".git/objects/9b/7db28cf9b1a9bbb660e30e451d2f0cf4a3fdbc": "8efa0b0d520824cb8ed867979442c7ce",
".git/objects/9f/468ce009695e6748e495fc29954ea7c8c88608": "47e0e6b529933329227b4ad05ea7bb94",
".git/objects/9f/df5c37711f80c87492d7cf1e0177c9058c4aec": "f7dc14e4ae56b90d9d8a17a572f2420d",
".git/objects/a2/7b12fd75018aa6f05cacecda85f43b31494520": "9c4b7b2f49fc456425c0410d85b9af38",
".git/objects/a2/ccc8627689b22fae9d9aeecc105fb8bcd277c0": "be3e18a15be3417d8402840d5878c441",
".git/objects/a3/8faca22d1c9b12da84a8ba8f891c69bca34e19": "f9b7e7c1942d4ee5b06b28b882d553e6",
".git/objects/a5/5658928641323c0bb4e104a67de7ff756ffae9": "83862cc2a9084476d5e527dbaa6b80ac",
".git/objects/a7/3f9ed36da2223e8c657e13be677aba6e94acd7": "e40bb9b90159269c25c9a933573837d7",
".git/objects/a9/d3af727c28e8b4069101338169bad796964baf": "0ef3dac3629e6ecf3be062b7b14e2857",
".git/objects/ab/531a759f9719d1209658ce357ee44a74a2d2b5": "34df767f3e7f3b4b25f506d4e9246357",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/04df356d857bfbd6a6096d3e44dadb80460d96": "1107c6791a5b91804fc5bb718663b123",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2f99a7ee6a1b007f224c645324a281f64e6f24": "8f504f80addadebbb1b03f10ab9a4ed5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/4575ac86177377a69e594f817896809563dd69": "fd786493180f5b40cf3626b3c4dcbb30",
".git/objects/bb/74a91ff31abecc9a79cda941de0995f0180ddf": "548f8895fad8638994e3f90268ff72c8",
".git/objects/bf/6c47169f722741326470e1fb228a4a709d540a": "5fe43675446ea6323738bfba1bd6b945",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c1/d6954ca3ceb4b51a3a326a1b066e200cb208c9": "b622a5e3b913a0610d01e83f48bd5ad3",
".git/objects/c3/d5464355b9eb277554dfd2b69a4f3153e06e7c": "9404c4031ff09accb276e7a7f7c3197f",
".git/objects/c6/0836677b311310ea44d70205bac6bb0d00b365": "ed6161cc80d5b6cd525743bbc8e40b3d",
".git/objects/c7/ca682137f3e058c76977e17fc2b0eb108c05cb": "82d12f86b756888571a4151a8f69d392",
".git/objects/c8/da8d27a6cbc0c407ae2b04c7e568e34e8f5acb": "43040beea435ddb454dbe0449e10a733",
".git/objects/c9/0d3ba47062ed6dd4267878c77105dab5448201": "df0f1a81ffc33a4c8b17f713900dd475",
".git/objects/c9/68c780216a8956d42a515f62669c9f6c94eb25": "d8100e403b606509018d4c937508b359",
".git/objects/ca/00b0cf885708697da04f8a2ed279af5465ae6d": "884c0b8862033a2a92fb6f9fc0b15c23",
".git/objects/cc/a59ed1851c6bfe234f45bb1c9504fc73f54dd4": "f603c290f29e677936eefc14820d307c",
".git/objects/cc/e23a2eecb21b8278948e09a793c65cd76c9d22": "ae70c68754f9dafa33946ec0c7476d18",
".git/objects/cd/10df99efb3b13c89e0f143dfa941aef64a3e73": "46b0092fa5920c56623f360ead5e4e55",
".git/objects/cf/f3cebcdab38622c0e4c8e9ef9990ace0f1b063": "c99d8004b3aa66663413cc99f2dd5cda",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/f75ed5140ef264fc447c5004befe58422e275c": "f06cbd8fc44a2f6cf5a8f84b55ccd057",
".git/objects/d4/0651a6b1b751878173885871f221d5aa842385": "08f2b75109b53617f8c084c7dd157363",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6936fabcc3a02220ebaecae9b510531c9c1ae3": "6a34ed6cf99189f9157f9835df447d25",
".git/objects/da/ac56de0460b1604cf07eb2eedd5359da78f16c": "ef2bd1d4aa809264d36e6b2f616b417c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/433349b7047f72f40072630c1bc110620bf09e": "9361f2ddd0544e138d58e5ddcb235916",
".git/objects/dc/100f2d9376f35b27c71333de284ce8f288f3cb": "3da9d1a7bf5e576626ba3562af2a5ab5",
".git/objects/de/be410186fbbce9912e2cd5b8a99d972dac3da9": "3e8506a6837a1ad82853a2b195921277",
".git/objects/e1/26040b197971566b8f288ad1603300898186e7": "5671ffdcda1cd4a25ef0656fc4dbce56",
".git/objects/e3/3afd43473e10754779197293464292358090d0": "e08f61245169235aeb83666a6504c98e",
".git/objects/e7/349743fb78689e6285fc3bb2ed610d5b789189": "0c405557689eb510f568c733a9d0facd",
".git/objects/e7/9c588b15e9431bdecfac7fa29bca891966ffab": "f4ba0685fc09558d8b6cbc90d7df4436",
".git/objects/e8/cc0c8d12321ba970266c8b594f636f72083d00": "002eceda176206a18fa583f38337f78d",
".git/objects/ea/124846459704f8b325803e67c86b12078fdfd5": "addb38cdabcc76c38fe093ba6a68bf53",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/de7dcfe8f8cb79c9c99bb6a6395c37bd466597": "c10c9c77670dee32ac265d544d04d131",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/112265202ca5e61d87701a3913835c5efe7066": "ee01cc290f71d4e6bc58dd44eb82c675",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/fb/62f0b2a6fd547e2125980eb24ce0e2e67dcd32": "ad24cc534f2286854a8a6e2773e771ce",
".git/objects/fd/4b6b8e1e932e1cf36cc824b46452bbe8d9a4f8": "d2059e486c4d555781ff36e539f9ed4a",
".git/objects/fd/787a81c3e608898214c09e62216eefa8f2ba90": "ffec126c6bfda0bcc1ee33fc3e64bcf3",
".git/objects/fd/d23880c33f84870f5c40575dbc5784f672d04d": "c997c93aa377f30c4690373ccf6dd413",
".git/ORIG_HEAD": "6abf3edc4df984e9ce7e0fbd53a38243",
".git/refs/heads/main": "842c85e25d225d38bc5fb885f76f6c3d",
".git/refs/remotes/origin/main": "842c85e25d225d38bc5fb885f76f6c3d",
"assets/AssetManifest.bin": "f5a0caf62c0ac5ff3bfd997556adede1",
"assets/AssetManifest.bin.json": "e448b68a82aec624a9426b1626bf7522",
"assets/AssetManifest.json": "e71c6b2f8334c95502385bc700b3a3f7",
"assets/assets/default-user.png": "2f15f2e8c688b3120d3d26467b06330c",
"assets/assets/error.gif": "9455f33e221b056e8f6ec8052eb61b1f",
"assets/assets/img.png": "ce0ea8670f2629d4a263b9b230f8dc06",
"assets/assets/img_1.png": "b1d54156f309829ef2e50f2b78c0abff",
"assets/assets/layout_1.jpg": "2112f3a50845b5cc4b369f9a962ba787",
"assets/assets/layout_1.png": "d2512cdc411ad1c9285a1a0771f3ddea",
"assets/assets/layout_2.jpg": "f192d383fff1946896ee5306efe200cd",
"assets/assets/layout_2.png": "4fdaaab910af7c4fe7fb0d45837c66a5",
"assets/assets/layout_3.jpg": "137833f6b5d0b0738409a0805266e5be",
"assets/assets/layout_3.png": "fd60dd30cd93ee947116b650139489aa",
"assets/assets/layout_4.jpg": "a051dad27a048ad0d31f3a57679a1153",
"assets/assets/layout_4.png": "7c3fc4d3f6416c80723eff404646ca98",
"assets/assets/layout_5.jpg": "17ae04365101427eee32796d6f8c4cae",
"assets/assets/layout_5.png": "70399726775dd81bb2b2b381e3a017a8",
"assets/assets/layout_6.jpg": "42da79778b2257a3b43c5c3eafa44313",
"assets/assets/layout_6.png": "65e82e8638f7d7efd20f2e9143cfa4b2",
"assets/assets/logo.png": "aca698fb0391783b6460e55dc340723f",
"assets/assets/question.gif": "7efb9b05094e608dfe33f9789d391886",
"assets/assets/success.gif": "8c254ae63d8e0968ad0a9d2034b9d28a",
"assets/assets/warning.gif": "38c5238a7da1aa2732f8bb445ec5059a",
"assets/FontManifest.json": "0cd1bf945ed8e4c380bc01248ec38767",
"assets/fonts/BeautifulPeople.ttf": "894b3ff6db3e97ef001117d8c9924a28",
"assets/fonts/BeautyMountains.ttf": "c59a76cf566cf6583bcca2d201deb7b8",
"assets/fonts/Billabong.ttf": "52b04f1c2bd73f240b4ad620924a40c9",
"assets/fonts/BiteChocolate.ttf": "8368b26ff49587e717f6eabc589b439a",
"assets/fonts/BlackberryJam.ttf": "c6b7ba1dc1c80e00e6c17ac72eb753cc",
"assets/fonts/BunchBlossoms.ttf": "9d28feb1d23d6cfab7cb344a9ef3c57b",
"assets/fonts/CinderelaRegular.ttf": "6edb644ec28809e6b210ac2e0f6f85fb",
"assets/fonts/Countryside.ttf": "1a3cffa9306fa82ed542195bd55f320f",
"assets/fonts/GrandHotel.otf": "12b13e1fb62fe03b9039600c319d52b9",
"assets/fonts/Halimun.ttf": "316ee285f7fbbf7d9b6781e4daa2a02c",
"assets/fonts/LemonJelly.ttf": "9c6d8216ee966bccd5cdc68cee121903",
"assets/fonts/MaterialIcons-Regular.otf": "89b2ac065b6976f7c1e9620b1499fa7b",
"assets/fonts/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/fonts/Montserrat-BlackItalic.ttf": "a67f4df02f4d73bb8bfd5bff421e4d1f",
"assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/fonts/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/fonts/Montserrat-ExtraBoldItalic.ttf": "8a4a6844448e210672d54f8b32932ee9",
"assets/fonts/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/fonts/Montserrat-ExtraLightItalic.ttf": "9c3e2f21cc8fba26dc3da67e89a9365d",
"assets/fonts/Montserrat-Italic-VariableFont_wght.ttf": "87a9f36eac8c031aff3af3957a14e81e",
"assets/fonts/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/fonts/Montserrat-LightItalic.ttf": "c54486c33610a1fca147afc18af3034f",
"assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/fonts/Montserrat-MediumItalic.ttf": "2ed625fc9f039d801a5aab9b6f9cd8ef",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/fonts/Montserrat-SemiBoldItalic.ttf": "75c4176c64611f32faf01a5de7631877",
"assets/fonts/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/fonts/Montserrat-ThinItalic.ttf": "ff9c45e92d16324b8964447d12d1f458",
"assets/fonts/Montserrat-VariableFont_wght.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/fonts/OpenSans.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/fonts/Oswald.ttf": "e605f2f859072ed0443aeda5adec4181",
"assets/fonts/Quicksand.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/fonts/QuiteMagicalRegular.ttf": "31e85cbb9bd96ff4e117f099955f9c6b",
"assets/fonts/Tomatoes.ttf": "5eeaab6850aab5765ef94b0b34904267",
"assets/fonts/TropicalAsianDemoRegular.ttf": "fdd5ba9f22852caf617de932a0326166",
"assets/fonts/VeganStyle.ttf": "bcbde461b1330354c7d28f90910e4a2d",
"assets/NOTICES": "6f725322951925feb5a4ce2a7d437fe5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "de68a32dd1026a880a204905bea598ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "7822fe1f6dfc0a11cd0d2568e27731a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "752e3b9dcb4a100fdac5c5400a28d023",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "aca698fb0391783b6460e55dc340723f",
"index.html": "4b0c187abcf7ea12e0f3d5525bd81237",
"/": "4b0c187abcf7ea12e0f3d5525bd81237",
"main.dart.js": "f9cbac5bee2f6cd2608c1d5a9a43c948",
"manifest.json": "61b84cba9c393439c5ec0a8b51fee900",
"version.json": "64b56d209c04024511a6094b3d99d5b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
