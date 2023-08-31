import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { type ReactElement } from 'react';
import { type QUPhoneNumberTextFieldProps } from './QUPhoneNumberTextFieldProps';

export default function QUPhoneNumberTextField({
    phoneNumber,
    onChange,
    placeholder,
    disabled,
    style,
    className,
}: QUPhoneNumberTextFieldProps): ReactElement {
    return (
        <MuiTelInput
            forceCallingCode
            focusOnSelectCountry
            onlyCountries={['RU']}
            defaultCountry="RU"
            value={phoneNumber}
            onChange={(changedPhoneNumber): void => onChange(changedPhoneNumber, matchIsValidTel(changedPhoneNumber))}
            placeholder={placeholder}
            disabled={disabled}
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
                    '.MuiTelInput-Flag': {
                        display: 'none',
                    },
                    borderRadius: '12px',
                    background: 'transparent',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}
