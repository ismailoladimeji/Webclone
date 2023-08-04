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


