import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { refineData, fetchData, REFINE_DATA, FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/restaurantActions';
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
  
    it('creates FETCH_DATA_SUCCESS when fetching restaurants has been done', () => {
      fetchMock.getOnce('https://opentable.herokuapp.com/api/restaurants?city=Toronto&per_page=100', {
        response: {
            status: 200,
            statusText: 'ok'
        }
      })
      .catch(err => console.log(err))
  
        const expectedActions = [FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS];
        const store = mockStore({})
    
        return store.dispatch(fetchData('Toronto')).then(() => {
            const actualActions = store.getActions().map(action => action.type)
            expect(actualActions).toEqual(expectedActions)
        })
    });

    it('dispatch FETCH_DATA_BEGIN and FETCH_DATA_FAILURE when error', () => {
      fetchMock.getOnce('https://opentable.herokuapp.com/api/restaurants?city=Error&per_page=100', 400)
        .catch(err => err);
      
        const expectedActions = [FETCH_DATA_BEGIN, FETCH_DATA_FAILURE];
        const store = mockStore({});

        return store.dispatch(fetchData('Error')).then(() => {
          const actualActions = store.getActions().map(action => action.type);
          expect(actualActions).toEqual(expectedActions);
        })

    })
})