import { styled } from '@stitches/react'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '4rem',

  maxWidth: 1180,
})

export const ImageContainer = styled('div', {
  maxWidth: 576,
  height: 576,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '.25rem',

  img: {
    // objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'grid',
  gridTemplateRows: 'repeat(3, max-content)',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    paddingTop: '1rem',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    paddingTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    alignSelf: 'end',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background .3s ease-in-out',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
