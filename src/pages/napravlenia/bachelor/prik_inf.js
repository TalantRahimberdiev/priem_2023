
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Prik_inf_kyr from 'src/components/napravlenia/bachelor_napravlenia/prik_inf_kyr';
import Prik_inf_ru from 'src/components/napravlenia/bachelor_napravlenia/prik_inf_ru';

const Prik_inf = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Prik_inf</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Prik_inf_ru /> : <Prik_inf_kyr />}
      </Box>
   </>
}
Prik_inf.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Prik_inf