
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Nachalnoe_kyr from 'src/components/napravlenia/bachelor_napravlenia/nachalnoe_kyr';
import Nachalnoe_ru from 'src/components/napravlenia/bachelor_napravlenia/nachalnoe_ru';

const Nachalnoe = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Nachalnoe</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Nachalnoe_ru /> : <Nachalnoe_kyr />}
      </Box>
   </>
}
Nachalnoe.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Nachalnoe