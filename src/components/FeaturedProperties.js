import React from 'react'

function FeaturedProperties() {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className='fpItemImg'/>
            <span className="fpName">7Seasons Budapest</span>
            <span className="fpCity">Budapest, Hungary</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excelent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className='fpItemImg'/>
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">krakow, Poland</span>
            <span className="fpPrice">Starting from $150</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Excelent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/287103884.webp?k=1dda225f7472470d2e8524c258089c089c106e4dee40e93bf7d1ef9e4638720e&o=&s=1" alt="" className='fpItemImg'/>
            <span className="fpName">Barcelonastuff Apartments</span>
            <span className="fpCity">Barcelona, Spain</span>
            <span className="fpPrice">Starting from $200</span>
            <div className="fpRating">
                <button>8.6</button>
                <span>Excelent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" className='fpItemImg'/>
            <span className="fpName">The Tower of London</span>
            <span className="fpCity">London, UK</span>
            <span className="fpPrice">Starting from $800</span>
            <div className="fpRating">
                <button>9.5</button>
                <span>Excelent</span>
            </div>
        </div>

    </div>
  )
}

export default FeaturedProperties