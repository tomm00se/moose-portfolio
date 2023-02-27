import Styles from "../components/Layout.module.css";

const Layout = () => {
  return (
    <div className={Styles.layout}>
      <div className={Styles.header__container}>
        <div className={Styles.header__name}>
          <h1>Moose.</h1>
        </div>
        <div className={Styles.navbar__container}>
          <ul className={Styles.navbar__parent}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={Styles.empty}></div>
      </div>
      <div className={Styles.profile__container}>
        <img
          className={Styles.profile__image}
          src="/tommy_bowden.png"
          alt="image of me"
        />
        <div className={Styles.profile__textblock}>
          <h1 className={Styles.profile__title}>Tommy Bowden</h1>
          <p className={Styles.profile__tagline}>Software Engineer @ xDesign</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
