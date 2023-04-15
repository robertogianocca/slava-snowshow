import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import PortfolioGallery from '../components/PortfolioGallery/PortfolioGallery'
import portfolioList from '../components/portfolioList'
const inter = Inter({ subsets: ['latin'] })

export default function PortfolioId() {

  function createGallery(galleryItem) {
          return (
              <PortfolioGallery
                  key={galleryItem.key}
                  title={galleryItem.title}
                  year={galleryItem.year}
                  location={galleryItem.location}
                  images={galleryItem.images}
              />
          )
  };
  return (
      <div>
          {portfolioList.map(createGallery)}
      </div>
  )
};
