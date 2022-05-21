import React, { useState, useEffect } from "react"
import "./home.css"
import axios from 'axios'


const Home = () => {

    const [info, setInfo] = useState([]);

    const [data, setData] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [role, setRole] = useState([]);
    const [experience, setExperience] = useState([]);


    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json").then((res) => {
            console.log(res.data)
            setInfo(res.data.data)
            setData(res.data.data)
            setTechnology(res.data.technology)
            setRole(res.data.role)
            setExperience(res.data.experience)
        })

    }




    const handleTech = (e) => {
        let da = info.filter((d) => d.technology.includes(e.target.value));
        //console.log(da)
        setData(da)
    }

    const handleRole = (e) => {
        //console.log(data)

        setData(info.filter((d) => d.role == e.target.value))
    }


    const handleExp = (e) => {
        //console.log(data)

        setData(info.filter((d) => d.experience == e.target.value))
    }


    return (
        <div>
            <div className="nav">
                <select onChange={(e) => handleTech(e)}>
                    {technology.map((e, i) => {
                        return (
                            <option key={i} value={e}>{e}</option>
                        )
                    })}
                </select>
                <select onChange={(e) => handleRole(e)}>
                    {role.map((e, i) => {
                        return (
                            <option key={i} value={e}>{e}</option>
                        )
                    })}
                </select>
                <select onChange={(e) => handleExp(e)}>
                    {experience.map((e, i) => {
                        return (
                            <option key={i} value={e}>{e}</option>
                        )
                    })}
                </select>
            </div>
            <div id="body">
                {   data.length>0 ?
                    data.map((e, i) => {
                        return (
                            <div className="card-div">
                                <div className="cards" key={i}>
                                    <img src={e.logo} alt="logo" />
                                    <h1>{e.company}</h1>
                                    <h2>Position - {e.position}</h2>
                                    <h2>Role - {e.role}</h2>
                                    <h2>Location - {e.location}</h2>
                                    <h2>CTC - {e.ctc} LPA</h2>
                                    <h2>We are looking for {e.experience}</h2>
                                    <p>{e.about}</p>
                                    <p>{e.description}</p>
                                </div>
                            </div>

                        )
                    }):
                    <div>No Jobs found</div>
                }
            </div>
        </div>
    )
}

export { Home }