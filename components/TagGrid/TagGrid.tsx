import styles from './TagGrid.module.scss'
import Tag from '@components/Tag/Tag'

export default function TagGrid({ data }) {
    return (
        <div className={styles['tag-grid']}>
            {data.map((tag, index) =>
                <Tag key={tag.name + "-" + index} name={tag.name} size={tag.size} type={tag.type} />)}
        </div>
    )
}