export const PrimaryData = [
    {
        index: 0,
        category: 'Financial Perf.',
        header: 'Net New ARR',
        value: 0,
        target: 0,
        valueType: 'currency',
        type: 'financial',
        comments: [

        ],
        css: ['1', 'spinMeFirst', '#FF0000'],
    },
    {
        index: 1,
        category: 'Discover',
        header: 'Traffic',
        value: -87233.444,
        target: 89233.111,
        valueType: 'units',
        type: 'journey',
        comments: [

        ],
        css: ['1', 'spinMeFirst', '#FF0000'],
    },
    {
        index: 2,
        category: 'Try',
        header: `New QFM's`,
        value: -123444958.2344,
        target: 29387456.2345234,
        valueType: 'units',
        type: 'journey',
        comments: [

        ],
        css: ['1', 'spinMeFirst', '#FF0000'],
    },
    {
        index: 3,
        category: 'Buy',
        header: 'Gross A.com Conversion',
        value: .012,
        target: .0099,
        valueType: 'percent',
        type: 'journey',
        comments: [

        ],
        css: ['1', 'spinMeFirst', '#FF0000'],
    },
    {
        index: 4,
        category: 'Use',
        header: 'Repeat User MAU',
        value: .6128,
        target: .6486,
        targetFQ: .6685,
        vsqrf:-.0550,
        valueType: 'percent',
        type: 'journey',
        comments: [

        ],
        css: ['1', 'spinMeFirst', '#FF0000'],
    },
    {
        index: 5,
        category: 'Renew',
        header: 'QTR UI Rate (A.com)',
        value: .0149,
        targetFQ: .0648,
        target:.0158,
        vsqrf:-.0590,
        valueType: 'percent',
        type: 'journey',
        comments: [

        ],
        css: ['1', 'spinMeFirst', '#FF0000'],
    }

]
export const SecondaryData = [
    /* Finance */
    {
        index: 0,
        category: 0,
        header: 'Net New ARR',
        value: 12125,
        target: 1323452345,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            unitMultichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            route: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            route: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            marketArea: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            route: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            route: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            route: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            product: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            product: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            product: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            product: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
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
        valueType: 'currency'
    },
    {
        index: 1,
        category: 0,
        header: 'Gross New ARR',
        value: 12341234,
        target: 1245234254,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            unitMultichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            route: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            route: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            marketArea: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            route: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            route: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            route: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            product: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            product: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            product: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            product: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
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
        valueType: 'currency'
    },
    {
        index: 2,
        category: 0,
        header: 'Cancellations ARR',
        value: 23444,
        target: 222344,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            unitMultichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            route: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            route: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            marketArea: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            route: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            route: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            route: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            product: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            product: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            product: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            product: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
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
        valueType: 'currency'
    },
    {
        index: 3,
        category: 0,
        header: 'FP Renewal & Upsell ARR',
        value: 6654524,
        target: 123452,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            unitMultichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            route: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            route: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            marketArea: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            marketArea: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            route: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            route: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            route: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        units: 751.1,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            product: 'RESELLER',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            product: 'US',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            product: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            product: 'ROW',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            product: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            product: 'ANZ',
                            actuals: 66.7,
                            units: 751.1,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
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
        valueType: 'currency'
    },
    /* Discover */
    {
        index: 4,
        category: 1,
        header: 'Marketable Universe',
        cumulative: {
            value: 0,
            target: 0,
            targetFQ: 0,
            vsQrf: 0,
            details: {
                multichart: [
                    [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                    [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                    [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                    [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
                ],
                qtdw: {
                    qtd: [
                        {
                            index: 1,
                            header: 'Actuals',
                            value: 66.7
                        },
                        {
                            index: 3,
                            header: 'QRF',
                            value: 66.7
                        },
                        {
                            index: 4,
                            header: 'QRF Diff',
                            value: 66.7
                        },
                        {
                            index: 5,
                            header: 'Vs Qrf',
                            value: 66.7
                        },
                        {
                            index: 6,
                            header: 'Q/Q',
                            value: 66.7
                        },
                        {
                            index: 7,
                            header: 'Y/Y',
                            value: 66.7
                        }
                    ],
                    week: [
                        {
                            index: 1,
                            header: 'Actuals',
                            value: 66.7
                        },
                        {
                            index: 3,
                            header: 'QRF',
                            value: 66.7
                        },
                        {
                            index: 4,
                            header: 'QRF Diff',
                            value: 66.7
                        },
                        {
                            index: 5,
                            header: 'Vs Qrf',
                            value: 66.7
                        },
                        {
                            index: 6,
                            header: 'W/W',
                            value: 66.7
                        }
                    ]
                },
                geo: {
                    qtd: [
                        {
                            index: 0,
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'AMER'
                        }
                    ],
                    week: [
                        {
                            index: 0,
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    ],
                    all: []
                },
                market: {
                    qtd: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        }
                    ],
                    week: [
                        {
                            index: 0,
                            marketArea: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'US'
                        }
                    ],
                    all: []
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
            }
        },
        value: 23563456,
        target: 34563456,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            channel:{qtd:[],week:[]},
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
        valueType: 'units'
    },
    {
        index: 5,
        category: 1,
        header: 'Traffic',
        value: 73456345,
        target: 23462345,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            ltc:{qtd:[],week:[]},
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            channel: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            conversion: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            mvd: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            newVsRepeat: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'

    },
    {
        index: 6,
        category: 1,
        header: 'UQFM Conversion ',
        value: .34523,
        target: .23452345,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 7,
        category: 1,
        header: 'PM Spend - Discover',
        value: .746,
        target: .97766,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            channelPM: {qtd:[],week:[]},
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    {
        index: 8,
        category: 1,
        header: 'PM Sourced UQFMs',
        value: .746,
        target: .97766,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            channelPM: {qtd:[],week:[]},
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    {
        index: 9,
        category: 1,
        header: 'Bounce Rate',
        value: .746,
        target: .97766,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            ltc:{qtd:[],week:[]},
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            channel: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            conversion: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            mvd: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            newVsRepeat: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    /* Try */
    {
        index: 10,
        category: 2,
        header: 'New UQFMs',
        value: 73456345,
        target: 23462345,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            signUpApp: {qtd:[],week:[]},
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
        valueType: 'units'

    },
    {
        index: 11,
        category: 2,
        header: 'Cumulative UQFMS',
        value: 23563456,
        target: 34563456,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            signUpApp: {qtd:[],week:[]},
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    {
        index: 12,
        category: 2,
        header: 'New QFMs',
        value: .34523,
        target: .23452345,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    {
        index: 13,
        category: 2,
        header: 'Cumulative QFMs',
        value: .746,
        target: .97766,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            ltc:{qtd:[],week:[]},
            conversion:{qtd:[],week:[]},
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    {
        index: 14,
        category: 2,
        header: '28 day UQFMs to QFMs Conv',
        value: .746,
        target: .97766,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            ltc:{qtd:[],week:[]},
            conversion:{qtd:[],week:[]},

            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 15,
        category: 2,
        header: 'Cum. UQFMs to QFMs Conv',
        value: .746,
        target: .97766,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            ltc:{qtd:[],week:[]},
            conversion:{qtd:[],week:[]},
            
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    /* Buy */
    
    {
        index: 16,
        category: 3,
        header: 'Paid Media Spend',
        value: 6800000,
        target: 19400000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'

    },
    {
        index: 17,
        category: 3,
        header: 'Marketing Sourced ARR',
        value: 30500000,
        target: 81700000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    },
    {
        index: 18,
        category: 3,
        header: 'Gross A.com Conversion',
        value: .0102,
        target: .0099,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            ltc:{qtd:[],week:[]},
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            channel: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            conversion: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            mvd: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            newVsRepeat: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 19,
        category: 3,
        header: 'Gross New ARR',
        value: 301000000,
        target: 650600000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    },
    {
        index: 20,
        category: 3,
        header: 'Gross New Units',
        value: 1500000,
        target: 3200000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    /* Use */
    {
        index: 21,
        category: 4,
        header: 'Engagement Index',
        value: 30.2,
        target: 0,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'

    },
    {
        index: 22,
        category: 4,
        header: 'Paid User MAU',
        value: .6764,
        target: 0,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 23,
        category: 4,
        header: 'Repeat User MAU',
        value: .6054,
        target: .6411,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 24,
        category: 4,
        header: 'Paid User Success',
        value: .77,
        target: 0,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 25,
        category: 4,
        header: 'WK 0 WAU rate',
        value: .7011,
        target: .7800,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 26,
        category: 4,
        header: 'Wk 4 WAU Rate',
        value: .5042,
        target: .5774,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    /* Renew */
    {
        index: 27,
        category: 5,
        header: 'Cancellations ARR',
        value: 215000000,
        target: 392700000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'

    },
    {
        index: 28,
        category: 5,
        header: 'Cancellations ARR',
        value: 184400000,
        target: 336000000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ],
                all: [
                    {
                        index: 0,
                        qtd: {
                            segment: 'RESELLER',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ANZ'
                        },
                        week: {
                            segment: 'US',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                            segment: 'E-TAIL/RETAIL',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'ROW'
                        },
                        week: {
                            segment: 'ROW',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                            segment: 'ADOBE.COM/CC.COM',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            qq: -20.00,
                            yy: -.0733,
                            type: 'US'
                        },
                        week: {
                            segment: 'ANZ',
                            actuals: 66.7,
                            qrf: 70.2,
                            qrfDiff: -3.48,
                            vsQrf: -.0495,
                            ww: -20.00,
                            type: 'ASIA'
                        }
                    }

                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'units'
    },
    {
        index: 29,
        category: 5,
        header: 'QTR Fin Retention Rate',
        value: .9536,
        target: .9214,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ]
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'percent'
    },
    {
        index: 30,
        category: 5,
        header: 'QTR UI Rate (A.com)',
        value: .0335,
        target: .0584,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    },
    {
        index: 31,
        category: 5,
        header: 'QTR PF Rate',
        value: .0129,
        target: .0203,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    },
    {
        index: 32,
        category: 5,
        header: 'Cancellations ARR',
        value: 30600000,
        target: 56700000,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    },
    {
        index: 33,
        category: 5,
        header: 'EOT Retention Rate',
        value: .8063,
        target: .82,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    },
    {
        index: 34,
        category: 5,
        header: 'QTR Fin Retention Rate',
        value: .9492,
        target: 0,
        comments: [

        ],
        details: {
            multichart: [
                [100, 123, 234, 343, 222, 443, 211, 123, 45, 232, 124, 25, 166],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [120, 67, 231, 196, 173, 485, 222, 192, 157, 213, 199, 103, 112],
                [45, 124, 189, 143, 102, 184, 293, 444, 304, 203, 442, 122, 100]
            ],
            qtdw: {
                qtd: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header: 'Y/Y',
                        value: 66.7
                    }
                ],
                week: [
                    {
                        index: 1,
                        header: 'Actuals',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header: 'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header: 'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header: 'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header: 'W/W',
                        value: 66.7
                    }
                ]
            },
            geo: {
                qtd: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'AMER'
                    }
                ],
                week: [
                    {
                        index: 0,
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'AMER'
                    }
                ],
                all: []
            },
            market: {
                qtd: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    }
                ],
                week: [
                    {
                        index: 0,
                        marketArea: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    }
                ],
                all: []
            },
            route: {
                qtd: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        route: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        route: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        route: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            segment: {
                qtd: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        segment: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        segment: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        segment: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
                    }
                ]
            },
            product: {
                qtd: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        qq: -20.00,
                        yy: -.0733,
                        type: 'ANZ'
                    }
                ],
                week: [
                    {
                        index: 0,
                        product: 'ADOBE.COM/CC.COM',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'US'
                    },
                    {
                        index: 1,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 2,
                        product: 'E-TAIL/RETAIL',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ROW'
                    },
                    {
                        index: 3,
                        product: 'RESELLER',
                        actuals: 66.7,
                        qrf: 70.2,
                        qrfDiff: -3.48,
                        vsQrf: -.0495,
                        ww: -20.00,
                        type: 'ANZ'
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
        valueType: 'currency'
    }
]
