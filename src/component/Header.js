// import "./styles.css";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Hello! I'm Mo!</h1>
        <h2>Front-end Developer</h2>
      </div>
      <div className={styles.avatar}>
        <img
          alt="avatar"
          src="https://img.meta.com.vn/Data/image/2021/07/29/sinh-nhat-doraemon-12.jpg"
        />
      </div>
    </div>
  );
};
export default Header;
