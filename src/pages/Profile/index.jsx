import React from "react"
import styles from './Profile.module.scss'

function Profile() {
    const [user, setUser] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        function handleFetchUser() {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(userResult => setUser(userResult))
                .finally(() => setLoading(false))
        }
        handleFetchUser()
    }, [])

    return (
        <div className={styles.profileWrapper}>
            <header className={styles.title}>Profile Card</header>
            {loading ? (
                <div className={styles.loader}></div>
            ) : (
                <div className={styles.info}>
                    <div className={styles.image}>
                        <img src="https://st2.depositphotos.com/1001094/11036/i/450/depositphotos_110364304-stock-photo-black-white-portrait-of-young.jpg" />
                    </div>
                    <div className={styles.detail}>
                        <p>
                            <label>Name:&nbsp;</label>
                            {user.name}
                        </p>
                        <p>
                            <label>Username:&nbsp;</label>
                            {user.username}
                        </p>
                        <p>
                            <label>Email:&nbsp;</label>
                            {user.email}
                        </p>
                        <p>
                            <label>Company:&nbsp;</label>
                            {user.company.name}
                        </p>
                        <p>
                            <label>Phone:&nbsp;</label>
                            {user.phone}
                        </p>
                        <p>
                            <label>Address:&nbsp;</label>
                            {`${user.address.suite} ${user.address.street} ${user.address.city}`}
                        </p>
                        <p>
                            <label>Website:&nbsp;</label>
                            {user.website}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile