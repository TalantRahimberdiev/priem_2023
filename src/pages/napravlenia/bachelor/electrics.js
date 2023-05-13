
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Electrics_kyr from 'src/components/napravlenia/bachelor_napravlenia/electrics_kyr';
import Electrics_ru from 'src/components/napravlenia/bachelor_napravlenia/electrics_ru';

const Electrics = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Electrics</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Electrics_ru /> : <Electrics_kyr />}
      </Box>
   </>
}
Electrics.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Electrics