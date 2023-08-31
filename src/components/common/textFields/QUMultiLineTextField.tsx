import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type QUMultiLineTextFieldProps } from './QUMultiLineTextFieldProps';

export default function QUMultiLineTextField({
    value,
    onChange,
    validationRule,
    placeholder,
    disabled,
    style,
    className,
}: QUMultiLineTextFieldProps): ReactElement {
    return (
        <TextField
            multiline
            value={value}
            onChange={({ target }): void => onChange?.(target.value, validationRule ? validationRule(target.value) : true)}
            placeholder={placeholder}
            disabled={disabled}
            type="text"
            InputProps={{
                sx: {
                    '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                            border: '2px solid black',
                            borderRadius: '12px',
                            borderColor: 'black',
                        },
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: '2px solid black',
                        borderRadius: '12px',
                        borderColor: 'black',
                    },
                    borderRadius: '12px',
                    background: 'transparent',
                    minHeight: 135,
                    alignItems: 'flex-start',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}
