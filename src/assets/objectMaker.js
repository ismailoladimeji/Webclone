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
    var x="Home; Reseller Pricing; Registration; Guzunlocker News - Updates; Login; Useful Links; Contact Us; Subscribe; Don’t miss our future updates!; Get Subscribed now!; Connect With Us; Newsletter"
    var y="Thuis; Wederverkoperprijzen; Registratie; Guzunlocker-nieuws - Updates; Log in; Handige links; Neem contact met ons op; Abonneren; Mis onze toekomstige updates niet!; Word nu geabonneerd!; Verbind je met ons; Nieuwsbrief"
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
console.log(createObject(" Kasper Sky;Testing;Infinity Services Part 2;Infinity Services;HYDRA TOOL;Griffin tool;Grammarly Premium;Global Unlocker Pro;Fast Unlocker Pro;EFT;Chimera Tool;Cheetah Tool;CF-Tools;BORNEO;Apizu Tool;Andriod Multi Tool;Facebook Profile Followers - Professional Mode Only;Facebook Page - Followers / Likes;Facebook Profile - Followers;TikTok Agancy Ads Account;YouTube Services;YouTube Subscribers;AI Tools;Canva Tool - Premium"
))

function reMakeObj(arr){
var list=[]
var i=1
arr.map(num=>{
  if(i>90){
   var obj= {
      id:i,
      key:num.key,
      refId:0
   }
   list.push(obj)
 }
  i++
})
console.log(list)
}

