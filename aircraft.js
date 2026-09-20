/* =========================================================
   AIRCRAFT DATABASE
   AIRBUS + BOEING
   Türkçe teknik uçak arşivi
========================================================= */

const aircraftData = [
    {
        manufacturer: "Airbus",
        family: "A220",
        model: "A220-100",
        image: "images/aircraft/airbus/a220-100.jpg",
        type: "Dar Gövde",
        passengers: "135",
        range: "3,450 NM",
        mtow: "63.1 t",
        cruise: "Mach 0.78",
        engine: "Pratt & Whitney PW1500G",
        thrust: "84.5–102 kN",
        fuel: "17,050 L",
        length: "35.9 m",
        wingspan: "35.1 m",
        height: "11.5 m",
        description: "Airbus A220 ailesinin kısa gövdeli üyesidir; bölgesel ve kısa/orta menzilli operasyonlar için geliştirilmiştir."
    },

    {
        manufacturer: "Airbus",
        family: "A220",
        model: "A220-300",
        image: "images/aircraft/airbus/a220-300.jpg",
        type: "Dar Gövde",
        passengers: "160",
        range: "3,450 NM",
        mtow: "67.6 t",
        cruise: "Mach 0.78",
        engine: "Pratt & Whitney PW1500G",
        thrust: "84.5–102 kN",
        fuel: "17,050 L",
        length: "38.7 m",
        wingspan: "35.1 m",
        height: "11.5 m",
        description: "A220 ailesinin daha uzun gövdeli versiyonudur ve daha yüksek yolcu kapasitesiyle kısa ve orta menzilli hatlarda kullanılır."
    },

    {
        manufacturer: "Airbus",
        family: "A320",
        model: "A319",
        image: "images/aircraft/airbus/a319.jpg",
        type: "Dar Gövde",
        passengers: "156",
        range: "3,750 NM",
        mtow: "75.5 t",
        cruise: "Mach 0.78",
        engine: "CFM56-5B / IAE V2500",
        thrust: "98–120 kN",
        fuel: "24,210 L",
        length: "33.84 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A320 ailesinin kısaltılmış gövdeli versiyonudur ve kısa/orta menzilli operasyonlarda yaygın olarak kullanılmıştır."
    },

    {
        manufacturer: "Airbus",
        family: "A320",
        model: "A320",
        image: "images/aircraft/airbus/a320.jpg",
        type: "Dar Gövde",
        passengers: "186",
        range: "3,400 NM",
        mtow: "79.0 t",
        cruise: "Mach 0.78",
        engine: "CFM56-5B / IAE V2500",
        thrust: "98–120 kN",
        fuel: "27,200 L",
        length: "37.57 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A320 ailesinin temel modelidir ve tek koridorlu ticari uçaklar arasında en yaygın platformlardan biridir."
    },

    {
        manufacturer: "Airbus",
        family: "A320",
        model: "A321",
        image: "images/aircraft/airbus/a321.jpg",
        type: "Dar Gövde",
        passengers: "220",
        range: "3,200 NM",
        mtow: "93.5 t",
        cruise: "Mach 0.78",
        engine: "CFM56-5B / IAE V2533",
        thrust: "133–147 kN",
        fuel: "30,030 L",
        length: "44.51 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A320 ailesinin uzatılmış gövdeli modelidir ve daha yüksek yolcu kapasitesi sunar."
    },

    {
        manufacturer: "Airbus",
        family: "A320neo",
        model: "A319neo",
        image: "images/aircraft/airbus/a319neo.jpg",
        type: "Dar Gövde",
        passengers: "160",
        range: "3,700 NM",
        mtow: "75.5 t",
        cruise: "Mach 0.78",
        engine: "CFM LEAP-1A / Pratt & Whitney PW1100G",
        thrust: "98–107 kN",
        fuel: "24,210 L",
        length: "33.84 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A319'un yeni nesil motorlar ve aerodinamik iyileştirmelerle güncellenmiş versiyonudur."
    },

    {
        manufacturer: "Airbus",
        family: "A320neo",
        model: "A320neo",
        image: "images/aircraft/airbus/a320neo.jpg",
        type: "Dar Gövde",
        passengers: "194",
        range: "3,400 NM",
        mtow: "79.0 t",
        cruise: "Mach 0.78",
        engine: "CFM LEAP-1A / Pratt & Whitney PW1100G",
        thrust: "120–124 kN",
        fuel: "26,730 L",
        length: "37.57 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A320'ün yeni nesil motorlar, Sharklet kanat uçları ve çeşitli verimlilik iyileştirmeleri içeren versiyonudur."
    },

    {
        manufacturer: "Airbus",
        family: "A320neo",
        model: "A321neo",
        image: "images/aircraft/airbus/a321neo.jpg",
        type: "Dar Gövde",
        passengers: "244",
        range: "3,900 NM",
        mtow: "97.0 t",
        cruise: "Mach 0.78",
        engine: "CFM LEAP-1A / Pratt & Whitney PW1100G",
        thrust: "129–147 kN",
        fuel: "32,940 L",
        length: "44.51 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A321'in yeni nesil motorlara sahip versiyonudur ve yüksek kapasite ile daha uzun menzili birleştirir."
    },

    {
        manufacturer: "Airbus",
        family: "A321",
        model: "A321LR",
        image: "images/aircraft/airbus/a321lr.jpg",
        type: "Dar Gövde",
        passengers: "206",
        range: "4,000 NM",
        mtow: "97.0 t",
        cruise: "Mach 0.78",
        engine: "CFM LEAP-1A / Pratt & Whitney PW1100G",
        thrust: "129–147 kN",
        fuel: "30,030 L",
        length: "44.51 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A321LR, ilave yakıt tankları ve artırılmış operasyonel menziliyle kıtalararası kısa/orta menzilli rotalara yönelik A321 türevidir."
    },

    {
        manufacturer: "Airbus",
        family: "A321",
        model: "A321XLR",
        image: "images/aircraft/airbus/a321xlr.jpg",
        type: "Dar Gövde",
        passengers: "244",
        range: "4,700 NM",
        mtow: "101.0 t",
        cruise: "Mach 0.78",
        engine: "CFM LEAP-1A / Pratt & Whitney PW1100G",
        thrust: "129–147 kN",
        fuel: "40,000 L",
        length: "44.51 m",
        wingspan: "35.80 m",
        height: "11.76 m",
        description: "A321XLR, A321 ailesinin daha uzun menzilli varyantıdır ve tek koridorlu uçakla daha uzun menzilli operasyonlar hedeflenmiştir."
    },

    {
        manufacturer: "Airbus",
        family: "A330",
        model: "A330-200",
        image: "images/aircraft/airbus/a330-200.jpg",
        type: "Geniş Gövde",
        passengers: "406",
        range: "7,250 NM",
        mtow: "242 t",
        cruise: "Mach 0.82",
        engine: "GE CF6 / PW4000 / Trent 700",
        thrust: "267–320 kN",
        fuel: "139,090 L",
        length: "58.82 m",
        wingspan: "60.30 m",
        height: "17.39 m",
        description: "A330 ailesinin daha kısa gövdeli uzun menzilli versiyonudur."
    },

    {
        manufacturer: "Airbus",
        family: "A330",
        model: "A330-300",
        image: "images/aircraft/airbus/a330-300.jpg",
        type: "Geniş Gövde",
        passengers: "440",
        range: "6,350 NM",
        mtow: "242 t",
        cruise: "Mach 0.82",
        engine: "GE CF6 / PW4000 / Trent 700",
        thrust: "267–320 kN",
        fuel: "139,090 L",
        length: "63.66 m",
        wingspan: "60.30 m",
        height: "16.79 m",
        description: "A330 ailesinin daha uzun gövdeli modelidir ve yüksek yolcu kapasitesi sunar."
    },

    {
        manufacturer: "Airbus",
        family: "A330",
        model: "A330-800",
        image: "images/aircraft/airbus/a330-800.jpg",
        type: "Geniş Gövde",
        passengers: "406",
        range: "8,100 NM",
        mtow: "251 t",
        cruise: "Mach 0.82",
        engine: "Rolls-Royce Trent 7000",
        thrust: "300–324 kN",
        fuel: "139,090 L",
        length: "58.82 m",
        wingspan: "64.00 m",
        height: "18.86 m",
        description: "A330neo ailesinin kısa gövdeli üyesidir ve yeni nesil Trent 7000 motorlarını kullanır."
    },

    {
        manufacturer: "Airbus",
        family: "A330",
        model: "A330-900",
        image: "images/aircraft/airbus/a330-900.jpg",
        type: "Geniş Gövde",
        passengers: "465",
        range: "7,200 NM",
        mtow: "251 t",
        cruise: "Mach 0.82",
        engine: "Rolls-Royce Trent 7000",
        thrust: "300–324 kN",
        fuel: "139,090 L",
        length: "63.66 m",
        wingspan: "64.00 m",
        height: "16.79 m",
        description: "A330neo ailesinin uzun gövdeli versiyonudur ve verimlilik ile menzil geliştirmeleri sunar."
    },

    {
        manufacturer: "Airbus",
        family: "A340",
        model: "A340-200",
        image: "images/aircraft/airbus/a340-200.jpg",
        type: "Geniş Gövde",
        passengers: "261",
        range: "7,450 NM",
        mtow: "275 t",
        cruise: "Mach 0.82",
        engine: "CFM56-5C",
        thrust: "137 kN",
        fuel: "155,040 L",
        length: "59.39 m",
        wingspan: "60.30 m",
        height: "16.70 m",
        description: "A340 ailesinin kısa gövdeli dört motorlu modelidir."
    },

    {
        manufacturer: "Airbus",
        family: "A340",
        model: "A340-300",
        image: "images/aircraft/airbus/a340-300.jpg",
        type: "Geniş Gövde",
        passengers: "295",
        range: "7,150 NM",
        mtow: "276.5 t",
        cruise: "Mach 0.82",
        engine: "CFM56-5C",
        thrust: "137 kN",
        fuel: "147,850 L",
        length: "63.66 m",
        wingspan: "60.30 m",
        height: "16.80 m",
        description: "A340-300, dört motorlu A340 ailesinin en yaygın modellerinden biridir ve uzun menzilli operasyonlar için tasarlanmıştır."
    },

    {
        manufacturer: "Airbus",
        family: "A340",
        model: "A340-500",
        image: "images/aircraft/airbus/a340-500.jpg",
        type: "Geniş Gövde",
        passengers: "313",
        range: "9,000 NM",
        mtow: "380 t",
        cruise: "Mach 0.83",
        engine: "Rolls-Royce Trent 553",
        thrust: "249 kN",
        fuel: "206,840 L",
        length: "67.93 m",
        wingspan: "63.45 m",
        height: "17.28 m",
        description: "A340-500, yüksek yakıt kapasitesiyle döneminin en uzun menzilli ticari uçaklarından biri olarak geliştirilmiştir."
    },

    {
        manufacturer: "Airbus",
        family: "A340",
        model: "A340-600",
        image: "images/aircraft/airbus/a340-600.jpg",
        type: "Geniş Gövde",
        passengers: "380",
        range: "7,900 NM",
        mtow: "380 t",
        cruise: "Mach 0.83",
        engine: "Rolls-Royce Trent 556",
        thrust: "249 kN",
        fuel: "195,250 L",
        length: "75.36 m",
        wingspan: "63.45 m",
        height: "17.93 m",
        description: "A340-600, A340 ailesinin uzatılmış gövdeli ve yüksek kapasiteli versiyonudur."
    },

    {
        manufacturer: "Airbus",
        family: "A350",
        model: "A350-900",
        image: "images/aircraft/airbus/a350-900.jpg",
        type: "Geniş Gövde",
        passengers: "440",
        range: "8,100 NM",
        mtow: "283 t",
        cruise: "Mach 0.85",
        engine: "Rolls-Royce Trent XWB-84",
        thrust: "374 kN",
        fuel: "141,000 L",
        length: "66.80 m",
        wingspan: "64.75 m",
        height: "17.05 m",
        description: "A350-900, kompozit malzeme kullanımı ve yüksek verimlilik odaklı modern geniş gövdeli bir uçaktır."
    },

    {
        manufacturer: "Airbus",
        family: "A350",
        model: "A350-1000",
        image: "images/aircraft/airbus/a350-1000.jpg",
        type: "Geniş Gövde",
        passengers: "480",
        range: "7,900 NM",
        mtow: "322 t",
        cruise: "Mach 0.85",
        engine: "Rolls-Royce Trent XWB-97",
        thrust: "431 kN",
        fuel: "156,000 L",
        length: "73.79 m",
        wingspan: "64.75 m",
        height: "17.08 m",
        description: "A350-1000, A350 ailesinin daha uzun ve yüksek kapasiteli modelidir."
    },

    {
        manufacturer: "Airbus",
        family: "A380",
        model: "A380-800",
        image: "images/aircraft/airbus/a380-800.jpg",
        type: "Geniş Gövde",
        passengers: "853",
        range: "8,000 NM",
        mtow: "575 t",
        cruise: "Mach 0.85",
        engine: "Engine Alliance GP7200 / Rolls-Royce Trent 900",
        thrust: "311–356 kN",
        fuel: "323,546 L",
        length: "72.72 m",
        wingspan: "79.75 m",
        height: "24.09 m",
        description: "A380-800, tam boy çift katlı gövdesiyle dünyanın en büyük seri üretim yolcu uçaklarından biridir."
    },

    {
        manufacturer: "Boeing",
        family: "737 Classic",
        model: "737-300",
        image: "images/aircraft/boeing/737-300.jpg",
        type: "Dar Gövde",
        passengers: "149",
        range: "2,060 NM",
        mtow: "62.8 t",
        cruise: "Mach 0.74",
        engine: "CFM56-3B",
        thrust: "89 kN",
        fuel: "20,105 L",
        length: "33.40 m",
        wingspan: "28.88 m",
        height: "11.13 m",
        description: "737 Classic ailesinin orta boy üyesidir ve CFM56 turbofan motorlarıyla önceki 737 nesillerine göre daha verimli bir platform sunmuştur."
    },

    {
        manufacturer: "Boeing",
        family: "737 Classic",
        model: "737-400",
        image: "images/aircraft/boeing/737-400.jpg",
        type: "Dar Gövde",
        passengers: "168",
        range: "2,160 NM",
        mtow: "68.1 t",
        cruise: "Mach 0.74",
        engine: "CFM56-3C",
        thrust: "98 kN",
        fuel: "26,020 L",
        length: "36.45 m",
        wingspan: "28.88 m",
        height: "11.13 m",
        description: "737 Classic ailesinin uzatılmış gövdeli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "737 Classic",
        model: "737-500",
        image: "images/aircraft/boeing/737-500.jpg",
        type: "Dar Gövde",
        passengers: "140",
        range: "2,260 NM",
        mtow: "60.6 t",
        cruise: "Mach 0.74",
        engine: "CFM56-3C",
        thrust: "89 kN",
        fuel: "20,105 L",
        length: "31.01 m",
        wingspan: "28.88 m",
        height: "11.13 m",
        description: "737 Classic ailesinin kısa gövdeli versiyonudur."
    },

    {
        manufacturer: "Boeing",
        family: "737 NG",
        model: "737-600",
        image: "images/aircraft/boeing/737-600.jpg",
        type: "Dar Gövde",
        passengers: "132",
        range: "3,235 NM",
        mtow: "66.0 t",
        cruise: "Mach 0.79",
        engine: "CFM56-7B",
        thrust: "89 kN",
        fuel: "26,020 L",
        length: "31.24 m",
        wingspan: "34.32 m",
        height: "12.50 m",
        description: "737 Next Generation ailesinin en kısa gövdeli üyesidir."
    },

    {
        manufacturer: "Boeing",
        family: "737 NG",
        model: "737-700",
        image: "images/aircraft/boeing/737-700.jpg",
        type: "Dar Gövde",
        passengers: "149",
        range: "3,010 NM",
        mtow: "70.1 t",
        cruise: "Mach 0.79",
        engine: "CFM56-7B",
        thrust: "89–121 kN",
        fuel: "26,020 L",
        length: "33.63 m",
        wingspan: "35.80 m",
        height: "12.50 m",
        description: "737 NG ailesinin temel kısa gövdeli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "737 NG",
        model: "737-800",
        image: "images/aircraft/boeing/737-800.jpg",
        type: "Dar Gövde",
        passengers: "189",
        range: "2,935 NM",
        mtow: "79.0 t",
        cruise: "Mach 0.79",
        engine: "CFM56-7B",
        thrust: "89–121 kN",
        fuel: "26,020 L",
        length: "39.47 m",
        wingspan: "35.80 m",
        height: "12.50 m",
        description: "737-800, 737 NG ailesinin en yaygın modellerinden biridir ve kısa/orta menzilli operasyonlarda geniş kullanım alanına sahiptir."
    },

    {
        manufacturer: "Boeing",
        family: "737 NG",
        model: "737-900",
        image: "images/aircraft/boeing/737-900.jpg",
        type: "Dar Gövde",
        passengers: "189",
        range: "3,235 NM",
        mtow: "79.0 t",
        cruise: "Mach 0.79",
        engine: "CFM56-7B",
        thrust: "89–121 kN",
        fuel: "26,020 L",
        length: "42.11 m",
        wingspan: "35.80 m",
        height: "12.50 m",
        description: "737 NG ailesinin uzatılmış gövdeli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "737 NG",
        model: "737-900ER",
        image: "images/aircraft/boeing/737-900er.jpg",
        type: "Dar Gövde",
        passengers: "220",
        range: "3,235 NM",
        mtow: "85.1 t",
        cruise: "Mach 0.79",
        engine: "CFM56-7B",
        thrust: "89–121 kN",
        fuel: "29,660 L",
        length: "42.11 m",
        wingspan: "35.80 m",
        height: "12.50 m",
        description: "737-900ER, artırılmış yakıt ve yapısal iyileştirmelerle 737 NG ailesinin menzil ve kapasite açısından geliştirilmiş versiyonudur."
    },

    {
        manufacturer: "Boeing",
        family: "737 MAX",
        model: "737 MAX 7",
        image: "images/aircraft/boeing/737-max-7.jpg",
        type: "Dar Gövde",
        passengers: "172",
        range: "3,800 NM",
        mtow: "80.3 t",
        cruise: "Mach 0.79",
        engine: "CFM International LEAP-1B",
        thrust: "93–109 kN",
        fuel: "25,941 L",
        length: "35.56 m",
        wingspan: "35.92 m",
        height: "12.50 m",
        description: "737 MAX 7, MAX ailesinin daha kısa gövdeli modelidir ve LEAP-1B motorları ile yeni nesil aerodinamik iyileştirmeler kullanır."
    },

    {
        manufacturer: "Boeing",
        family: "737 MAX",
        model: "737 MAX 8",
        image: "images/aircraft/boeing/737-max-8.jpg",
        type: "Dar Gövde",
        passengers: "210",
        range: "3,500 NM",
        mtow: "82.2 t",
        cruise: "Mach 0.79",
        engine: "CFM International LEAP-1B",
        thrust: "93–130 kN",
        fuel: "25,941 L",
        length: "39.52 m",
        wingspan: "35.92 m",
        height: "12.30 m",
        description: "737 MAX 8, MAX ailesinin temel modelidir ve yeni nesil motorlarla yakıt verimliliğine odaklanır."
    },

    {
        manufacturer: "Boeing",
        family: "737 MAX",
        model: "737 MAX 9",
        image: "images/aircraft/boeing/737-max-9.jpg",
        type: "Dar Gövde",
        passengers: "220",
        range: "3,300 NM",
        mtow: "88.3 t",
        cruise: "Mach 0.79",
        engine: "CFM International LEAP-1B",
        thrust: "130 kN",
        fuel: "25,941 L",
        length: "42.16 m",
        wingspan: "35.92 m",
        height: "12.30 m",
        description: "737 MAX 9, MAX ailesinin daha uzun gövdeli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "737 MAX",
        model: "737 MAX 10",
        image: "images/aircraft/boeing/737-max-10.jpg",
        type: "Dar Gövde",
        passengers: "230",
        range: "3,300 NM",
        mtow: "89.0 t",
        cruise: "Mach 0.79",
        engine: "CFM International LEAP-1B",
        thrust: "130 kN",
        fuel: "25,941 L",
        length: "43.80 m",
        wingspan: "35.92 m",
        height: "12.30 m",
        description: "737 MAX 10, 737 MAX ailesinin en uzun gövdeli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "747",
        model: "747-400",
        image: "images/aircraft/boeing/747-400.jpg",
        type: "Geniş Gövde",
        passengers: "416",
        range: "7,260 NM",
        mtow: "396.9 t",
        cruise: "Mach 0.85",
        engine: "CF6-80C2 / PW4000 / RB211-524",
        thrust: "236–276 kN",
        fuel: "216,840 L",
        length: "70.66 m",
        wingspan: "64.44 m",
        height: "19.41 m",
        description: "747-400, ikonik üst güvertesi ve dört motorlu düzeniyle uzun yıllar kıtalararası taşımacılığın önemli platformlarından biri olmuştur."
    },

    {
        manufacturer: "Boeing",
        family: "747",
        model: "747-8",
        image: "images/aircraft/boeing/747-8.jpg",
        type: "Geniş Gövde",
        passengers: "467",
        range: "7,730 NM",
        mtow: "447.7 t",
        cruise: "Mach 0.86",
        engine: "General Electric GEnx-2B67",
        thrust: "296 kN",
        fuel: "242,470 L",
        length: "76.25 m",
        wingspan: "68.45 m",
        height: "19.40 m",
        description: "747-8, 747 ailesinin uzatılmış ve yeni nesil motorlarla güncellenmiş son yolcu varyantıdır."
    },

    {
        manufacturer: "Boeing",
        family: "757",
        model: "757-200",
        image: "images/aircraft/boeing/757-200.jpg",
        type: "Dar Gövde",
        passengers: "239",
        range: "3,915 NM",
        mtow: "115.7 t",
        cruise: "Mach 0.80",
        engine: "RB211-535 / PW2000",
        thrust: "178–191 kN",
        fuel: "43,490 L",
        length: "47.32 m",
        wingspan: "38.05 m",
        height: "13.56 m",
        description: "757-200, yüksek performansı ve menziliyle tek koridorlu uçaklar arasında özel bir yere sahip olmuştur."
    },

    {
        manufacturer: "Boeing",
        family: "757",
        model: "757-300",
        image: "images/aircraft/boeing/757-300.jpg",
        type: "Dar Gövde",
        passengers: "295",
        range: "3,405 NM",
        mtow: "123.8 t",
        cruise: "Mach 0.80",
        engine: "RB211-535 / PW2000",
        thrust: "178–191 kN",
        fuel: "43,400 L",
        length: "54.43 m",
        wingspan: "38.05 m",
        height: "13.56 m",
        description: "757-300, 757 ailesinin uzatılmış gövdeli ve yüksek kapasiteli versiyonudur."
    },

    {
        manufacturer: "Boeing",
        family: "767",
        model: "767-200",
        image: "images/aircraft/boeing/767-200.jpg",
        type: "Geniş Gövde",
        passengers: "255",
        range: "3,900 NM",
        mtow: "142.9 t",
        cruise: "Mach 0.80",
        engine: "CF6-80A / JT9D / PW4000",
        thrust: "212–236 kN",
        fuel: "90,770 L",
        length: "48.51 m",
        wingspan: "47.57 m",
        height: "15.85 m",
        description: "767-200, iki motorlu geniş gövdeli 767 ailesinin ilk yolcu modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "767",
        model: "767-300",
        image: "images/aircraft/boeing/767-300.jpg",
        type: "Geniş Gövde",
        passengers: "290",
        range: "3,900 NM",
        mtow: "159.2 t",
        cruise: "Mach 0.80",
        engine: "CF6-80C2 / PW4000 / RB211-524",
        thrust: "212–282 kN",
        fuel: "91,380 L",
        length: "54.94 m",
        wingspan: "47.57 m",
        height: "15.85 m",
        description: "767-300, 767 ailesinin uzatılmış gövdeli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "767",
        model: "767-400ER",
        image: "images/aircraft/boeing/767-400er.jpg",
        type: "Geniş Gövde",
        passengers: "375",
        range: "5,625 NM",
        mtow: "204.1 t",
        cruise: "Mach 0.80",
        engine: "General Electric CF6-80C2",
        thrust: "276 kN",
        fuel: "91,380 L",
        length: "61.37 m",
        wingspan: "51.92 m",
        height: "16.87 m",
        description: "767-400ER, 767 ailesinin daha uzun gövdeli ve artırılmış menzilli versiyonudur."
    },

    {
        manufacturer: "Boeing",
        family: "777",
        model: "777-200",
        image: "images/aircraft/boeing/777-200.jpg",
        type: "Geniş Gövde",
        passengers: "440",
        range: "5,240 NM",
        mtow: "247.2 t",
        cruise: "Mach 0.84",
        engine: "GE90 / PW4000 / Trent 800",
        thrust: "334–438 kN",
        fuel: "117,340 L",
        length: "63.73 m",
        wingspan: "60.93 m",
        height: "18.52 m",
        description: "777-200, Boeing'in çift motorlu geniş gövdeli 777 ailesinin temel modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "777",
        model: "777-200ER",
        image: "images/aircraft/boeing/777-200er.jpg",
        type: "Geniş Gövde",
        passengers: "440",
        range: "7,065 NM",
        mtow: "297.6 t",
        cruise: "Mach 0.84",
        engine: "GE90 / PW4000 / Trent 800",
        thrust: "334–441 kN",
        fuel: "171,170 L",
        length: "63.73 m",
        wingspan: "60.93 m",
        height: "18.52 m",
        description: "777-200ER, artırılmış yakıt ve MTOW ile 777-200'ün uzun menzilli versiyonudur."
    },

    {
        manufacturer: "Boeing",
        family: "777",
        model: "777-200LR",
        image: "images/aircraft/boeing/777-200lr.jpg",
        type: "Geniş Gövde",
        passengers: "317",
        range: "8,555 NM",
        mtow: "347.5 t",
        cruise: "Mach 0.84",
        engine: "General Electric GE90-110B",
        thrust: "513 kN",
        fuel: "181,280 L",
        length: "63.73 m",
        wingspan: "64.80 m",
        height: "18.60 m",
        description: "777-200LR, çok uzun menzilli operasyonlar için geliştirilmiş 777 türevidir."
    },

    {
        manufacturer: "Boeing",
        family: "777",
        model: "777-300",
        image: "images/aircraft/boeing/777-300.jpg",
        type: "Geniş Gövde",
        passengers: "550",
        range: "6,005 NM",
        mtow: "299.4 t",
        cruise: "Mach 0.84",
        engine: "GE90 / PW4000 / Trent 800",
        thrust: "334–513 kN",
        fuel: "171,170 L",
        length: "73.86 m",
        wingspan: "60.93 m",
        height: "18.52 m",
        description: "777-300, 777-200'ün uzatılmış gövdeli yüksek kapasiteli versiyonudur."
    },

    {
        manufacturer: "Boeing",
        family: "777",
        model: "777-300ER",
        image: "images/aircraft/boeing/777-300er.jpg",
        type: "Geniş Gövde",
        passengers: "550",
        range: "7,370 NM",
        mtow: "351.5 t",
        cruise: "Mach 0.84",
        engine: "General Electric GE90-115B",
        thrust: "513 kN",
        fuel: "181,280 L",
        length: "73.86 m",
        wingspan: "64.80 m",
        height: "18.50 m",
        description: "777-300ER, artırılmış menzil ve MTOW değerleriyle 777 ailesinin uzun menzilli yüksek kapasiteli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "777X",
        model: "777-8",
        image: "images/aircraft/boeing/777-8.jpg",
        type: "Geniş Gövde",
        passengers: "384",
        range: "8,745 NM",
        mtow: "351.5 t",
        cruise: "Mach 0.84",
        engine: "General Electric GE9X",
        thrust: "470 kN",
        fuel: "197,980 L",
        length: "69.79 m",
        wingspan: "71.75 m",
        height: "19.48 m",
        description: "777-8, 777X ailesinin daha kısa gövdeli uzun menzilli modelidir ve katlanabilir kanat uçları kullanır."
    },

    {
        manufacturer: "Boeing",
        family: "777X",
        model: "777-9",
        image: "images/aircraft/boeing/777-9.jpg",
        type: "Geniş Gövde",
        passengers: "426",
        range: "7,300 NM",
        mtow: "351.5 t",
        cruise: "Mach 0.84",
        engine: "General Electric GE9X",
        thrust: "470 kN",
        fuel: "197,980 L",
        length: "76.72 m",
        wingspan: "71.75 m",
        height: "19.68 m",
        description: "777-9, 777X ailesinin daha uzun gövdeli yüksek kapasiteli modelidir."
    },

    {
        manufacturer: "Boeing",
        family: "787",
        model: "787-8",
        image: "images/aircraft/boeing/787-8.jpg",
        type: "Geniş Gövde",
        passengers: "248",
        range: "7,305 NM",
        mtow: "227.9 t",
        cruise: "Mach 0.85",
        engine: "General Electric GEnx-1B / Rolls-Royce Trent 1000",
        thrust: "280–322 kN",
        fuel: "126,206 L",
        length: "56.72 m",
        wingspan: "60.12 m",
        height: "16.92 m",
        description: "787 Dreamliner ailesinin en kısa gövdeli modelidir ve kompozit yapı ile yüksek verimlilik odaklı tasarlanmıştır."
    },

    {
        manufacturer: "Boeing",
        family: "787",
        model: "787-9",
        image: "images/aircraft/boeing/787-9.jpg",
        type: "Geniş Gövde",
        passengers: "296",
        range: "7,565 NM",
        mtow: "254.0 t",
        cruise: "Mach 0.85",
        engine: "General Electric GEnx-1B / Rolls-Royce Trent 1000",
        thrust: "280–322 kN",
        fuel: "126,372 L",
        length: "62.81 m",
        wingspan: "60.12 m",
        height: "17.02 m",
        description: "787 Dreamliner ailesinin orta boy modelidir ve 787-8'e göre daha yüksek kapasite ve menzil sunar."
    },

    {
        manufacturer: "Boeing",
        family: "787",
        model: "787-10",
        image: "images/aircraft/boeing/787-10.jpg",
        type: "Geniş Gövde",
        passengers: "336",
        range: "6,330 NM",
        mtow: "254.0 t",
        cruise: "Mach 0.85",
        engine: "General Electric GEnx-1B / Rolls-Royce Trent 1000",
        thrust: "280–322 kN",
        fuel: "126,206 L",
        length: "68.28 m",
        wingspan: "60.12 m",
        height: "17.00 m",
        description: "787 Dreamliner ailesinin en uzun gövdeli modelidir ve özellikle kapasite odaklı uzun menzilli operasyonlar için geliştirilmiştir."
    }
];

