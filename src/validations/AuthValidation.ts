import * as Yup from 'yup'

export const LoginValidation = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have a minimum of 6 characters'),
})

export const RegisterValidation = Yup.object({
  title: Yup.string().required('Title is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  otherName: Yup.string().required('Other name is required'),
  phoneNumber: Yup.string().required('Phone is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have a minimum of 6 characters'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),

  gender: Yup.string().required('Gender is required'),
  ageGroup: Yup.string().required('Age group is required'),
  countryOfResidence: Yup.string().required('Country is required'),
  nameOfMinistry: Yup.string().required('Ministry is required'),
})

export const SignUpValidation = Yup.object({
  full_name: Yup.string().required('Full name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have a minimum of 6 characters'),
})
