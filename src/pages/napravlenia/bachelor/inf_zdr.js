
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Inf_zdr_ru from 'src/components/napravlenia/bachelor_napravlenia/inf_zdr_ru';
import Inf_zdr_kyr from 'src/components/napravlenia/bachelor_napravlenia/inf_zdr_kyr';

const Inf_zdr = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Inf_zdr</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Inf_zdr_ru /> : <Inf_zdr_kyr />}
      </Box>
   </>
}
Inf_zdr.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Inf_zdr