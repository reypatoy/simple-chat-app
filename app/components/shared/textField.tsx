'use client'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

type Props = {
    label: string
    error?: string
    type: 'text' | 'password'
    name: string
    id: string
}

export default function TextFieldInput({label, error, type, name, id}: Props) {
    const [value, setValue] = useState<string>('')
    return (
    <TextField
        id={id}
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        margin="normal"
        helperText={error}
        error={Boolean(error)}
        sx={{width: '100%'}}
        type={type}
        name={name}
    />
    );
  }
  