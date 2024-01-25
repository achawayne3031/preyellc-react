import React, { useCallback} from 'react'
import InfoIcon from '@mui/icons-material/Info';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



interface Props<DataType> {
    label: string,
    items: Array<DataType>,
    value: string,
    name: string,
    placeholder: string,
    error: boolean
    errorText: string | React.ReactElement | any
    labelExtractor: (item: DataType) => string,
    valueExtractor: (item: DataType) => string,
    onValueChange: (value: string, selectedItem: DataType) => void
}


const DymanicSelect = <DataType,>({
    name,
    placeholder,
    label,
    items,
    value,
    error,
    errorText,
    labelExtractor,
    valueExtractor,
    onValueChange
}: Props<DataType>) => {


    const handleOnValueChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const {
                target: {
                    value: selectedValue
                } 
            } = event;

            const item = items.find((i) => valueExtractor(i) === selectedValue);
            if(!item) return;
            onValueChange(selectedValue, item!);

            console.log(selectedValue, 'hello')
        },
        [items]
    );


    const handleValueChange = (event: SelectChangeEvent) => {

        const {
            target: {
                value: selectedValue
            } 
        } = event;

        const item = items.find((i) => valueExtractor(i) === selectedValue);
        if(!item) return;
        onValueChange(selectedValue, item!);

    }

  return (

    <div className="input-wrapper">
    <label htmlFor={label} className='input-label'>{label}</label>



    <FormControl fullWidth>
        <Select
            labelId="demo-simple-select-label"
            label={label}
            id={label}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={handleValueChange}
            className='select-form'
        >
            {
                items.map((item, index) => {
                    const itemLabel = labelExtractor(item);
                    const valueLabel = valueExtractor(item);
                    return (
                        <MenuItem key={index} value={valueLabel} className='capitalize'>{itemLabel}</MenuItem>
                    );
                })
            }
        </Select>
    </FormControl>
 
{/* 
     <select   
      id={label}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleOnValueChange}
      className='input-text'
      >

        {
            items.map((item, index) => {
                const itemLabel = labelExtractor(item);
                const valueLabel = valueExtractor(item);

                return (
                    <option key={index} value={valueLabel} className='capitalize'>{itemLabel}</option>
                );
            })
        }

    </select>  */}

    {Boolean(error && errorText)  && <><p className="error"> <InfoIcon className='error-icon' /> { errorText }</p></> }
  </div>




  )
}

export default DymanicSelect