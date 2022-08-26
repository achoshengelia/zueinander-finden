import axios from "axios"

// Events
export async function getAllEvents(params) {
  return await axios.get(`${process.env.BASE_URI}/events?${params}`)
}

export async function getSliderItemsByEventId(id) {
  return await axios.get(`${process.env.BASE_URI}/events/slider/${id}`)
}

// Comments
export async function getComments(comment) {
  return await axios.get(`${process.env.BASE_URI}/messages/web`)
}

export async function postComment(comment) {
  return await axios.post(`${process.env.BASE_URI}/messages`, {
    text: comment,
  })
}

// Slider-One
export async function getSlider() {
  return await axios.get(`${process.env.BASE_URI}/slider/slider-one`)
}

export async function getSliderTwo() {
  return await axios.get(`${process.env.BASE_URI}/slider/slider-two`)
}
