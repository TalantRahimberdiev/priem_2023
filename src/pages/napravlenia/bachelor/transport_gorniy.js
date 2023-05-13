
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Transport_gorniy_ru from 'src/components/napravlenia/bachelor_napravlenia/transport_gorniy_ru';
import Transport_gorniy_kyr from 'src/components/napravlenia/bachelor_napravlenia/transport_gorniy_kyr';
import { transport_gorniy_foto_data } from 'src/__mocks__/transport_gorniy_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Transport_gorniy = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Transport_gorniy</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Transport_gorniy_ru /> : <Transport_gorniy_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={transport_gorniy_foto_data} />
   </>
}
Transport_gorniy.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Transport_gorniy