reMakeObj([
   { key: 'MDM Bypass Services', ImagePath: '' },
   { key: 'PUBG Purchase [ UC ] Top UP', ImagePath: '' },
   { key: 'PUBG: NEW STATE (NC)', ImagePath: '' },
   {
     key: 'PUBG Mobile UC GLOBAL(PIN) PROMO For Limited Time',
     ImagePath: ''
   },
   { key: 'Pubg Game Credits DIRECT TOP UP [ UC ]', ImagePath: '' },
   { key: 'Free Fire Pin', ImagePath: '' },
   { key: 'PUBG New State PIN', ImagePath: '' },
   { key: 'Free Fire [ DIRECT TOP-UP ]', ImagePath: '' },
   { key: 'Instagram Services', ImagePath: '' },
   { key: 'PUBG UC DIRECT TOP UP', ImagePath: '' },
   { key: 'Unbarring', ImagePath: '' },
   { key: 'ROBLOX USA', ImagePath: '' },
   { key: 'ROBLOX CANADA', ImagePath: '' },
   { key: 'Amazon UAE', ImagePath: '' },
   { key: 'Amazon USA', ImagePath: '' },
   { key: 'eBay', ImagePath: '' },
   { key: 'Google Play USA Store ONLY', ImagePath: '' },
   { key: 'Google Play UAE', ImagePath: '' },
   { key: 'Google Play KSA', ImagePath: '' },
   { key: 'Google Play UK', ImagePath: '' },
   { key: 'App Store & iTunes USA', ImagePath: '' },
   { key: 'App Store & iTunes KSA', ImagePath: '' },
   { key: 'App Store & iTunes UAE', ImagePath: '' },
   { key: 'App Store & iTunes CANADA', ImagePath: '' },
   { key: 'Steam USA', ImagePath: '' },
   { key: 'Steam Wallet Card UAE', ImagePath: '' },
   { key: 'TikTok Services', ImagePath: '' },
   { key: 'Mac Service T2/M1/M2', ImagePath: '' },
   { key: 'AlseerY-UnLocker', ImagePath: '' },
   { key: 'XIAOMI', ImagePath: '' },
   {
     key: 'Phoenix Tool (Nokia HMD Reset PIN / FRP / Flash)',
     ImagePath: ''
   },
   { key: 'ZXW', ImagePath: '' },
   { key: 'VR Bypass Tool', ImagePath: '' },
   { key: 'Us Reseller Flex Policy', ImagePath: '' },
   { key: 'Z3X', ImagePath: '' },
   { key: 'XinZhiZao schematic program', ImagePath: '' },
   { key: 'United Kingdom Networks', ImagePath: '' },
   { key: 'Xiaomi Fire Tool- XFT', ImagePath: '' },
   { key: 'ICloud Slow Removed', ImagePath: '' },
   { key: 'WUXINJI', ImagePath: '' },
   { key: 'iCloud Remove by SN IPADS ( Instant )', ImagePath: '' },
   { key: 'VR bypass', ImagePath: '' },
   { key: 'iCloud Remove by SN IWATCH ( Instant )', ImagePath: '' },
   { key: 'USA - Xiaomi Auth', ImagePath: '' },
   { key: 'iCloud Remove by SN IPODS ( Instant )', ImagePath: '' },
   { key: 'UnlockTool Activation', ImagePath: '' },
   { key: 'ICloud Relock', ImagePath: '' },
   { key: 'Trading View Premium', ImagePath: '' },
   { key: 'IC 100% PList/Token IPHONES', ImagePath: '' },
   { key: 'The Magic Tool [ Motorola Unlock ]', ImagePath: '' },
   { key: 'IC 100% PList/Token IPADS', ImagePath: '' },
   { key: 'T-UNLOCK TOOL', ImagePath: '' },
   { key: 'IC 100% PList/Token IWATCH', ImagePath: '' },
   { key: 'Spotify', ImagePath: '' },
   { key: 'Sigma Plus', ImagePath: '' },
   { key: 'Open Menu iCloud Removed ( IOS 14 - 15 )', ImagePath: '' },
   { key: 'AT&T USA NETWORKS', ImagePath: '' },
   { key: 'SHARK Tool', ImagePath: '' },
   { key: 'T-MOBILE - SPRINT USA NETWORKS', ImagePath: '' },
   { key: 'Samsung Sim-Unlocker', ImagePath: '' },
   { key: 'XFINITY NETWORK', ImagePath: '' },
   { key: 'Pandora Box Digital', ImagePath: '' },
   { key: 'Cricket USA NETWORKS', ImagePath: '' },
   { key: 'Octoplus Samsung Digital License', ImagePath: '' },
   { key: 'Octoplus LG Digital License', ImagePath: '' },
   { key: 'US Cellular', ImagePath: '' },
   { key: 'CLARO NETWORKS', ImagePath: '' },
   { key: 'Octoplus Huawei Digital License', ImagePath: '' },
   { key: 'iRemove Ramdisk ( iOS 15 / 16 )', ImagePath: '' },
   { key: 'Octoplus Full Digital License', ImagePath: '' },
   { key: 'SMD Ramdisk ( iOS 15 / 16 )', ImagePath: '' },
   { key: 'Octoplus FRP Digital License', ImagePath: '' },
   {
     key: 'iREMOVAL PRO RAMDISK ( Windows ) ( 12 - 16 )',
     ImagePath: ''
   },
   { key: 'Octoplus Box Activations', ImagePath: '' },
   { key: 'IKEY PRIME RAMDISK ( Windows ) ( 12 - 16 )', ImagePath: '' },
   { key: 'Octoplus / Octopus Box Credits', ImagePath: '' },
   { key: 'Refund Bypass Service', ImagePath: '' },
   { key: 'Miracle Schematics Pro', ImagePath: '' },
   { key: 'SAMSUNG USA CODS', ImagePath: '' },
   { key: 'Miracle Power Tool', ImagePath: '' },
   { key: 'APPLE ID INFO SERVICE', ImagePath: '' },
   { key: 'Miracle Activation', ImagePath: '' },
   { key: 'INFO Report Checkers', ImagePath: '' },
   { key: 'Microsoft Windows Official Activation', ImagePath: '' },
   { key: 'Kasper Sky', ImagePath: '' },
 { key: 'Testing', ImagePath: '' },
 { key: 'Infinity Services Part 2', ImagePath: '' },
 { key: 'Infinity Services', ImagePath: '' },
 { key: 'HYDRA TOOL', ImagePath: '' },
 { key: 'Griffin tool', ImagePath: '' },
 { key: 'Grammarly Premium', ImagePath: '' },
 { key: 'Global Unlocker Pro', ImagePath: '' },
 { key: 'Fast Unlocker Pro', ImagePath: '' },
 { key: 'EFT', ImagePath: '' },
 { key: 'Chimera Tool', ImagePath: '' },
 { key: 'Cheetah Tool', ImagePath: '' },
 { key: 'CF-Tools', ImagePath: '' },
 { key: 'BORNEO', ImagePath: '' },
 { key: 'Apizu Tool', ImagePath: '' },
 { key: 'Andriod Multi Tool', ImagePath: '' },
 {
   key: 'Facebook Profile Followers - Professional Mode Only',
   ImagePath: ''
 },
 { key: 'Facebook Page - Followers / Likes', ImagePath: '' },
 { key: 'Facebook Profile - Followers', ImagePath: '' },
 { key: 'TikTok Agancy Ads Account', ImagePath: '' },
 { key: 'YouTube Services', ImagePath: '' },
 { key: 'YouTube Subscribers', ImagePath: '' },
 { key: 'AI Tools', ImagePath: '' },
 { key: 'Canva Tool - Premium', ImagePath: '' }
 ])
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
console.log(createObject2(" MacBook Pro (13-inch, M1, 2020) 	Instant 	$ 350 	MacBook Pro (13-inch, M2, 2022) 	Instant 	$ 450 	MacBook Pro (14-inch, 2021) 	Instant 	$ 360 	MacBook Pro (14-inch, 2023) 	Miniutes 	$ 550 	MacBook Pro (15-inch, 2018) 	Instant 	$ 220 	MacBook Pro (15-inch, 2019) 	Instant 	$ 240 	MacBook Pro (16-inch, 2019) 	Instant 	$ 260 	MacBook Pro (16-inch, 2021) 	Instant 	$ 400 	MacBook Pro (16-inch, 2023) 	Instant 	$ 700 	iMac (24-inch, M1, 2021) 	Instant 	$ 350 	MacBook Air (M2, 2022) 	Instant 	$ 350 	MacBook Air (M1, 2020) 	Instant 	$ 300 	MacBook Air (15-inch, M2, 2023) 	Miniutes 	$ 500 	MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports) 	Instant 	$ 240 	MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports) 	Instant 	$ 200 	MacBook Pro (13-inch, 2019, Four Thunderbolt 3 Ports) 	Instant 	$ 220 	MacBook Pro (13-inch, 2020, Two Thunderbolt 3 ports) 	Instant 	$ 260 	MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports) 	Instant 	$ 240 	Mac mini (2018) 	Instant 	$ 220 	Mac mini (M1, 2020) 	Instant 	$ 360 	Mac mini (2023) 	Instant 	$ 400 	Mac Pro (2019) 	Instant 	$ 280 	Mac Pro (Rack, 2019) 	Miniutes 	$ 280 	Mac Pro (2023) 	Miniutes 	$ 650 	Mac Studio (2022) 	Miniutes 	$ 600 	Mac Studio (2023) 	Instant 	$ 650 	MacBook Air (Retina, 13-inch, 2018) 	Instant 	$ 200 	MacBook Air (Retina, 13-inch, 2019) 	Miniutes 	$ 230 	MacBook Air (Retina, 13-inch, 2020) 	Instant 	$ 250 	iMac (Retina 5K, 27-inch, 2020) 	Miniutes 	$ 280 	iMac Pro (2017) 	Instant 	$ "

))
