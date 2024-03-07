'use client'
import Button from '@mui/material/Button';

type Props = {
    type: 'button' | 'submit'
    label: string
}
export default function ButtonComponent({label, type}: Props) {
  return (
    <Button 
        variant="contained" 
        disableElevation 
        type={type}
        sx={{width: '100%', height: '50px', marginTop: '10px'}}
    >
      {label}
    </Button>
  );
}