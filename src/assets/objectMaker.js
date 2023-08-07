function createJson(x, y){
arr1=x.split('; ')
arr2=y.split('; ')
var finalString="";
arr1.map(num=>{
   finalString =finalString+"\""+num.trim()+"\""+":"+"\""+arr2[arr1.indexOf(num)].trim()+"\""+","
})
finalString=finalString.slice(0,finalString.length-1)
return "{"+finalString.trim()+"}"
}
    var x="Home; Reseller Pricing; Registration; Guzunlocker News - Updates; Login; Useful Links; Contact Us; Subscribe; Don’t miss our future updates!; Get Subscribed now!; Connect With Us"
    var y="Ev; Bayi Fiyatlandırması; Kayıt; Guzunlocker Haberleri - Güncellemeler; Giriş yapmak; Kullanışlı bağlantılar; Bize Ulaşın; Abone; Gelecekteki güncellemelerimizi kaçırmayın!; Hemen Abone Olun!; Bizimle iletişime geçin"
  

console.log(createJson(x, y))
 console.log(JSON.parse(createJson(x, y)))


 function createObject(x){
    arr1=x.split(';')
    listObj=[];
    arr1.map(num=>{
       var obj ={
        key: num,
        ImagePath: ""
       }
       listObj.push(obj)
    })
    return listObj
    }
str='';
console.log(createObject("MDM Bypass Services;PUBG Purchase [ UC ] Top UP;PUBG: NEW STATE (NC);PUBG Mobile UC GLOBAL(PIN) PROMO For Limited Time;Pubg Game Credits DIRECT TOP UP [ UC ];Free Fire Pin;PUBG New State PIN;Free Fire [ DIRECT TOP-UP ];Instagram Services;PUBG UC DIRECT TOP UP;Unbarring;ROBLOX USA;ROBLOX CANADA;Amazon UAE;Amazon USA;eBay;Google Play USA Store ONLY;Google Play UAE;Google Play KSA;Google Play UK;App Store & iTunes USA;App Store & iTunes KSA;App Store & iTunes UAE;App Store & iTunes CANADA;Steam USA;Steam Wallet Card UAE;TikTok Services;Mac Service T2/M1/M2;AlseerY-UnLocker;XIAOMI;Phoenix Tool (Nokia HMD Reset PIN / FRP / Flash);ZXW;VR Bypass Tool;Us Reseller Flex Policy;Z3X;XinZhiZao schematic program;United Kingdom Networks;Xiaomi Fire Tool- XFT;ICloud Slow Removed;WUXINJI;iCloud Remove by SN IPADS ( Instant );VR bypass;iCloud Remove by SN IWATCH ( Instant );USA - Xiaomi Auth;iCloud Remove by SN IPODS ( Instant );UnlockTool Activation;ICloud Relock;Trading View Premium;IC 100% PList/Token IPHONES;The Magic Tool [ Motorola Unlock ];IC 100% PList/Token IPADS;T-UNLOCK TOOL;IC 100% PList/Token IWATCH;Spotify;Sigma Plus;Open Menu iCloud Removed ( IOS 14 - 15 );AT&T USA NETWORKS;SHARK Tool;T-MOBILE - SPRINT USA NETWORKS;Samsung Sim-Unlocker;XFINITY NETWORK;Pandora Box Digital;Cricket USA NETWORKS;Octoplus Samsung Digital License;Octoplus LG Digital License;US Cellular;CLARO NETWORKS;Octoplus Huawei Digital License;iRemove Ramdisk ( iOS 15 / 16 );Octoplus Full Digital License;SMD Ramdisk ( iOS 15 / 16 );Octoplus FRP Digital License;iREMOVAL PRO RAMDISK ( Windows ) ( 12 - 16 );Octoplus Box Activations;IKEY PRIME RAMDISK ( Windows ) ( 12 - 16 );Octoplus / Octopus Box Credits;Refund Bypass Service;Miracle Schematics Pro;SAMSUNG USA CODS;Miracle Power Tool;APPLE ID INFO SERVICE;Miracle Activation;INFO Report Checkers;Microsoft Windows Official Activation;Kasper Sky"
))

function createObject2(x){
//    x= x.replaceAll(/\s*1-5/,';1-5')
//    x=x.replaceAll(/\s*1-5/,';;$')
   x=x.replaceAll(/(\$\s*\d\d*)/g,'::$1;;')
   x=x.replaceAll(/\t/g,'')
 
    arr1=x.split(';;')
    listObj=[];
    arr1.map(num=>{
        var v = num.split("::")
       var obj ={
        key: v[0].trim(),
        price: v[1]
       }
      num!=''?listObj.push(obj):'';
    })
    return listObj
    }
str='';
console.log(createObject2(" MacBook Pro (13-inch, M1, 2020) 	Instant 	$ 350 	MacBook Pro (13-inch, M2, 2022) 	Instant 	$ 450 	MacBook Pro (14-inch, 2021) 	Instant 	$ 360 	MacBook Pro (14-inch, 2023) 	Miniutes 	$ 550 	MacBook Pro (15-inch, 2018) 	Instant 	$ 220 	MacBook Pro (15-inch, 2019) 	Instant 	$ 240 	MacBook Pro (16-inch, 2019) 	Instant 	$ 260 	MacBook Pro (16-inch, 2021) 	Instant 	$ 400 	MacBook Pro (16-inch, 2023) 	Instant 	$ 700 	iMac (24-inch, M1, 2021) 	Instant 	$ 350 	MacBook Air (M2, 2022) 	Instant 	$ 350 	MacBook Air (M1, 2020) 	Instant 	$ 300 	MacBook Air (15-inch, M2, 2023) 	Miniutes 	$ 500 	MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports) 	Instant 	$ 240 	MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports) 	Instant 	$ 200 	MacBook Pro (13-inch, 2019, Four Thunderbolt 3 Ports) 	Instant 	$ 220 	MacBook Pro (13-inch, 2020, Two Thunderbolt 3 ports) 	Instant 	$ 260 	MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports) 	Instant 	$ 240 	Mac mini (2018) 	Instant 	$ 220 	Mac mini (M1, 2020) 	Instant 	$ 360 	Mac mini (2023) 	Instant 	$ 400 	Mac Pro (2019) 	Instant 	$ 280 	Mac Pro (Rack, 2019) 	Miniutes 	$ 280 	Mac Pro (2023) 	Miniutes 	$ 650 	Mac Studio (2022) 	Miniutes 	$ 600 	Mac Studio (2023) 	Instant 	$ 650 	MacBook Air (Retina, 13-inch, 2018) 	Instant 	$ 200 	MacBook Air (Retina, 13-inch, 2019) 	Miniutes 	$ 230 	MacBook Air (Retina, 13-inch, 2020) 	Instant 	$ 250 	iMac (Retina 5K, 27-inch, 2020) 	Miniutes 	$ 280 	iMac Pro (2017) 	Instant 	$ 200"
))

