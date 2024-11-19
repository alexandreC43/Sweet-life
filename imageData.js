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
    'pieton': [
        'Images/pieton_1.jpg', 'Images/pieton_2.jpg', 'Images/pieton_3.jpg',
        'Images/pieton_4.jpg', 'Images/pieton_5.jpg', 'Images/pieton_6.jpg',
        'Images/pieton_7.jpg', 'Images/pieton_8.jpg', 'Images/pieton_9.jpg',
        'Images/pieton_10.jpg', 'Images/pieton_11.jpg', 'Images/pieton_12.jpg',
        'Images/pieton_13.jpg', 'Images/pieton_14.jpg', 'Images/pieton_15.jpg',
        'Images/pieton_16.jpg', 'Images/pieton_17.jpg', 'Images/pieton_18.jpg',
        'Images/pieton_19.jpg'
    ],
    'R+3': [
        {
            src: 'Images/R3_1.jpg',
            areas: [
                { shape: 'circle', coords: '311,414,51', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '364,529,55', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '749,524,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '725,410,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1195,431,56', alt: 'B25', title: 'B34' },
                { shape: 'circle', coords: '1366,502,48', alt: 'B24', title: 'B33' },
                { shape: 'circle', coords: '1597,608,49', alt: 'B22', title: 'B32' },
                { shape: 'circle', coords: '1580,480,51', alt: 'B21', title: 'B31' }
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
                { shape: 'circle', coords: '722,506,64', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '835,632,62', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '646,637,51', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '476,640,62', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '301,640,61', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '319,513,51', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1558,566,66', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1687,675,70', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1511,735,68', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1373,604,65', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1203,530,63', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_2.jpg',
            areas: [
                { shape: 'circle', coords: '769,335,71', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '827,481,59', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '657,457,69', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '505,435,54', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '301,390,48', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '373,280,57', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1581,531,66', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1656,664,70', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1464,702,52', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1382,564,67', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1251,438,60', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_3.jpg',
            areas: [
                { shape: 'circle', coords: '789,301,62', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '811,454,65', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '649,387,58', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '505,327,51', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '357,265,50', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '457,170,45', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1521,629,67', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1515,779,65', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1353,760,58', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1308,615,76', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1224,460,64', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_4.jpg',
            areas: [
                { shape: 'circle', coords: '827,342,55', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '808,475,43', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '661,408,45', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '549,338,36', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '408,254,35', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '536,187,36', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1443,752,45', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1408,890,60', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1250,867,55', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1252,691,51', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1220,551,48', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_5.jpg',
            areas: [
                { shape: 'circle', coords: '855,276,50', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '764,391,42', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '685,297,48', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '600,217,46', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '515,104,43', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '671,67,41', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1247,804,54', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1166,910,55', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1027,843,55', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1096,696,50', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1133,550,53', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_6.jpg',
            areas: [
                { shape: 'circle', coords: '1063,337,59', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '910,420,45', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '883,302,43', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '864,194,45', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '837,90,49', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '996,89,35', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1140,909,40', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '984,982,54', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '906,871,55', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1042,759,54', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1159,642,59', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_7.jpg',
            areas: [
                { shape: 'circle', coords: '1162,418,45', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '949,443,41', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1023,329,39', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1077,233,41', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1152,133,53', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1281,181,61', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '759,964,57', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '574,967,53', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '569,837,56', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '810,800,49', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '989,726,52', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_8.jpg',
            areas: [
                { shape: 'circle', coords: '1205,518,48', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '999,510,58', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1099,408,52', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1205,332,48', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1308,239,53', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1420,301,44', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '630,956,58', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '445,949,55', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '474,839,47', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '739,828,65', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '942,791,51', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_9.jpg',
            areas: [
                { shape: 'circle', coords: '1293,610,51', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '1111,534,45', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1289,477,45', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1437,428,49', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1594,383,53', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1647,485,55', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '474,811,47', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '298,745,69', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '452,655,57', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '637,718,68', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '859,763,60', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_10.jpg',
            areas: [
                { shape: 'circle', coords: '1225,656,54', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '1101,540,51', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1296,530,46', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1455,522,43', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1647,515,57', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1659,636,44', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '352,663,46', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '237,566,63', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '408,506,50', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '559,616,53', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '732,695,68', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_11.jpg',
            areas: [
                { shape: 'circle', coords: '1244,716,55', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '1135,581,45', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1321,605,45', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1491,621,56', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1693,642,49', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1645,752,52', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '369,569,49', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '315,447,50', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '489,429,48', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '581,554,62', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '710,661,54', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_12.jpg',
            areas: [
                { shape: 'circle', coords: '1127,691,44', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '1098,555,49', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1266,613,42', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1411,659,56', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1606,732,55', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1491,816,50', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '378,394,49', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '374,270,43', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '545,290,59', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '569,430,64', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '671,553,48', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_13.jpg',
            areas: [
                { shape: 'circle', coords: '1093,728,65', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '1137,586,40', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1254,670,41', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1369,751,51', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1518,857,44', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1362,920,50', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '570,266,47', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '630,149,39', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '786,202,48', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '732,326,56', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '725,465,55', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_14.jpg',
            areas: [
                { shape: 'circle', coords: '881,712,50', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '1018,602,51', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '1101,722,53', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '1167,824,44', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '1260,951,55', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '1083,977,48', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '620,198,56', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '739,110,49', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '851,190,54', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '755,312,55', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '678,429,54', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_15.jpg',
            areas: [
                { shape: 'circle', coords: 'NaN', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: 'NaN', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: 'NaN', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: 'NaN', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: 'NaN', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: 'NaN', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: 'NaN', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: 'NaN', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: 'NaN', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: 'NaN', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: 'NaN', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_16.jpg',
            areas: [
                { shape: 'circle', coords: '730,573,60', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '937,563,59', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '849,659,41', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '759,756,41', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '655,894,59', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '530,800,44', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1210,111,53', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1393,113,56', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1376,203,45', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1164,235,48', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '984,275,51', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_17.jpg',
            areas: [
                { shape: 'circle', coords: '752,539,42', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '947,568,48', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '816,649,49', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '693,730,50', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '530,831,47', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '439,728,51', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1391,176,50', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1559,198,55', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1511,306,55', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1288,281,43', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1094,298,59', alt: 'B15', title: 'B15' }
                    ]
                },
                {
                    src: 'Images/R1_18.jpg',
            areas: [
                { shape: 'circle', coords: '768,519,58', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '930,579,56', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '781,655,58', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '625,702,59', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '437,759,49', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '386,640,53', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1537,280,46', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1703,332,61', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1597,437,51', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1403,368,54', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1196,352,54', alt: 'B15', title: 'B15' }
            ]
        },
        {
            src: 'Images/R1_19.jpg',
            areas: [
                { shape: 'circle', coords: '684,431,53', alt: 'A11', title: 'A11' },
                { shape: 'circle', coords: '835,530,52', alt: 'A12', title: 'A12' },
                { shape: 'circle', coords: '645,564,51', alt: 'A13', title: 'A13' },
                { shape: 'circle', coords: '473,590,42', alt: 'A14', title: 'A14' },
                { shape: 'circle', coords: '279,605,52', alt: 'A15', title: 'A15' },
                { shape: 'circle', coords: '284,485,53', alt: 'A16', title: 'A16' },
                { shape: 'circle', coords: '1550,357,49', alt: 'B11', title: 'B11' },
                { shape: 'circle', coords: '1662,445,43', alt: 'B12', title: 'B12' },
                { shape: 'circle', coords: '1538,510,56', alt: 'B13', title: 'B13' },
                { shape: 'circle', coords: '1354,423,56', alt: 'B14', title: 'B14' },
                { shape: 'circle', coords: '1166,359,57', alt: 'B15', title: 'B15' }
            ]
                }
            ], 'RDC': [
                {
                    src: 'Images/RDC_1.jpg',
                    areas: [
                        { shape: 'circle', coords: '712,567,49', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '827,671,36', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '639,676,46', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '473,682,43', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '280,671,46', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '313,560,46', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1581,611,39', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1520,764,47', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1367,648,44', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1221,554,39', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_2.jpg',
                    areas: [
                        { shape: 'circle', coords: '769,389,37', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '837,504,36', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '653,487,47', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '502,452,40', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '308,406,40', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '379,316,39', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1588,575,54', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1467,723,51', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1376,576,45', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1260,474,51', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_3.jpg',
                    areas: [
                        { shape: 'circle', coords: '787,360,37', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '794,474,41', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '637,416,33', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '505,374,38', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '345,308,45', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '454,220,36', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1504,686,46', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1335,803,45', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1299,631,41', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1226,517,48', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_4.jpg',
                    areas: [
                        { shape: 'circle', coords: '822,396,35', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '803,512,39', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '654,426,39', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '549,357,38', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '398,279,45', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '528,226,40', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1437,799,45', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1234,905,59', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1247,736,54', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1208,600,54', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_5.jpg',
                    areas: [
                        { shape: 'circle', coords: '852,308,52', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '777,431,41', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '681,326,36', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '608,237,35', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '511,137,35', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '667,104,40', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1259,851,41', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '996,881,54', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1088,731,59', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1127,600,49', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_6.jpg',
                    areas: [
                        { shape: 'circle', coords: '1052,352,41', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '906,448,42', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '888,336,39', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '867,240,35', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '837,125,46', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '989,123,46', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1142,944,45', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '889,926,46', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1042,801,51', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1152,685,51', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_7.jpg',
                    areas: [
                        { shape: 'circle', coords: '1166,450,38', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '972,478,40', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1028,368,36', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1094,276,37', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1154,160,42', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1294,218,40', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '767,980,50', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '576,878,51', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '811,838,56', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '993,762,49', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_8.jpg',
                    areas: [
                        { shape: 'circle', coords: '1211,537,51', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1018,541,45', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1121,450,39', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1206,360,36', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1321,270,52', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1427,338,51', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '657,1021,68', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '491,880,72', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '732,864,63', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '924,841,55', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_9.jpg',
                    areas: [
                        { shape: 'circle', coords: '1321,630,47', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1137,579,55', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1306,523,38', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1452,473,44', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1613,421,41', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1664,516,48', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '479,864,53', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '450,696,56', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '661,754,60', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '854,805,62', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_10.jpg',
                    areas: [
                        { shape: 'circle', coords: '1252,687,49', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1118,588,40', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1320,576,50', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1471,560,51', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1672,554,44', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1657,660,42', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '372,711,57', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '413,543,48', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '564,655,54', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '728,740,44', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_11.jpg',
                    areas: [
                        { shape: 'circle', coords: '1240,748,49', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1145,629,41', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1338,654,37', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1503,670,34', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1701,694,46', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1645,793,54', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '374,604,44', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '486,471,47', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '585,589,61', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '716,705,62', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_12.jpg',
                    areas: [
                        { shape: 'circle', coords: '1125,732,39', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1096,601,39', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1272,669,44', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1423,716,43', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1610,777,50', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1511,867,47', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '381,440,56', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '539,319,46', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '581,469,58', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '655,596,47', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_13.jpg',
                    areas: [
                        { shape: 'circle', coords: '1079,750,54', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1123,619,40', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1260,715,46', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1386,795,54', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1518,909,46', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1367,968,44', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '569,302,37', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '776,238,49', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '727,377,56', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '728,500,50', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_14.jpg',
                    areas: [
                        { shape: 'circle', coords: '908,773,48', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '1015,660,37', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '1105,770,37', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '1164,885,49', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '1259,1014,52', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '1081,1033,45', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '627,242,45', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '852,228,43', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '749,344,53', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '681,467,50', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_15.jpg',
                    areas: [
                        { shape: 'circle', coords: '739,692,51', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '905,631,39', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '883,762,34', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '872,879,36', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '833,1018,51', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '677,985,44', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '917,162,59', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1133,216,52', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '942,290,42', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '783,371,54', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_16.jpg',
                    areas: [
                        { shape: 'circle', coords: '732,609,48', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '930,594,45', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '838,706,41', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '755,813,49', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '630,930,40', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '517,866,54', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1206,163,39', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1386,257,59', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1157,279,44', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '980,333,59', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_17.jpg',
                    areas: [
                        { shape: 'circle', coords: '737,583,55', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '928,608,50', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '799,711,50', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '684,786,52', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '525,883,52', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '435,787,46', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1382,222,55', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1505,353,42', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1285,342,48', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1092,349,54', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_18.jpg',
                    areas: [
                        { shape: 'circle', coords: '752,556,40', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '928,609,49', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '754,676,40', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '615,724,40', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '425,800,43', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '393,690,41', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1520,322,49', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1593,470,40', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1391,411,50', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1189,377,55', alt: 'B04', title: 'B04' }
                    ]
                },
                {
                    src: 'Images/RDC_19.jpg',
                    areas: [
                        { shape: 'circle', coords: '671,469,53', alt: 'A01', title: 'A01' },
                        { shape: 'circle', coords: '793,559,46', alt: 'A02', title: 'A02' },
                        { shape: 'circle', coords: '613,603,49', alt: 'A03', title: 'A03' },
                        { shape: 'circle', coords: '447,622,47', alt: 'A04', title: 'A04' },
                        { shape: 'circle', coords: '259,643,46', alt: 'A05', title: 'A05' },
                        { shape: 'circle', coords: '264,531,39', alt: 'A06', title: 'A06' },
                        { shape: 'circle', coords: '1520,404,51', alt: 'B01', title: 'B01' },
                        { shape: 'circle', coords: '1516,556,55', alt: 'B02', title: 'B02' },
                        { shape: 'circle', coords: '1328,454,60', alt: 'B03', title: 'B03' },
                        { shape: 'circle', coords: '1152,386,59', alt: 'B04', title: 'B04' }
                    ]
                }
                
                
                
            ]

        };

// Exporter l'objet
export default imageSets;