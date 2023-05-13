import { Avatar, Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const user = {
  avatar: '/static/admission_fotos/director.jpg',
  city: 'Каракол,',
  country: 'Кыргызстан.',
  jobTitle: { 'кыр': 'должность: директор центра дистанционного образования и повышения квалификации;', 'ру': 'кызмат орду: дистанттык билим берүү жана квалификацияны жогорулатуу борборунун директору;' },
  name: 'Исабеков Кубатбек Абдыкеримович',
  level: { 'кыр': 'степень: доцент, кандидат физико-математических наук;', 'ру': 'даражасы: доцент, физика-математика илимдеринин кандидаты;' }
};

export const Admission_profile = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <Card>
      <CardContent>
        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <Avatar src={user.avatar} sx={{ height: 100, mb: 2, width: 100 }} />
          <Typography color="textPrimary" gutterBottom variant="h5" align='center'>
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2" align='center'>
            {user['jobTitle'][language]}
            <br />
            {user['level'][language]}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${user.city} ${user.country}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>

  )
}

