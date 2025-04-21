'use client';

import DotOverlay from './components/DotOverlay';
import FullPageScroll from './components/FullPageScroll';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function Page() {

  return <>
    <Sidebar />
    <DotOverlay/>
    
  <Header/>
  <FullPageScroll />
  </> ;
}