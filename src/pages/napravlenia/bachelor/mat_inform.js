
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Mat_inform_kyr from 'src/components/napravlenia/bachelor_napravlenia/mat_inform_kyr';
import Mat_inform_ru from 'src/components/napravlenia/bachelor_napravlenia/mat_inform_ru';

const Mat_inform = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Mat_inform</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Mat_inform_ru /> : <Mat_inform_kyr />}
      </Box>
   </>
}
Mat_inform.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Mat_inform