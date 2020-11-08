import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import * as testStore from '@/store/youtubeapi'
import { YoutubeResponseApi } from '~/types/Youtube/Classes/YoutubeResponseApi'

describe('store/youtubeapi', () => {
// ----------------------------------------------------
// focus on the code from here...
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    // const storePath = `${process.env.buildDir}/store.js`
    // NuxtStore = await import(testStore)

  })

  beforeEach(async () => {
    // store = await NuxtStore.createStore()
  })
  // ...to here is what matters
  // ----------------------------------------------------

  describe('YoutubeApiStoreTest', () => {
    let api,
      actions

    beforeEach(() => {
      actions = testStore.default.actions
      // api = store.action['youtubeapi/queryByTextApiData']
    })

    test('queryByTextApiData is a function', () => {
      expect(_.isFunction(actions.queryByTextApiData)).toBe(true)
    })

    // Todo: Fix action Test to work properly
    test('queryByTextApiData Query Youtube Success', () => {
      return testStore.default.actions.queryByTextApiData('fusca azul')
        .then((data) => {
          expect(data.success).toBe(true)
        })
    })

    test('queryByParamApiData is a function', () => {
      expect(_.isFunction(actions.queryByParamApiData)).toBe(true)
    })

    test('queryByParamApiData is a function', () => {
      expect(_.isFunction(actions.sendSearchDataToApi)).toBe(true)
    })

    // test('should be 6 movies total', () => {
    //   expect(disney.length).toBe(6)
    // })
  })
})
