// import './comp1.scss' //这种属于全局引入，会对其他组件造成影响。如Comp2中没有引入comp1.scss，里面的文字也会变红色

//模块化样式引入，不会对其他模块造成影响。scss必须以xxx.module.scss命名，否则找不到里面的类选择器
import styles from './comp1.module.scss'

function Comp1() {

    return (
        <div className={styles.box}>
            <p>这是Comp1里面的内容</p>
        </div>
    )
}

export default Comp1