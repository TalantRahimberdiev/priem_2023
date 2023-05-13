
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Turizm_operator_kyr from 'src/components/napravlenia/bachelor_napravlenia/turizm_operator_kyr';
import Turizm_operator_ru from 'src/components/napravlenia/bachelor_napravlenia/turizm_operator_ru';

const Turizm_operator = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Turizm_operator</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Turizm_operator_ru /> : <Turizm_operator_kyr />}
      </Box>
   </>
}
Turizm_operator.getLayout = (page) => (
   <DashboardLayout>{page}</DashboardLayout>
)
export default Turizm_operator