import localFont from 'next/font/local'

export const manropeFont = localFont({
  src: [
    {
      path: './Manrope-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Manrope-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    // {
    //   path: './SFProDisplay-Black.woff2',
    //   weight: '900',
    //   style: 'normal',
    // }
  ],
  display: 'swap',
  variable: '--font-manrope'
})