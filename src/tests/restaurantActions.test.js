import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { REFINE_DATA, refineData, fetchData, FETCH_DATA_BEGIN } from '../actions/restaurantActions';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should pass test to payload', () => {
      const expectedAction = {
        type: REFINE_DATA,
        payload: 'test'
      }
      expect(refineData('test')).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates FETCH_DATA)SUCCESS when fetching restaurants has been done', () => {
      fetchMock.getOnce('http://opentable.herokuapp.com/api/restaurants?city=Toronto&per_page=100', {
        response: {
            ok: true,
            status: 200,
            headers: { 'content-type': 'application/json' },
            body: { restaurants: [{ city: 'Toronto '}] },
            sendAsJson: true
        }
      }).catch(err => console.log(err))
  
        const expectedActions = [
            { type: FETCH_DATA_BEGIN }
        ]
      
        const store = mockStore({ restaurants: [] })
    
        return store.dispatch(fetchData('Toronto')).then((result) => {
            // expect(store.getActions()).toEqual(expectedActions)
            expect(result).toEqual('test');
        })
        // fetchMock.get('*', { response: 200 })

        // return store.dispatch(fetchData())
        // .then(() => {
        //     const actualActions = store.getActions().map(action => action.type)
        //     expect(actualActions).toEqual(expectedActions)
        // })
    });
})