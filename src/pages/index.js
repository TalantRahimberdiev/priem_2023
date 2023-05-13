import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { Speciality_list } from 'src/components/napravlenia/main_napravlenia';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { education_data } from 'src/__mocks__/education_data';
import { useSelector } from 'react-redux';

const Index = () => {
   const language = useSelector(state => state.reducer_1.language)
   return (
      <>
         <Head>
            <title>{language == 'кыр' ? 'Направления' : 'Багыттар'}</title>
         </Head>
         <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
            <Container maxWidth={false}>
               <Typography variant="h3">
                  {language == 'кыр' ? 'Направления по программе бакалавриата на 2023-2024 учебный год' : '2023-2024 окуу жылына бакалавриат боюнча багыттары'}
               </Typography>
               <Box sx={{ mt: 3 }}>
                  <Speciality_list education_data={education_data} />
               </Box>
            </Container>
         </Box>
      </>
   )
}

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Index;
