import * as Yup from 'yup'

export const CreateSponsorValidation = Yup.object({
  name: Yup.string().required('Name is required'),
})
