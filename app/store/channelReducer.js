import axios from 'axios'

const RETRIEVE_CHANNELS = 'RETRIEVE_CHANNELS'
const CREATE_NEW_CHANNEL = 'CREATE_NEW_CHANNEL'
const NEW_CHANNEL_ENTRY = 'NEW_CHANNEL_ENTRY'

export const retrieveChannels = (channels) => ({
  type: RETRIEVE_CHANNELS,
  channels
})

export const createChannel = channel => ({
  type: CREATE_NEW_CHANNEL,
  channel
})


const path = 'http://localhost:3000/api/channels'
export const fetchChannels = () => async dispatch => {
  try {
    const res = await axios.get(path)
    const channels = res.data
    dispatch(retrieveChannels(channels))
  } catch (error) {
    console.error(error)
  }
}

export const creatingChannel = channel => async dispatch => {
  try {
    const res = await axios.post(path, channel)
    const data = res.data
    dispatch(createChannel(data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = [];


export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_CHANNELS:
      return action.channels
    case CREATE_NEW_CHANNEL:
      return action.channel
    default:
      return state
  }
}