
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import Theory_method_ru from 'src/components/napravlenia/bachelor_napravlenia/theory_method_ru';
import { theory_method_foto_data } from 'src/__mocks__/theory_method_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Theory_method = () => {

   return <>
      <Head>
         <title>Theory_method</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         <Theory_method_ru />
      </Box>
      <Fotogallery_list fotogallery_data={theory_method_foto_data} />
   </>
}
Theory_method.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Theory_method