
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Program_obes_kyr from 'src/components/napravlenia/bachelor_napravlenia/program_obes_kyr';
import Program_obes_ru from 'src/components/napravlenia/bachelor_napravlenia/program_obes_ru';

const Program_obes = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Program_obes</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Program_obes_ru /> : <Program_obes_kyr />}
      </Box>
   </>
}
Program_obes.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Program_obes