import React from 'react'

function SearchItem() {
  return (
    <div className='searchItem'>
        <div className="searchItemWrapper">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/407195885.webp?k=0a1362073a05c1f6d41b523811bd448cba52978162adf52159de75283ac710fa&o=&s=1" alt="" />
            <div className='sideDetails'>
                <div className='titleSection'>
                    <h3>Kasco Homes - Waves Tower Business Bay</h3>
                    <div className='titleReview'>
                        <div className='titleMood'>
                            <span className='itemMood'>Excellent</span>
                            <span className='totalReviews'>93 reviews</span> 
                        </div>
                        <span className='reviewNum'>8.2</span>
                    </div>
                </div>

                <span className='siDistance'>1.7km from center</span>

                <div className='siDesc'>
                    <div className='siDescLeft'>
                        <span className='siSubtitle'>One bedroom apartment</span>
                        <span className='siFeature'>Entire apartment . 1 bedroom . 1 living room . 1 bathroom . 77 square meter</span>
                        <span className="siCancel">Free cancellation</span>
                        <span className="siCancelSubtitle">You can cancel later, so lock in this great price today!</span>
                    </div>
                    
                    <div className='siDetails'>
                        <span className="siCustDetails">1 night, 2 adults</span>
                        <h2>US$76</h2>
                        <span className='siTax'>+US$61 taxes and charges</span>

                        <button>{`See availability    >`}</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchItem