import React from "react"
import styles from './Products.module.scss'

function Products() {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [productModal, setProductModal] = React.useState(false)


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            .then(response => response.json())
            .then(products => setProducts(products))
            .finally(() => setLoading(false))
    }, [])

    function truncateWords(text, limit = 90) {
        if (text.length <= limit) return text

        const words = text.split(/\s+/)
        let result = ""

        for (let word of words) {
            if ((result + word).length > limit) break
            result += (result ? " " : "") + word
        }

        return result + "..."
    }

    return (
        <div className={styles.productsWrapper}>
            <header className={styles.header}>Product List</header>
            {loading ? (
                <div className={styles.loaderBox}>
                    <span className={styles.loader}></span>
                </div>
            ) : (
                <ul className={styles.productList}>
                    {products.map(product => (
                        <li key={product.id} className={styles.productItem}>
                            <h3 className={styles.productHeader}>
                                #{product.id}&nbsp;
                                <span>{product.title}</span>
                            </h3>
                            <div className={styles.productBody}>
                                {truncateWords(product.body)}
                            </div>
                            <button className={styles.productBtn} onClick={() => setProductModal(product)}>
                                See more
                            </button>
                        </li>
                    ))}
                    {productModal && (
                        <div className={styles.modalOverlay} onClick={() => setProductModal(false)}>
                            <div className={styles.modalBody}>
                                <p className={styles.modalProductTitle}>#{productModal.id} {productModal.title}</p>
                                <p className={styles.modalProductBody}>{productModal.body}</p>
                                <button className={styles.modalClose} onClick={() => setProductModal(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </ul>
            )}
        </div>
    )

}

export default Products