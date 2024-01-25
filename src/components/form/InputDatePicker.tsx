
import React, { ChangeEvent, FC, useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { FieldChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/useField';

import '../../css/form.scss'


interface InputProps {
    label: string
    value: string | number
    error: boolean
    errorText: string | React.ReactElement | any
    disabled?: boolean
    onChange: (value: any, context: any) => void
  }




const InputDatePicker:FC<InputProps> = ({
    label,
    value,
    error,
    errorText,
    disabled,
    onChange,
}) => {

    const [startDate, setStartDate] = useState(new Date());


  return (
    <div>
          <div className="input-wrapper">
            <label htmlFor={label} className='input-label'>{label}</label>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer  components={['DateTimePicker']}>
                                <TimePicker 
                                    className='date-picker-input'  
                                    onChange={onChange}
                                    value={value}
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                />

                            </DemoContainer>
                        </LocalizationProvider>



            {Boolean(error && errorText)  && <><p className="error"> <InfoIcon className='error-icon' /> { errorText }</p></> }
      </div>

    </div>
  )
}

export default InputDatePicker

