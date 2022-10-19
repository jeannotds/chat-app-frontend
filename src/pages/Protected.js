import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Protected = () => {

    let navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:3005/api/auth/protected', {
            headers : {
                Authorization: token
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
            navigate('/')
        })
    }, [])

    return(
        <div>
           <h1>Protected</h1>
        </div>
    )
}

export default Protected