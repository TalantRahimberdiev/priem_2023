
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Ekspl_transport_ru from 'src/components/napravlenia/bachelor_napravlenia/ekspl_transport_ru';
import Ekspl_transport_kyr from 'src/components/napravlenia/bachelor_napravlenia/ekspl_transport_kyr';
import { ekspl_transport_foto_data } from 'src/__mocks__/ekspl_transport_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Ekspl_transport = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Ekspl_transport</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Ekspl_transport_ru /> : <Ekspl_transport_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={ekspl_transport_foto_data} />
   </>
}
Ekspl_transport.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Ekspl_transport