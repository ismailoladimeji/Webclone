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
   var time=["Instant","1-6 Hours","6-24 Hours","24-72 Hours","1-7 days","24-36 Hourss","1-4 days","5-10 days","2-9 days","24-48 Hours","1-5 Minutes","1-3 Days","3-5 days","7-10 days","8-15 days","1-5 days","3-7 days","1-48 Hours","1-48 Miniutes","1-60 Miniutes","1-24 Hours","1-3 days","1-5 Miniutes","1-30 Miniutes","1-2 Hours","1-3 Hours","Minutes"]
   //    x= x.replaceAll(/\s*1-5/,';1-5') "Instant"Miniutes"
   //    x=x.replaceAll(/\s*1-5/,';;$')
      x=x.replaceAll(/(\$\s*\d\d*\s*\W*\s*\d*\s*)/g,'::$1;;')
      x=x.replaceAll(/\t/g,'')
      x=x.replaceAll(/(Delivery\s*Time\s*Price)/g,'))')
      time.map(num=> x=x.replaceAll(num,'(('+num))
     ar= x.split("))")
     allObj=[];
     var i=21;
     ar.map((u)=>{
      arr1=u.split(';;')
      listObj=[];
      arr1.map(num=>{
          var v = num.split("::")
          var v1=v[0].split('((')
         var obj ={
          key: v1[0].trim(),
          price: v[1],
          DeliveryTime: v1[1]
         }
        num!=''?listObj.push(obj):'';
      })
      var y=allObj.length>=1?JSON.parse(allObj[allObj.length-1].data):null;
      var t={
         serviceId: i,
        serviceName: y?y[y.length-1].key:'',
        data: listObj
    }
   allObj.push(t)
   i++
     })
     
       return allObj;
       }
   str='';
   console.log(createObject2(
  "PlayStation Plus UAE 	Delivery Time 	Price 	PlayStation PLUS UAE $21 		$ 21 	PlayStationPLUS UAE $34 		$ 33.915 	PlayStationPLUS UAE $83 		$ 82.478 PlayStation Plus USA 	Delivery Time 	Price 	PlayStation Plus US $110 		$ 105 	PlayStation Plus US $30 		$ 28.718 	PlayStationPlus US $55 		$ 52.5 	PlayStationPlus US $70 		$ 66.938 PlayStation Network UAE 	Delivery Time 	Price 	PlayStation Network(Store) UAE- 100 USD 		$ 99.75 	PlayStation Network(Store) UAE-USD 15 (UAE) 		$ 14.984 	PlayStation Network(Store) UAE-USD 30 (UAE) 		$ 29.82 	PlayStation Network(Store) UAE-USD 40 (UAE) 		$ 39.795 	PlayStation Network(Store) UAE-USD 50 (UAE) 		$ 49.718 	PlayStation UAE $10 		$ 10.007 	PlayStation UAE $20 		$ 19.95 	PlayStation UAE $21 		$ 21.105 	PlayStation UAE $34 		$ 33.968 	PlayStation UAE $45 		$ 44.73 	PlayStation UAE $60 		$ 59.588 	PlayStation UAE $70 		$ 69.668 	PlayStation UAE $83 		$ 82.95 	PlayStation UAE- 5 USD 		$ 4.988 Free Fire Pin 	Delivery Time 	Price 	Free Fire 100 + 10 Diamond PIN 		$ 0.998 	Free Fire 1080 + 108 Diamond PIN 		$ 9.975 	Free Fire 210 + 21 Diamond PIN 		$ 1.995 	Free Fire 2200 + 220 Diamond PIN 		$ 19.95 	Free Fire 530 + 53 Diamond PIN 		$ 4.988 Steam USA 	Delivery Time 	Price 	Steam US $10 		$ 10.5 	Steam US $100 		$ 104.685 	Steam US $20 		$ 21 	Steam US $50 		$ 52.5 App Store & iTunes CANADA 	Delivery Time 	Price 	App Store & iTunes Canada CAD$10 		$ 8.4 	App Store & iTunes Canada CAD$100 		$ 80.325 	App Store & iTunes Canada CAD$15 		$ 12.18 	App Store & iTunes Canada CAD$25 		$ 20.055 	App Store & iTunes Canada CAD$5 		$ 4.043 	App Store & iTunes Canada CAD$50 		$ 40.005 App Store & iTunes UAE 	Delivery Time 	Price 	App Store & iTunes UAE 50 		$ 14.385 	App Store & iTunes UAE AED100 		$ 28.455 	App Store & iTunes UAE AED500 		$ 140.175 App Store & iTunes KSA 	Delivery Time 	Price 	App Store & iTunes Gift Card KSA - 50 SAR Gift Card 		$ 15.015 	App Store & iTunes Gift Card KSA - 500 SAR Gift Card 		$ 150.161 	App Store & iTunes KSA SAR100 		$ 28.193 	App Store & iTunes KSA SAR150 		$ 41.948 	App Store & iTunes KSA SAR200 		$ 55.808 	App Store & iTunes KSA SAR300 		$ 83.895 	App Store & iTunes KSA SAR400 		$ 112.35 	App Store & iTunes KSA SAR75 		$ 21.105 App Store & iTunes USA 	Delivery Time 	Price 	ITunes Gift Card 10$ US 		$ 10.185 	ITunes Gift Card 100$ US 		$ 102.375 	ITunes Gift Card 15$ US 		$ 15.225 	ITunes Gift Card 150$ US 		$ 153.248 	ITunes Gift Card 2$ US 		$ 2.079 	ITunes Gift Card 20$ US 		$ 20.36 	ITunes Gift Card 200$ US 		$ 204.75 	ITunes Gift Card 25$ US 		$ 25.358 	ITunes Gift Card 250$ US 		$ 255.938 	ITunes Gift Card 3$ US 		$ 3.087 	ITunes Gift Card 30$ US 		$ 30.45 	ITunes Gift Card 30$ US 		$ 30.45 	ITunes Gift Card 300$ US 		$ 306.863 	ITunes Gift Card 35$ US 		$ 32.55 	ITunes Gift Card 35$ US 		$ 32.55 	ITunes Gift Card 4$ US 		$ 4.137 	ITunes Gift Card 40$ US 		$ 40.845 	ITunes Gift Card 400$ US 		$ 409.5 	ITunes Gift Card 5$ US 		$ 5.124 	ITunes Gift Card 50$ US 		$ 50.82 	ITunes Gift Card 500$ US 		$ 511.35 	ITunes Gift Card 60$ US 		$ 61.299 	ITunes Gift Card 70$ US 		$ 71.663 Google Play UK 	Delivery Time 	Price 	Google play UK £100 		$ 130.463 	Google play UK £25 		$ 33.075 	Google play UK £50 		$ 65.625 Google Play KSA 	Delivery Time 	Price 	Google play KSA SAR 20 		$ 5.88 	Google Play KSA SAR30 		$ 8.925 	Google Play KSA SAR40 		$ 11 TikTok Services 	Delivery Time 	Price 	TikTok Followers - [ 30 Days Gurantee ] - [ 1 Qty = 100 Followers ] - [ Any Quantity ] - [ Auto Service ] 		$ 0.356 	TikTok Video Likes - [ 30 Days Gurantee ] - [ 1 Qty = 100 Likes ] - [ Any Quantity ] - [ Auto Service ] 		$ 0.106 	TikTok Video Views - [ 30 Days Gurantee ] - [ 1 Qty = 100 Views ] - [ Any Quantity ] - [ Auto Service ] 	1-30 Miniutes 	$ 0.002 AlseerY-UnLocker 	Delivery Time 	Price 	AlseerY-UnLocker [ Samsung + LG + Alcatel + TINNO + Google + Moto ] unlock / repair / Frp / change css /bypass T-token - Credits for new user 	1-5 Miniutes 	$ 0.72 	AlseerY-UnLocker [ Samsung + LG + Alcatel + TINNO + Google + Moto] unlock / repair / frp - Credits for Existing user 	1-5 Miniutes 	$ 0.72 Phoenix Tool (Nokia HMD Reset PIN / FRP / Flash) 	Delivery Time 	Price 	Phoenix Service Tool (Nokia HMD Reset PIN / FRP / Flash) - Credits [Instant] 	Instant 	$ 0.954 ZXW 	Delivery Time 	Price 	ZXW Online Account Activation (1 Year) 	1-5 Miniutes 	$ 48 Z3X 	Delivery Time 	Price 	Z3X Panel for resellers [ 5000 credits ] 	1-5 Miniutes 	$ 5200 	Z3x Sam Tool Activation 	1-5 Miniutes 	$ 60.61 	Z3X Samsung Pro Update 	1-5 Miniutes 	$ 61.6 	Z3x Unlock Credits Pack 100 Pack 	1-5 Miniutes 	$ 115.39 	Z3x Unlock Credits Pack 30 Pack 	1-5 Miniutes 	$ 34.21 	Z3x Unlock Credits Pack 50 Pack 	1-5 Miniutes 	$ 57.2 	z3x Unlock Credits Pack of 1000 Credits (New Account) 	1-5 Miniutes 	$ 1144 	z3x Unlock Credits Pack of 150 Credits (New Account) 	1-5 Miniutes 	$ 171.6 	z3x Unlock Credits Pack of 200 Credits (New Account) 	1-5 Miniutes 	$ 228.8 	z3x Unlock Credits Pack of 250 Credits (New Account) 	1-5 Miniutes 	$ 286 	z3x Unlock Credits Pack of 500 Credits (New Account) 	1-5 Miniutes 	$ 572 	z3x Unlock Refill Credits 	1-5 Miniutes 	$ 1.153 XinZhiZao schematic program 	Delivery Time 	Price 	RENEW- XinZhiZao [ Mobile Phone/Computer Maintenance Query System ] 1 account/1 year 	1-5 Miniutes 	$ 26 	XinZhiZao [ Mobile Phone/Computer Maintenance Query System ] Redeem Code 1 account/1 year 	1-5 Miniutes 	$ 22 	XinZhiZao [ Mobile Phone/Computer Maintenance Query System ] Redeem Code 1 account/1 month 	1-5 Miniutes 	$ 4.99 	XinZhiZao [ Mobile Phone/Computer Maintenance Query System ]Redeem Code 3 account/1 year 	1-5 Miniutes 	$ 53 Xiaomi Fire Tool- XFT 	Delivery Time 	Price 	XFT AuthFlash Tool -Xiaomi Fire Tool Credit for Existing user -INSTANT 	1-5 Miniutes 	$ 2.921 	XFT AuthFlash Tool -Xiaomi Fire Tool Credits New User INSTANT 	1-5 Miniutes 	$ 2.68 WUXINJI 	Delivery Time 	Price 	WUXINJI Activation 1 Year 3 pc log 	1-5 Miniutes 	$ 46 USA - Xiaomi Auth 	Delivery Time 	Price 	USA - Xiaomi Auth Server Tool New User Credits ( 1 Device Flashing 5 Credits ) ✖️ NOT SUPPORT FMI ON Device ✖️ 	1-5 Miniutes 	$ 3.4 UnlockTool Activation 	Delivery Time 	Price 	UnlockTool 03 Months NEW / RENEW license 	1-5 Miniutes 	$ 16.324 	UnlockTool 06 Months NEW / RENEW license 	1-5 Miniutes 	$ 24.878 	UnlockTool 12 Months NEW / RENEW license 	1-5 Miniutes 	$ 41.249 Trading View Premium 	Delivery Time 	Price 	Trading View Premium - [ 1 Month Package Premium ] 		$ 6.948 	Trading View Premium - [ 1 Month Package Pro Plus ] 		$ 5.789 	Trading View Premium - [ 1 Month Package Pro ] 		$ 5.017 The Magic Tool [ Motorola Unlock ] 	Delivery Time 	Price 	Magic Tool Reseller Panel (Minimum 5000 Credits) 	1-5 Miniutes 	$ 1.1 	Magic tool Motorola [ Repair IMEI, Factory Enable, MDM ,FRP , UNLOCK] EXIST USER 	1-5 Miniutes 	$ 1.038 	Magic tool Motorola [ Repair IMEI, Factory Enable, MDM ,FRP , UNLOCK] NEW USER 	1-5 Miniutes 	$ 1.038 T-UNLOCK TOOL 	Delivery Time 	Price 	T-UnLock / Tunlock Credits Any Quantity [ NEW USER-Existing USER] 	1-5 Miniutes 	$ 0.382 	T-Unlock Credits (2000 Credits)[ Samsung , LG , Kyocera ] Direct Unlock - Reseller Only 	1-5 Miniutes 	$ 690 	T-Unlock Credits (5000 Credits)[ Samsung , LG , Kyocera ] Direct Unlock - Reseller Only 	1-5 Miniutes 	$ 1725 Spotify 	Delivery Time 	Price 	Spotify $10 	Miniutes 	$ 10.89 	Spotify $30 		$ 31.57 	Spotify $60 		$ 62.59 Sigma Plus 	Delivery Time 	Price 	Sigma Plus 1 Year Activation BOX /DONGLE 	1-5 Miniutes 	$ 60.5 	Sigma Plus 6 Month Activation BOX /DONGLE 	1-5 Miniutes 	$ 45 SHARK Tool 	Delivery Time 	Price 	Shark Tool Reseller panel for Existing user [1000 credits] 	Miniutes 	$ 0.96 	Shark Tool Reseller panel for NEW user [ 1000 credits - USDT PAYMENT] 	Instant 	$ 0.96 	Shark Tool Account existing FRP 24/7 Tool All Samsung Supported 	Instant 	$ 0.964 	Shark Tool New Account FRP 24/7 Tool All Samsung Supported 	Instant 	$ 0.964 Samsung Sim-Unlocker 	Delivery Time 	Price 	Sim-Unlocker [ Pro ] Tool Credit Create New User + Credits [ Any Quantity ] 	1-5 Miniutes 	$ 0.821 	Sim-Unlocker [ Pro ] Tool Refill / Recharge Credits Already Exist Accounts [ Any Quantity ] 	1-5 Miniutes 	$ 0.821 Pandora Box Digital 	Delivery Time 	Price 	Pandora Box 1 Year Digital license (Whiout box) QNT 100 - Resller Panel 		$ 82.5 	Pandora Box 1 Year Digital license (Whiout box) QNT 500 - Resller Panel 		$ 77 	Pandora Box 1 Year Digital license [LOGIN] 	Miniutes 	$ 77 Octoplus Samsung Digital License 	Delivery Time 	Price 	Octoplus Samsung 1 Year Digital License 	1-5 Miniutes 	$ 64.842 	Octoplus Samsung 3 Month Digital License 	1-5 Miniutes 	$ 27.392 	Octoplus Samsung 6 Month Digital License 	1-5 Miniutes 	$ 48.792 Octoplus LG Digital License 	Delivery Time 	Price 	Octoplus LG 1 Year Digital License 	1-5 Miniutes 	$ 64.842 	Octoplus LG 6 Month Digital License 		$ 48.792 	Octoplus LG Digital 3 Months License 	1-5 Miniutes 	$ 25.6 Octoplus Huawei Digital License 	Delivery Time 	Price 	Octoplus Huawei 6 Month Digital License 		$ 48.792 	Octoplus Huawei Digital 1 Year License 		$ 64.842 	Octoplus Huawei Digital 3 Months License 	1-5 Miniutes 	$ 27.392 Octoplus Full Digital License 	Delivery Time 	Price 	Octoplus Full 6 Month Digital License 	1-5 Miniutes 	$ 91.592 	Octoplus Full Digital 1 Year License 	1-5 Miniutes 	$ 129.042 	Octoplus Full Digital 3 Months License 	1-5 Miniutes 	$ 64.842 Octoplus FRP Digital License 	Delivery Time 	Price 	Octoplus FRP 6 Month Digital License 	1-5 Miniutes 	$ 48.792 	Octoplus FRP Digital 1 Year License 	1-5 Miniutes 	$ 64.842 	Octoplus FRP Digital 3 Months License 	1-5 Miniutes 	$ 27.392 Octoplus Box Activations 	Delivery Time 	Price 	Octoplus / Octopus Box LG Activation 	1-5 Miniutes 	$ 65.538 	Octoplus / Octopus FRP Tool Activation 	1-5 Miniutes 	$ 43.335 	Octoplus / Octopus Huawei Tool Activation 	1-5 Miniutes 	$ 75.97 	Octoplus / Octopus LG Lite to Full Upgrade 	1-5 Miniutes 	$ 38.092 	Octoplus / Octopus Samsung Activation for Medusa PRO / Medusa Box 	1-5 Miniutes 	$ 64.735 	Octoplus / Octopus Samsung Lite to Full Upgrade 	1-5 Miniutes 	$ 38.092 	Octoplus LG Lite Activation 	1-5 Miniutes 	$ 43.335 	Octoplus Samsung Lite Activation 	1-5 Miniutes 	$ 43.47 	Octopus Box Samsung Activation 	1-5 Miniutes 	$ 65.27 Octoplus / Octopus Box Credits 	Delivery Time 	Price 	Octoplus / Octopus Box Credits For Existing Users [instant] 	1-5 Miniutes 	$ 0.11 	Octoplus / Octopus Box Credits For New Users (Instant) 	1-5 Miniutes 	$ 0.11 Miracle Schematics Pro 	Delivery Time 	Price 	Miracle Schematics Pro Login 12 Months 	1-5 Miniutes 	$ 15.26 Miracle Power Tool 	Delivery Time 	Price 	Miracle Power Tool ( Digital ) BAD REQUSET NO REFUND 	1-5 Miniutes 	$ 15.805 Miracle Activation 	Delivery Time 	Price 	Google Play Turkey TL50 		$ 2.99 	Miracle 1 Year Account Activation ( Instant ) BAD REQUSET NO REFUND 	1-5 Miniutes 	$ 20.819 	Miracle Box Digital 12 Month (Login Edition) BAD REQUSET NO REFUND 	1-5 Miniutes 	$ 23.98 	Miracle Huawei Pack- BAD REQUSET NO REFUND 	1-5 Miniutes 	$ 0 	TikTok Video Views - [ 30 Days Gurantee ] - [ 1 Qty = 100 Views ] - [ Any Quantity ] - [ Auto Service ] 		$ 0.002 Microsoft Windows Official Activation 	Delivery Time 	Price 	Microsoft Windows 11 Professional Genuine License Key – License 1 PC Life Time 	1-5 Miniutes 	$ 5.3 	Microsoft Office 2016 Professional Plus - Genuine License Key 1 PC Life Time 	1-5 Miniutes 	$ 7.4 	Microsoft Office 2019 Home and Business for 1 Mac Life Time 	1-5 Miniutes 	$ 9.5 	Microsoft Office 2019 Professional Plus -Genuine License Key 1 PC Life Time 	1-5 Miniutes 	$ 11.5 	Microsoft Office 2021 Home and Business for 1 Mac Life Time 	1-5 Miniutes 	$ 12.5 	Microsoft Office 2021 Professional Plus - Genuine License Key 1 PC Life Time 	1-5 Miniutes 	$ 10.5 	Microsoft Office 365 Professional Plus + 100 GB ONE DRIVE Genuine Account 	1-5 Miniutes 	$ 8 	Microsoft Office 365 Professional Plus Genuine Account - 1 PC Life Time 	1-5 Miniutes 	$ 5 	Microsoft Windows 10 Professional Genuine License Key – License 1 PC Life Time 	1-5 Miniutes 	$ 4.3 	Microsoft Windows 7 Professional Genuine License Key – License 1 PC Life 	1-5 Miniutes 	$ 4.5 Kasper Sky 	Delivery Time 	Price 	Kaspersky: Anti-Virus 1 Device 	1-5 Miniutes 	$ 27.5 	Kaspersky: Anti-Virus 2 Device 	1-5 Miniutes 	$ 33.25 	Kaspersky: Anti-Virus 3 Device 	1-5 Miniutes 	$ 39.25 	Kaspersky: Anti-Virus 4 Device 	1-5 Miniutes 	$ 44 	Kaspersky: Anti-Virus 5 Device 	1-5 Miniutes 	$ 53.45 Infinity Services Part 2 	Delivery Time 	Price 	Asansam Box software activation for Infinity CDMA-Tool 	1-5 Miniutes 	$ 50.391 	Avator-Pro software activation for Infinity (with Avator-Dongle activated) 	1-5 Miniutes 	$ 63.656 	CS-Tool S-Pack (S-Module) Activation for CS-Tool 	1-5 Miniutes 	$ 24.852 	GB-Key software activation for Infinity CDMA-Tool (Pack-1 for 1 year included) 	1-5 Miniutes 	$ 79.243 	GB-Key software activation for Infinity [BEST] (Pack-1 for 1 year included) 	1-5 Miniutes 	$ 79.134 Infinity Services 	Delivery Time 	Price 	2DC-Unlocker and HCU-Client 99 credits (unlimited HCU activation for Infinity) 	1-5 Miniutes 	$ 82.5 	DC-Unlocker Full activation for any Infinity- Read service description 	1-5 Miniutes 	$ 78.5 	Infinity Server Logs 5 Credits 	1-5 Miniutes 	$ 1.601 	Infinity Server Logs 10 Credits 		$ 2.958 	Infinity Online Service 20 Credits 	1-5 Miniutes 	$ 5.983 	Infinity Server Logs 25 Credits 	1-5 Miniutes 	$ 7.48 	Infinity Online Service 40 Credits 	1-5 Miniutes 	$ 11.772 	Infinity Server Logs 50 Credits 	1-5 Miniutes 	$ 14.85 	Infinity Online Service 75 Credits 	1-5 Miniutes 	$ 22.275 	Infinity Server Logs 100 Credits 	1-5 Miniutes 	$ 29.267 	Infinity Online Service 150 Credits 	1-5 Miniutes 	$ 43.764 	Infinity Server Logs 200 Credits 	1-5 Miniutes 	$ 58.315 	Infinity Server Logs 500 Credits 	1-5 Miniutes 	$ 146.06 	Infinity - Box / Dongle 1 year Updates / Support Renew, Chinese Miracle-2 included ( CM2 ) 	1-5 Miniutes 	$ 34.989 	Infinity - Box / Dongle 2 years Updates Support Renewal Chinese Miracle 2 included ( CM2 ) 	1-5 Miniutes 	$ 52.429 	Infinity CDMA-Tool software activation for Infinity [BEST] 	1-5 Miniutes 	$ 24.852 	Infinity CDMA-Tool software activation for Infinity-Box/Dongle [CM2] 	1-5 Miniutes 	$ 24.852 	AMT-Dongle software activation for Infinity 	1-5 Miniutes 	$ 55.372 	DC-Unlocker Lite activation for any Infinity 	1-5 Miniutes 	$ 53.955 	DC-Unlocker Lite activation for Vygis-Toolbox & VPower 	1-5 Miniutes 	$ 53.955 	Infinity BB5 Easy Service Tool [BEST] software activation for Infinity CDMA-Tool 	1-5 Miniutes 	$ 43.818 	Infinity BB5 Easy Service Tool [BEST] software activation to any Infinity 	1-5 Miniutes 	$ 43.818 	Infinity Data Explorer software activation for Infinity (any dongle type) 	1-5 Miniutes 	$ 37.932 	Infinity-Box/Dongle [CM2] software activation for Infinity CDMA-Tool 		$ 58.315 	Infinity [CM2] software activation for Infinity BEST or Infinity CDMA 		$ 58.424 	Micro-Box software activation for Infinity-Box/Dongle [CM2] 	1-5 Miniutes 	$ 36.515 	Micro-Box software activation for Infinity [BEST] 	1-5 Miniutes 	$ 36.515 	SPT-Box software activation for any Infinity 	1-5 Miniutes 	$ 8.611 HYDRA TOOL 	Delivery Time 	Price 	Hydra Tool Digital License (12 Months) 	1-5 Miniutes 	$ 61.3 	Hydra Tool Digital License (3 Months) 	1-5 Miniutes 	$ 28.3 	Hydra Tool Digital License (6 Months) 	1-5 Miniutes 	$ 44.7 Griffin tool 	Delivery Time 	Price 	Griffin-Unlocker Create New Account - 12 Months 	1-5 Miniutes 	$ 57 	Griffin-Unlocker Create New Account - 3 Months 	1-5 Miniutes 	$ 32.7 	Griffin-Unlocker Create New Account - 6 Months 	1-5 Miniutes 	$ 49 Grammarly Premium 	Delivery Time 	Price 	Grammarly Premium Account - [ 1 Month ] - [ On Your Personal Email ] - [ 1 Device ] 		$ 2.702 	Grammarly Premium Account - [ 1 Month ] - [ Random Email ] - [ 1 Device ] 		$ 1.158 	Grammarly Premium Account - [ 1 Month ] - [ Random Email ] - [ 5 Device ] 		$ 1.929 	Grammarly Premium Account - [ 1 Year ] - [ Private Account ] - [ 1 Device ] 		$ 15.439 	Grammarly Premium Account - [ 1 Year ] - [ Private Account ] - [ 5 Device ] 		$ 17.368 	Grammarly Premium Account - [ 1 Year ] - [ Shared Account ] - [ 1 Device ] 		$ 8.491 Global Unlocker Pro 	Delivery Time 	Price 	Global Unlocker Pro -Add Annual To Exist User 	1-5 Miniutes 	$ 80.56 	Global Unlocker Pro Credits for existing Reseller [ 1000 credits ] 	1-5 Miniutes 	$ 0.76 	Global Unlocker Pro Credits for new Reseller [ 1000 credits ] 	1-5 Miniutes 	$ 0.76 	Global Unlocker Pro unlock / repair / frp/ change css /bypass T-token - Exist USER [ Auto API ] 	1-5 Miniutes 	$ 0.824 	Global Unlocker Pro unlock / repair / frp/ change css /bypass T-token NEW USER [ Auto API ] 	1-5 Miniutes 	$ 0.824 	Global Unlocker Pro-New Annual User 	1-5 Miniutes 	$ 76 Fast Unlocker Pro 	Delivery Time 	Price 	Fast Unlocker Pro [ Samsung + LG + Alcatel + TINNO ...etc ] unlock / repair / Frp / change css /bypass T-token - Credits for new user [ Auto API ] 	1-5 Miniutes 	$ 0.671 	Fast Unlocker Pro [ Samsung + LG + Alcatel + TINNO ...etc] unlock / repair / frp - Credits for Existing user [ Auto API ] 		$ 0.671 EFT 	Delivery Time 	Price 	EFT Dongle 1 Year Support Activation [Instant] 	1-5 Miniutes 	$ 21.518 	EFT Dongle 2 Year Support Activation 	1-5 Miniutes 	$ 28.938 	EFT Pro Tool Without Dongle 1 Year Plan 	1-5 Miniutes 	$ 79.659 	EFT Tool PRO 6 Months Activation 	1-5 Miniutes 	$ 53.928 	EFT Tool PRO 3 Months Activation 	1-5 Miniutes 	$ 32.528 	EFT Tool PRO 1 Month Activation 	1-5 Miniutes 	$ 13.038 	Renewal-EFT Pro Online Without Dongle [ 1 Year Activation ] 		$ 37.718 Chimera Tool 	Delivery Time 	Price 	Chimera Credits [instant] 	Instant 	$ 0.101 	Chimera Tool PRO [Username/Authenticator][instant] 	Instant 	$ 122.958 	Chimera Tool Samsung (Username/Authenticatior) [instant] 	Instant 	$ 73.5 Cheetah Tool 	Delivery Time 	Price 	Cheetah Tool PRO - 1 Year ACTIVATION ID - PASSWORD 		$ 55 	Cheetah Tool Credit Any QTY 		$ 0.88 	Cheetah Tool PRO - 3 Month ACTIVATION ID - PASSWORD 	Miniutes 	$ 28.6 	Cheetah Tool PRO - 6 Month ACTIVATION ID - PASSWORD 	Miniutes 	$ 39.6 	Cheetah [LG] Tool activation - 1 Year 	1-5 Miniutes 	$ 15.4 CF-Tools 	Delivery Time 	Price 	CF-Tool 1 Month Renew 	1-5 Miniutes 	$ 7.7 	CF-Tools 1 Month Activation 	1-5 Miniutes 	$ 5.1 	CF-Tools 12 Month Activation 	1-5 Miniutes 	$ 26 	CF-Tools 12 Month Renew 	1-5 Miniutes 	$ 26 	CF-Tools 3 Credit (For Auth Xiaomi) 	1-5 Miniutes 	$ 3.7 	CF-Tools 3 Month Activation 	1-5 Miniutes 	$ 14 	CF-Tools 3 Month Renew 	1-5 Miniutes 	$ 14 	CF-Tools 6 Credit (For Auth Xiaomi) 	1-5 Miniutes 	$ 6 	CF-Tools 6 Month Activation 	1-5 Miniutes 	$ 19.5 	CF-Tools 6 Month Renew 	1-5 Miniutes 	$ 19.5 BORNEO 	Delivery Time 	Price 	BORNEO 1 USER LICENSE 12 MONTHS ( NO REFUND FOR WRONG SUBMIT ) { NEW Activation } 	1-5 Miniutes 	$ 36.15 	BORNEO 1 USER LICENSE 3 MONTHS ( NO REFUND FOR WRONG SUBMIT ) { NEW Activation } 	1-5 Miniutes 	$ 11.609 	BORNEO 1 USER LICENSE 6 MONTHS ( NO REFUND FOR WRONG SUBMIT ) { NEW Activation } 	1-5 Miniutes 	$ 19.9 	BORNEO 1 USER LICENSE 12 MONTHS 25 CODES {For Reseller} 	1-5 Miniutes 	$ 39 	BORNEO 1 USER LICENSE 12 MONTHS 25 CODES {For Reseller RENEW } 	1-5 Miniutes 	$ 34 	BORNEO 1 USER LICENSE 12 MONTHS RENEW ( NO REFUND FOR WRONG SUBMIT ) {RENEW} 	1-5 Miniutes 	$ 30.815 	BORNEO 1 USER LICENSE 3 MONTHS 25 CODES {For Reseller} 	1-5 Miniutes 	$ 15 	BORNEO 1 USER LICENSE 6 MONTHS 25 CODES {For Reseller} 	1-5 Miniutes 	$ 22 	BORNEO 2 USER LICENSE 12 MONTHS ( NO REFUND FOR WRONG SUBMIT ) { NEW Activation } 	1-5 Miniutes 	$ 52.008 	BORNEO 2 USER LICENSE 3 MONTHS ( NO REFUND FOR WRONG SUBMIT ) { NEW Activation } 	1-5 Miniutes 	$ 20.145 	BORNEO 2 USER LICENSE 6 MONTHS ( NO REFUND FOR WRONG SUBMIT ) { NEW Activation } 	1-5 Miniutes 	$ 35.981 	BORNEO 2 USER LICENSE 12 MONTHS QNT 25 CODES { For Reseller-RENEW} 	Miniutes 	$ 39 	BORNEO 2 USER LICENSE 12 MONTHS QNT 25 CODES {For Reseller} 	1-5 Miniutes 	$ 49 	BORNEO 2 USER LICENSE 12 MONTHS RENEW ( NO REFUND FOR WRONG SUBMIT ) {RENEW} 	1-5 Miniutes 	$ 41.485 	BORNEO 2 USER LICENSE 3 MONTHS QNT 25 CODES { For Reseller } 	1-5 Miniutes 	$ 19 	BORNEO 2 USER LICENSE 6 MONTHS QNT 25 CODES { For Reseller } 	1-5 Miniutes 	$ 34 Apizu Tool 	Delivery Time 	Price 	ApizuTool Credits 	1-5 Miniutes 	$ 0.68 Android Multi Tool 	Delivery Time 	Price 	Andriod multi tool credits 	1-5 Miniutes 	$ 1 TikTok Agancy Ads Account 	Delivery Time 	Price 	TikTok Agancy Ads Account 		$ 54.12 YouTube Services 	Delivery Time 	Price 	YouTube 1000 Subscriber + 4000 Hours WatchTime - [ for Monetization ] 		$ 57.2 	YouTube Video Views - [ 100 Views ] 		$ 0.414 	YouTube Video Views - [ 1000 Views ] 		$ 10.23 	YouTube Video Views - [ 10000 Views ] 		$ 41.36 	YouTube Video Views - [ 100000 Views ] 		$ 387.28 	YouTube Video Views - [ 1000000 Views ] 		$ 3872.8 YouTube Subscribers 	Delivery Time 	Price 	YouTube Subscribers - [ 100 Subscribers ] 		$ 1.87 	YouTube Subscribers - [ 1000 Subscribers ] 		$ 18.696 	YouTube Subscribers - [ 10000 Subscribers ] 		$ 186.96 AI Tools 	Delivery Time 	Price 	CHATGPT Private Account [5 Devices ] [On Your Own Mail]- 1 Month 	1-30 Miniutes 	$ 14.666 	CHATGPT Private Account [5 Devices ]- 1 Month 	1-30 Miniutes 	$ 12.834 	CHATGPT Shared Account [1 Devices ]- 1 Month 	1-30 Miniutes 	$ 5.5 	CHATGPT Shared Account [2 Devices ]- 1 Month 	1-30 Miniutes 	$ 7.334 	CHATGPT Shared Account [3 Devices ]- 1 Month 	1-30 Miniutes 	$ 9.166 	MidJourney [ Basic Plan ] [ 1 Month ] 	1-30 Miniutes 	$ 7.334 	MidJourney [ Pro Plan ] [ 1 Month ] 	1-30 Miniutes 	$ 18.334 	MidJourney [ Standard Plan ] [ 1 Month ] 	1-30 Miniutes 	$ 12.834 Canva Tool - Premium 	Delivery Time 	Price 	Canva Pro [ 1 Month ] - Best Graphic Design Tool 	1-6 Hours 	$ 1.65 	Canva Pro [ 1 Year ] - Best Graphic Design Tool 	1-6 Hours 	$ 11 	Canva Pro [ 3 Month ] - Best Graphic Design 	1-6 Hours 	$ 3.3"
))

   