import { useState } from "react";
import styles from "../styles/styles.module.css"
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function Login() {
    const [viewPass, setViewPass] = useState(false)
    const handleViewPass = ()=>{
        setViewPass(!viewPass)
    }
    return (
        <div className={styles.container}>
            <div className={styles.containerForms}>
                <h1>sistema  <span>faiklogin</span></h1>
                <form action="" className={styles.containerInputs}>
                    <label htmlFor="">username:</label>
                    <input type="text" />
                    <label htmlFor="">password:</label>
                    <div>
                        <input type="text" />
                        {viewPass ? <IoEyeOff className={styles.icon} onClick={()=>{
                            handleViewPass()
                        }} /> : <IoEye className={styles.icon} onClick={()=>{
                            handleViewPass()
                        }}/>}
                    </div>
                    <button>login</button>
                    <button>signin</button>
                </form>
            </div>
        </div>
    )
}