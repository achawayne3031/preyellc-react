import * as Yup from 'yup'


export const CreateSpeakerValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().required('Bio is required'),
  photo: Yup.string().required('Photo is required'),
  portfolio: Yup.string().required('Portfolio is required'),
  event: Yup.string().required('Event is required'),
})




export const UpdateSpeakerValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().required('Bio is required'),
  photo: Yup.string().required('Photo is required'),
  portfolio: Yup.string().required('Portfolio is required'),
  event: Yup.string().required('Event is required'),
})
