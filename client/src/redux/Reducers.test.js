import optionReducer,{INITIAL_STATE} from '../redux/Reducers'

describe('tsting Reducer file',()=>
{
    test('testing save details switch case when details where empty',()=>
    {
        const state = {
    option:{Jobs:[undefined],Options: {},},
    };
        const save_details = {
            type : 'SAVE_DETAILS',
        };
       expect(optionReducer(INITIAL_STATE,save_details)).toEqual(state) 
    });


    test('testing save details switch case',()=>
    {
        const state = {
    option:{Jobs:[{
                address: "11-257,krishna nagar , r.r.v.puram post, visakhaptnam",
creditCardType: "Student",
eMail: "nnirupama.18.cse@anits.edu.in",
firstName: "Nirupama",
gender: "Female",
languages:[ {name: 'Telugu', isChecked: true},
 {name: 'English', isChecked: true},
 {name: 'Hindi', isChecked: false}],
 lastName: "Nagisetti",
state: "Andhra Pradesh",
zip: "530029",}],Options: {},},
    
    };
        const save_details = {
            type : 'SAVE_DETAILS',
            details:{
                address: "11-257,krishna nagar , r.r.v.puram post, visakhaptnam",
creditCardType: "Student",
eMail: "nnirupama.18.cse@anits.edu.in",
firstName: "Nirupama",
gender: "Female",
languages:[ {name: 'Telugu', isChecked: true},
 {name: 'English', isChecked: true},
 {name: 'Hindi', isChecked: false}],
 lastName: "Nagisetti",
state: "Andhra Pradesh",
zip: "530029",
            }
        };
       expect(optionReducer(INITIAL_STATE,save_details)).toEqual(state) 
    });


    test('Get options ',()=>
    {
        const options_details = {
            type : 'GET_OPTIONS'
        };
        expect(optionReducer(INITIAL_STATE,options_details)).toEqual({"option": {"Jobs": [], "Options": undefined}})
    })
})