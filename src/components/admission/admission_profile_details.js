
import { Box, Card, CardContent, CardHeader, Divider, Grid, } from '@mui/material';
import { useSelector } from 'react-redux';

export const Admission_profile_details = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <Card>
      <CardHeader
        subheader={language == 'кыр' ? "информация для осуществления связи" : 'байланышуу тууралуу маалымат'}
        title={language == 'кыр' ? "Контакты" : 'Байланыш'}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/contacts_fotos/whatsapp.jpg" />
              <a href="tel:+996 (700) 327 420">+996 (700) 327 420</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/contacts_fotos/facebook.jpg" />
              <a href='https://www.facebook.com/iksu.kg'>https://www.facebook.com/iksu.kg</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '3vw', height: 'auto', marginRight: '7px' }} src="/static/contacts_fotos/instagram.jpg" />
              <a href='https://www.instagram.com/priemisu/'>@priemisu</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '3vw', height: 'auto', marginRight: '7px' }} src="/static/contacts_fotos/telefon.jpg" />
              <a href="tel:+996 (3922) 5 01 23">+996 (3922) 5 01 23</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/contacts_fotos/website.jpg" />
              <a href='www.iksu.kg'>www.iksu.kg</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/contacts_fotos/gmail.jpg" />
              <a href='mailto:interiksu@gmail.com'>interiksu@gmail.com</a>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
