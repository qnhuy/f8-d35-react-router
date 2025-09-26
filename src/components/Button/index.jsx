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
    onClick = () => { },
    ...passProps
}) {
    const classNames = clsx(styles.button, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [`${styles.loading} ${styles.disabled}`]: loading,
    })

    if (loading) {
        const a = {
            [styles.primary]: primary,
            [styles.rounded]: rounded,
            [styles.bordered]: bordered,
            [styles.disabled]: disabled,
            [`${styles.loading} ${styles.disabled}`]: loading,
        }
        console.log(a)
        children = <span className={styles.loader}></span>
    }

    let Component, tabIndex, ariaDisabled
    if (href) {
        Component = 'a'
        tabIndex = -1
        ariaDisabled = true
    } else {
        Component = 'button'
    }

    return (
        <Component
            {...passProps}
            href={href}
            className={classNames}
            tabIndex={tabIndex}
            aria-disabled={ariaDisabled}
            onClick={e => {
                if (disabled || loading) {
                    e.preventDefault()
                    e.stopPropagation()
                } else {
                    onClick()
                }
            }}
        >
            {children}
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button