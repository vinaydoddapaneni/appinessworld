import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

// console.log(Data)
function Dashboard() {
    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setData(res.data))
            .catch(error => console.error(error))
    })
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(list => {
                        return (
                            <div className="card ml-2 mb-2" style={{ width: '18rem' }} key={list.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{list.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{list.email}</h6>
                                    <p className="card-text">
                                        {list.company.catchPhrase + list.company.bs}
                                    </p>
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard
