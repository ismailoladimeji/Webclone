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
   var arr1=x.split(';')
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
   x=x.replaceAll(/(\$\s*\d\d*)/g,'$1::')
//    x=x.replaceAll(/(\$\s*\d\d*::.*)(Delivery)\s*\w*\s*(Price)/g,'$1;;;;;$2;;;')
x=x.replaceAll(/(Delivery \s*\w*\s*Price)/g,';;;;;')
   x=x.replaceAll(/\t/g,'')
   var arr=x.split('::')
//    var arr=x.split(';;;;;')
//    var outerList=[]
//    arr.map(nu=>{
//    var t= nu.split(';;;')
//     var ob ={
//      serviceCategory: t[0].trim(),
//      service: t[1]
//     }
    // arr1=ob.service.split(';;')
    // listObj=[];
    // arr1.map(num=>{
    //    var obj ={
    //     key: num.trim(),
    //     ImagePath: "",
    //     price:"",
    //     DeliveryTime:""
    //    }
    //   num!=''?listObj.push(obj):'';
    // })
    // nu.service= listObj;
//    nu!=''?outerList.push(ob):'';
//  })
    
//     return outerList
return arr
    }
str='';
console.log(createObject2(
    "Unbarring 	Delivery Time 	Price 	T-Mobile and Verizon Unbarring / Cleaning [ Fraud NOT Supported ] 	1-3 days 	$ 90 MDM Bypass Services 	Delivery Time 	Price 	HFZ macOS MDM ACTIVATOR All Models 	1-5 Miniutes 	$ 8 	iRemove MacBook MDM Bypass All MacBooks Supported 	1-5 Miniutes 	$ 25"
))