/* =========================================================
   ELEMENTS
========================================================= */

const aircraftGrid = document.getElementById("aircraftGrid");
const aircraftSearch = document.getElementById("aircraftSearch");
const aircraftCount = document.getElementById("aircraftCount");
const aircraftEmpty = document.getElementById("aircraftEmpty");

const manufacturerFilters =
    document.querySelectorAll(".aircraft-filter");

const typeFilters =
    document.querySelectorAll(".aircraft-type-filter");

let activeManufacturer = "all";
let activeType = "all";

/* =========================================================
   AIRCRAFT CARD
========================================================= */

function createAircraftCard(aircraft) {
    return `
        <article
            class="aircraft-card"
            data-manufacturer="${aircraft.manufacturer}"
            data-type="${aircraft.type}"
        >
            <div class="aircraft-card-image">
                <img
                    src="${aircraft.image}"
                    alt="${aircraft.manufacturer} ${aircraft.model}"
                    loading="lazy"
                >
            </div>

            <div class="aircraft-card-info">
                <span class="aircraft-card-manufacturer">
                    ${aircraft.manufacturer} · ${aircraft.family}
                </span>

                <h3 class="aircraft-card-title">
                    ${aircraft.model}
                </h3>

                <div class="aircraft-card-specs">
                    <div class="aircraft-spec">
                        <span class="aircraft-spec-label">YOLCU</span>
                        <span class="aircraft-spec-value">${aircraft.passengers}</span>
                    </div>

                    <div class="aircraft-spec">
                        <span class="aircraft-spec-label">MENZİL</span>
                        <span class="aircraft-spec-value">${aircraft.range}</span>
                    </div>

                    <div class="aircraft-spec">
                        <span class="aircraft-spec-label">MTOW</span>
                        <span class="aircraft-spec-value">${aircraft.mtow}</span>
                    </div>

                    <div class="aircraft-spec">
                        <span class="aircraft-spec-label">SEYİR</span>
                        <span class="aircraft-spec-value">${aircraft.cruise}</span>
                    </div>
                </div>
            </div>

            <span class="aircraft-card-arrow">→</span>
        </article>
    `;
}

