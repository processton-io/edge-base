
import React from 'react'

import Hero from '@/blocks/Hero';
import Carousel from 're-carousel' 
export default function Heros({ data }) {
  
  return (
    <div >
      {data?.heros && (
          data?.heros.length > 1 ? (
            <Carousel loop auto>
              {data?.heros?.map((block, i) => {
                return (
                  <Hero key={i} data={block.hero} height={data.height} />
                )
              })}
            </Carousel>
          ) : (
            <div>
              <Hero key={`0`} data={data?.heros[0].hero} height={data.height} />
            </div>
          )
      )}
    </div>
  )
}
