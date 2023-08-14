import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent implements OnInit {
  @Input() title: any;
  @Input() id: any;
  card: any
  selectedData: any
  dt:any

  constructor(
    private router: Router, private route: ActivatedRoute) {

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

  getForm(){
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }
  onClickSubmit(data:any){
  
  }


  showed:boolean=false;
  isUserLoggedIn:boolean=false;
  User:any=null;
  @ViewChild('myDiv') myDiv!: ElementRef<HTMLElement>;
  formData!: FormGroup;
  link='162t6t24rbjsdmnihirgt732i40i0i40knmnfikkkeyyehtwi83y33737y3y3y73777721882726993'

  ngOnInit(): void {
    this.card = this.route.paramMap.pipe(switchMap(params => {
      this.id = Number(params.get('id'));
      return this.data
        ;
    }));

    this.card.subscribe((data: any) => {
      console.log(data.id);
      if(data.id==this.id){
        this.selectedData = data.Value
      }
      if(this.id==0){
        this.selectedData =null;
      }
    });

  }


  public data:any =[
   {
    id: 1,
    Name:"IMEI-Service",
    Value:[

      {
        serviceId: 1,
        serviceName: "AT&T Mexico [ Premium ]",
        data: [
          {
            key: 'AT&T Mexico - All iPhone Models Clean',
            price: '11 ',
            DeliveryTime: 'Instant '
          },
          {
            key: 'AT&T Mexico - All iPhone Models [Semi Premiun 50%] (1-60 Minutes)',
            price: '15.5 ',
            DeliveryTime: '1-60 Miniutes '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 11 / SE 3ra Gen [Premiun 100% All Status] [ Fast ]',
            price: ' 81 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 11 Pro, 11 Pro Max [Premiun 100% All Status] [ Fast ]',
            price: '97 ',
            DeliveryTime: '1-48 Miniutes '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 12 Mini [Premiun 100% All Status] [ Fast ]',
            price: '84 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 12 Pro, 12 Pro Max [Premiun 100% All Status] [ Fast ]',
            price: '103 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 12, 13 Mini [Premium 100% All Status] [ Fast ]',
            price: '95 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 13 Pro, 13 Pro Max [Premiun 100% All Status] [ Fast ]',
            price: '117 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 13 [Premiun 100% All Status] [ Fast ]',
            price: ' 106 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 14 Plus [Premiun 100% All Status] [ Fast ]',
            price: ' 121 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 14 Pro Max [Premium 100% All Status] [ Fast ]',
            price: ' 132 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 14 Pro [Premiun 100% All Status] [ Fast ]',
            price: ' 130 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 14 [Premiun 100% All Status] [ Fast ]',
            price: ' 119 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 6, 6 Plus [Premium 100%] [ Fast ]',
            price: ' 41.5 ',
            DeliveryTime: '1-24 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 6s / 6s+ / SE (1ra Gen) [Premium 100% All Status] [ Fast ]',
            price: ' 46 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 7, 7 Plus [Premiun 100% All Status] [ Fast ]',
            price: ' 54.5 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 8 Plus, X [Premiun 100% All Status] ( [ Fast ]',
            price: ' 66 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 8, SE 2020 (2da Gen) [Premiun 100% All Status] [ Fast ]',
            price: ' 63.5 ',
            DeliveryTime: 'Miniutes'
          },
          {
            key: 'AT&T Mexico - Unlock iPhone 8, SE 2020 (2da Gen) [Premiun 100% All Status] [ Fast ]',
            price: ' 63.5 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone XR, XS [Premiun 100% All Status] [ Fast ]',
            price: ' 70 ',
            DeliveryTime: '1-48 Hours '
          },
          {
            key: 'AT&T Mexico - Unlock iPhone XS Max [Premiun 100% All Status] [ Fast ]',
            price: ' 81',
            DeliveryTime: '1-48 Hours '
          }
        ]
      },
      {
      serviceId: 2,
      serviceName: "Unbarring ",
      data: [
        {
          key: 'T-Mobile and Verizon Unbarring / Cleaning [ Fraud NOT Supported ]',
          price: ' 90',
          DeliveryTime: '1-3 days '
        }
      ]
    },
    {
      serviceId: 3,
      serviceName: "MDM Bypass Services ",
      data: [
        {
          key: 'HFZ macOS MDM ACTIVATOR All Models',
          price: ' 8 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iRemove MacBook MDM Bypass All MacBooks Supported',
          price: ' 25',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 4,
      serviceName: "Mac Service T2/M1/M2",
      data: [
        {
          key: 'MacBook Pro (13-inch, M1, 2020)',
          price: ' 350 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (13-inch, M2, 2022)',
          price: ' 450 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (14-inch, 2021)',
          price: ' 360 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (14-inch, 2023)',
          price: ' 550 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'MacBook Pro (15-inch, 2018)',
          price: ' 220 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (15-inch, 2019)',
          price: ' 240 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (16-inch, 2019)',
          price: ' 260 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (16-inch, 2021)',
          price: ' 400 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (16-inch, 2023)',
          price: ' 700 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iMac (24-inch, M1, 2021)',
          price: ' 350 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Air (M2, 2022)',
          price: ' 350 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Air (M1, 2020)',
          price: ' 300 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Air (15-inch, M2, 2023)',
          price: ' 500 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)',
          price: ' 240 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports)',
          price: ' 200 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (13-inch, 2019, Four Thunderbolt 3 Ports)',
          price: ' 220 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (13-inch, 2020, Two Thunderbolt 3 ports)',
          price: ' 260 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports)',
          price: ' 240 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Mac mini (2018)', price: ' 220 ', DeliveryTime: 'Instant ' },
        {
          key: 'Mac mini (M1, 2020)',
          price: ' 360 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Mac mini (2023)', price: ' 400 ', DeliveryTime: 'Instant ' },
        { key: 'Mac Pro (2019)', price: ' 280 ', DeliveryTime: 'Instant ' },
        {
          key: 'Mac Pro (Rack, 2019)',
          price: ' 280 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'Mac Pro (2023)',
          price: ' 650 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'Mac Studio (2022)',
          price: ' 600 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'Mac Studio (2023)',
          price: ' 650 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Air (Retina, 13-inch, 2018)',
          price: ' 200 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook Air (Retina, 13-inch, 2019)',
          price: ' 230 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'MacBook Air (Retina, 13-inch, 2020)',
          price: ' 250 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iMac (Retina 5K, 27-inch, 2020)',
          price: ' 280 ',
          DeliveryTime: 'Miniutes'
        },
        { key: 'iMac Pro (2017)', price: ' 200 ', DeliveryTime: 'Instant ' }
      ]
    },
    {
      serviceId: 5,
      serviceName: "XIAOMI",
      data: [
        {
          key: 'Xiaomi Mi Account Lock Remove (Uzbekistan) Clean Only',
          price: ' 15.2 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Xiaomi Check Find Device Status From Lock Code',
          price: ' 0.001 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Xiaomi Check Sold By Country Info',
          price: ' 0.495 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Xiaomi Mi Account Remove Mexico RAPIDO',
          price: ' 8.5 ',
          DeliveryTime: '1-3 Hours'
        },
        {
          key: 'Xiaomi Mi Account remover COLOMBIA only clean 100%',
          price: ' 26.012 ',
          DeliveryTime: '1-3 days '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove (+92 Pakistan) Clean Only',
          price: ' 8.928 ',
          DeliveryTime: '1-3 days '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove (Egypt) Clean Only',
          price: ' 12 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove (Oman) Clean Only',
          price: ' 8.25 ',
          DeliveryTime: 'Instant 1-30 Miniutes '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove - FINLAND/Sweden/Denmark/Norway Clean Only',
          price: ' 15 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove - Moldova Clean Only',
          price: ' 28.33 ',
          DeliveryTime: '1-3 days '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove Europe Super Fast',
          price: ' 18.9 ',
          DeliveryTime: '1-2 Hours'
        },
        {
          key: 'Xiaomi Mi Account Lock Remove JAPON Clean Only',
          price: ' 22 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove KENYA Clean Only',
          price: ' 18.135 ',
          DeliveryTime: '1-3 days '
        },
        {
          key: 'Xiaomi Mi Account Lock Remove Kyrgyzstan Clean Only',
          price: ' 20 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Xiaomi Mi Account Remove (Clean) - Worldwide [ All Countries Supported ]',
          price: ' 27.7 ',
          DeliveryTime: 'Instant 24 Hours '
        },
        {
          key: 'Xiaomi Mi Account Remove - Nicaragua only clean instant',
          price: ' 32.5 ',
          DeliveryTime: "1-30 Miniutes"
        },
        {
          key: 'Xiaomi Mi Account Remove MEXICO,',
          price: ' 9 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Xiaomi Mi Account Remove URUGUAY server rapido, only CLEAN',
          price: ' 18.5 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Xiaomi Remove Mi Account Cambodia',
          price: ' 22',
          DeliveryTime: '1-24 Hours '
        }
      ]
    },
    {
      serviceId: 6,
      serviceName: "VR Bypass Tool",
      data: [
        {
          key: 'VR-Activator - 8/8Plus - [IOS-15/16] - [Mac Tool]',
          price: ' 23 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'VR-Activator - X - [IOS-15/16] - [Mac Tool]',
          price: ' 33 ',
          DeliveryTime: ""
        },
        {
          key: 'VR-Activator - [6s - 6splus - SE - iPad 5 - Pro 12.9-1 - Pro 9.7] [IOS-15/16] - [Mac Tool]',
          price: ' 7 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'VR-Activator - [7 - 7Plus - iPad 6 - iPad 7 - Pro 10.5 - Pro 12.9-2] [IOS-15/16] - [Mac Tool]',
          price: ' 13 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'VR-Activator - [Air 2 - Mini 4] [IOS-15/16] - [Mac Tool]',
          price: ' 6.5',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 7,
      serviceName: "Us Reseller Flex Policy",
      data: [
        {
          key: 'US Reseller Flex Policy Unlock - IPhone All Models Supported ( Only Clean Status Supported )',
          price: ' 79',
          DeliveryTime: '24-48 Hours'
        }
      ]
    },
    {
      serviceId: 8,
      serviceName: "United Kingdom Networks",
      data: [
        {
          key: 'Canada Bell - iP All Models Supported Upto 14 Pro Max (Clean Imeis Supported Only)',
          price: ' 65 ',
          DeliveryTime: '1-3 Days'
        },
        {
          key: 'O2 United Kingdom - IPhone (All Model Support) Clean',
          price: ' 1 ',
          DeliveryTime: '3-5 days'
        },
        {
          key: 'O2 United Kingdom - Lg / Samsung / Nokia / Zte / Sony / Google Pixel',
          price: ' 7.3 ',
          DeliveryTime: '3-5 days'
        },
        {
          key: 'Orange/T-mobile/EE United Kingdom - IPhone (All Model Support) Premium',
          price: ' 3.75 ',
          DeliveryTime: '3-5 days'
        },
        {
          key: 'Orange/T-mobile/EE United Kingdom - IPhone / IPad (All Model Support) Clean',
          price: ' 4.5 ',
          DeliveryTime: '1-3 days '
        },
        {
          key: 'Orange/T-mobile/EE United Kingdom - IPhone / IPad All Model Support 99% Ratio',
          price: ' 3.55 ',
          DeliveryTime: '3-5 days'
        },
        {
          key: 'Orange/T-mobile/EE United Kingdom - Lg / Samsung / Nokia / Zte / Sony / Google Pixel',
          price: ' 2 ',
          DeliveryTime: '7-10 days'
        },
        {
          key: 'Three Hutchison United Kingdom - IPhone (All Model Support) Clean',
          price: ' 26 ',
          DeliveryTime: '7-10 days'
        },
        {
          key: 'Three Hutchison United Kingdom - IPhone 5s/5c/5/5/4s/4/3gs/3g Premium',
          price: ' 56.7 ',
          DeliveryTime: '8-15 days'
        },
        {
          key: 'Three Hutchison United Kingdom - IPhone 7/7+/SE/6s/6s+/6/6+/ Premium',
          price: ' 92 ',
          DeliveryTime: '8-15 days'
        },
        {
          key: 'Vodafone United Kingdom - IPhone (All Model Support) Clean Fast',
          price: ' 11.5 ',
          DeliveryTime: '1-5 days'
        },
        {
          key: 'Vodafone United Kingdom - IPhone 11/11pro/11pro max/XR/XS/XS max Premium ',
          price: ' 16 ',
          DeliveryTime: '1-5 days'
        },
        {
          key: 'Vodafone United Kingdom - IPhone 13/13 Max/13Pro Max/13Pro/12/12Pro/12Pro Max Premium ',
          price: ' 17 ',
          DeliveryTime: '1-5 days'
        },
        {
          key: 'Vodafone United Kingdom - Lg / Samsung / Nokia / Zte / Sony / Google Pixel',
          price: ' 2.3',
          DeliveryTime: '3-7 days'
        }
      ]
    },
    {
      serviceId: 9,
      serviceName: "ICloud Slow Removed",
      data: [
        {
          key: 'ICloud Remove Clean All Models ( UK - AT&T - T-MOBILE - VERIZON )',
          price: ' 90',
          DeliveryTime: '3-7 days '
        }
      ]
    },
    {
      serviceId: 10,
      serviceName: "iCloud Remove by SN IPADS ( Instant ) ",
      data: [
        {
          key: 'iCloud Remove by SN Instant - iPad 2nd Gen (2011) (Wifi Only) [ A1395 ]',
          price: ' 25 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad 7th Gen (2019) (Wifi Only) [ A2197 ]',
          price: ' 110 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN instant - iPad Air 1st Gen (2013) (Wifi Only) [ A1474 ]',
          price: ' 45 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN instant - iPad Air 5th Gen (2022) (Wifi Only) [ A2588 ]',
          price: ' 235 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Mini 1st Gen (2012) (Wifi Only) [ A1432 ]',
          price: ' 30 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 1st Gen 9.7 (2016) (Wifi Only) [ A1673 ]',
          price: ' 100 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 2nd Gen 10.5 (2017) (Wifi Only) [ A1701 ]',
          price: ' 170 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 5th Gen 12.9 (2021) (Wifi Only) [ A2378 ]',
          price: ' 320 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad 10th Gen (2022) (Wifi Only) [ A2696 ] ',
          price: ' 200 ',
          DeliveryTime:'Instant'
        },
        {
          key: 'iCloud Remove by SN Instant - iPad 4th Gen (2012) (Wifi Only) [ A1458 ]',
          price: ' 60 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad 5th Gen (2017) (Wifi Only) [ A1822 ]',
          price: ' 80 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad 6th Gen (2018) (Wifi Only) [ A1893 ]',
          price: ' 90 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN instant - iPad 8th Gen (2020) (Wifi Only) [ A2270 ]',
          price: ' 160 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad 9th Gen (2021) (Wifi Only) [ A2602 ]',
          price: ' 170 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Air 2nd Gen (2014) (Wifi Only) [ A1566 ]',
          price: ' 50 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Air 3rd Gen (2019) (Wifi Only) [ A2152 ]',
          price: ' 125 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Air 4th Gen (2020) (Wifi Only) [ A2316 ]',
          price: ' 155 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Mini 2nd Gen (2013) (Wifi Only) [ A1489 ]',
          price: ' 40 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Mini 3rd Gen (2014) (Wifi Only) [ A1599 ] 1-5 Minutes',
          price: ' 50 ',
          DeliveryTime: 'Instant'
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Mini 4th Gen (2015) (Wifi Only) [ A1538 ]',
          price: ' 80 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Mini 6th Gen (2021) (Wifi Only) [ A2567 ]',
          price: ' 185 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 1set Gen 11 (2018) (Wifi Only) [ A1980 ]',
          price: ' 140 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 1st Gen 12.9 (2015) (Wifi Only) [ A1584 ]',
          price: ' 110 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 2nd Gen 11 (2020) (Wifi Only) [ A2228 ]',
          price: ' 170 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 3rd Gen 11 (2021) (Wifi Only) [ A2377 ]',
          price: ' 225 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 3rd Gen 12.9 (2018) (Wifi Only) [ A1876 ]',
          price: ' 235 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 4rd Gen 11 (2022) (Wifi Only) [ A2759 ]',
          price: ' 270 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 4th Gen 12.9 (2020) (Wifi Only) [ A2229 ]',
          price: ' 275 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - iPad Pro 6th Gen 12.9 (2022) (Wifi Only) [ A2436 ]',
          price: ' 345 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant- iPad 3rd Gen (2012) (Wifi Only) [ A1416 ]',
          price: ' 35 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant- iPad Pro 2nd Gen 12.9 (2017) (Wifi Only) [ A1670 ]',
          price: ' 140 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN. Instant - iPad Mini 5th Gen (2019) (Wifi Only) [ A2133 ]',
          price: ' 115',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 11,
      serviceName: "iCloud Remove by SN IWATCH ( Instant )",
      data: [
        {
          key: 'iCloud Remove by SN 1Instant - Apple Watch Series 6 [GPS Only]',
          price: ' 110 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Serie 1 [GPS Only]',
          price: ' 50 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Serie 2 [GPS Only]',
          price: ' 55 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 3 [GPS Only]',
          price: ' 65 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 4 [GPS Only]',
          price: ' 85 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 5 [GPS Only]',
          price: ' 90 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 7 [GPS Only]',
          price: ' 130 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 8 [GPS Only]',
          price: ' 170 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series SE 1 [GPS Only]',
          price: ' 60 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series SE 2 [GPS Only]',
          price: ' 90',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 12,
      serviceName: "iCloud Remove by SN IPODS ( Instant )",
      data: [
        {
          key: 'iC Remove by SN Instant - iPod 5th Gen (Wifi Only)',
          price: ' 30 ',
          DeliveryTime: '1-5 Minutes '
        },
        {
          key: 'iC Remove by SN Instant - iPod 6th Gen (Wifi Only)',
          price: ' 30 ',
          DeliveryTime: '1-5 Minutes '
        },
        {
          key: 'iC Remove by SN Instant - iPod 7th Gen (Wifi Only)',
          price: ' 35',
          DeliveryTime: '1-5 Minutes '
        }
      ]
    },
    {
      serviceId: 13,
      serviceName: "ICloud Relock",
      data: [
        {
          key: 'iCloud Relock Service - All Models with Unlock Code ( OFF to ON )',
          price: ' 40',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 14,
      serviceName: "IC 100% PList/Token IPHONES ",
      data: [
        {
          key: 'iCloud Remove WW Instant - IPhone 7Plus',
          price: ' 37 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 5 - 6S Plus',
          price: ' 30 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 8',
          price: ' 46 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 8Plus',
          price: ' 53 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone SE2',
          price: ' 53 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone X',
          price: ' 67 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone XS',
          price: ' 86 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone XS MAX',
          price: ' 108 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone XR',
          price: ' 98 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11',
          price: ' 150 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO',
          price: ' 156 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO',
          price: ' 156 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO MAX',
          price: ' 161 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO MAX',
          price: ' 161 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone SE3',
          price: ' 117 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12 MINI',
          price: ' 107 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12',
          price: ' 171 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12 PRO',
          price: ' 185 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12 PRO MAX',
          price: ' 193 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13 MINI',
          price: ' 150 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13',
          price: ' 249 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13 PRO',
          price: ' 256 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13 PRO MAX',
          price: ' 291 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14',
          price: ' 263 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14+',
          price: ' 277 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14 PRO',
          price: ' 284 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14 PRO MAX',
          price: ' 345',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 15,
      serviceName: "IC 100% PList/Token IPADS",
      data: [
        {
          key: 'iCloud Remove WW Instant - iPad10-2022',
          price: ' 174 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPad5-2017',
          price: ' 62 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPad6-2018',
          price: ' 65 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPad7-2019',
          price: ' 89 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPad8-2020',
          price: ' 124 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPad9-2021',
          price: ' 132 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir2-2014',
          price: ' 58 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir3-2019',
          price: ' 103 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir4-2020',
          price: ' 132 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir5-2022',
          price: ' 202 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadMini4-2015',
          price: ' 54 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadMini5-2019',
          price: ' 103 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadMini6-2021',
          price: ' 160 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro (12.9-2015)',
          price: ' 89 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro2(12.9-2017)',
          price: ' 117 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro3 (12.9-2018)',
          price: ' 216 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro3(11-2018)',
          price: ' 188 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro4(11-2020)',
          price: ' 252 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro4(12.9.2020)',
          price: ' 252 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro5(11-2021)',
          price: ' 259 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro5(12.9-2021)',
          price: ' 280 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro6(11-2022)',
          price: ' 315 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro6(12.9-2022)',
          price: ' 330 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iCloud Remove WW Instant - PadPro2(10.5-2017)',
          price: ' 103',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 16,
      serviceName: "IC 100% PList/Token IWATCH",
      data: [
        {
          key: 'Apple Watch ( Series 2 - Cellular )',
          price: ' 63 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Series 3 - Cellular )',
          price: ' 73 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Series 4 - Cellular )',
          price: ' 94 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Series 5 - Cellular )',
          price: ' 101 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Series 6 - Cellular )',
          price: ' 115 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Series 7 - Cellular )',
          price: ' 137 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( SE 1 - Cellular )',
          price: ' 61 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( SE 2 - Cellular )',
          price: ' 101 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Series 8 - Cellular )',
          price: ' 172 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'Apple Watch ( Ultra - Cellular )',
          price: ' 204',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 17,
      serviceName: "Open Menu iCloud Removed ( IOS 14 - 15 )",
      data: [
        {
          key: 'iCloud Menu Removal for iPad Pro Series',
          price: ' 65 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'Cloud Menu Removal for iPhone 12 Series',
          price: ' 155 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Cloud Menu Removal for iPhone 6s/6s/7/7+/SE1',
          price: ' 50 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iCloud Menu Removal - iPad 5, 6, 7, 8 Series',
          price: ' 85 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iCloud Menu Removal for iPad Air Series',
          price: ' 65 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'iCloud Menu Removal for iPad mini Series',
          price: ' 75 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'iCloud Menu Removal for iPhone 11/SE3',
          price: ' 125 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iCloud Menu Removal for iPhone 13 Series',
          price: ' 195 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'iCloud Menu Removal for iPhone 8/8+/X/SE2',
          price: ' 70 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iCloud Menu Removal for iPhone XR/XS/XSMax',
          price: ' 110 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'iCloud Menu Removal for iPods',
          price: ' 75',
          DeliveryTime: 'Miniutes '
        }
      ]
      
    }
    ,
    {
      serviceId: 18,
      serviceName: "AT&T USA NETWORKS",
      data:[
        {
          key: 'AT&T USA IPHONE CLEAN UNLOCK ALL MODELS + CHECK STATUS (NO REFUND)',
          price: ' 0.08',
          DeliveryTime: 'Instant '
        }
      ]
    },
    {
      serviceId: 19,
      serviceName: "T-MOBILE - SPRINT USA NETWORKS ",
      data: [
        {
          key: 'T-Mobile/Sprint USA - iPhone All Models Supported [ Clean + Financed ]100% Ratio',
          price: ' 240',
          DeliveryTime: '2-9 days '
        }
      ]
    },
    {
      serviceId: 20,
      serviceName: "XFINITY NETWORK ",
      data: [
        {
          key: 'Xfinity USA All iPhone models - ( LifeTime Warranty ) - Clean',
          price: ' 125',
          DeliveryTime: '1-3 days '
        }
      ]
    },
    {
      serviceId: 21,
      serviceName: "Cricket USA NETWORKS",
      data: [
        {
          key: 'Cricket USA Service iPhone All Models (Clean) [6 Month Old Only Supported] ',
          price: ' 5 ',
          DeliveryTime: "24-36 Hours"
        },
        {
          key: 'USA Cricket - Fast eligibility verification service. [ iPhone and generic ] App Not Supported',
          price: ' 0.55',
          DeliveryTime: '1-2 Miniutes '
        }
      ]
    },
    {
      serviceId: 22,
      serviceName: "US Cellular",
      data:[
        {
          key: 'US Cellular Lte - IPhone (All Model Support) (Clean)',
          price: ' 130',
          DeliveryTime: '5-10 days'
        }
      ]
    },
    {
      serviceId: 23,
      serviceName: "CLARO NETWORKS",
      data: [
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 12 Series } Supported - Premium',
          price: ' 29 ',
          DeliveryTime: '1-4 days '
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 13 Pro/13Pro Max } Supported - Premium',
          price: ' 34 ',
          DeliveryTime: '1-4 days '
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 13/13 Mini } Supported - Premium',
          price: ' 34 ',
          DeliveryTime: '1-4 days '
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 14 Pro / 14 Pro Max } Supported - Premium',
          price: ' 49 ',
          DeliveryTime: '1-4 days '
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 14/14 Plus } Supported - Premium v',
          price: ' 49 ',
          DeliveryTime: '1-4 days '
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 4s - 8+ } Supported - Premium',
          price: ' 16 ',
          DeliveryTime: '1-4 days '
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models {  X - 11 Pro Max } Supported - Premium',
          price: ' 27',
          DeliveryTime: '1-4 days '
        }
      ]
    },
    {
      serviceId: 24,
      serviceName: "iRemove Ramdisk ( iOS 15 / 16 )",
      data: [
        {
          key: 'iRemove iCloud Bypass for iPad Before 2017 (Cellular) [WITH SIGNAL] [IOS12-15.7.5] (Mac Tool)',
          price: ' 3.8 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'iRemove iCloud Bypass for iPad After 2017 (Cellular) [WITH SIGNAL] [IOS12-16.4.1] (Mac Tool)',
          price: ' 19.5 ',
          DeliveryTime: '1-5 Miniutes'
        },
        {
          key: 'iRemove Bypass - IPhone 5s - iOS 12-12.5.7 (With Signal)',
          price: ' 3.8 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'iRemove Bypass - IPhone 6/6+ - iOS IOS12-12.5.7 (With Signal)',
          price: ' 7.8 ',
          DeliveryTime: 'Miniutes '
        },
        {
          key: 'iRemove Bypass - IPhone 6s/6s+/Se - iOS 15 / 16 (With Signal)',
          price: ' 10.8 ',
          DeliveryTime: '1-5 Miniutes'
        },
        {
          key: 'iRemove Bypass - IPhone 7/7+ - iOS 15 / 16 (With Signal)',
          price: ' 19.3 ',
          DeliveryTime: '1-5 Miniutes'
        },
        {
          key: 'iRemove Bypass - IPhone 8/8+ - iOS 15 / 16 (With Signal)',
          price: ' 27.1 ',
          DeliveryTime: '1-5 Miniutes'
        },
        {
          key: 'iRemove Bypass - IPhone X - iOS 15 / 16 (With Signal)',
          price: ' 35.8',
          DeliveryTime: '1-5 Miniutes'
        }
      ]
    },
    {
      serviceId: 25,
      serviceName: "SMD Ramdisk ( iOS 15 / 16 )",
      data: [
        {
          key: 'SMD Tool iPads after 2017 Gsm/Meid Bypass With Signal [ iOS-15 / 16 ] (Mac Tool)',
          price: ' 16.95 ',
          DeliveryTime: 'Minutes '
        },
        {
          key: 'SMD Tool iPads Before 2017 Gsm/Meid Bypass With Signal [ iOS-15 / 16 ] (Mac Tool)',
          price: ' 3 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'SMD Tool iPhone 5S Gsm/Meid Bypass With Signal [ iOS-12.x ] (Mac Tool)',
          price: ' 2 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'SMD Tool IPhone 6-6Plus Gsm/Meid Bypass With Signal [ IOS-12.X ] (Mac Tool)',
          price: ' 5.95 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'SMD Tool iPhone 6s-6sPlus-SE Gsm/Meid Bypass With Signal [ iOS-15.x ] (Mac Tool)',
          price: ' 7.4 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'SMD Tool iPhone 7-7Plus Gsm/Meid Bypass With Signal [ iOS-15.x ] (Mac Tool)',
          price: ' 16.85 ',
          DeliveryTime: 'Minutes '
        },
        {
          key: 'SMD Tool iPhone 8-8Plus Gsm/Meid Bypass With Signal [ iOS-15 / 16 ] (Mac Tool)',
          price: ' 23.8 ',
          DeliveryTime: 'Minutes '
        },
        {
          key: 'SMD Tool iPhone X Gsm/Meid Bypass With Signal [ iOS-15 / 16 ] (Mac Tool)',
          price: ' 33.8',
          DeliveryTime: 'Minutes '
        }
      ]
    },
    {
      serviceId: 26,
      serviceName: "iREMOVAL PRO RAMDISK ( Windows ) ( 12 - 16 )",
      data: [
        {
          key: 'iRemoval PRO Hello Screen Full Bypass - iPads {With Network}',
          price: ' 17 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iRemoval PRO Hello Screen Full Bypass - iPhone 6s-6sPlus {With Network}',
          price: ' 8 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iRemoval PRO Hello Screen Full Bypass - iPhone 7/ 7+ {With Network}',
          price: ' 17.95 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iRemoval PRO Hello Screen Full Bypass - iPhone 8/8+ {With Network}',
          price: ' 27.25 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iRemoval PRO iOS 15 Hello Screen Full Bypass - iPhone X {With Network}',
          price: ' 37.25',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 27,
      serviceName: "IKEY PRIME RAMDISK ( Windows ) ( 12 - 16 )",
      data: [
        {
          key: 'iKey Prime iCloud Bypass For iPads After 2017 [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)',
          price: ' 25 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iKey Prime iCloud Bypass For iPads Before 2017 [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)',
          price: ' 10 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 5S [ WITH SIGNAL ] [ iOS-12.x ] (Windows Tool) ',
          price: ' 3 ',
          DeliveryTime: 'Miniutes'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 6/6+ [ WITH SIGNAL ] [ iOS-12.x ] (Windows Tool)',
          price: ' 8 ',
          DeliveryTime: 'Minutes '
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 6S/6S+/SE1 [ WITH SIGNAL ] [ iOS-15.x ] (Windows Tool)',
          price: ' 12 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 7/7+ [ WITH SIGNAL ] [ iOS-15.x ] (Windows Tool)',
          price: ' 22 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 8/8+ [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)',
          price: ' 32 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone X [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)',
          price: ' 38',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    },
    {
      serviceId: 28,
      serviceName: "Refund Bypass Service",
      data: [
        {
          key: 'iKey Prime Bypass - Order Verify And Refund Service',
          price: ' 0 ',
          DeliveryTime: '1-5 Miniutes '
        },
        {
          key: 'iRemoval Pro Bypass - Order Verify And Refund Service',
          price: ' 0 ',
          DeliveryTime:"1-15 Miniutes"
        },
        {
          key: 'SMD Bypass - Order Verify And Refund Service Miniutes',
          price: ' 0 ',
          DeliveryTime: "1-15 Miniutes"
        },
        {
          key: 'iRemove Bypass - Order Verify And Refund Service',
          price: ' 0',
          DeliveryTime: '1-5 Miniutes '
        }
      ]
    }
    ,
    {
      serviceId: 29,
      serviceName: "SAMSUNG USA CODS",
      data: [
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy A3/A5/A7/A8/A9/A10E/A20/A21S/A30/A32 5G/A40/A50/A51/A51 5G/A52 5G/A42 5G/A60/A70/A71 5G/A90 5G, J Series,M Series',
          price: ' 26 ',
          DeliveryTime: '1-24 Hours '
        },
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy Note7/Note8/Note9/Note10/10+ 5G',
          price: ' 0 ',
          DeliveryTime: '6-24 Hours '
        },
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy S/S2/S3/S4/S5/S6/S7/S8/S9/S10/Note/Note2/Note3/Note4/Note5/Note7/Note8/Note9/Note10',
          price: ' 0 ',
          DeliveryTime: '6-24 Hours '
        },
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy SM-F900F SM-F900A SM-F900H SM-F900',
          price: ' 0 ',
          DeliveryTime: '6-24 Hours '
        },
        {
          key: 'Samsung USA S20/FOLD 2/N20/S21 Variants (All Level) (Pro)',
          price: ' 27 ',
          DeliveryTime: '24-72 Hours '
        },
        {
          key: 'Samsung Worldwide Flip4/Fold 4 Variants (NCK/MCK) (Semi Pro)',
          price: ' 45 ',
          DeliveryTime: '1-7 days '
        },
        {
          key: 'Samsung Worldwide S20/N20/S21/S22/Flip3 Variants (NCK/MCK) (Semi Pro)',
          price: ' 45 ',
          DeliveryTime: '1-7 days '
        },
        {
          key: 'Samsung Worldwide S23 Variants (NCK/MCK) (Semi Pro)',
          price: ' 76',
          DeliveryTime: '1-7 days '
        }
      ]
    },
    {
      serviceId: 30,
      serviceName: "APPLE ID INFO SERVICE",
      data: [
        {
          key: 'Apple ID - AT&T USA Only (Owner Info) By IMEI ONLY',
          price: ' 15 ',
          DeliveryTime: '1-6 Hours '
        },
        {
          key: 'Apple ID - SPRINT USA Only (Owner Info) By IMEI ONLY ',
          price: ' 15 ',
          DeliveryTime: '1-6 Hours '
        },
        {
          key: 'Apple ID - T-MOBILE USA Only (Owner Info) By IMEI ONLY',
          price: ' 15 ',
          DeliveryTime: '1-6 Hours '
        },
        {
          key: 'Apple ID - Verizon USA Only (Owner Info) By IMEI ONLY',
          price: ' 15',
          DeliveryTime: '1-6 Hours '
        }
      ]
    }
    ,
    {
      serviceId: 31,
      serviceName: "INFO Report Checkers",
      data: [
        {
          key: 'All-in-one (Mini)',
          price: ' 0.06 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'JP - SoftBank Finance Check •',
          price: ' 0.04 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Sold By + Cases ONLY',
          price: ' 2.69 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Activation Check (by Serial)',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'All-in-one ( Pro - No Carrier )',
          price: ' 0.1 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'All-in-one (Basic Info)',
          price: ' 0.09 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'All-in-one (Pro+ Carrier)',
          price: ' 0.2 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'All-in-one (Ultimate)All-in-one (Ultimate)',
          price: ' 1.15 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Apple Serial Validator',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Blacklist Pro Check (GSMA)',
          price: ' 0.07 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Blacklist Status (GSMA)',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Carrier + SIM-Lock Only',
          price: ' 0.065 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Carrier + SIM-Lock S1',
          price: ' 0.31 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Carrier + SIM-Lock S2',
          price: ' 0.075 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Carrier + SIM-Lock S3',
          price: ' 0.07 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Carrier + SIM-Lock S4',
          price: ' 0.07 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Carrier + SIM-Lock S5 ( FMI + MDM)',
          price: ' 0 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Convert IMEI = IMEl2 = Serial',
          price: ' 0.025 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'FMI On/Off Status',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Full GSX Report 4',
          price: ' 3.2 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Google Pixel Info', price: ' 0 ', DeliveryTime: 'Instant ' },
        {
          key: 'GSX Case History ONLY',
          price: ' 1.8 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'GSX Cases + Repairs',
          price: ' 2.2 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'GSX Policies + WiFi MAC',
          price: ' 3 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Huawei Info S1', price: ' 0 ', DeliveryTime: 'Instant ' },
        { key: 'Huawei Info S2', price: ' 0 ', DeliveryTime: 'Instant ' },
        {
          key: 'iCloud Clean/Lost Status',
          price: ' 0.04 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'JP - KDDI Finance Check',
          price: ' 0.05 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'JP - NTT Docomo Status Check',
          price: ' 0.07 ',
          DeliveryTime: 'Instant '
        },
        { key: 'LG Info', price: ' 0 ', DeliveryTime: 'Instant ' },
        {
          key: 'MacBook FMI On/Off Check',
          price: ' 0.59 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook FMI On/Off Check S2',
          price: ' 0.5 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MacBook iCloud Clean/Lost Check',
          price: ' 1.1 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MDM Status + Config (Pro)',
          price: ' 4 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MDM Status On/Off (ALL)',
          price: ' 1.1 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'MDM Status On/Off (by IMEI)',
          price: ' 0 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Model + Brand + Manufacturer (by IMEI)',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Model + Color + Storage',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Model + Color + Storage + FMI',
          price: ' 0.03 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Model Config', price: ' 0.04 ', DeliveryTime: 'Instant ' },
        {
          key: 'Model/Product Description',
          price: ' 0.03 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Motorola Info', price: ' 0 ', DeliveryTime: 'Instant ' },
        { key: 'OnePlus Info', price: ' 0 ', DeliveryTime: 'Instant ' },
        {
          key: 'Part Number / MPN',
          price: ' 0.11 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Purchase Country Check',
          price: ' 0.04 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Purchase Date Check',
          price: ' 0.03 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Refurbished Status',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Replaced Status (Original Device)',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Replacement Status (Active Device)',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Samsung Info S1', price: ' 0 ', DeliveryTime: 'Instant ' },
        { key: 'Samsung Info S2', price: ' 0 ', DeliveryTime: 'Instant ' },
        {
          key: 'SIM-Lock Status',
          price: ' 0.04 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Sold By + @ + Cases 4',
          price: ' 3.09 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Sold By Info', price: ' 2.1 ', DeliveryTime: 'Instant ' },
        {
          key: 'SX Case ID Info',
          price: ' 1.95 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - NEW - AT&T Status Check',
          price: ' 0.03 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - NEW - T-Mobile Pro Check',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - NEW - Verizon Status Check',
          price: ' 0.03 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - OLD - AT&T Status Check',
          price: ' 0.08 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - OLD - T-Mobile Pro Check',
          price: ' 0.05 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - OLD - Verizon Clean/Lost Check',
          price: ' 0.05 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'US - TracFone / StraightTalk Status Check',
          price: ' 0.07 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'USA Blacklist/Barred Check',
          price: ' 0.04 ',
          DeliveryTime: 'Instant '
        },
        {
          key: 'Warranty Check (by Serial)',
          price: ' 0.02 ',
          DeliveryTime: 'Instant '
        },
        { key: 'Xiaomi Info', price: ' 0 ', DeliveryTime: 'Instant ' },
        { key: 'ZTE Info', price: ' 0', DeliveryTime: 'Instant ' }
      ]
    },
    
    {
      serviceId: 32,
      serviceName: "Testing",
      data: [
        {
          key: 'Activation status check',
          price: ' 0.05',
          DeliveryTime: '1-5 Minutes'
        }
    ]
  }],
   },
  {
    id: 2,
  Name:"Server-Service",
  Value:[
  ]
  }
]}
  



