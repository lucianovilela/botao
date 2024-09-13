import React from 'react'


import Script from 'next/script'
function Analytics() {
  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {
          `
      
      
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJXQB2G7');
      
      `
        }
      </Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7Q7XLSETBV"></Script>
      <Script id="gtag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7Q7XLSETBV');
      `}
      </Script>
    </>
  )
}

export default Analytics