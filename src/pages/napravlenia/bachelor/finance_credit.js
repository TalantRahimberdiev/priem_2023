
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Finance_credit_kyr from 'src/components/napravlenia/bachelor_napravlenia/finance_credit_kyr';
import Finance_credit_ru from 'src/components/napravlenia/bachelor_napravlenia/finance_credit_ru';

const Finance_credit = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>finance credit</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Finance_credit_ru /> : <Finance_credit_kyr />}
      </Box>
   </>
}
Finance_credit.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Finance_credit