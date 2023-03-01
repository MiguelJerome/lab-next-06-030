import Image from 'next/image'

import styles from '../styles/Gallerie.module.css'

export default function Gallerie({images}) {
    /*
        [
            {src: '...', alt: '...', width: 123, height: 123},
            ...
        ]
    */

    return <div className={styles.gallerie}>
        {images.map((imgData, index) => 
            <Image 
                src={imgData.src} 
                alt={imgData.alt} 
                width={imgData.width}
                height={imgData.height}
                key={index} />
        )}
    </div>
}