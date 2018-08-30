export const FinancialData = {
    squares:[
        {
            index:1,
            header: 'Net New ARR',
            value: 149.9,
            target: 277.9,
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                qtdw:{
                    qtd:[
                        {
                            index: 1,
                            header:'Actuals',
                            value: 66.7
                        },
                        {
                            index: 2,
                            header:'Units',
                            value: 66.7
                        },
                        {
                            index: 3,
                            header:'QRF',
                            value: 66.7
                        },
                        {
                            index: 4,
                            header:'QRF Diff',
                            value: 66.7
                        },
                        {
                            index: 5,
                            header:'Vs Qrf',
                            value: 66.7
                        },
                        {
                            index: 6,
                            header:'Q/Q',
                            value: 66.7
                        },
                        {
                            index: 7,
                            header:'Y/Y',
                            value: 66.7
                        }
                    ],
                    week:[ 
                        {
                            index: 1,
                            header:'Actuals',
                            value: 66.7
                        },
                        {
                            index: 2,
                            header:'Units',
                            value: 66.7
                        },
                        {
                            index: 3,
                            header:'QRF',
                            value: 66.7
                        },
                        {
                            index: 4,
                            header:'QRF Diff',
                            value: 66.7
                        },
                        {
                            index: 5,
                            header:'Vs Qrf',
                            value: 66.7
                        },
                        {
                            index: 6,
                            header:'W/W',
                            value: 66.7
                        }
                    ]
                },
             
                // geo:[
                //                 index: 0,
                //                 marketArea: 'US',
                //                 actuals: 66.7,
                //                 units: ,
                //                 qrf: ,
                //                 qrfDiff: ,
                //                 vsQrf: ,
                //                 Q
                //                 type: 'amer'
                //     ],
            },
            css: ['card1', 'spinMeFirst', '#FF0000']
        },
        {
            index:2,
            header: 'Gross New ARR',
            value: 335.3,
            target: 277.9,
            css: ['card2', 'spinMeSecond', '#0DB16E']
        },
        {
            index:3,
            header: 'Cancellations ARR',
            value: 217.5,
            target: 277.9,
            css: ['card3', 'spinMeThird', '#FF0000']
        },
        {
            index:4,
            header: 'Renewal@FP ARR',
            value: 80.1,
            target: 57.9,
            css: ['card4', 'spinMeFourth', '#0DB16E']
        }
    ],
    multiChart:[
        [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
        [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
        [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
    ],
    stats:[
        {
            index:1,
            value: -2.8,
            footer: 'vs QRF'
        },
        {
            index:2,
            value: -20.4,
            footer: 'Q/Q TY'
        },
        {
            index:3,
            value: -17.0,
            footer: 'Q/Q LY'
        },
        {
            index:4,
            value: 2.9,
            footer: 'Y/Y'
        }
    ]
};

export const JourneyData = {
    squares:[
        {
            index:1,
            header: 'Traffic',
            value: 146.7,
            target: 242.3,
            title: 'Discover',
            css: ['journeyCard1', 'vertSpinMeFirst', 'verticalText1']
        },
        {
            index:2,
            header: `New QFM's`,
            value: 3.9,
            target: 4.7,
            title: 'Buy',
            css: ['journeyCard2', 'vertSpinMeSecond', 'verticalText2']
        },
        {
            index:3,
            header: 'Conversion',
            value: .85,
            target: .80,
            title: 'Try',
            css: ['journeyCard3', 'vertSpinMeThird', 'verticalText3']
        },
        {
            index:4,
            header: 'Repeat User MAU',
            value: 95.78,
            target: 95.06,
            title: 'Use',
            css: ['journeyCard4', 'vertSpinMeFourth', 'verticalText4']
        },
        {
            index:5,
            header: 'Net New ARR',
            value: 149.9,
            target: 277.9,
            title: 'Renew',
            css: ['journeyCard5', 'vertSpinMeFifth', 'verticalText5']
        }
    ],
    multiChart:[
        [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
        [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
        [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
    ],
    stats:[
        {
            index:1,
            value: -2.8,
            footer: 'vs QRF'
        },
        {
            index:2,
            value: -20.4,
            footer: 'Q/Q TY'
        },
        {
            index:3,
            value: -17.0,
            footer: 'Q/Q LY'
        },
        {
            index:4,
            value: 2.9,
            footer: 'Y/Y'
        }
    ]
}