/* =========================================================
   DETAIL DATA
========================================================= */

const aircraftDetails = {};

aircraftData.forEach(aircraft => {
    aircraftDetails[aircraft.model] = {
        description: aircraft.description,

        dimensions: {
            "Gövde Tipi": aircraft.type,
            "Uzunluk": aircraft.length,
            "Kanat Açıklığı": aircraft.wingspan,
            "Yükseklik": aircraft.height
        },

        performance: {
            "Menzil": aircraft.range,
            "Seyir Hızı": aircraft.cruise,
            "Maksimum Kalkış Ağırlığı": aircraft.mtow
        },

        powerplant: {
            "Motor": aircraft.engine,
            "Motor İtme Gücü": aircraft.thrust
        },

        capacity: {
            "Yolcu Kapasitesi": aircraft.passengers,
            "Yakıt Kapasitesi": aircraft.fuel
        }
    };
});

/* =========================================================
   DATA SECTION
========================================================= */

function createDataSection(title, data) {
    const rows = Object.entries(data)
        .map(([label, value]) => `
            <div class="aircraft-data-row">
                <span class="aircraft-data-label">${label}</span>
                <span class="aircraft-data-value">${value}</span>
            </div>
        `)
        .join("");

    return `
        <div class="aircraft-data-section">
            <div class="aircraft-data-heading">${title}</div>
            ${rows}
        </div>
    `;
}

