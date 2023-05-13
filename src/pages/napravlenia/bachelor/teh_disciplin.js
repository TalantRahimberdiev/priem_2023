
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Teh_disciplin_ru from 'src/components/napravlenia/bachelor_napravlenia/teh_disciplin_ru';
import Teh_disciplin_kyr from 'src/components/napravlenia/bachelor_napravlenia/teh_disciplin_kyr';
import { teh_disciplin_foto_data } from 'src/__mocks__/teh_disciplin_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Teh_disciplin = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Teh_disciplin</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Teh_disciplin_ru /> : <Teh_disciplin_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={teh_disciplin_foto_data} />
   </>
}
Teh_disciplin.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Teh_disciplin