import * as Yup from 'yup'

export const CreateWorkshopValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  liveLink: Yup.string().required('Live link is required'),
  designationOfMinistry: Yup.string().required(
    'Designation of ministry is required',
  ),
  description: Yup.string().required('Description is required'),
  eventRef: Yup.string().required('Event is required'),
})
