import styles from "./Tag.module.scss";

export default function Tag({ name, size, type }) {
    const tagClasses = `${styles["tag"]} ${styles[`--size-${size}`]} ${styles[`--type-${type}`]}`;

    return (
        <div>
            <div className={tagClasses}>{name}</div>
        </div>
    );
}
