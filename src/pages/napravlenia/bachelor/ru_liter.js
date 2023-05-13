
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import Ru_liter_ru from 'src/components/napravlenia/bachelor_napravlenia/ru_liter_ru';
import { ru_liter_foto_data } from 'src/__mocks__/ru_liter_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Ru_liter = () => {

   return <>
      <Head>
         <title>Ru_liter</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         <Ru_liter_ru />
      </Box>
      <Fotogallery_list fotogallery_data={ru_liter_foto_data} />
   </>
}
Ru_liter.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Ru_liter