import React, { Component } from 'react';
import Layout from '../Component/Layout';
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AuthProvider>
}

export default MyApp
