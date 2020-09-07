import Divider from './Divider';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className="container gridPadding">
        <Divider color="lightGold" />
      </div>
      <footer className={styles.footer}>
        <div className="container gridPadding">
    			Copyright © 2020 Innovative Designers of Tomorrow. All rights reserved.
    		</div>
        <div className={styles.footerGraphicWrapper}>
          <img src="/img/footer-graphic.svg" alt="" className={styles.footerGraphic} />
        </div>
    	</footer>
    </div>
  );
};
