
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Fizkultura_ru from 'src/components/napravlenia/bachelor_napravlenia/fizkultura_ru';
import Fizkultura_kyr from 'src/components/napravlenia/bachelor_napravlenia/fizkultura_kyr';
import { fizkultura_foto_data } from 'src/__mocks__/fizkultura_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Fizkultura = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Fizkultura</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Fizkultura_ru /> : <Fizkultura_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={fizkultura_foto_data} />
   </>
}
Fizkultura.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Fizkultura