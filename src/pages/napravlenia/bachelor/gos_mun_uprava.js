
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Gos_mun_uprava_kyr from 'src/components/napravlenia/bachelor_napravlenia/gos_mun_uprava_kyr';
import Gos_mun_uprava_ru from 'src/components/napravlenia/bachelor_napravlenia/gos_mun_uprava_ru';

const Gos_mun_uprava = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>gos_mun_upravlenie</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Gos_mun_uprava_ru /> : <Gos_mun_uprava_kyr />}
      </Box>
   </>
}
Gos_mun_uprava.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Gos_mun_uprava