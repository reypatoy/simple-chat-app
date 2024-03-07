import RegisterForm from '@/app/components/registerForm';
import Box from '@mui/material/Box';
import Image from 'next/image'
import Link from 'next/link';

export default function Register() {

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="w-[30%] h-[90%] flex items-center">
            <Box sx={{ bgcolor: '#cfe8fc', height: 'auto', width: '100%', borderRadius: '20px' }}>
                <Box sx={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
                    <Image src={`/logo (2).png`} alt={'logo'} width="250" height="250" />
                </Box>
                <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', paddingBottom: '15px', paddingTop: '10px', alignItems: 'center', borderRadius: '10px', bgcolor: '#FEF5E7', }}>
                    <RegisterForm />
                    <Link href="/" className='hover:underline hover:text-blue-500'>Already have an Account!</Link>
                </Box>
            </Box>
            </div>
        </div>
    )
}