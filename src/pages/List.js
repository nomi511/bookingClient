import React, {useState} from 'react'
import Header from '../components/Header.js'
import NavBar from '../components/navbar.js'
import {useLocation} from 'react-router-dom'
import { format } from 'date-fns'
import {DateRange} from 'react-date-range'
import SearchItem from '../components/SearchItem.js'
import "../styles/css/pages.css"
import Options from '../components/Options.js'


function List() {

    const location = useLocation()

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [destination, setDestionation] = useState(location.state.destination)
    const [options, setOptions] = useState(location.state.options)

    const [openOptions, setOpenOptions] = useState(false)

  return (
    <div>
        <Header type="list" />
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lSearchTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input type="text" placeholder={destination} />
                    </div>

                    <div className="lsItem">
                        <label>Check-in Date</label>
                        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && (
                            <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                className='date'
                            />
                        )}
                    </div>

                    <div className="lsItem">
                        <label>Options</label>
                        <span onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        <div className="lsOptions">
                            {openOptions && <div className="lsSearchOptions" >
                                    <Options options={options} setOptions={setOptions}/>
                                </div>
                            }
                        </div>
                        
                    </div>

                    <div className="lsSBtn">
                        <button>Search</button>
                    </div>
                    
                    
                </div>
                <div className="listResult">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
            </div>
        </div>
    </div>
  )
}

export default List