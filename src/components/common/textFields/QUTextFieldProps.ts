import { type CSSProperties, type HTMLInputTypeAttribute, type ReactElement } from 'react';

export interface QUTextFieldProps {
    value?: string;
    onChange?: (changedValue: string, changedIsValid: boolean) => void;
    validationRule?: (value: string) => boolean;
    placeholder?: string;
    disabled?: boolean;
    type: HTMLInputTypeAttribute;
    autocomplete?: string;
    color?: string;
    startContent?: ReactElement;
    endContent?: ReactElement;
    style?: CSSProperties;
    className?: string;
}
