import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

const items = [
  {
    href: '/',
    title: { 'кыр': 'Направления', 'ру': 'Багыттар' }
  },
  {
    href: '/instruction',
    title: { 'кыр': 'Инструкция для поступления', 'ру': 'Кабыл алуу нускамалары' }
  },
  {
    href: '/admissionCenter',
    title: { 'кыр': 'Приемная комиссия', 'ру': 'Тандоо комиссиясы' }
  },
  {
    href: '/fotogallery',
    title: { 'кыр': 'Фото галлерея', 'ру': 'Сүрөт галерея' }
  },
  {
    href: '/contacts',
    title: { 'кыр': 'Контакты', 'ру': 'Байланыш' }
  }
]

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  const language = useSelector(state => state.reducer_1.language)

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ p: 3 }}>
          <NextLink href="/" passHref  >
            <a><Logo sx={{ height: 37, width: 37 }} /></a>
          </NextLink>
        </Box>
        <Box sx={{ px: 2 }}>
          <Typography color="neutral.400" variant="body2">{language == 'кыр' ? 'ИГУ им. К. Тыныстанова' : 'К. Тыныстанов атындагы ЫМУ'}</Typography>
        </Box>
        <Divider sx={{ borderColor: '#2D3748', my: 3 }} />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={uuid()}
              icon={item.icon}
              href={item.href}
              title={item['title'][language]}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box sx={{ px: 2, py: 3 }}>
          <Typography color="neutral.100" variant="subtitle2">
            {language == 'кыр' ? 'Необходимы  дополнительные данные?' : 'Көбүрөөк маалымат боюнча?'}
          </Typography>
          <Typography color="neutral.500" variant="body2">
            {language == 'кыр' ? 'прослеживайте ВУЗ в официальном сайте.' : 'расмий сайтында университетке көз салуу.'}
          </Typography>
          <NextLink href="http://main.iksu.kg/" passHref>
            <Button color="secondary" component="a" endIcon={(<OpenInNewIcon />)} fullWidth sx={{ mt: 2 }} variant="contained">
              {language == 'кыр' ? 'ИГУ' : 'ЫМУ'}
            </Button>
          </NextLink>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer anchor="left" open PaperProps={{
        sx: { backgroundColor: 'neutral.900', color: '#FFFFFF', width: 280 }
      }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer anchor="left" onClose={onClose} open={open}
      PaperProps={{
        sx: { backgroundColor: 'neutral.900', color: '#FFFFFF', width: 280 }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }} variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
