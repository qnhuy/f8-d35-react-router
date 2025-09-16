import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({
    children,
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    loading = false,
    href,
    size,
    className,
    ...passProps
}) {

    const classNames = clsx(styles.button, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    })

    if (loading) {
        children = <span className={styles.loader}></span>
    }

    const Component = href ? 'a' : 'button'

    return (
        <Component {...passProps} href={href} className={classNames}>
            {children}
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
}

export default Button