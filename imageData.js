// Objet contenant les images et leurs coordonnées.
const imageSets = {
    'toiture': [
        'Images/Toiture_1.jpg', 'Images/Toiture_2.jpg', 'Images/Toiture_3.jpg',
        'Images/Toiture_4.jpg', 'Images/Toiture_5.jpg', 'Images/Toiture_6.jpg',
        'Images/Toiture_7.jpg', 'Images/Toiture_8.jpg', 'Images/Toiture_9.jpg',
        'Images/Toiture_10.jpg', 'Images/Toiture_11.jpg', 'Images/Toiture_12.jpg',
        'Images/Toiture_13.jpg', 'Images/Toiture_14.jpg', 'Images/Toiture_15.jpg',
        'Images/Toiture_16.jpg', 'Images/Toiture_17.jpg', 'Images/Toiture_18.jpg',
        'Images/Toiture_19.jpg'
    ],
    'R+3': [
        {
            src: 'Images/R3_1.jpg',
            areas: [
                { shape: 'circle', coords: '311,414,51', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '364,529,55', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '749,524,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '725,410,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1195,431,56', alt: 'B25', title: 'B25' },
                { shape: 'circle', coords: '1366,502,48', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1597,608,49', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1580,480,51', alt: 'B21', title: 'B21' }
            ]
        },
        {
            src: 'Images/R3_2.jpg',
            areas: [
                { shape: 'circle', coords: '778,248,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '754,367,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '386,308,60', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '388,173,50', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1597,457,55', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1554,589,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1376,451,61', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1236,338,67', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_3.jpg',
            areas: [
                { shape: 'circle', coords: '802,215,62', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '717,318,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '396,203,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '460,85,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1509,545,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1425,667,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1295,508,67', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1198,380,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_4.jpg',
            areas: [
                { shape: 'circle', coords: '817,242,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '710,341,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '447,191,59', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '545,85,57', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1427,665,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1327,774,63', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1229,603,68', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1180,458,65', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_5.jpg',
            areas: [
                { shape: 'circle', coords: '869,242,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '710,315,74', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '540,120,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '667,43,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1239,781,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1070,857,63', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1061,668,76', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1105,519,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_6.jpg',
            areas: [
                { shape: 'circle', coords: '1062,345,66', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '886,373,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '828,144,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '995,102,47', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1132,922,61', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '927,939,75', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1027,773,74', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1136,654,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_7.jpg',
            areas: [
                { shape: 'circle', coords: '1171,430,59', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '986,389,71', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1107,189,56', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1300,188,54', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '764,960,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '544,917,87', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '801,789,71', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '983,719,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_8.jpg',
            areas: [
                { shape: 'circle', coords: '1203,423,71', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1043,358,65', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1236,176,68', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1435,203,52', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '621,857,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '428,801,81', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '727,709,73', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '925,675,68', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_9.jpg',
            areas: [
                { shape: 'circle', coords: '1292,516,70', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1215,387,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1521,298,53', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1663,390,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '474,710,62', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '389,587,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '659,608,65', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '866,629,54', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_10.jpg',
            areas: [
                { shape: 'circle', coords: '1231,561,47', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1191,434,56', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1539,400,63', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1645,532,62', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '382,551,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '342,408,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '581,497,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '756,579,71', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_11.jpg',
            areas: [
                { shape: 'circle', coords: '1215,613,56', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1222,483,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1602,514,64', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1651,664,61', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '366,470,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '403,337,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '586,446,61', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '736,554,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_12.jpg',
            areas: [
                { shape: 'circle', coords: '1102,597,70', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1183,474,58', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1529,571,68', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1503,726,55', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '369,305,64', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '473,173,66', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '590,309,63', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '686,444,59', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_13.jpg',
            areas: [
                { shape: 'circle', coords: '1065,694,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1194,590,62', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1455,773,71', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1358,904,63', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '581,230,47', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '716,142,59', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '754,291,64', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '752,432,47', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_14.jpg',
            areas: [
                { shape: 'circle', coords: '888,701,53', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1058,635,60', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1231,879,57', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1063,965,59', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '627,190,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '804,125,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '776,282,52', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '702,419,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_15.jpg',
            areas: [
                { shape: 'circle', coords: '735,659,63', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '920,659,54', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '884,920,54', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '668,946,48', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '933,122,51', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1123,145,60', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '965,258,60', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '808,336,58', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_16.jpg',
            areas: [
                { shape: 'circle', coords: '724,596,58', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '909,645,62', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '723,864,70', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '512,829,60', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1229,140,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1409,195,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1190,268,60', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '998,315,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_17.jpg',
            areas: [
                { shape: 'circle', coords: '716,436,63', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '878,515,66', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '610,697,58', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '427,630,57', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1394,93,52', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1543,173,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1290,205,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1095,217,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_18.jpg',
            areas: [
                { shape: 'circle', coords: '742,407,68', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '854,522,63', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '516,651,62', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '377,548,51', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1529,191,59', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1653,297,65', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1383,283,52', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1175,272,66', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_19.jpg',
            areas: [
                { shape: 'circle', coords: '677,321,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '735,448,58', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '350,507,57', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '271,383,60', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1531,258,54', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1578,401,64', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1343,331,59', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1151,284,61', alt: 'B25', title: 'B25' }
            ]
        }
    ],
    'R+2': [
        {
            src: 'Images/R2_1.jpg',
            areas: [
                { shape: 'circle', coords: '716,467,42', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '838,591,70', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '633,589,54', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '474,589,51', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '276,584,61', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '317,465,50', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1564,518,49', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1691,620,76', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1508,679,77', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1378,568,62', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1199,478,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_2.jpg',
            areas: [
                { shape: 'circle', coords: '784,288,54', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '832,426,65', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '652,390,46', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '490,372,55', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '306,340,68', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '390,221,53', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1579,470,65', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1659,624,81', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1460,652,70', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1370,499,62', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1239,393,74', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_3.jpg',
            areas: [
                { shape: 'circle', coords: '797,260,64', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '803,405,69', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '632,336,44', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '495,291,59', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '319,224,75', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '456,130,57', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1520,567,59', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1540,735,69', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1328,718,69', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1287,561,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1207,419,64', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_4.jpg',
            areas: [
                { shape: 'circle', coords: '827,301,53', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '791,428,52', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '652,353,49', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '530,287,60', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '382,206,50', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '543,123,61', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1448,695,66', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1415,856,73', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1215,816,75', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1224,647,76', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1190,486,54', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_5.jpg',
            areas: [
                { shape: 'circle', coords: '861,289,52', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '763,420,53', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '676,314,53', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '583,221,47', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '484,122,62', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '676,77,59', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1256,802,59', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1163,947,80', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1002,872,55', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1065,717,69', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1116,554,71', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_6.jpg',
            areas: [
                { shape: 'circle', coords: '1058,383,50', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '904,471,51', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '872,358,50', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '842,255,46', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '821,144,58', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '987,152,52', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1154,955,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1008,1042,76', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '885,942,54', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1030,834,62', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1148,702,70', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_7.jpg',
            areas: [
                { shape: 'circle', coords: 'NaN', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: 'NaN', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: 'NaN', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: 'NaN', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: 'NaN', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: 'NaN', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: 'NaN', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: 'NaN', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: 'NaN', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: 'NaN', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: 'NaN', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_8.jpg',
            areas: [
                { shape: 'circle', coords: '1240,455,66', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1003,455,60', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1097,355,43', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1198,277,50', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1292,182,44', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1428,248,50', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '642,914,55', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '434,915,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '490,777,51', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '696,774,49', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '912,726,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_9.jpg',
            areas: [
                { shape: 'circle', coords: '1295,583,78', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1113,480,41', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1268,426,43', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1422,384,51', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1586,332,53', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1639,440,51', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '496,775,55', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '307,705,68', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '436,595,52', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '627,655,67', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '857,671,73', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_10.jpg',
            areas: [
                { shape: 'circle', coords: '1229,616,58', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1105,501,53', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1283,484,51', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1466,462,60', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1659,449,68', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1669,590,60', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '386,640,78', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '240,515,59', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '406,438,59', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '551,551,65', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '753,626,73', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_11.jpg',
            areas: [
                { shape: 'circle', coords: '1224,678,68', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1156,540,62', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1336,544,60', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1515,557,68', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1721,589,63', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1666,702,51', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '395,539,68', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '321,409,58', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '487,363,59', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '600,496,68', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '722,612,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_12.jpg',
            areas: [
                { shape: 'circle', coords: '1117,640,49', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1108,494,72', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1268,550,50', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1425,602,58', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1607,660,70', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1500,785,67', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '391,365,66', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '375,220,51', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '556,227,61', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '583,368,67', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '670,496,68', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_13.jpg',
            areas: [
                { shape: 'circle', coords: '1056,740,66', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1135,590,63', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1260,684,59', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1374,766,57', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1508,877,66', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1321,935,59', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '562,287,60', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '625,169,59', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '791,200,67', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '751,353,70', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '737,500,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_14.jpg',
            areas: [
                { shape: 'circle', coords: '889,757,54', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '1014,628,50', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '1103,756,47', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '1176,865,47', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '1261,988,59', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '1073,1015,55', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '617,263,52', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '731,134,65', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '858,213,72', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '769,350,55', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '680,459,68', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_15.jpg',
            areas: [
                { shape: 'circle', coords: '718,717,61', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '936,647,65', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '904,785,59', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '873,896,51', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '844,1040,73', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '645,1000,48', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '901,180,55', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1079,134,57', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1111,253,55', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '957,312,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '798,387,70', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_16.jpg',
            areas: [
                { shape: 'circle', coords: 'NaN', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: 'NaN', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: 'NaN', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: 'NaN', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: 'NaN', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: 'NaN', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: 'NaN', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: 'NaN', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: 'NaN', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: 'NaN', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: 'NaN', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_17.jpg',
            areas: [
                { shape: 'circle', coords: '723,478,67', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '941,511,57', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '818,595,49', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '686,684,51', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '553,783,72', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '446,674,67', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1375,128,60', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1569,152,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1483,268,68', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1267,242,66', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1079,256,66', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_18.jpg',
            areas: [
                { shape: 'circle', coords: '756,460,70', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '934,531,71', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '780,585,49', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '627,649,47', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '438,718,68', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '387,574,59', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1516,219,64', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1688,284,51', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1586,398,63', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1388,336,80', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1193,302,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R2_19.jpg',
            areas: [
                { shape: 'circle', coords: '672,373,56', alt: 'A21', title: 'A21' },
                { shape: 'circle', coords: '811,478,67', alt: 'A22', title: 'A22' },
                { shape: 'circle', coords: '649,515,45', alt: 'A23', title: 'A23' },
                { shape: 'circle', coords: '473,536,51', alt: 'A24', title: 'A24' },
                { shape: 'circle', coords: '272,561,51', alt: 'A25', title: 'A25' },
                { shape: 'circle', coords: '257,426,70', alt: 'A26', title: 'A26' },
                { shape: 'circle', coords: '1523,302,69', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1666,387,78', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1526,455,52', alt: 'B23', title: 'B23' },
                { shape: 'circle', coords: '1362,388,65', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1162,294,67', alt: 'B25', title: 'B25' }
            ]
        }
    ], 'R+1': [
        {
            src: 'Images/R1_1.jpg',
            areas: [
                { shape: 'circle', coords: '311,414,51', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '364,529,55', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '749,524,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '725,410,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1195,431,56', alt: 'B25', title: 'B25' },
                { shape: 'circle', coords: '1366,502,48', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1597,608,49', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1580,480,51', alt: 'B21', title: 'B21' }
            ]
        },
        {
            src: 'Images/R1_2.jpg',
            areas: [
                { shape: 'circle', coords: '778,248,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '754,367,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '386,308,60', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '388,173,50', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1597,457,55', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1554,589,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1376,451,61', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1236,338,67', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_3.jpg',
            areas: [
                { shape: 'circle', coords: '802,215,62', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '717,318,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '396,203,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '460,85,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1509,545,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1425,667,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1295,508,67', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1198,380,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_4.jpg',
            areas: [
                { shape: 'circle', coords: '817,242,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '710,341,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '447,191,59', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '545,85,57', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1427,665,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1327,774,63', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1229,603,68', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1180,458,65', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_5.jpg',
            areas: [
                { shape: 'circle', coords: '869,242,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '710,315,74', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '540,120,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '667,43,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1239,781,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1070,857,63', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1061,668,76', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1105,519,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_6.jpg',
            areas: [
                { shape: 'circle', coords: '1062,345,66', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '886,373,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '828,144,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '995,102,47', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1132,922,61', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '927,939,75', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1027,773,74', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1136,654,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_7.jpg',
            areas: [
                { shape: 'circle', coords: '1171,430,59', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '986,389,71', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1107,189,56', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1300,188,54', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '764,960,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '544,917,87', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '801,789,71', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '983,719,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_8.jpg',
            areas: [
                { shape: 'circle', coords: '1203,423,71', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1043,358,65', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1236,176,68', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1435,203,52', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '621,857,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '428,801,81', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '727,709,73', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '925,675,68', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_9.jpg',
            areas: [
                { shape: 'circle', coords: '1292,516,70', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1215,387,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1521,298,53', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1663,390,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '474,710,62', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '389,587,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '659,608,65', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '866,629,54', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_10.jpg',
            areas: [
                { shape: 'circle', coords: '1231,561,47', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1191,434,56', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1539,400,63', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1645,532,62', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '382,551,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '342,408,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '581,497,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '756,579,71', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_11.jpg',
            areas: [
                { shape: 'circle', coords: '1215,613,56', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1222,483,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1602,514,64', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1651,664,61', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '366,470,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '403,337,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '586,446,61', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '736,554,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_12.jpg',
            areas: [
                { shape: 'circle', coords: '1102,597,70', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1183,474,58', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1529,571,68', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1503,726,55', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '369,305,64', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '473,173,66', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '590,309,63', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '686,444,59', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_13.jpg',
            areas: [
                { shape: 'circle', coords: '1065,694,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1194,590,62', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1455,773,71', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1358,904,63', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '581,230,47', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '716,142,59', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '754,291,64', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '752,432,47', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_14.jpg',
            areas: [
                { shape: 'circle', coords: '888,701,53', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1058,635,60', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1231,879,57', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1063,965,59', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '627,190,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '804,125,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '776,282,52', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '702,419,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_15.jpg',
            areas: [
                { shape: 'circle', coords: '735,659,63', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '920,659,54', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '884,920,54', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '668,946,48', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '933,122,51', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1123,145,60', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '965,258,60', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '808,336,58', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_16.jpg',
            areas: [
                { shape: 'circle', coords: '724,596,58', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '909,645,62', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '723,864,70', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '512,829,60', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1229,140,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1409,195,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1190,268,60', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '998,315,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_17.jpg',
            areas: [
                { shape: 'circle', coords: '716,436,63', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '878,515,66', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '610,697,58', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '427,630,57', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1394,93,52', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1543,173,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1290,205,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1095,217,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_18.jpg',
            areas: [
                { shape: 'circle', coords: '742,407,68', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '854,522,63', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '516,651,62', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '377,548,51', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1529,191,59', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1653,297,65', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1383,283,52', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1175,272,66', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R1_19.jpg',
            areas: [
                { shape: 'circle', coords: '677,321,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '735,448,58', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '350,507,57', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '271,383,60', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1531,258,54', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1578,401,64', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1343,331,59', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1151,284,61', alt: 'B25', title: 'B25' }
            ]
        }
    ]
};

// Exporter l'objet
export default imageSets;