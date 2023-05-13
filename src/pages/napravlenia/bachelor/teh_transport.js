
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Teh_transport_ru from 'src/components/napravlenia/bachelor_napravlenia/teh_transport_ru';
import Teh_transport_kyr from 'src/components/napravlenia/bachelor_napravlenia/teh_transport_kyr';
import { teh_transport_foto_data } from 'src/__mocks__/teh_transport_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Teh_transport = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Teh_transport</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Teh_transport_ru /> : <Teh_transport_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={teh_transport_foto_data} />
   </>
}
Teh_transport.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Teh_transport