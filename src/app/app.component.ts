import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webCloneProject';
  showed:boolean=false;
  isUserLoggedIn:boolean=false;
  User:any=null;
  @ViewChild('myDiv') myDiv!: ElementRef<HTMLElement>;
  formData!: FormGroup;
  link='162t6t24rbjsdmnihirgt732i40i0i40knmnfikkkeyyehtwi83y33737y3y3y73777721882726993'
  // @ViewChild('childModal') public childModal:ModalDirective;

  // public showChildModal():void {
  //   this.childModal.show();
  // }
  
  // public hideChildModal():void {
  //   this.childModal.hide();
  //  }
  constructor(
    private router: Router, private route : ActivatedRoute) {

    }
    ngOnInit() {
     this.getForm();
    }
  serviceObj: any = [ 
    { id: 1, key: 'MDM Bypass Services', refId: 0 },
    { id: 2, key: 'PUBG Purchase [ UC ] Top UP', refId: 0 },
    { id: 3, key: 'PUBG: NEW STATE (NC)', refId: 0 },
    {
      id: 4,
      key: 'PUBG Mobile UC GLOBAL(PIN) PROMO For Limited Time',
      refId: 0
    },
    { id: 5, key: 'Pubg Game Credits DIRECT TOP UP [ UC ]', refId: 0 },
    { id: 6, key: 'Free Fire Pin', refId: 0 },
    { id: 7, key: 'PUBG New State PIN', refId: 0 },
    { id: 8, key: 'Free Fire [ DIRECT TOP-UP ]', refId: 0 },
    { id: 9, key: 'Instagram Services', refId: 0 },
    { id: 10, key: 'PUBG UC DIRECT TOP UP', refId: 0 },
    { id: 11, key: 'Unbarring', refId: 0 },
    { id: 12, key: 'ROBLOX USA', refId: 0 },
    { id: 13, key: 'ROBLOX CANADA', refId: 0 },
    { id: 14, key: 'Amazon UAE', refId: 0 },
    { id: 15, key: 'Amazon USA', refId: 0 },
    { id: 16, key: 'eBay', refId: 0 },
    { id: 17, key: 'Google Play USA Store ONLY', refId: 0 },
    { id: 18, key: 'Google Play UAE', refId: 0 },
    { id: 19, key: 'Google Play KSA', refId: 0 },
    { id: 20, key: 'Google Play UK', refId: 0 },
    { id: 21, key: 'App Store & iTunes USA', refId: 0 },
    { id: 22, key: 'App Store & iTunes KSA', refId: 0 },
    { id: 23, key: 'App Store & iTunes UAE', refId: 0 },
    { id: 24, key: 'App Store & iTunes CANADA', refId: 0 },
    { id: 25, key: 'Steam USA', refId: 0 },
    { id: 26, key: 'Steam Wallet Card UAE', refId: 0 },
    { id: 27, key: 'TikTok Services', refId: 0 },
    { id: 28, key: 'Mac Service T2 M1 M2', refId: 1 },
    { id: 29, key: 'AlseerY-UnLocker', refId: 0 },
    { id: 30, key: 'XIAOMI', refId: 2 },
    {
      id: 31,
      key: 'Phoenix Tool (Nokia HMD Reset PIN / FRP / Flash)',
      refId: 0
    },
    { id: 32, key: 'ZXW', refId: 0 },
    { id: 33, key: 'VR Bypass Tool', refId: 0 },
    { id: 34, key: 'Us Reseller Flex Policy', refId: 0 },
    { id: 35, key: 'Z3X', refId: 0 },
    { id: 36, key: 'XinZhiZao schematic program', refId: 0 },
    { id: 37, key: 'United Kingdom Networks', refId: 0 },
    { id: 38, key: 'Xiaomi Fire Tool- XFT', refId: 0 },
    { id: 39, key: 'ICloud Slow Removed', refId: 0 },
    { id: 40, key: 'WUXINJI', refId: 0 },
    { id: 41, key: 'iCloud Remove by SN IPADS ( Instant )', refId: 3 },
    { id: 42, key: 'VR bypass', refId: 0 },
    { id: 43, key: 'iCloud Remove by SN IWATCH ( Instant )', refId: 4 },
    { id: 44, key: 'USA - Xiaomi Auth', refId: 0 },
    { id: 45, key: 'iCloud Remove by SN IPODS ( Instant )', refId:0 },
    { id: 46, key: 'UnlockTool Activation', refId: 0 },
    { id: 47, key: 'ICloud Relock', refId: 0 },
    { id: 48, key: 'Trading View Premium', refId: 0 },
    { id: 49, key: 'IC 100% PList/Token IPHONES', refId: 5 },
    { id: 50, key: 'The Magic Tool [ Motorola Unlock ]', refId: 0 },
    { id: 51, key: 'IC 100% PList/Token IPADS', refId: 6 },
    { id: 52, key: 'T-UNLOCK TOOL', refId: 0 },
    { id: 53, key: 'IC 100% PList/Token IWATCH', refId:  7},
    { id: 54, key: 'Spotify', refId: 0 },
    { id: 55, key: 'Sigma Plus', refId: 0 },
    { id: 56, key: 'Open Menu iCloud Removed ( IOS 14 - 15 )', refId: 0 },
    { id: 57, key: 'AT&T USA NETWORKS', refId:  8},
    { id: 58, key: 'SHARK Tool', refId: 0 },
    { id: 59, key: 'T-MOBILE - SPRINT USA NETWORKS', refId: 9 },
    { id: 60, key: 'Samsung Sim-Unlocker', refId: 0 },
    { id: 61, key: 'XFINITY NETWORK', refId: 0 },
    { id: 62, key: 'Pandora Box Digital', refId: 0 },
    { id: 63, key: 'Cricket USA NETWORKS', refId: 11 },
    { id: 64, key: 'Octoplus Samsung Digital License', refId: 0 },
    { id: 65, key: 'Octoplus LG Digital License', refId: 0 },
    { id: 66, key: 'US Cellular', refId: 0 },
    { id: 67, key: 'CLARO NETWORKS', refId: 10 },
    { id: 68, key: 'Octoplus Huawei Digital License', refId: 0 },
    { id: 69, key: 'iRemove Ramdisk ( iOS 15 / 16 )', refId: 14 },
    { id: 70, key: 'Octoplus Full Digital License', refId: 0 },
    { id: 71, key: 'SMD Ramdisk ( iOS 15 / 16 )', refId: 0 },
    { id: 72, key: 'Octoplus FRP Digital License', refId: 0 },
    {
      id: 73,
      key: 'iREMOVAL PRO RAMDISK ( Windows ) ( 12 - 16 )',
      refId: 0
    },
    { id: 74, key: 'Octoplus Box Activations', refId: 0 },
    {
      id: 75,
      key: 'IKEY PRIME RAMDISK ( Windows ) ( 12 - 16 )',
      refId: 0
    },
    { id: 76, key: 'Octoplus / Octopus Box Credits', refId: 0 },
    { id: 77, key: 'Refund Bypass Service', refId: 0 },
    { id: 78, key: 'Miracle Schematics Pro', refId: 0 },
    { id: 79, key: 'SAMSUNG USA CODS', refId: 13 },
    { id: 80, key: 'Miracle Power Tool', refId: 0 },
    { id: 81, key: 'APPLE ID INFO SERVICE', refId: 0 },
    { id: 82, key: 'Miracle Activation', refId: 0 },
    { id: 83, key: 'INFO Report Checkers', refId: 12 },
    { id: 84, key: 'Microsoft Windows Official Activation', refId: 0 },
    { id: 85, key: 'Kasper Sky', refId: 0 },
    { id: 86, key: 'Testing', refId: 0 },
    { id: 87, key: 'Infinity Services Part 2', refId: 0 },
    { id: 88, key: 'Infinity Services', refId: 0 },
    { id: 89, key: 'HYDRA TOOL', refId: 0 },
    { id: 90, key: 'Griffin tool', refId: 0 },
    { id: 91, key: 'Grammarly Premium', refId: 0 },
    { id: 92, key: 'Global Unlocker Pro', refId: 0 },
    { id: 93, key: 'Fast Unlocker Pro', refId: 0 },
    { id: 94, key: 'EFT', refId: 0 },
    { id: 95, key: 'Chimera Tool', refId: 0 },
    { id: 96, key: 'Cheetah Tool', refId: 0 },
    { id: 97, key: 'CF-Tools', refId: 0 },
    { id: 98, key: 'BORNEO', refId: 0 },
    { id: 99, key: 'Apizu Tool', refId: 0 },
    { id: 100, key: 'Andriod Multi Tool', refId: 0 },
    { id: 100, key: 'Andriod Multi Tool', refId: 0 },
  {
    id: 101,
    key: 'Facebook Profile Followers - Professional Mode Only',
    refId: 0
  },
  { id: 102, key: 'Facebook Page - Followers / Likes', refId: 0 },
  { id: 103, key: 'Facebook Profile - Followers', refId: 0 },
  { id: 104, key: 'TikTok Agancy Ads Account', refId: 0 },
  { id: 105, key: 'YouTube Services', refId: 0 },
  { id: 106, key: 'YouTube Subscribers', refId: 0 },
  { id: 107, key: 'AI Tools', refId: 0 },
  { id: 108, key: 'Canva Tool - Premium', refId: 0 }
  ]
  mouseOver(){
   this.showed=this.showed?false:true;
   console.log(true)
  }
  closeModal($event:any){
  //  this.isUserLoggedIn=!this.isUserLoggedIn;
  this.triggerFalseClick()
  this.User=$event;
   console.log($event)
  }


triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement;
    el.click();
}


//--------------------------
getForm(){
  this.formData = new FormGroup({
    userName: new FormControl("admin"),
    password: new FormControl("admin"),
  });
}
onClickSubmit(data:any){

}
}
