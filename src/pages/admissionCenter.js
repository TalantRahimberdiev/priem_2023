import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Admission_profile } from '../components/admission/admission_profile';
import { Admission_profile_details } from '../components/admission/admission_profile_details';
import { DashboardLayout } from '../components/dashboard-layout';
import { useSelector } from 'react-redux';

const AdmisionCenter = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <>
      <Head>
        <title>{language == 'кыр' ? 'Приемная комиссия' : 'Тандоо комиссиясы'}</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            {language == 'кыр' ? 'Приемная комиссия ИГУ имени Касыма Тыныстанова' : 'Касым Тыныстанов атындагы ЫМУнун тандоо комиссиясы'}
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Admission_profile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <Admission_profile_details />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

AdmisionCenter.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AdmisionCenter;
