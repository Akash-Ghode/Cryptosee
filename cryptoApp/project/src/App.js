import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Hompage, Cryptocurrencies,News, CryptoDetails } from './components';
import './App.css'
import { HomeFilled } from '@ant-design/icons';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<Hompage />} />            
                  <Route exact path='/exchanges' element={<Exchanges />} />
                  <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} /> 
                  <Route exact path='/crypto/:coinId' element={<CryptoDetails />} /> 
                  <Route exact path='/news' element={<News />} /> 
                </Routes>
              </div>
            </Layout>
        </div>
        <div className='footer'>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
              Cryptoverse<br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/">Exchanges</Link>
              <Link to="/">News</Link>
            </Space>
        </div>
      
    </div>
  )
}

export default App
