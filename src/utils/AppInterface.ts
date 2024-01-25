export interface Speaker {
  id: number
  name: string
  bio: string
  photo: string
  portfolio: string
  schedule: string
  event: [] | any
}

export interface Schedule {
  activityName: string
  description: string
  duration: string
  endTime: string
  id: number
  startTime: string
}

export interface Workshop {
  liveLink: string
  name: string
  designationOfMinistry: string
  description: string
}

export interface Category {
  categoryId: number
  designationOfMinistry: string
}

export interface Event {
  id: number
  eventRef: string
  title: string
  image: string
  eventStartDateTime: string
  eventEndDateTime: string
  duration: string
  description: string
  liveStreamLink: string
  userCategories: any[]
}

export interface User {
  firstName: string
  lastName: string
  ageGroup: string
  email: string
  gender: string
  phoneNumber: string
  title: string
}
