import { withStyles, Dialog, DialogTitle, IconButton, DialogContent, useTheme, Box, Button, ButtonBase } from "@mui/material";
import { css } from '@emotion/css'
import { UncontrolledCarousel } from 'reactstrap'
import { Close, GitHub, Link, Description } from "@mui/icons-material";
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

interface GalleryItem {
  images: {
    src: string;
    alt: string;
  }[];
  title: string;
  description?: JSX.Element | string;
}

interface GalleryModalProps {
  item?: GalleryItem;
  onClose: () => void;
  imageOnly?: boolean;
}
const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose, imageOnly }) => {
  const theme = useTheme();
  const images = item?.images?.map((image, index) => ({
    // id: `${image.src}_${index}`,
    // header: '',
    altText: '',
    caption: '',
    key: `${image.src}_${index}`,
    src: image.src,
  }));

  return (
    <Dialog
      open={!!item}
      PaperProps={{className: css({
        maxWidth: 1000,
        maxHeight: '75vh',
        overflow: 'hidden',
        margin: 50,
      })}} 
      scroll='paper'
      onClose={onClose}
    >
      {item && <UncontrolledCarousel
        keyboard
        className={css({
          width: '100%',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          '& .carousel-control-next, .carousel-control-prev': {
            width: 35,
            padding: 5,
            background: 'rgba(0,0,0,0.1)',
            justifyContent: 'flex-end',
            transition: '.2s',
            '&:hover': {
              background: 'rgba(0,0,0,0.3)'
            },
            '&:focus-visible': {
              '& span': {
                outline: '2px solid black',
                border: '2px solid white',
                borderRadius: 5
              }
            },
            cursor: 'pointer',
            opacity:'1',
          },
          '& .carousel-control-prev-icon, .carousel-control-next-icon': {
            cursor: 'pointer',
            opacity:'1',
          },
        })}
        items={images!}
        interval={false}
        indicators={false}
        controls={(images?.length || 0) > 1}
      />}
      <div>
        {item && <DialogTitle css={{
          position: 'relative',
          maxWidth:'100%',
          fontSize: 25,
          textTransform: 'lowercase',
          letterSpacing: imageOnly ? 0 : 3,
            textAlign: 'center',
        }}>
          {item.title}
          <IconButton aria-label="close" size="small" onClick={onClose} css={{
            position: 'absolute',
            right: 5,
            top: 5,
          }}>
            <Close />
          </IconButton>
        </DialogTitle>}
        {item?.description && <DialogContent dividers css={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: theme.spacing(3)}}>
          {item?.description}
        </DialogContent>}
      </div> 
    </Dialog>
      
  )
}

interface GalleryProps {
  data: GalleryItem[],
  imageOnly?: boolean,
  small?: boolean,
}

export const Gallery: React.FC<GalleryProps> = ({ data, imageOnly, small }) => {
  const [item, setItem] = useState<GalleryItem>();
  return (
    <section css={{ maxWidth:1000, textAlign: 'center'}}>
      <GalleryModal item={item} onClose={() => setItem(undefined)} imageOnly={imageOnly}/>
      <Box margin='0px auto'>
        <div css={{
          display: 'inline-grid',
          width: '100%',
          gridTemplateColumns: `repeat(auto-fit, minmax(${small ? 150 : 225}px, 1fr))`,
          gridAutoRows: `minmax(${small ? 150 : 225}px, max-content)`,
          gap: 10,
          padding: 10,
        }}>
          {data.map((item, index)=>
            <ButtonBase css={{            
              borderRadius: 15,
              border: '2px solid white',
              overflow: 'hidden',
              position: 'relative',
              margin: '4px',
              '&:focus-visible': {
                outline: '2px solid black',
              },
              '&:hover, &:focus-visible': {
                '& div': {
                  background: 'rgba(0,0,0,.6)',
                  color: imageOnly ? 'transparent' : 'white',
                }
              }
            }} key={index} onClick={() => setItem(item)}>
              <img css={{
                cursor: 'pointer',
                display: 'block',
                oObjectFit: 'cover',
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }} src={item.images[0].src} alt={item.images[0].src}/>
              <div css={{
                  padding: 15,
                  zIndex: '1 !important',
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                  cursor: 'pointer',
                  background: 'rgba(0,0,0,0)',
                  color: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: '.2s',
                  fontSize: 22,
              }}>{item.title}</div>
            </ButtonBase>
          )}
        </div>
      </Box>
    </section>
  );
};

