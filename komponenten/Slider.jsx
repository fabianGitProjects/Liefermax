import { Carousel } from 'react-bootstrap'
import React from 'react'
import Image from "next/image"
export default function Slider() {
  return (
    <div>
     <Carousel controls={false} fade={true}>
        <Carousel.Item>
            <Image className="d-block w-100 rounded-3" src="/bilder/burger.jpg" alt="burger" width={600} height={300}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100 rounded-3" src="/bilder/pizza.jpg" alt="pizza" width={600} height={300}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100 rounded-3" src="/bilder/burrito.jpg" alt="buritto" width={600} height={300}/>
        </Carousel.Item>
     </Carousel>
    </div>
  )
}
