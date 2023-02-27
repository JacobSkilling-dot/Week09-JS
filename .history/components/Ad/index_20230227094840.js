import { useState } from "react"
import styles from './Ad.module.css'

export default function Ad() {

    const [popup, setPopup] = useState(true);
    
    return(
        <>

        {
        popup ?
        <div className={styles.container}>
            <div>
                <div></div>

            </div>
        </div>
        : <></>
    } 
    </>
    )
}