/* =========================================================
   MODAL
========================================================= */

const aircraftModal =
    document.getElementById("aircraftModal");

const aircraftModalContent =
    document.getElementById("aircraftModalContent");

const aircraftModalClose =
    document.getElementById("aircraftModalClose");

function openAircraftModal(aircraft) {
    if (!aircraftModal || !aircraftModalContent) {
        return;
    }

    const details = aircraftDetails[aircraft.model];

    if (!details) {
        return;
    }

    aircraftModalContent.innerHTML = `
        <div class="aircraft-detail">

            <div class="aircraft-detail-header">

                <div>
                    <span class="aircraft-detail-kicker">
                        ${aircraft.manufacturer} · ${aircraft.family}
                    </span>

                    <h2 class="aircraft-detail-title">
                        ${aircraft.model}
                    </h2>

                    <span class="aircraft-detail-subtitle">
                        ${aircraft.type}
                    </span>
                </div>

                <div class="aircraft-detail-image">
                    <img
                        src="${aircraft.image}"
                        alt="${aircraft.manufacturer} ${aircraft.model}"
                    >
                </div>

            </div>

            <div class="aircraft-detail-sections">

                ${createDataSection(
                    "BOYUTLAR",
                    details.dimensions
                )}

                ${createDataSection(
                    "PERFORMANS",
                    details.performance
                )}

                ${createDataSection(
                    "MOTOR",
                    details.powerplant
                )}

                ${createDataSection(
                    "KAPASİTE",
                    details.capacity
                )}

            </div>

            <div class="aircraft-detail-description">

                <div class="aircraft-detail-description-title">
                    UÇAK HAKKINDA
                </div>

                <p>${details.description}</p>

            </div>

        </div>
    `;

    aircraftModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeAircraftModal() {
    if (!aircraftModal) {
        return;
    }

    aircraftModal.classList.remove("active");
    document.body.style.overflow = "";
}

/* =========================================================
   CARD CLICK
========================================================= */

if (aircraftGrid) {
    aircraftGrid.addEventListener("click", event => {

        const card =
            event.target.closest(".aircraft-card");

        if (!card) {
            return;
        }

        const model =
            card.querySelector(".aircraft-card-title")
                ?.textContent
                .trim();

        const aircraft =
            aircraftData.find(item =>
                item.model === model
            );

        if (aircraft) {
            openAircraftModal(aircraft);
        }
    });
}

/* =========================================================
   CLOSE
========================================================= */

if (aircraftModalClose) {
    aircraftModalClose.addEventListener(
        "click",
        closeAircraftModal
    );
}

if (aircraftModal) {
    aircraftModal.addEventListener("click", event => {

        if (
            event.target.classList.contains(
                "aircraft-modal-backdrop"
            )
        ) {
            closeAircraftModal();
        }
    });
}

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        aircraftModal?.classList.contains("active")
    ) {
        closeAircraftModal();
    }

});

