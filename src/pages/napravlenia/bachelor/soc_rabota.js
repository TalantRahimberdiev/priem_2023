
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Soc_rabota_ru from 'src/components/napravlenia/bachelor_napravlenia/soc_rabota_ru';
import Soc_rabota_kyr from 'src/components/napravlenia/bachelor_napravlenia/soc_rabota_kyr';
import { soc_rabota_foto_data } from 'src/__mocks__/soc_rabota_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Soc_rabota = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Soc_rabota</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Soc_rabota_ru /> : <Soc_rabota_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={soc_rabota_foto_data} />
   </>
}
Soc_rabota.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Soc_rabota