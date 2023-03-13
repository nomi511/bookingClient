import React from 'react'

function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o="
                alt=""
                className='featuredImg'
            />
            <div className="featuredTitles">
                <h1>Dubai</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=" 
                alt="" 
                className='featuredImg'
            />
            <div className="featuredTitles">
                <h1>Lahore</h1>
                <h2>53 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=" 
                alt=""
                className='featuredImg' 
            />
            <div className="featuredTitles">
                <h1>Islamabad</h1>
                <h2>130 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured