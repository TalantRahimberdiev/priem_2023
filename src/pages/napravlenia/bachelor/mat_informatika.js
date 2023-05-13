
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Mat_informatika_kyr from 'src/components/napravlenia/bachelor_napravlenia/mat_informatika_kyr';
import Mat_informatika_ru from 'src/components/napravlenia/bachelor_napravlenia/mat_informatika_ru';

const Mat_informatika = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Mat_informatika</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Mat_informatika_ru /> : <Mat_informatika_kyr />}
      </Box>
   </>
}
Mat_informatika.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Mat_informatika