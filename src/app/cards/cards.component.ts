import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


  @Input() title: any;
  @Input() id: any;
  card$: any
  selectedData: any
  constructor(
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.card$ = this.route.paramMap.pipe(switchMap(params => {
      this.id = Number(params.get('id'));
      this.title = params.get('groups');
      return this.datas
        ;
    }));

    this.card$.subscribe((data: any) => {
      if(data.serviceId==this.id){
        this.selectedData =data 
      }
      if(this.id==0){
        this.selectedData =null;
      }
    });

  }

  public datas: any[] = [
    {
      serviceId: 1,
      serviceName: "",
      data: [
        { key: 'MacBook Pro (13-inch, M1, 2020)', price: '$ 350' },
        { key: 'MacBook Pro (13-inch, M2, 2022)', price: '$ 450' },
        { key: 'MacBook Pro (14-inch, 2021)', price: '$ 360' },
        { key: 'MacBook Pro (14-inch, 2023)', price: '$ 550' },
        { key: 'MacBook Pro (15-inch, 2018)', price: '$ 220' },
        { key: 'MacBook Pro (15-inch, 2019)', price: '$ 240' },
        { key: 'MacBook Pro (16-inch, 2019)', price: '$ 260' },
        { key: 'MacBook Pro (16-inch, 2021)', price: '$ 400' },
        { key: 'MacBook Pro (16-inch, 2023)', price: '$ 700' },
        { key: 'iMac (24-inch, M1, 2021)', price: '$ 350' },
        { key: 'MacBook Air (M2, 2022)', price: '$ 350' },
        { key: 'MacBook Air (M1, 2020)', price: '$ 300' },
        { key: 'MacBook Air (15-inch, M2, 2023)', price: '$ 500' },
        {
          key: 'MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)',
          price: '$ 240'
        },
        {
          key: 'MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports)',
          price: '$ 200'
        },
        {
          key: 'MacBook Pro (13-inch, 2019, Four Thunderbolt 3 Ports)',
          price: '$ 220'
        },
        {
          key: 'MacBook Pro (13-inch, 2020, Two Thunderbolt 3 ports)',
          price: '$ 260'
        },
        {
          key: 'MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports)',
          price: '$ 240'
        },
        { key: 'Mac mini (2018)', price: '$ 220' },
        { key: 'Mac mini (M1, 2020)', price: '$ 360' },
        { key: 'Mac mini (2023)', price: '$ 400' },
        { key: 'Mac Pro (2019)', price: '$ 280' },
        { key: 'Mac Pro (Rack, 2019)', price: '$ 280' },
        { key: 'Mac Pro (2023)', price: '$ 650' },
        { key: 'Mac Studio (2022)', price: '$ 600' },
        { key: 'Mac Studio (2023)', price: '$ 650' },
        { key: 'MacBook Air (Retina, 13-inch, 2018)', price: '$ 200' },
        {
          key: 'MacBook Air (Retina, 13-inch, 2019)',
          price: '$ 230'
        },
        { key: 'MacBook Air (Retina, 13-inch, 2020)', price: '$ 250' },
        { key: 'iMac (Retina 5K, 27-inch, 2020)', price: '$ 280' },
        { key: 'iMac Pro (2017)', price: '$ 200' }
      ]
    },
    {
      serviceId: 3,
      serviceName: "",
      data: [
        { key: 'ICloud Remove By SN Instant - IPad 2nd Gen (2011) (Wifi Only) [ A1395 ]ICloud Remove By SN Instant - IPad 2nd Gen (2011) (Wifi Only) [ A1395 ]', price: '$ 25' },
        { key: 'ICloud Remove By SN Instant - IPad 7th Gen (2019) (Wifi Only) [ A2197 ]', price: '$ 110' },
        { key: 'ICloud Remove By SN Instant - IPad Air 1st Gen (2013) (Wifi Only) [ A1474 ]', price: '$ 45' },
        { key: 'ICloud Remove By SN Instant - IPad Air 5th Gen (2013) (Wifi Only) [ A2588 ]', price: '$ 235' },
        { key: 'ICloud Remove By SN Instant - IPad Mini 1st Gen (2012) (Wifi Only) [ A1432 ]', price: '$ 30' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 1st Gen 9.7(2016) (Wifi Only) [ A1673 ]', price: '$ 100' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 2nd Gen 10.5(2017) (Wifi Only) [ A1701 ]', price: '$ 170' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 5th Gen 12.9(2021) (Wifi Only) [ A2378 ]', price: '$ 320' },
        { key: 'ICloud Remove By SN Instant - IPad 10th Gen (2022) (Wifi Only) [ A2696 ]', price: '$ 200' },
        { key: 'ICloud Remove By SN Instant - IPad 4th Gen (2012) (Wifi Only) [ A1458 ]', price: '$ 60' },
        { key: 'ICloud Remove By SN Instant - IPad 5th Gen (2017) (Wifi Only) [ A1822 ]', price: '$ 80' },
        { key: 'ICloud Remove By SN Instant - IPad 6th Gen (2018) (Wifi Only) [ A1893 ]', price: '$ 90' },
        { key: 'ICloud Remove By SN Instant - IPad 8th Gen (2020) (Wifi Only) [ A2270 ]', price: '$ 160' },
        { key: 'ICloud Remove By SN Instant - IPad 9th Gen (2021) (Wifi Only) [ A2602 ]', price: '$ 170' },
        { key: 'ICloud Remove By SN Instant - IPad Air 2nd Gen (2014) (Wifi Only) [ A1566 ]', price: '$ 50' },
        { key: 'ICloud Remove By SN Instant - IPad Air 3rd Gen (2019) (Wifi Only) [ A2152 ]', price: '$ 125' },
        { key: 'ICloud Remove By SN Instant - IPad Air 4th Gen (2020) (Wifi Only) [ A2316 ]', price: '$ 155' },
        { key: 'ICloud Remove By SN Instant - IPad Mini 2nd Gen (2013) (Wifi Only) [ A1489 ]', price: '$ 40' },
        { key: 'ICloud Remove By SN Instant - IPad Mini 3rd Gen (2014) (Wifi Only) [ A1599 ]', price: '$ 50' },
        { key: 'ICloud Remove By SN Instant - IPad Mini 4th Gen (2015) (Wifi Only) [ A1538 ]', price: '$ 80' },
        { key: 'ICloud Remove By SN Instant - IPad Mini 6th Gen (2021) (Wifi Only) [ A2567 ]', price: '$ 185' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 1st Gen 11 (2018) (Wifi Only) [ A1980 ]', price: '$ 140' },
        { key: 'ICloud Remove By SN Instant - IPad 1st Gen 12.9 (2015) (Wifi Only) [ A1584 ]', price: '$ 110' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 2nd Gen 11 (2020) (Wifi Only) [ A2228 ]', price: '$ 170' },
        { key: 'Make sure its the Right Model - Order with Serial - Go to history will See it immediately OFF', price: '$ 225' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 3rd Gen 12.9 (2018) (Wifi Only) [ A1876 ]', price: '$ 235' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 4th Gen 11 (2022) (Wifi Only) [ A2759 ]', price: '$ 270' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 4th Gen 12.9 (2020) (Wifi Only) [ A2229 ]', price: '$ 275' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 6th Gen 12.9 (2022) (Wifi Only) [ A2436 ]', price: '$ 345' },
        { key: 'ICloud Remove By SN Instant - IPad 3rd Gen (2012) (Wifi Only) [ A1416 ]', price: '$ 35' },
        { key: 'ICloud Remove By SN Instant - IPad Pro 2nd Gen 12.9 (2017) (Wifi Only) [ A1670 ]', price: '$ 140' },
        { key: 'ICloud Remove By SN Instant - IPad Mini 5th Gen (2019) (Wifi Only) [ A2133 ]', price: '$ 140' },

      ]

    },
    {
      serviceId: 4,
      serviceName: "",
      data: [
        {
          key: 'iCloud Remove by SN 1Instant - Apple Watch Series 6 [GPS Only]1-5 Miniutes', price: '$ 110'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Serie 1 [GPS Only]1-5 Miniutes', price: '$ 50'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Serie 2 [GPS Only]1-5 Miniutes', price: '$ 55'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 3 [GPS Only]1-5 Miniutes', price: '$ 65'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 4 [GPS Only]1-5 Miniutes', price: '$ 85'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 5 [GPS Only]1-5 Miniutes', price: '$ 90'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 7 [GPS Only]1-5 Miniutes', price: '$ 130'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series 8 [GPS Only]1-5 Miniutes', price: '$ 170'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series SE 1 [GPS Only]1-5 Miniutes', price: '$ 60'
        },
        {
          key: 'iCloud Remove by SN Instant - Apple Watch Series SE 2 [GPS Only]', price: undefined
        }
      ]
    },
    {
      serviceId: 5,
      serviceName: "",
      data: [
        {
          key: 'iCloud Remove WW Instant - IPhone 7Plus1-5 Miniutes',
          price: '$ 37'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 5 - 6S Plus1-5 Miniutes',
          price: '$ 30'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 81-5 Miniutes',
          price: '$ 46'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 8Plus1-5 Miniutes',
          price: '$ 53'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone SE21-5 Miniutes',
          price: '$ 53'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone X1-5 Miniutes',
          price: '$ 67'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone XS1-5 Miniutes',
          price: '$ 86'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone XS MAX1-5 Miniutes',
          price: '$ 108'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone XR1-5 Miniutes',
          price: '$ 98'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 111-5 Miniutes',
          price: '$ 150'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO1-5 Miniutes',
          price: '$ 156'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO1-5 Miniutes',
          price: '$ 156'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO MAX1-5 Miniutes',
          price: '$ 161'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 11 PRO MAX1-5 Miniutes',
          price: '$ 161'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone SE31-5 Miniutes',
          price: '$ 117'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12 MINI1-5 Miniutes',
          price: '$ 107'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 121-5 Miniutes',
          price: '$ 171'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12 PRO1-5 Miniutes',
          price: '$ 185'
        },
        {
          key: 'iCloud Remove WW Instant - iPhone 12 PRO MAX1-5 Miniutes',
          price: '$ 193'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13 MINI1-5 Miniutes',
          price: '$ 150'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 131-5 Miniutes',
          price: '$ 249'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13 PRO1-5 Miniutes',
          price: '$ 256'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 13 PRO MAX1-5 Miniutes',
          price: '$ 291'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 141-5 Miniutes',
          price: '$ 263'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14+1-5 Miniutes',
          price: '$ 277'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14 PRO1-5 Miniutes',
          price: '$ 284'
        },
        {
          key: 'iCloud Remove WW Instant - IPhone 14 PRO MAX1-5 Miniutes',
          price: '$ 345'
        }
      ]
    },
    {
      serviceId: 6,
      serviceName: "",
      data: [
        {
          key: 'iCloud Remove WW Instant - iPad10-20221-5 Miniutes',
          price: '$ 174'
        },
        {
          key: 'iCloud Remove WW Instant - iPad5-20171-5 Miniutes',
          price: '$ 62'
        },
        {
          key: 'iCloud Remove WW Instant - iPad6-20181-5 Miniutes',
          price: '$ 65'
        },
        {
          key: 'iCloud Remove WW Instant - iPad7-20191-5 Miniutes',
          price: '$ 89'
        },
        {
          key: 'iCloud Remove WW Instant - iPad8-20201-5 Miniutes',
          price: '$ 124'
        },
        {
          key: 'iCloud Remove WW Instant - iPad9-20211-5 Miniutes',
          price: '$ 132'
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir2-20141-5 Miniutes',
          price: '$ 58'
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir3-20191-5 Miniutes',
          price: '$ 103'
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir4-20201-5 Miniutes',
          price: '$ 132'
        },
        {
          key: 'iCloud Remove WW Instant - iPadAir5-20221-5 Miniutes',
          price: '$ 202'
        },
        {
          key: 'iCloud Remove WW Instant - iPadMini4-20151-5 Miniutes',
          price: '$ 54'
        },
        {
          key: 'iCloud Remove WW Instant - iPadMini5-20191-5 Miniutes',
          price: '$ 103'
        },
        {
          key: 'iCloud Remove WW Instant - iPadMini6-20211-5 Miniutes',
          price: '$ 160'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro (12.9-2015)1-5 Miniutes',
          price: '$ 89'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro2(12.9-2017)1-5 Miniutes',
          price: '$ 117'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro3 (12.9-2018)1-5 Miniutes',
          price: '$ 216'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro3(11-2018)1-5 Miniutes',
          price: '$ 188'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro4(11-2020)1-5 Miniutes',
          price: '$ 252'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro4(12.9.2020)1-5 Miniutes',
          price: '$ 252'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro5(11-2021)1-5 Miniutes',
          price: '$ 259'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro5(12.9-2021)1-5 Miniutes',
          price: '$ 280'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro6(11-2022)1-5 Miniutes',
          price: '$ 315'
        },
        {
          key: 'iCloud Remove WW Instant - iPadPro6(12.9-2022)1-5 Miniutes',
          price: '$ 330'
        },
        {
          key: 'iCloud Remove WW Instant - PadPro2(10.5-2017)1-5 Miniutes',
          price: '$ 103'
        }
      ]
    },
    {
      serviceId: 7,
      serviceName: "",
      data: [
        {
          key: 'Apple Watch ( Series 2 - Cellular )1-5 Miniutes',
          price: '$ 63'
        },
        {
          key: 'Apple Watch ( Series 3 - Cellular )1-5 Miniutes',
          price: '$ 73'
        },
        {
          key: 'Apple Watch ( Series 4 - Cellular )1-5 Miniutes',
          price: '$ 94'
        },
        {
          key: 'Apple Watch ( Series 5 - Cellular )1-5 Miniutes',
          price: '$ 101'
        },
        {
          key: 'Apple Watch ( Series 6 - Cellular )1-5 Miniutes',
          price: '$ 115'
        },
        {
          key: 'Apple Watch ( Series 7 - Cellular )1-5 Miniutes',
          price: '$ 137'
        },
        { key: 'Apple Watch ( SE 1 - Cellular )1-5 Miniutes', price: '$ 61' },
        {
          key: 'Apple Watch ( SE 2 - Cellular )1-5 Miniutes',
          price: '$ 101'
        },
        {
          key: 'Apple Watch ( Series 8 - Cellular )1-5 Miniutes',
          price: '$ 172'
        },
        {
          key: 'Apple Watch ( Ultra - Cellular )1-5 Miniutes',
          price: '$ 204'
        }
      ]
    },
    {
      serviceId: 9,
      serviceName: "",
      data: [
        {
          key: 'T-Mobile/Sprint USA - iPhone All Models Supported [ Clean + Financed ]100% Ratio2-9 days',
          price: '$ 240'
        }
      ]
    },
    {
      serviceId: 10,
      serviceName: "",
      data: [
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 12 Series } Supported - Premium1-4 days',
          price: '$ 29'
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 13 Pro/13Pro Max } Supported - Premium1-4 days',
          price: '$ 34'
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 13/13 Mini } Supported - Premium1-4 days',
          price: '$ 34'
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 14 Pro / 14 Pro Max } Supported - Premium1-4 days',
          price: '$ 49'
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 14/14 Plus } Supported - Premium v1-4 days',
          price: '$ 49'
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models { 4s - 8+ } Supported - Premium1-4 days',
          price: '$ 16'
        },
        {
          key: 'Claro iPhone - All Countries & iPhone Models {  X - 11 Pro Max } Supported - Premium1-4 days',
          price: '$ 27'
        }
      ]

    },
    {
      serviceId: 11,
      serviceName: "",
      data: [
        {
          key: 'Cricket USA Service iPhone All Models (Clean) [6 Month Old Only Supported]24-36 Hours',
          price: '$ 5'
        }
      ]
    },
    {
      serviceId: 12,
      serviceName: "",
      data: [
        {
          key: 'iRemove iCloud Bypass for iPad Before 2017 (Cellular) [WITH SIGNAL] [IOS12-15.7.5] (Mac Tool)Miniutes',
          price: '$ 5'
        },
        {
          key: 'iRemove iCloud Bypass for iPad After 2017 (Cellular) [WITH SIGNAL] [IOS12-16.4.1] (Mac Tool)1-5 Miniutes',
          price: '$ 20'
        },
        {
          key: 'iRemove Bypass - IPhone 5s - iOS 12-12.5.7 (With Signal)Miniutes',
          price: '$ 4'
        },
        {
          key: 'iRemove Bypass - IPhone 6/6+ - iOS IOS12-12.5.7 (With Signal)Miniutes',
          price: '$ 7'
        },
        {
          key: '.8 iRemove Bypass - IPhone 6s/6s+/Se - iOS 15 / 16 (With Signal)1-5 Miniutes',
          price: '$ 11'
        },
        {
          key: 'iRemove Bypass - IPhone 7/7+ - iOS 15 / 16 (With Signal)1-5 Miniutes',
          price: '$ 19'
        },
        {
          key: '.8 iRemove Bypass - IPhone 8/8+ - iOS 15 / 16 (With Signal)1-5 Miniutes',
          price: '$ 27'
        },
        {
          key: '.8 iRemove Bypass - IPhone X - iOS 15 / 16 (With Signal)1-5 Miniutes',
          price: '$ 36'
        },
        { key: '.8', price: undefined }
      ]

    },
    {
      serviceId: 13,
      serviceName: "",
      data: [
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy A3/A5/A7/A8/A9/A10E/A20/A21S/A30/A32 5G/A40/A50/A51/A51 5G/A52 5G/A42 5G/A60/A70/A71 5G/A90 5G, J Series,M Series1-24 Hours',
          price: '$ 26'
        },
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy Note7/Note8/Note9/Note10/10+ 5G6-24 Hours',
          price: '$ 0'
        },
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy S/S2/S3/S4/S5/S6/S7/S8/S9/S10/Note/Note2/Note3/Note4/Note5/Note7/Note8/Note9/Note106-24 Hours',
          price: '$ 0'
        },
        {
          key: 'Samsung USA -ALL LEVEL LOCKS (AT&T/Cricket/Xfinity/Spectrum) Galaxy SM-F900F SM-F900A SM-F900H SM-F9006-24 Hours',
          price: '$ 0'
        },
        {
          key: 'Samsung USA S20/FOLD 2/N20/S21 Variants (All Level) (Pro)24-72 Hours',
          price: '$ 27'
        },
        {
          key: 'Samsung Worldwide Flip4/Fold 4 Variants (NCK/MCK) (Semi Pro)1-7 days',
          price: '$ 45'
        },
        {
          key: 'Samsung Worldwide S20/N20/S21/S22/Flip3 Variants (NCK/MCK) (Semi Pro)1-7 days',
          price: '$ 45'
        },
        {
          key: 'Samsung Worldwide S23 Variants (NCK/MCK) (Semi Pro)1-7 days',
          price: '$ 76'
        }
      ]
    }
    ,
    {
      serviceId: 14,
      serviceName: "",
      data: [
        {
          key: 'iKey Prime iCloud Bypass For iPads After 2017 [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)1-5 Miniutes',
          price: '$ 25'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPads Before 2017 [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)1-5 Miniutes',
          price: '$ 10'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 5S [ WITH SIGNAL ] [ iOS-12.x ] (Windows Tool)Miniutes',
          price: '$ 3'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 6/6+ [ WITH SIGNAL ] [ iOS-12.x ] (Windows Tool)Minutes',
          price: '$ 8'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 6S/6S+/SE1 [ WITH SIGNAL ] [ iOS-15.x ] (Windows Tool)1-5 Miniutes',
          price: '$ 12'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 7/7+ [ WITH SIGNAL ] [ iOS-15.x ] (Windows Tool)1-5 Miniutes',
          price: '$ 22'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone 8/8+ [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)1-5 Miniutes',
          price: '$ 32'
        },
        {
          key: 'iKey Prime iCloud Bypass For iPhone X [ WITH SIGNAL ] [ iOS-15 / 16 ] (Windows Tool)1-5 Miniutes',
          price: '$ 38'
        }
      ]
    }


  ]


}


