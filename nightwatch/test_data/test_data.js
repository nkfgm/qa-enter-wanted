module.exports = {
    transactions: {
        minimumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MK',
                oai: 'OAIOAIOAI',
                nam: 'Jon',
                sex: 'M',
                rac: 'W',
                hgt: '311',
                wgt: '099',
                hai: 'red',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: 'plate',
                lis: 'ID',
                liy: '1900'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MK.OAIOAIOAI.Jon.M.W.311.099.red.Arson.05022016....plate.ID.1900'
            }
        },
        maximumEntry: {
            fields: {
                hdr: '1234567891234567891',
                mke: 'MKMK',
                oai: 'OAIOAIabc',
                nam: 'thisfieldcancontain30character',
                sex: 'F',
                rac: 'B',
                hgt: '811',
                wgt: '999',
                hai: 'blackblack',
                off: 'robberyrobberyy',
                dow: '08312017',
                oln: '',
                ols: '',
                oly: '',
                lic: 'plnumber',
                lis: 'CA',
                liy: '2017'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '1234567891234567891.MKMK.OAIOAIabc.thisfieldcancontain30character.F.B.811.999.blackblack.robberyrobberyy.08312017....plnumber.CA.2017'
            },

        },
        middleEntry: {
            fields: {
                hdr: 'header123!@#',
                mke: 'MK##',
                oai: 'OAIOAI123',
                nam: 'Mitch 123 !@#',
                sex: 'U',
                rac: 'A',
                hgt: '511',
                wgt: '230',
                hai: 'brown',
                off: 'robbery3@',
                dow: '08311950',
                oln: '',
                ols: '',
                oly: '',
                lic: 'number',
                lis: 'MA',
                liy: '1992'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: 'header123!@#.MK##.OAIOAI123.Mitch 123 !@#.U.A.511.230.brown.robbery3@.08311950....number.MA.1992'
            },
        },
        tooShort: {
            fields: {
                hdr: 'header12',
                mke: 'MK',
                oai: 'OAIOAI12',
                nam: 'Mi',
                sex: '',
                rac: '',
                hgt: '51',
                wgt: '23',
                hai: 'br',
                off: 'robb',
                dow: '0831195',
                oln: '',
                ols: '',
                oly: '',
                lic: 'numb',
                lis: 'M',
                liy: '199'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke:'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam:'The "Name" field should be between 3 and 30 characters long.',
                    sex:'The field named "Sex" must be included.',
                    rac:'The field named "Race" must be included.',
                    hgt:'The "Height" field should be 3 characters long.',
                    wgt:'The "Weight" field should be 3 characters long.',
                    hai:'The "Hair" field should be between 3 and 10 characters long.',
                    off:'The "Offense" field should be between 5 and 15 characters long.',
                    dow:'The "Date of Warrant/Violation" field should be 8 characters long.',
                    lic:'The "License Plate" field should be between 5 and 8 characters long.',
                    lis:'The "License State" field should be 2 characters long.',
                    liy:'The "License Year" field should be 4 characters long.',
                },
                assembledQuery: '',
                queryTitle: 'No results generated due to error.'

            },
        },
        tooLong: {
            fields: {
                hdr: 'header123456789header',
                mke: 'MKEMKE',
                oai: 'OAIOAI12345',
                nam: 'Poppy Petal Emma Elizabeth Deveraux Donahue Montgomery',
                sex: 'MF',
                rac: 'BW',
                hgt: '51905',
                wgt: '23435',
                hai: 'turquoiseish',
                off: 'grand theft auto',
                dow: '0831195536',
                oln: '',
                ols: '',
                oly: '',
                lic: 'numbnumber',
                lis: 'UTID',
                liy: '199994'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke:'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam:'The "Name" field should be between 3 and 30 characters long.',
                    sex:'The "Sex" field should be 1 character long.',
                    rac:'The "Race" field should be 1 character long.',
                    hgt:'The "Height" field should be 3 characters long.',
                    wgt:'The "Weight" field should be 3 characters long.',
                    hai:'The "Hair" field should be between 3 and 10 characters long.',
                    off:'The "Offense" field should be between 5 and 15 characters long.',
                    dow:'The "Date of Warrant/Violation" field should be 8 characters long.',
                    lic:'The "License Plate" field should be between 5 and 8 characters long.',
                    lis:'The "License State" field should be 2 characters long.',
                    liy:'The "License Year" field should be 4 characters long.',
                },
                assembledQuery: '',
                queryTitle: 'No results generated due to error.'

            },
        },
        specialCharacters: {
            fields: {
                hdr: 'header123',
                mke: 'MKE',
                oai: '123456&*(',
                nam: 'James',
                sex: '!',
                rac: '#',
                hgt: '5!#',
                wgt: '#$4',
                hai: 'hair#',
                off: 'robbery',
                dow: '08251999',
                oln: '',
                ols: '',
                oly: '',
                lic: 'plate#',
                lis: '!#',
                liy: '20$$'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oai: 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
                    sex: 'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.',
                    rac: 'The "Race" field can only include characters from the English Alphabet.',
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    hai: 'The "Hair" field can only include characters from the English Alphabet.',
                    lic: 'The "License Plate" field can only include characters from the English Alphabet or numeric characters.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                    liy: 'The "License Year" field must be entered as a 4 digit year, YYYY, no earlier than 1900 and no later than this year.',
                },
                assembledQuery: '',
                queryTitle: 'No results generated due to error.'

            },
        },
        numericCharacters: {
            fields: {
                hdr: 'header123',
                mke: 'MK33',
                oai: '123456789',
                nam: 'James33',
                sex: '3',
                rac: '5',
                hgt: '511',
                wgt: '230',
                hai: 'hair3',
                off: 'robbery5',
                dow: '08251999',
                oln: '',
                ols: '',
                oly: '',
                lic: 'plate55',
                lis: 'I3',
                liy: '2010'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    mke: 'The "MKE" field can only include characters from the English Alphabet or special characters.',
                    sex: 'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.',
                    rac: 'The "Race" field can only include characters from the English Alphabet.',
                    hai: 'The "Hair" field can only include characters from the English Alphabet.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                    
                },
                assembledQuery: '',
                queryTitle: 'No results generated due to error.'

            },
        },
        alphaCharacters: {
            fields: {
                hdr: 'header123',
                mke: 'MKE',
                oai: 'abc456789',
                nam: 'James',
                sex: 'U',
                rac: 'R',
                hgt: 'abc',
                wgt: 'xyz',
                hai: 'black',
                off: 'robbery',
                dow: '08251999',
                oln: '',
                ols: '',
                oly: '',
                lic: 'plate55',
                lis: 'ID',
                liy: 'AD10'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    liy: 'The "License Year" field must be entered as a 4 digit year, YYYY, no earlier than 1900 and no later than this year.',
                    
                    
                },
                assembledQuery: '',
                queryTitle: 'No results generated due to error.'

            },
        },


        olnOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            },
        },
        olsOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: 'ID',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    ols: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            },
        },
        olyOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '2010',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oly: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            },
        },
        licOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: 'license',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    lic: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            },
        },
        lisandliyOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: 'ID',
                liy: '2010'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    lisliy: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            },
        },
    },




}
