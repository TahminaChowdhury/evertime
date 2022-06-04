const products = [
    {   
        name: "Seamaster Diver 300M Midsize Watch",
        category: "Unisex",
        img1: "https://i.ibb.co/9hyFVjf/omega-seamaster-diver-300m-midsize-watch-256180-om256180.jpg",
        img2:"https://i.ibb.co/cXd3Snq/omega-seamaster-diver-300m-midsize-watch-256180-om256180-2.jpg",
        img3:"https://i.ibb.co/DMjCwWy/omega-seamaster-diver-300m-midsize-watch-256180-om256180-3.jpg",
        price: 2150,
        brand: "Omega",
        description: "Silver-tone stainless steel case with a silver-tone stainless steel bracelet. Uni-directional rotating blue ion-plated aluminium bezel. Black dial with luminous tip hands and dot hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Quartz movement. Scratch resistant sapphire crystal. Textured steel crown. Solid case back. Round case shape, case size: 36.25 mm, case thickness: 11.4 mm. Deployment with push button release clasp. Water resistant at 300 meters / 1000 feet. Functions: hours, minutes, seconds, date. Seamaster Series. Dive watch style. Watch label: Swiss Made. Omega Seamaster Diver 300M Midsize Watch 2561.80.."
    },
    {   
        name: "Timewalker Automatic Silver Dial Watch",
        category: "Unisex",
        img1: "https://i.ibb.co/z2R1ZL1/montblanc-timewalker-automatic-silver-dial-watch-119940.jpg",
        img2:"https://i.ibb.co/JjpcXMj/montblanc-timewalker-automatic-silver-dial-watch-119940-2.jpg",
        img3:"https://i.ibb.co/pRZJV85/montblanc-timewalker-automatic-silver-dial-watch-119940-3.jpg",
        price: 3490,
        brand: "Montblanc",
        description: "Stainless steel case with a black (calfskin) leather strap. Fixed black ceramic bezel showing tachymeter markings. Silver dial with luminous grey hands and alternating Arabic numeral and index hour markers. Minute markers around the outer rim. Luminescent hands and markers. Date display at the 3 o'clock position. Chronograph - three sub-dials displaying: 60 second, 30 minute and 12 hour. Caliber: MB 25.07 automatic movement with a 46-hour power reserve. Scratch resistant sapphire crystal. Transparent case back. Round case shape. Case size: 41 mm. Band width: 20 mm. Tang clasp. Water resistant at 100 meters / 330 feet. Functions: date, hour, minute, second. Timewalker Series. Luxury watch style. Montblanc Timewalker Automatic Silver Dial Watch 119940."
    },
    {   
        name: "Couturier Powermatic 80 Automatic",
        category: "Female watch",
        img1: "https://i.ibb.co/mqdHwvd/tissot-couturier-powermatic-80-automatic-ladies-watch-t035-207-11-031-00.jpg",
        img2:"https://i.ibb.co/KV5ymhb/tissot-couturier-powermatic-80-automatic-ladies-watch-t035-207-11-031-00-2.jpg",
        img3:"https://i.ibb.co/YZwPVkC/tissot-couturier-powermatic-80-automatic-ladies-watch-t035-207-11-031-00-3.jpg",
        price: 750,
        brand: "Tissot",
        description: "Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. Silver dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Date display at the 3 o'clock position. Powermatic 80 automatic movement with an 80-hour power reserve. Scratch resistant sapphire crystal. Transparent case back. Case size: 32 mm. Case thickness: 10.1 mm. Round case shape. Bracelet width: 18 mm. Butterfly clasp. Water resistant at 100 meters / 330 feet. Functions: date, hour, minute, second. Casual watch style. Tissot Couturier Powermatic 80 Automatic Ladies Watch T035.207.11.031.00."
    },
    {   
        name: "Lady Heart Flower Automatic White Mother of Pearl Dial Ladies Watch",
        category: "Female watch",
        img1: "https://i.ibb.co/TcYFg3B/tissot-lady-heart-flower-white-mother-of-pearl-dial-automatic-watch-t0502071711705.jpg",
        img2:"https://i.ibb.co/1s5Pyv7/tissot-lady-heart-flower-white-mother-of-pearl-dial-automatic-watch-t0502071711705-2.jpg",
        img3:"https://i.ibb.co/wgXHSpJ/tissot-lady-heart-flower-white-mother-of-pearl-dial-automatic-watch-t0502071711705-3.jpg",
        price: 795,
        brand: "Tissot",
        description: "Stainless steel case with a white leather strap. Fixed stainless steel bezel. White mother of pearl dial with silver-tone alpha-style shape hands and index hour markers. Arabic numerals mark the 3, 6 and 9 o'clock positions. Dial Type: Analog. Powermatic 80.111 automatic movement, containing 23 Jewels, bitting at 28800 vph, and has a power reserve of approximately 80 hours. Scratch resistant sapphire crystal. Pull / push crown. Transparent case back. Round case shape. Case size: 35 mm. Case thickness: 9.8 mm. Band width: 16 mm. Butterfly clasp. Water resistant at 30 meters / 100 feet. Functions: hour, minute, second. Casual watch style. Watch label: Swiss Made. Tissot Lady Heart Flower Automatic White Mother of Pearl Dial Ladies Watch T0502071711705."
    },
    {   
        name: "Lady Heart Automatic White Mother of Pearl Dial Ladies Watch",
        category: "Female watch",
        img1: "https://i.ibb.co/2vw4bc3/tissot-lady-heart-automatic-white-mother-of-pearl-dial-ladies-watch-t0502071111705-t0502071111705.jpg",
        img2:"https://i.ibb.co/RHFtgKw/tissot-lady-heart-automatic-white-mother-of-pearl-dial-ladies-watch-t0502071111705-t0502071111705-2.jpg",
        price: 825,
        brand: "Tissot",
        description: "Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. White mother of pearl dial with silver-tone alpha-style hands and index hour markers. Arabic numerals mark the 3, 6 and 9 o'clock positions. Dial Type: Analog. Powermatic 80.11 automatic movement with an 80-hour power reserve. Scratch resistant sapphire crystal. Pull / push crown. Transparent case back. Round case shape. Case size: 35 mm. Case thickness: 9.75 mm. Band width: 16 mm. Butterfly clasp. Water resistant at 30 meters / 100 feet. Functions: hour, minute, second. Casual watch style. Watch label: Swiss Made. Item Variations: T0502071111705. Tissot Lady Heart Automatic White Mother of Pearl Dial Ladies Watch T050.207.11.117.05.."
    },
    {   
        name: "Planet Ocean Co-Axial Blue Dial Mid-size Titanium Watch",
        category: "Male watch",
        img1: "https://i.ibb.co/xHQY2Hq/omega-planet-ocean-co-axial-blue-dial-mid-size-titanium-watch-232-92-38-20-03-001.jpg",
        img2:"https://i.ibb.co/6tbs869/omega-planet-ocean-co-axial-blue-dial-mid-size-titanium-watch-232-92-38-20-03-001-2.jpg",
        img3:"https://i.ibb.co/G301myM/omega-planet-ocean-co-axial-blue-dial-mid-size-titanium-watch-232-92-38-20-03-001-3.jpg",
        price: 7800,
        brand: "Omega",
        description: "Grey titanium case with a blue rubber strap. Uni-directional rotating grey titanium with an inlaid blue ceramic top ring bezel. Blue dial with luminous silver-tone hands and index hour markers. Arabic numerals mark the 6, 9 and 12 o'clock positions. minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Omega calibre 8520 automatic movement with a 50-hour power reserve. Scratch resistant sapphire crystal. Screw down crown. Transparent case back. Round case shape. Case size: 37.5 mm. Band width: 18 mm. Deployment clasp. Water resistant at 600 meters / 2000 feet. Functions: date, hour, minute, second, chronometer. Luxury watch style. Watch label: Swiss Made. Item Variations: 232 92 38 20 03 001, 232-92-38-20-03-001, 232/92/38/20/03/001, 23292382003001. Omega Planet Ocean Co-Axial Blue Dial Mid-size Titanium Watch 232.92.38.20.03.001."
    },
    {   
        name: "Seamaster Planet Ocean Automatic Men's Watch",
        category: "Male watch",
        img1: "https://i.ibb.co/sp4k3jN/omega-seamaster-planet-ocean-automatic-mens-watch-215-33-44-22-01-001.jpg",
        img2:"https://i.ibb.co/JBMYkrz/omega-seamaster-planet-ocean-automatic-mens-watch-215-33-44-22-01-001-2.jpg",
        img3:"https://i.ibb.co/9vP64WN/omega-seamaster-planet-ocean-automatic-mens-watch-215-33-44-22-01-001-3.jpg",
        price: 7900,
        brand: "Omega",
        description: "Stainless steel case with a black leather strap with rubber lining. Uni-directional rotating stainless steel bezel and black and white ceramic top ring showing 24 hour (GMT) markings. Black dial with luminous silver-tone hands and index hour markers. Arabic numerals mark the 6, 9 and 12 o'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Omega calibre 8906 automatic movement with a 60-hour power reserve. Scratch resistant sapphire crystal. Screw down crown. Transparent case back. Case size: 43.5 mm. Case thickness: 17.04 mm. Round case shape. Band width: 21 mm. Deployment clasp with a push button release. Water resistant at 600 meters / 2000 feet. Functions: GMT, second time zone, hour, minute, second. Luxury watch style. Watch label: Swiss Made. Omega Seamaster Planet Ocean Automatic Men's Watch 215.33.44.22.01.001."
    },
    {   
        name: "Seamaster Planet Ocean Automatic Men's Watch",
        category: "Male watch",
        img1: "https://i.ibb.co/Fs3JB84/omega-seamaster-planet-ocean-automatic-men-s-watch-215-30-44-21-01-002.jpg",
        img2:"https://i.ibb.co/RTcBkk0/omega-seamaster-planet-ocean-automatic-men-s-watch-215-30-44-21-01-002-2.jpg",
        img3:"https://i.ibb.co/r4GWTH3/omega-seamaster-planet-ocean-automatic-men-s-watch-215-30-44-21-01-002-3.jpg",
        price: 6550,
        brand: "Omega",
        description: "Stainless steel case with a stainless steel bracelet. Uni-directional rotating coin edge stainless steel bezel with a black and orange ceramic ring. Black dial with luminous silver-tone arrow-shaped hands and index hour markers. Arabic numerals mark the 6, 9 and 12 o'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Omega calibre 8900 automatic movement, based upon Omega 8500, containing 39 Jewels, bitting at 25200 vph, and has a power reserve of approximately 60 hours. Scratch resistant sapphire crystal. Screw down crown. Transparent case back. Round case shape. Case size: 43.5 mm. Case thickness: 16.04 mm. Band width: 21 mm. Fold over clasp. Water resistant at 600 meters / 2000 feet. Functions: date, hour, minute, second, chronometer. Seamaster Planet Ocean Series. Luxury watch style. Watch label: Swiss Made. Omega Seamaster Planet Ocean Automatic Men's Watch 215.30.44.21.01.002."
    },
    {   
        name: "Seamaster Automatic Blue Dial Men's Watch",
        category: "Male watch",
        img1: "https://i.ibb.co/JWZn0SD/omega-seamaster-automatic-blue-dial-mens-watch-21592462203001-21592462203001.jpg",
        img2:"https://i.ibb.co/HTWkCQ5/omega-seamaster-automatic-blue-dial-mens-watch-21592462203001-21592462203001-2.jpg",
        img3:"https://i.ibb.co/bvWpqx3/omega-seamaster-automatic-blue-dial-mens-watch-21592462203001-21592462203001-3.jpg",
        price: 11700,
        brand: "Omega",
        description: "Blue ceramic case with a blue and orange rubber strap. Uni-directional rotating blue ceramic bezel with a blue liquidmetal top ring. Blue dial with luminous 18kt white gold hands and index hour markers. Arabic numerals mark the 6, 9 and 12 o'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Omega calibre 8906 automatic movement. Scratch resistant sapphire crystal. Screw down crown. Transparent case back. Round case shape. Case size: 45.5 mm. Case thickness: 17.6 mm. Band width: 22 mm. Fol dover clasp. Water resistant at 600 metres / 2000 feet. Functions: date, hour, minute, second. Luxury watch style. Watch label: Swiss Made. Omega Seamaster Automatic Blue Dial Men's Watch 215.92.46.22.03.001.."
    },
    {   
        name: "Seamaster Automatic Blue Dial Men's Watch",
        category: "Male watch",
        img1: "https://i.ibb.co/JWZn0SD/omega-seamaster-automatic-blue-dial-mens-watch-21592462203001-21592462203001.jpg",
        img2:"https://i.ibb.co/HTWkCQ5/omega-seamaster-automatic-blue-dial-mens-watch-21592462203001-21592462203001-2.jpg",
        img3:"https://i.ibb.co/bvWpqx3/omega-seamaster-automatic-blue-dial-mens-watch-21592462203001-21592462203001-3.jpg",
        price: 11700,
        brand: "Omega",
        description: "Blue ceramic case with a blue and orange rubber strap. Uni-directional rotating blue ceramic bezel with a blue liquidmetal top ring. Blue dial with luminous 18kt white gold hands and index hour markers. Arabic numerals mark the 6, 9 and 12 o'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Omega calibre 8906 automatic movement. Scratch resistant sapphire crystal. Screw down crown. Transparent case back. Round case shape. Case size: 45.5 mm. Case thickness: 17.6 mm. Band width: 22 mm. Fol dover clasp. Water resistant at 600 metres / 2000 feet. Functions: date, hour, minute, second. Luxury watch style. Watch label: Swiss Made. Omega Seamaster Automatic Blue Dial Men's Watch 215.92.46.22.03.001.."
    },
    {   
        name: "Classic Date Automatic Silver Dial Ladies Watch",
        category: "Feamle watch",
        img1: "https://i.ibb.co/vvTYpXt/oris-classic-date-automatic-silver-dial-ladies-watch-01-561-7718-4071-07-5-14-31.jpg",
        img2:"https://i.ibb.co/K6bJh5D/oris-classic-date-automatic-silver-dial-ladies-watch-01-561-7718-4071-07-5-14-31-2.jpg",
        img3:"https://i.ibb.co/GTJ1x2H/oris-classic-date-automatic-silver-dial-ladies-watch-01-561-7718-4071-07-5-14-31-3.jpg",
        price: 1250,
        brand: "Oris",
        description: "Stainless steel case with a white leather strap. Fixed stainless steel bezel. Silver dial with rose gold-tone hands and index hour markers. Roman numeral appear at the 3, 9 and 12 o'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands. Date display at the 6 o'clock position. Oris calibre 561, base ETA 2671 Automatic movement, based upon ETA 2671, containing 25 Jewels, bitting at 28800 vph, and has a power reserve of approximately 38 hours. Scratch resistant sapphire crystal. Pull / push crown. Transparent case back. Round case shape. Case size: 28.5 mm. Band width: 14 mm. Tang clasp. Water resistant at 50 meters / 165 feet. Functions: date, hour, minute, second. Classic Date Series. Dress watch style. Watch label: Swiss Made. Oris Classic Date Automatic Silver Dial Ladies Watch 01 561 7718 4071-07 5 14 31."
    },
    {   
        name: "Classic Date Automatic Blue Dial Ladies Watch",
        category: "Feamle watch",
        img1: "https://i.ibb.co/52S5JDg/oris-classic-date-automatic-blue-dial-ladies-watch-01-561-7718-407507-5-14-35.jpg",
        img2:"https://i.ibb.co/V91ykdS/oris-classic-date-automatic-blue-dial-ladies-watch-01-561-7718-407507-5-14-35-2.jpg",
        img3:"https://i.ibb.co/B3zhDkF/oris-classic-date-automatic-blue-dial-ladies-watch-01-561-7718-407507-5-14-35-3.jpg",
        price: 1250,
        brand: "Oris",
        description: "Silver-tone stainless steel case with a black leather strap. Fixed silver-tone stainless steel bezel. Blue (guilloche) dial with silver-tone hands and index hour markers. Roman numeral appear at the 3, 9 and 12 o'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands. Date display at the 6 o'clock position. Oris Calibre 561, base ETA 2671 Automatic movement, based upon ETA 2671, containing 25 Jewels, bitting at 28800 vph, and has a power reserve of approximately 38 hours. Scratch resistant sapphire crystal. Pull / push crown. Transparent case back. Round case shape, case size: 28.5 mm. Band width: 14 mm. Tang clasp. Water resistant at 50 meters / 165 feet. Functions: date, hour, minute, second. Classic Date Series. Dress watch style. Watch label: Swiss Made. Oris Classic Date Automatic Blue Dial Ladies Watch 01 561 7718 4075-07 5 14 35."
    },
    {   
        name: "Artelier Automatic Diamond Silver Skeleton Dial Ladies Watch",
        category: "Feamle watch",
        img1: "https://i.ibb.co/NjbjfpQ/oris-artelier-automatic-diamond-silver-skeleton-dial-ladies-watch-01-560-7724-405107-5-17-64fc.jpg",
        img2:"https://i.ibb.co/DRrsZ70/oris-artelier-automatic-diamond-silver-skeleton-dial-ladies-watch-01-560-7724-405107-5-17-64fc-2.jpg",
        img3:"https://i.ibb.co/C1xSNvH/oris-artelier-automatic-diamond-silver-skeleton-dial-ladies-watch-01-560-7724-405107-5-17-64fc-3.jpg",
        price: 2700,
        brand: "Oris",
        description: "Silver-tone stainless steel case with a black (calfskin) leather strap. Fixed silver-tone stainless steel bezel. Silver (skeleton center) dial with silver-tone hands and diamond hour markers. Dial Type: Analog. Oris Calibre 560, base ETA 2671 Automatic movement, based upon ETA 2671, containing 25 Jewels, bitting at 28800 vph, and has a power reserve of approximately 38 hours. Scratch resistant sapphire crystal. Pull / push crown. Transparent case back. Round case shape, case size: 33 mm. Band width: 17 mm. Deployment with push button release clasp. Water resistant at 50 meters / 165 feet. Functions: hour, minute, second. Artelier Series. Casual watch style. Watch label: Swiss Made. Oris Artelier Automatic Diamond Silver Skeleton Dial Ladies Watch 01 560 7724 4051-07 5 17 64FC."
    },
    {   
        name: "Heritage GMT Automatic Silvery White Dial Watch",
        category: "Unisex",
        img1: "https://i.ibb.co/brtr7mw/montblanc-heritage-gmt-automatic-silvery-white-dial-watch-119948.jpg",
        img2:"https://i.ibb.co/XbcbFXc/montblanc-heritage-gmt-automatic-silvery-white-dial-watch-119948-2.jpg",
        img3:"https://i.ibb.co/kMGBQrc/montblanc-heritage-gmt-automatic-silvery-white-dial-watch-119948-3.jpg",
        price: 3005,
        brand: "Montblanc",
        description: "Stainless steel case with a grey (alligator) leather strap. Fixed stainless steel bezel. Silvery white dial with silver-tone hands and dot hour markers. Arabic numerals appear at the 3, 6, 9 and 12 o'clock positions. Minute markers. Arabic numeral minute markers (at 5 minute intervals). 24 hour markers around the outer rim. Dial Type: Analog. Caliber MB 24.05 automatic movement with a 42-hour power reserve. Scratch resistant sapphire crystal. Pull / push crown. Solid case back. Round case shape. Case size: 40 mm. Case thickness: 11.8 mm. Band width: 20 mm. Tang clasp. Water resistant at 50 meters / 165 feet. Functions: hour, minute, second, 24 hour. Heritage Gmt Series. Luxury watch style. Watch label: Swiss Made. Montblanc Heritage GMT Automatic Silvery White Dial Watch 119948."
    },
    {   
        name: "4810 Chronograph Automatic Black Dial Men's Watch",
        category: "Unisex",
        img1: "https://i.ibb.co/GxPMKpL/montblanc-4810-chronograph-automatic-mens-watch-115123.jpg",
        img2:"https://i.ibb.co/v1jsJZx/montblanc-4810-chronograph-automatic-mens-watch-115123-2.jpg",
        img3:"https://i.ibb.co/y6qk5rZ/montblanc-4810-chronograph-automatic-mens-watch-115123-3.jpg",
        price: 5000,
        brand: "Montblanc",
        description: "Stainless steel case with a black (alligator) leather strap. Fixed stainless steel bezel. Black guilloche dial with luminous rhodium-plated hands and alternating index and Roman numeral hour markers. Arabic numeral minute markers (at 10 minute intervals). Minute markers around the outer rim. Dial Type: Analog. Luminescent hands. Date display above the 6 o'clock position. Chronograph - three sub-dials displaying: 60 second, 30 minute and 12 hour. MontBlanc calibre MB 25.01 automatic movement, based upon ETA 7750, containing 25 Jewels, bitting at 28800 vph, and has a power reserve of approximately 46 hours. Scratch resistant sapphire crystal. Pull / push crown. Transparent case back. Round case shape. Case size: 43 mm. Case thickness: 13.68 mm. Band width: 22 mm. Tang clasp. Water resistant at 50 meters / 165 feet. Functions: chronograph, date, hour, minute, second. 4810 Series. Luxury watch style. Watch label: Swiss Made. MontBlanc 4810 Chronograph Automatic Black Dial Men's Watch 115123."
    },
    {   
        name: "Pro Diver Quartz Black Dial Batman Bezel Ladies Watch",
        category: "Female watch",
        img1: "https://i.ibb.co/FDwLbqW/invicta-pro-diver-quartz-black-dial-batman-bezel-ladies-watch-33258.jpg",
        img2:"https://i.ibb.co/ByxQQ0B/invicta-pro-diver-quartz-black-dial-batman-bezel-ladies-watch-33258-2.jpg",
        price: 395,
        brand: "Invicta",
        description: "Stainless steel case with a stainless steel bracelet. Uni-directional rotating stainless steel bezel with an inlaid black and blue (Batman) ring. Black dial with luminous silver-tone hands and dot hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Hattori caliber PC32 quartz movement. Scratch resistant Flame Fusion crystal. Pull / push crown. Solid case back. Round case shape. Case size: 38 mm. Case thickness: 11 mm. Band width: 20 mm. Band length: 7 inches. Fold over clasp. Water resistant at 200 meters / 660 feet. Functions: date, hour, minute, second. Pro Diver Series. Casual watch style. Watch label: Japan Movt. Invicta Pro Diver Quartz Black Dial Batman Bezel Ladies Watch 33258."
    },
    {   
        name: "Submariner Automatic Chronometer Black Dial Men's Watch BKSO",
        category: "Male watch",
        img1: "https://i.ibb.co/xz64Nc1/rolex-submariner-automatic-chronometer-black-dial-mens-watch-126610lnbkso.jpg",
        img2:"https://i.ibb.co/my2sztx/rolex-submariner-automatic-chronometer-black-dial-mens-watch-126610lnbkso-2.jpg",
        img3:"https://i.ibb.co/NxwdYtL/rolex-submariner-automatic-chronometer-black-dial-mens-watch-126610lnbkso-3.jpg",
        price: 17450,
        brand: "Rolex",
        description: "Stainless steel case with a stainless steel bracelet. Uni-directional rotating stainless steel bezel with a black ceramic ring. Black dial with luminous silver-tone hands and dot hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o'clock position. Rolex calibre 3235 automatic movement, based upon Rolex 3035, containing 31 Jewels, bitting at 28800 vph, and has a power reserve of approximately 70 hours. Scratch resistant sapphire crystal. Screw down crown. Solid case back. Round case shape. Case size: 41 mm. Oysterlock clasp. Water resistant at 300 meters / 1000 feet. Functions: date, hour, minute, second, chronometer. Submariner Series. Luxury watch style. Watch label: Swiss Made. Item Variations: M126610LN-0001. Rolex Submariner Automatic Chronometer Black Dial Men's Watch 126610LNBKSO."
    },
    {   
        name: "Submariner Blue Dial Stainless Steel and 18K Yellow Gold Bracelet Automatic Men's Watch BLSO",
        category: "Male watch",
        img1: "https://i.ibb.co/3NBdF8r/rolex-submariner-blue-dial-stainless-steel-and-18k-yellow-gold-bracelet-automatic-mens-watch-126613l.jpg",
        img2:"https://i.ibb.co/dJJ1P7s/rolex-submariner-blue-dial-stainless-steel-and-18k-yellow-gold-bracelet-automatic-mens-watch-126613l.jpg",
        price: 22350,
        brand: "Rolex",
        description: "Stainless steel case with a stainless steel Rolex oyster bracelet with 18kt yellow gold center links. Uni-directional rotating 18kt yellow gold bezel with a blue cerachrom (count-up elapsed time) top ring. Blue dial with luminous yellow gold hands and dot hour markers. Minute markers around the outer rim. Dial Type: Analog. Date display at the 3 o'clock position. Rolex calibre 3235 automatic movement, based upon Rolex 3035, containing 31 Jewels, bitting at 28800 vph, and has a power reserve of approximately 70 hours. Scratch resistant sapphire crystal. Screw down crown. Solid case back. Round case shape. Case size: 41 mm. Oysterlock clasp. Water resistant at 300 meters / 1000 feet. Functions: date, hour, minute, second, chronometer. Submariner Series. Luxury watch style. Watch label: Swiss Made. Item Variations: M126613LB-0002. Rolex Submariner Blue Dial Stainless Steel and 18K Yellow Gold Bracelet Automatic Men's Watch 126613LBBLSO."
    },

]
// 8lzxUPBJYax99W4h