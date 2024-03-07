import Box from '@mui/material/Box';
import Image from 'next/image'
import Link from 'next/link';
import LoginForm from './components/loginForm';

export default function Auth() {
    return (
      <div className="flex h-full w-full items-center justify-center">
          <div className="w-[30%] h-[90%] flex items-center">
            <Box sx={{ bgcolor: '#cfe8fc', height: '60vh', width: '100%', borderRadius: '20px' }}>
              <Box sx={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
                    <Image src={`/logo (2).png`} alt={'logo'} width="250" height="250" />
              </Box>
              <Box sx={{ height: '40vh', display: 'flex', flexDirection: 'column', paddingTop: '30px', alignItems: 'center', borderRadius: '10px', bgcolor: '#FEF5E7', }}>
                  <LoginForm />
                  <Link href="/pages/register" className='hover:underline hover:text-blue-500'>Create an Account!</Link>
              </Box>
            </Box>
          </div>
      </div>
    );
  }
  