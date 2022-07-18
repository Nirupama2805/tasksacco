/*global spyOn*/
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import Reduxthunk from 'redux-thunk';
import moxios from "moxios";
import axios from 'axios';
import {GetOptionsData,SaveDetails} from './redux/Actions'
const initialState = {
  posts: [],
};
const postsList =
  [{"options": {"address": "", "creditCardType": ["Cashback", "Shopping ", "Secured", "Travel", "Fuel", "Student", "Corporate", "Reward"], "eMail": "", "firstName": "", "gender": ["Male", "Female"], "languages": ["Telugu", "English", "Hindi"], "lastName": "", "state": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"], "zip": ""}}];
const middlewares = [Reduxthunk];
const mock = new MockAdapter(axios);
const mockstore= configureMockStore(middlewares);

describe('selectOptions',()=>
{
    test('Dsipatches the correct action and return the details given',() => {
        const store = mockstore();
        const obj={
    }
        const expectedActions=
            [{
                      'type':'SAVE_DETAILS',
                      'details':{}
            }]
        const s = store.dispatch(SaveDetails(obj));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
describe('testing get option details',()=>{
      let store;
  beforeEach(() => {
    moxios.install();
    store = mockstore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });
    test('Dsipatches the correct action and return the options fetched',() => {
moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
            {"options": {"address": "", "creditCardType": ["Cashback", "Shopping ", "Secured", "Travel", "Fuel", "Student", "Corporate", "Reward"], "eMail": "", "firstName": "", "gender": ["Male", "Female"], "languages": ["Telugu", "English", "Hindi"], "lastName": "", "state": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"], "zip": ""}}
        ]
      });
    });

    const expectedActions = [
      {
        type: "GET_OPTIONS",
        options: postsList
      },
    ];
    return store.dispatch(GetOptionsData()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      
    });
});
    });

