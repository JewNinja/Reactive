import { createAction, createReducer } from 'redux-act'
import { UsersService } from '../api'

export const REDUCER = 'USERS'
const NS = `@${REDUCER}/`

export const getUsersRequest = createAction(`${NS}GET_USERS_REQUEST`)
export const getUsersSucces = createAction(`${NS}GET_USERS_SUCCESS`)
export const getUsersError = createAction(`${NS}GET_USERS_ERROR`)

export const createUserRequest = createAction(`${NS}CREATE_USER_REQUEST`)
export const createUserSuccess = createAction(`${NS}CREATE_USER_SUCCESS`)
export const createUserError = createAction(`${NS}CREATE_USER_ERROR`)

export const updateUserRequest = createAction(`${NS}UPDATE_USER_REQUEST`)
export const updateUserSuccess = createAction(`${NS}UPDATE_USER_SUCCESS`)
export const updateUserError = createAction(`${NS}UPDATE_USER_ERROR`)

export const openUserDrawer = createAction(`${NS}USER_DRAWLER_OPEN`)
export const closeUserDrawer = createAction(`${NS}USER_DRAWLER_CLOSE`)


export const getUsers = () => (dispatch) => {
  dispatch(getUsersRequest())

  return UsersService.getUsers()
    .then(({ data }) => {
      dispatch(
        getUsersSucces(data),
      )
    })
    .catch((error) => {
      dispatch(getUsersError())
    })
}


export const createUser = (data) => (dispatch, getState) => {
  dispatch(createUserSuccess({ ...data, id: getState().users.data.length + 1 }))
}

export const updateUser = (data) => (dispatch) => {
  dispatch(updateUserSuccess(data))

}



const initialState = {
  data: [],
  isLoading: false,
  errors: null,
  drawer: {
    isOpen: false,
    id: null,
  }
}

export default createReducer(
  {
    [getUsersRequest]: state => ({
      ...state,
      data: [],
      isLoading: true,
    }),
    [getUsersSucces]: (state, data) => ({
      ...state,
      data,
      isLoading: false,
    }),
    [getUsersError]: (state, errors) => ({
      ...state,
      errors,
      isLoading: false,
    }),
    [createUserRequest]: state => ({

    }),
    [createUserSuccess]: (state, userData) => ({
      ...state,
      data: [userData].concat(state.data)
    }),
    [createUserError]: (state, errors) => ({

    }),
    [updateUserRequest]: state => ({

    }),
    [updateUserSuccess]: (state, userData) => ({
      ...state,
      data: state.data.map(user => user.id !== userData.id ? user : userData)
    }),
    [updateUserError]: (state, errors) => ({

    }),
    [openUserDrawer]: (state, { id }) => ({
      ...state,
      drawer: {
        ...state.drawler,
        isOpen: true,
        id,
      },
    }),
    [closeUserDrawer]: state => ({
      ...state,
      drawer: {
        isOpen: false,
        id: null,
      },
    }),
  },
  initialState,
)
