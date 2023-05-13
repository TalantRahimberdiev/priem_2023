
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Istoria_kyr from 'src/components/napravlenia/bachelor_napravlenia/istoria_kyr';
import Istoria_ru from 'src/components/napravlenia/bachelor_napravlenia/istoria_ru';

const Istoria = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>istoria</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Istoria_ru /> : <Istoria_kyr />}
      </Box>
   </>
}
Istoria.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Istoria