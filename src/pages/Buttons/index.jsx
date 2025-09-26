import Button from '../../components/Button'
import styles from './Buttons.module.scss'

function Buttons() {
    return <div className={styles.buttonsWrapper}>
        <div className={styles.buttonTypes}>
            <h3>Basic button: </h3>
            <Button onClick={() => console.log('Clicked!')}>Click me!</Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Primary button: </h3>
            <Button primary>Click me!</Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Link button: </h3>
            <Button href="https://google.com" target="_blank">Go to Google</Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Button with sizes: </h3>
            <div className={styles.buttons}>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
            </div>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Button with variants: </h3>
            <div className={styles.buttons}>
                <Button bordered>Bordered</Button>
                <Button rounded>Rounded</Button>
                <Button primary rounded>Primary Rounded</Button>
            </div>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Alert button: </h3>
            <Button onClick={() => alert('Clicked!')}>Click Alert</Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Disable button: </h3>
            <Button href={'/'} disabled onClick={() => alert('Should not show')}>
                Disabled Button
            </Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Loading button: </h3>
            <Button loading onClick={() => console.log('Should not log')}>
                Loading Button
            </Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Custom button: </h3>
            <Button className={styles.blue} primary>
                Custom Styled
            </Button>
        </div>

        <div className={styles.buttonTypes}>
            <h3>Button with icon: </h3>
            <Button primary><span>📧</span> Send Email</Button>
        </div>
    </div>
}

export default Buttons