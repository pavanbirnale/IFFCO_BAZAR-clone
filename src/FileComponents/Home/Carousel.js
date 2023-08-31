import React from 'react'

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/carousel/carasole1.jpg" className="d-block w-100" alt="Wild Landscape" />
          </div>
          <div className="carousel-item">
            <img src="images/carousel/carasole2.jpg" className="d-block w-100" alt="Camera" />
          </div>
          <div className="carousel-item">
            <img src="images/carousel/carasole3.webp" className="d-block w-100" alt="Exotic Fruits" />
          </div>
          <div className="carousel-item">
            <img src="images/carousel/carasole4.jpg" className="d-block w-100" alt="Exotic Fruits" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
