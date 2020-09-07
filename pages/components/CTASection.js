import Link from 'next/link';
import Divider from './Divider';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import styles from './ctasection.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <Grid fluid>
          <Row>

            <Col xs={12} md={4}>
              <h2>Start a Chapter</h2>
              <p>
                If you’re a high school student, you can start a chapter at your school, or join an existing one starting in Fall 2020!
              </p>
              <Link href="/for-students"><a className="button">Learn More</a></Link>
            </Col>

            <Col xs={12} md={4}>
              <h2>Join Our Staff</h2>
              <p>
                We started as a team of students from UC Berkeley, but we’re looking to expand! Volunteer your time for our mission.
              </p>
              <Link href="/for-students"><a className="button">See Open Roles</a></Link>
            </Col>

            <Col xs={12} md={4}>
              <h2>More Ways to Help</h2>
              <p>
                We’d love to hear from voices in the design industry and education. Let’s discuss potential opportunities and partnerships.
              </p>
              <Link href="/for-students"><a className="button">Support Us</a></Link>
            </Col>

          </Row>
        </Grid>
      </div>
    </section>
  );
};
