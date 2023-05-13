
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import Kyr_adab_kyr from 'src/components/napravlenia/bachelor_napravlenia/kyr_adab_kyr';
import { kyr_adab_foto_data } from 'src/__mocks__/kyr_adab_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Kyr_adab = () => {

   return <>
      <Head>
         <title>Kyr_adab</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         <Kyr_adab_kyr />
      </Box>
      <Fotogallery_list fotogallery_data={kyr_adab_foto_data} />
   </>
}
Kyr_adab.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Kyr_adab