/* =========================================================
   RENDER
========================================================= */

function renderAircraft() {

    const searchTerm =
        aircraftSearch
            ? aircraftSearch.value
                .trim()
                .toLowerCase()
            : "";

    const filteredAircraft =
        aircraftData.filter(aircraft => {

            const matchesManufacturer =
                activeManufacturer === "all" ||
                aircraft.manufacturer ===
                    activeManufacturer;

            const matchesType =
                activeType === "all" ||
                aircraft.type === activeType;

            const searchableText = `
                ${aircraft.manufacturer}
                ${aircraft.family}
                ${aircraft.model}
                ${aircraft.type}
                ${aircraft.engine}
            `.toLowerCase();

            return (
                matchesManufacturer &&
                matchesType &&
                searchableText.includes(searchTerm)
            );
        });

    if (aircraftGrid) {
        aircraftGrid.innerHTML =
            filteredAircraft
                .map(createAircraftCard)
                .join("");
    }

    if (aircraftCount) {
        aircraftCount.textContent =
            `${filteredAircraft.length} UÇAK`;
    }

    if (aircraftEmpty) {
        aircraftEmpty.style.display =
            filteredAircraft.length === 0
                ? "block"
                : "none";
    }

    if (aircraftGrid) {
        aircraftGrid.style.display =
            filteredAircraft.length === 0
                ? "none"
                : "grid";
    }
}

