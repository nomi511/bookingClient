import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import "../styles/css/pages.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { format  } from "date-fns";
import Options from "./Options";

const Header = ({type}) => {

    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children: 0,
        room: 1
    })

    // const handleOptions = (name, op) =>{
    //     setOptions((prev)=>{
    //         return {
    //             ...prev, [name]: op==='i'? options[name]+1:options[name]-1
    //         }
    //     })
    // }

    

    const navigate = useNavigate()

    const handleSearch = ()=>{
        navigate('/hotels', {state:{destination, date, options}})
    }

    return ( 
        <div className="header">

            <div className={type === "list"? "headDiv listMode": "headDiv"}>

                <div className="topRow">

                    <div className="headItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="headItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="headItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>

                    <div className="headItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className="headItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>

                </div>

                {type !== 'list' && <>
                <h1 className="headtitle">A Lifetime of discounts? It's Genius.</h1>
                <p className="headDesc">
                    Get rewarded for your travels - unlock instant saving of 10% or more with a free TravelGuru account
                </p>

                <button className="headbtn">Sign in / Register</button>

                <div className="headSearch">
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input 
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                            onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span 
                            className="headerSearchText"
                            onClick={()=>setOpenDate(!openDate)}
                        >{`${format(date[0].startDate, "dd/MM/yyyy")}`} to {`${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText" onClick={()=>{setOpenOptions(!openOptions)}} >{`${options.adult}`} adults . {`${options.children}`} childrens . {`${options.room}`} room</span>
                        {openOptions && <Options options={options} setOptions={setOptions}/>
                        }
                    </div>
                    <div className="headSearchItem">
                        <button className="headbtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>


                </>}

            </div>

        </div>
     );
}
 
export default Header;