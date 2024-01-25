import * as Yup from 'yup'

export const CreateEventValidation = Yup.object({
  title: Yup.string().required('Title is required'),

  description: Yup.string().required('Description is required'),
  liveStreamLink: Yup.string().required('Live Stream Link is required'),

  startTime: Yup.string().required('Start Time is required'),
  startDate: Yup.string().required('Start Date is required'),

  endDate: Yup.string().required('End Date is required'),
  endTime: Yup.string().required('End Time is required'),
  file: Yup.string().required('Event Banner is required'),
  designationOfMinistry: Yup.string().required('Designation is required'),
})

export const RegisterToEventValidation = Yup.object({
  designationOfMinistry: Yup.string(),
})

export const UpdateEventValidation = Yup.object({
  title: Yup.string().required('Title is required'),

  description: Yup.string().required('Description is required'),
  liveStreamLink: Yup.string().required('Live Stream Link is required'),

  startTime: Yup.string(),
  startDate: Yup.string().required('Start Date is required'),

  endDate: Yup.string().required('End Date is required'),
  endTime: Yup.string(),
  file: Yup.string().required('Event Banner is required'),
  designationOfMinistry: Yup.string().required('Designation is required'),
})
