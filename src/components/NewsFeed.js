import React from 'react'
import './NewsFeed.css'

function NewsFeed() {
  return (
    <div className='NewFeed'>
        <div className="NewFeed_Container">
            <div className="newsfeed_chartSection">
                <div className="newsfeed_portfolio">
                    <h1 className='folio_value'>$120,000</h1>
                    <p>+$44.53 (+.04%) Today</p>
                </div>
                <div className="newsfeed_chart">
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsFeed