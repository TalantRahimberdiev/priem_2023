
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Fiz_inform_kyr from 'src/components/napravlenia/bachelor_napravlenia/fiz_inform_kyr';
import Fiz_inform_ru from 'src/components/napravlenia/bachelor_napravlenia/fiz_inform_ru';

const Fiz_inform = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Fiz_mat</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Fiz_inform_ru /> : <Fiz_inform_kyr />}
      </Box>
   </>
}
Fiz_inform.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Fiz_inform