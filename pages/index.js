import Layout from './components/Layout';
import CTASection from './components/CTASection'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.introSection}>
        <div className="container gridPadding">
          <h1><strong>Innovative Designers of Tomorrow</strong> is a nonprofit committed to bringing accessible design education to high school students.</h1>
          <div className={styles.introVideoWrapper}>
            <iframe src="https://drive.google.com/file/d/1A5nvHcb4EAA6tb2QfzzlYmsMocHbD0B-/preview" className={styles.introVideo}></iframe>
          </div>
        </div>
      </section>

      <section className={styles.announcementSection}>
        <div className="container">
          <Grid fluid>
            <Row>
              <Col xs>
                <h1>Latest Announcement</h1>
              </Col>
              <Col xs>
                <div className={styles.announcement}>
                  <h2>Chapter Registration is Open</h2>
                  <p>We are accepting new chapters for Fall 2020.</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
      
      <div className="container">
        <Grid fluid>
          <h1>Our Pillars</h1>
          <Row className={styles.pillars}>
            <Col xs={6} md={3}>
              <img src="/img/curriculum-icon.png" alt="" />
              <h3>Curriculum</h3>
              <p>Chapter members follow 11 weeks of activity-based lessons about design skills and tools.</p>
            </Col>
            <Col xs={6} md={3}>
              <img src="/img/industry-exposure-icon.png" alt="" />
              <h3>Industry Exposure</h3>
              <p>Industry professionals introduce students to a unique and varied world of careers in design.</p>
            </Col>
            <Col xs={6} md={3}>
              <img src="/img/project-mentorship-icon.png" alt="" />
              <h3>Project Mentorship</h3>
              <p>IDOT mentors provide resources and 1-on-1 support for student-driven passion projects.</p>
            </Col>
            <Col xs={6} md={3}>
              <img src="/img/competition-icon.png" alt="" />
              <h3>Competition</h3>
              <p>Students inspire and get inspired by their peers through design challenges.</p>
            </Col>
          </Row>
        </Grid>
      </div>


      <div className="container">
        <Grid fluid>
          <Row>
            <CTASection />
          </Row>
        </Grid>
      </div>
    </Layout>
  );
};
