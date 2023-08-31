import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type QUTextFieldProps } from './QUTextFieldProps';

export default function QUTextField({
    value,
    onChange,
    validationRule,
    placeholder,
    disabled,
    type,
    autocomplete,
    startContent,
    endContent,
    style,
    color = 'black',
    className,
    ...params
}: QUTextFieldProps): ReactElement {
    return (
        <TextField
            {...params}
            value={value}
            onChange={({ target }): void => onChange?.(target.value, validationRule ? validationRule(target.value) : true)}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            autoComplete={autocomplete}
            InputProps={{
                ...(params as any).InputProps,
                startAdornment: startContent ? <InputAdornment position="start">{startContent}</InputAdornment> : undefined,
                endAdornment: endContent ? <InputAdornment position="end">{endContent}</InputAdornment> : undefined,
                sx: {
                    '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                            border: `2px solid ${color}`,
                            borderRadius: '12px',
                            borderColor: color,
                        },
                    },
                    '&:hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            border: `2px solid ${color}`,
                            borderRadius: '12px',
                            borderColor: color,
                        },
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: `2px solid ${color}`,
                        borderRadius: '12px',
                        borderColor: color,
                    },
                    color,
                    borderRadius: '12px',
                    background: 'transparent',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}
