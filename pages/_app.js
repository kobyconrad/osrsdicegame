function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body,
        #_next {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          background: #202020;
        }
      `}</style>
    </>
  );
}

export default MyApp;
