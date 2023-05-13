
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Bio_teh_ru from 'src/components/napravlenia/bachelor_napravlenia/bio_teh_ru';
import Bio_teh_kyr from 'src/components/napravlenia/bachelor_napravlenia/bio_teh_kyr';
import { bio_teh_foto_data } from 'src/__mocks__/bio_teh_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Bio_teh = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Bio_teh</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Bio_teh_ru /> : <Bio_teh_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={bio_teh_foto_data} />
   </>
}
Bio_teh.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Bio_teh