/* =========================================================
   MANUFACTURER FILTER
========================================================= */

manufacturerFilters.forEach(button => {

    button.addEventListener("click", function () {

        manufacturerFilters.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        activeManufacturer =
            this.dataset.filter || "all";

        renderAircraft();
    });

});

/* =========================================================
   TYPE FILTER
========================================================= */

typeFilters.forEach(button => {

    button.addEventListener("click", function () {

        typeFilters.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        activeType =
            this.dataset.type || "all";

        renderAircraft();
    });

});

/* =========================================================
   SEARCH
========================================================= */

if (aircraftSearch) {

    aircraftSearch.addEventListener(
        "input",
        renderAircraft
    );

}

/* =========================================================
   DATABASE VALIDATION
========================================================= */

(function validateAircraftDatabase() {

    const models = aircraftData.map(
        aircraft => aircraft.model
    );

    const duplicates =
        models.filter(
            (model, index) =>
                models.indexOf(model) !== index
        );

    const missingData =
        aircraftData.filter(aircraft =>
            !aircraft.manufacturer ||
            !aircraft.family ||
            !aircraft.model ||
            !aircraft.image ||
            !aircraft.type ||
            !aircraft.passengers ||
            !aircraft.range ||
            !aircraft.mtow ||
            !aircraft.cruise ||
            !aircraft.engine ||
            !aircraft.thrust ||
            !aircraft.fuel ||
            !aircraft.length ||
            !aircraft.wingspan ||
            !aircraft.height ||
            !aircraft.description
        );

    if (duplicates.length) {
        console.warn(
            "Tekrarlanan uçak modelleri:",
            [...new Set(duplicates)]
        );
    }

    if (missingData.length) {
        console.warn(
            "Eksik teknik verisi olan uçaklar:",
            missingData.map(item => item.model)
        );
    }

    console.info(
        `Aircraft database: ${aircraftData.length} benzersiz model yüklendi.`
    );

})();

/* =========================================================
   INITIAL RENDER
========================================================= */

renderAircraft();
