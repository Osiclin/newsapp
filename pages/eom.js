import React, { useEffect, useState } from "react"
import styles from '../styles/Eom.module.css'
import Image from 'next/image'

export default function Oem() {
    const [employee, setEmployee] = useState()

    useEffect(() => {
        let mounted = true

        fetch('/api/eom')
        .then(res => res.json())
        .then(data => {
            if (mounted) {
                setEmployee(data)
            }
            console.log(data)
            console.log(employee.name)
        })
        .catch(err => console.log(err))
        
        return () => mounted = false
    }, [])

    return(
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <h3>Employee Of The Month 🎉</h3>
                <h4 className={styles.name}>osita ezeigbo</h4>
                <p className={styles.position}>Frontend Developer</p>
                <Image className={styles.eompics} src="https://pbs.twimg.com/profile_images/1339476289682624513/gArGIAEP_400x400.jpg" loading="eager" layout="responsive" alt="employer of the month" width={200} height={200}/>
                <p>Dev guy</p>
            </div>
        </main>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch('/api/eom')
//     const employee = await res.json()
//     console.log(employee)
//     return{
//         props: {
//             employee
//         }
//     }
// }