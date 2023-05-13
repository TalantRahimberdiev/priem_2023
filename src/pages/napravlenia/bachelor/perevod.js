
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Perevod_kyr from 'src/components/napravlenia/bachelor_napravlenia/perevod_kyr';
import Perevod_ru from 'src/components/napravlenia/bachelor_napravlenia/perevod_ru';

const Perevod = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Perevod</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Perevod_ru /> : <Perevod_kyr />}
      </Box>
   </>
}
Perevod.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Perevod