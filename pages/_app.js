import '../styles/globals.css'
import { Userpilot } from 'userpilot'
import React from 'react';

Userpilot.initialize('NX-56a9fbf7');


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if(true){
      Userpilot.identify('456987',{
        name: 'John Doe',
        email: 'john@site-domain.com',
        created_at: '2018-07-11',
      });
    }
  }, [true]);

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;