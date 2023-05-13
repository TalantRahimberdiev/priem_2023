
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Buh_uchet_analiz_audit_ru from 'src/components/napravlenia/bachelor_napravlenia/buh_uchet_analiz_audit_ru';
import Buh_uchet_analiz_audit_kyr from 'src/components/napravlenia/bachelor_napravlenia/buh_uchet_analiz_audit_kyr';
import { buh_uchet_foto_data } from 'src/__mocks__/buh_uchet_foto_data';
import { Fotogallery_list } from 'src/components/fotogallery/fotogallery_list';

const Buh_uchet_analiz_audit = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>buh_uchet_analiz_audit</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Buh_uchet_analiz_audit_ru /> : <Buh_uchet_analiz_audit_kyr />}
      </Box>
      <Fotogallery_list fotogallery_data={buh_uchet_foto_data} />
   </>
}
Buh_uchet_analiz_audit.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Buh_uchet_analiz_audit