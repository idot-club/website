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
          <SocialMediaIcons />
    			<p>Copyright © 2020 Innovative Designers of Tomorrow. All rights reserved.</p>
    		</div>
        <div className={styles.footerGraphicWrapper}>
          <img src="/img/footer-graphic.svg" alt="" className={styles.footerGraphic} />
        </div>
    	</footer>
    </div>
  );
};

function SocialMediaIcons() {
  return (
    <div className={styles.socialMediaIcons}>
      <a href="https://www.instagram.com/idot.club/" target="_blank">
        <span className={styles.socialMediaIcon}>
          <img src="/img/social-instagram.svg" alt="Instagram icon" title="Instagram" />
        </span>
      </a>
      <a href="http://facebook.com/idotclubFB" target="_blank">
        <span className={styles.socialMediaIcon}>
          <img src="/img/social-facebook.svg" alt="Facebook icon" title="Facebook" />
        </span>
      </a>
      <a href="http://linkedin.com/company/idotclub" target="_blank">
        <span className={styles.socialMediaIcon}>
          <img src="/img/social-linkedin.svg" alt="LinkedIn icon" title="LinkedIn" />
        </span>
      </a>
      <a href="https://twitter.com/IDOTclub" target="_blank">
        <span className={styles.socialMediaIcon}>
          <img src="/img/social-twitter.svg" alt="Twitter icon" title="Twitter" />
        </span>
      </a>
      <a href="http://medium.com/@IDOTclub" target="_blank">
        <span className={styles.socialMediaIcon}>
          <img src="/img/social-medium.svg" alt="Medium icon" title="Medium" />
        </span>
      </a>
    </div>
  );
}
