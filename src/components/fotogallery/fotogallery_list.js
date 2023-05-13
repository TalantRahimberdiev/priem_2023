import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export const Fotogallery_list = ({ fotogallery_data }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {fotogallery_data.map((item, index) => (
        <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.media, 121, item.rows, item.cols)}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}