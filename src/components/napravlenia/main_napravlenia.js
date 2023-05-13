
import { Box, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/dist/client/link';
import { useSelector } from 'react-redux';

export const Speciality_list = ({ education_data }) => {
  const language = useSelector(state => state.reducer_1.language)

  return (
    <Card>
      <CardContent>
        {
          education_data[language].napravleniyas.map((item, index) => {
            return (
              <Box key={index}>
                <Typography sx={{ fontStyle: 'monospace' }} gutterBottom variant="h6" component="div">{item.napravlenie}</Typography>
                <ul>
                  {
                    item.profiles.map((element, index) => {
                      return <li key={index}><Link href={{ pathname: `/napravlenia/bachelor/${element['link']}` }}>{element['name']}</Link></li>
                    })
                  }
                </ul>
              </Box>
            )
          })
        }
      </CardContent>
    </Card>
  )
}
