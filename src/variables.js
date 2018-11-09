export const FinancialData = {
    squares:[
        {
            index:1,
            header: 'Net New ARR',
            value: 0,
            target: 0,
            comments: [
                {
                    id: 0,
                    userName: 'Morty Smith',
                    time: '8:34am',
                    comment: 'Check out the increased sales in this sector. This will make a huge difference.',
                    replies: [
                        {
                            id: 0,
                            userName: 'Rick Sanchez',
                            time: '9:04am',
                            comment: 'Wow! Great job team!'
                            
                        },
                        {
                            id: 1,
                            userName: 'Shaun White',
                            time: '9:34am',
                            comment: 'Was this for last month?'
                            
                        },
                        {
                            id: 2,
                            userName: 'Morty Smith',
                            time: '9:54am',
                            comment: 'Yes.'
                            
                        }
                    ]
                },
                {
                    id: 1,
                    userName: 'Shaun White',
                    time: '12:33pm',
                    comment: 'What happened in Quarter 3? ',
                    replies: [
                        {
                            id: 0,
                            userName: 'Amit Sethi',
                            time: '8:34am',
                            comment: 'Our customers in Japan did not take to our marketing strategy. '
                            
                        }
                    ]
                }
             ],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.6,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
            },
            css: ['1', 'spinMeFirst', '#FF0000'],
        },
        {
            index:2,
            header: 'Gross New ARR',
            value: 0,
            target: 0,
            comments: [],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                qtdw:{
                    qtd:[
                        {
                            index: 1,
                            header:'Actuals',
                            value: 68.7
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -3.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -25.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -27.5,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -5.8,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
            },
            css: ['2', 'spinMeSecond', '#0DB16E'],
        },
        {
            index:3,
            header: 'Cancellations ARR',
            value: 0,
            target: 0,
            comments: [],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                ,
                },
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -9.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -2.4,
                        color: 'green',
                        text: 'Q/Q TY'
                    },
                    {
                        value: 7.0,
                        color: 'green',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -8.9,
                        color: 'red',
                        text: 'Y/Y'
                    }
                ]
             
               
            },
            css: ['3', 'spinMeThird', '#FF0000'],
        },
        {
            index:4,
            header: 'Renewal@FP ARR',
            value: 0,
            target: 0,
            comments: [
                {
                    id: 0,
                    userName: 'Rick Sanchez',
                    time: '8:34am',
                    comment: 'Are these Renewal values accurate?',
                    replies: [
                        {
                            id: 0,
                            userName: 'Morty Smith',
                            time: '9:04am',
                            comment: 'Let me double check with the InfoBurst admin'
                            
                        }
                    ]
                },
                {
                    id: 1,
                    userName: 'Shaun White',
                    time: '12:33pm',
                    comment: 'Hey guys, looks the the XDC caches were refreshed this morning at 3:00 am as scheduled, would you guys like me to change the refresh frequency? ',
                    replies: [
                        {
                            id: 0,
                            userName: 'Morty Smith',
                            time: '1:00pm',
                            comment: 'Thanks Shaun! No I think we are fine with the refresh schedule for now. '
                            
                        }
                    ]
                }
             ],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
            },
            css: ['4', 'spinMeFourth', '#0DB16E'],
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
            value: 239.3,
            target: 0,
            title: 'Discover',
            comments: [
                {
                    id: 0,
                    userName: 'Rick Sanchez',
                    time: '8:34am',
                    comment: 'Are these Renewal values accurate?',
                    replies: [
                        {
                            id: 0,
                            userName: 'Morty Smith',
                            time: '9:04am',
                            comment: 'Let me double check with the InfoBurst admin'
                            
                        }
                    ]
                },
                {
                    id: 1,
                    userName: 'Shaun White',
                    time: '12:33pm',
                    comment: 'Hey guys, looks the the XDC caches were refreshed this morning at 3:00 am as scheduled, would you guys like me to change the refresh frequency? ',
                    replies: [
                        {
                            id: 0,
                            userName: 'Morty Smith',
                            time: '1:00pm',
                            comment: 'Thanks Shaun! No I think we are fine with the refresh schedule for now. '
                            
                        }
                    ]
                }
             ],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
             
            },
            css: ['1', 'vertSpinMeFirst', 'verticalText1']
        },
        {
            index:2,
            header: `New QFM's`,
            value: 3.9,
            target: 4.7,
            title: 'Buy',
            comments: [],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
             

            },
            css: ['2', 'vertSpinMeSecond', 'verticalText2']
        },
        {
            index:3,
            header: 'Conversion',
            value: .90,
            target: 0,
            timeout: 3000,
            title: 'Try',
            comments: [],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
             
            },
            css: ['3', 'vertSpinMeThird', 'verticalText3']
        },
        {
            index:4,
            header: 'Repeat User MAU',
            value: 58.19,
            target: 60.61,
            timeout: 4000,
            title: 'Use',
            comments: [],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.8,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
             
            },
            css: ['4', 'vertSpinMeFourth', 'verticalText4']
        },
        {
            index:5,
            header: 'QTR UI Rate',
            value: 5.85,
            target: 4.00,
            timeout: 5000,
            title: 'Renew',
            comments: [],
            details:{
                multichart: [
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats: [
                    {
                        value: -2.6,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
            },
            css: ['5', 'vertSpinMeFifth', 'verticalText5']
        },
        {
            index:6,
            header: 'QTR Payment Failure Rate',
            value: 2.13,
            target: 5.00,
            timeout: 6000,
            title: 'Renew',
            comments: [],
            details:{
                multichart: [
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                qtdw:{
                    qtd:[
                        {
                            index: 1,
                            header:'Actuals',
                            value: 69.9
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.21,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats: [
                    {
                        value: -2.6,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
            },
            css: ['6', 'vertSpinMeSixth', 'verticalText6']
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


export const PrimaryData = [
        {
            index: 0 ,
            category: 'Finance',
            header: 'Net New ARR',
            value: 0,
            target: 0,
            comments: [
              
             ],
            details:{
                multichart:[
                    [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                    [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                    [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
                ],
                unitMultichart:[
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
                geo:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ASIA'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'US',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 1,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'AMER'
                        },
                        {
                            index: 2,
                            marketArea: 'ROW',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        },
                        {
                            index: 3,
                            marketArea: 'ANZ',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ASIA'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'US',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'ROW',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'AMER'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ASIA'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                marketArea:{
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'ANZ'
                        }
                    ],
                    week:[
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'US'
                        },
                        {
                            index: 1,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 2,
                            marketArea: 'E-TAIL/RETAIL',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ROW'
                        },
                        {
                            index: 3,
                            marketArea: 'RESELLER',
                            actuals:    66.7,
                            units:     751.1,
                            qrf:        70.2,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            ww :        -20.00,
                            type: 'ANZ'
                        }
                    ],
                    all:[
                        {
                            index: 0,
                            qtd: {
                                marketArea: 'RESELLER',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ANZ'
                            },
                            week: {
                                    marketArea: 'US',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 1,
                            qtd: {
                                marketArea: 'E-TAIL/RETAIL',
                                actuals:    66.7,
                                units:     751.1,
                                qrf:        70.2,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'AMER'
                            }
                        },
                        {
                            index: 2,
                            qtd: {
                                    marketArea: 'E-TAIL/RETAIL',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'ROW'
                            },
                            week: {
                                    marketArea: 'ROW',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        },
                        {
                            index: 3,
                            qtd: {
                                    marketArea: 'ADOBE.COM/CC.COM',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    qq :        -20.00,
                                    yy :        -.0733,
                                    type: 'US'
                            },
                            week: {
                                    marketArea: 'ANZ',
                                    actuals:    66.7,
                                    units:     751.1,
                                    qrf:        70.2,
                                    qrfDiff:    -3.48,
                                    vsQrf:      -.0495,
                                    ww :        -20.00,
                                    type: 'ASIA'
                            }
                        }

                    ]
                },
                stats:[
                    {
                        value: -2.6,
                        color: 'red',
                        text: 'vs QRF'
                    },
                    {
                        value: -20.4,
                        color: 'red',
                        text: 'Q/Q TY'
                    },
                    {
                        value: -17.0,
                        color: 'red',
                        text: 'Q/Q LY'
                    },
                    {
                        value: -2.9,
                        color: 'green',
                        text: 'Y/Y'
                    }
                ]
            },
            css: ['1', 'spinMeFirst', '#FF0000'],
        },
        {
            index: 1 ,
            category: 'Discover',
            header: 'Traffic',
            value: 0,
            target: 0, 
            comments: [
              
            ],
            css: ['1', 'spinMeFirst', '#FF0000'],
        },
        {
            index: 2 ,
            category: 'Buy',
            header: `New QFM's`,
            value: 0,
            target: 0, 
            comments: [
              
            ],
            css: ['1', 'spinMeFirst', '#FF0000'],
        },
        {
            index: 3 ,
            category: 'Try',
            header: 'Conversions',
            value: 0,
            target: 0, 
            comments: [
              
            ],
            css: ['1', 'spinMeFirst', '#FF0000'],
        },
        {
            index: 4 ,
            category: 'Use',
            header: 'Repeat User MAU',
            value: 0,
            target: 0, 
            comments: [
              
            ],
            css: ['1', 'spinMeFirst', '#FF0000'],
        },
        {
            index: 5 ,
            category: 'Renew',
            header: 'QTR UI Rate',
            value: 0,
            target: 0, 
            comments: [
              
            ],
            css: ['1', 'spinMeFirst', '#FF0000'],
        }
      
    ]


export const SecondaryData = [
    {
        index: 0,
        category: 0,
        header: 'Net New ARR',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'currency'
    },
    {
        index: 1,
        category: 0,
        header: 'Gross New ARR',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'currency'
    },
    {
        index: 2,
        category: 0,
        header: 'Cancellations ARR',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'currency'
    },
    {
        index: 3,
        category: 0,
        header: 'Renewal@FP ARR',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'currency'
    },
    {
        index: 4,
        category: 1,
        header: 'Marketable Universe',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'units'
    },
    {
        index: 5,
        category: 1,
        header: 'Traffic',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'units'
    },
    {
        index: 6,
        category: 1,
        header: 'UQFM Conversion ',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'percent'
    },
    {
        index: 7,
        category: 1,
        header: 'Paid Media Spend',
        value: 0,
        target: 0,
        comments: [
              
        ],
        valueType: 'percent'
    },

]
  
    
export const InfoburstAzure = {
     user: 'admin',
     pass: 'admin',
     dbQuery: 'http://localhost:8551/infoburst/rest/db/query',
     xdcCacheURL: 'http://localhost:8551/infoburst/rest/get/xdc/',
     xdcCacheQueryURL: 'http://localhost:8551/infoburst/rest/exec/xdcqry/',
     sysInfo: 'http://localhost:8551/sysinfo',
     jsonFormat: '&json=1',
     filterQueryNames:{
         MarketFilters: '?q=MarketFilters&json=1',
         SegmentFilters:'?q=SegmentFilters&json=1',
         SubscriptionFilters:'?q=SubscriptionFilters&json=1',
         RouteFilters: '?q=RouteFilters&json=1',
         QuarterFilters: '?q=QuarterFilters&json=1',
         ProductFilters:'?q=ProductFilters&json=1', 
         GeoFilters: '?q=GeoFilters&json=1'
     },
     summaryQueryNames: {
        FinancialActualTarget: '?q=FinancialActualTarget',
        FinancialMultiChart: '?q=FinancialMultichartQuery',
        JourneyActualTarget:'?q=JourneyActualTargetQuery',
        JourneyMultiChart: '?q=JourneyMultichartQuery',
        JourneyQtd: '?q=JourneyQtdTotal',
        JourneyGeoQtd: '?q=JourneyGeoQTd',
        JourneyBuyUseActualTarget: '?q=JourneyBuyUseActualTargetQuery',
        JourneyBuyUseGeoQtd: '?q=JourneyBuyUseGeoQTD',
        JourneyBuyUseMultichart: '?q=JourneyBuyUseMultichartQuery',
        JourneyBuyUseQTDTotal: '?q=JourneyBuyUseQTDTotal',
        JourneyMarketAreaQtd: '?q=JourneyMarketAreaQTD',
        FinancialUnitsMultichart: '?q=FinancialUnitsMultichart'
     },
     dataXdcID:  '\\52',
     journeyXdcID: '\\19',
     filtersXdcID: '\\52',
     
}