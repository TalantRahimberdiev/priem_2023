
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Hud_ru from 'src/components/napravlenia/bachelor_napravlenia/hud_ru';
import Hud_kyr from 'src/components/napravlenia/bachelor_napravlenia/hud_kyr';
import { hud_foto_data } from 'src/__mocks__/hud_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Hud = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Hud</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Hud_ru /> : <Hud_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={hud_foto_data} />
   </>
}
Hud.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Hud