import Layout from './components/Layout';
import CTASection from './components/CTASection';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

export default function About() {
  return (
    <Layout>
      <div className="container">
        <Grid fluid>
          <h1>IDOT was founded by a team of UC Berkeley students to give high school students opportunities to <strong>learn</strong> and <strong>explore</strong> design.</h1>

          <Row>

            <Col xs={12} md={4}>
              <h2>Mission</h2>
              <p className="largeText">
                IDOT is dedicated to providing accessible design education to high school students.
              </p>
              <h2>Founded</h2>
              <p className="largeText">April 2020</p>
              <h2>Schools Reached</h2>
              <p className="largeText">TK</p>
            </Col>

            <Col xs={12} md={8}>
              <h2>Our Story</h2>
                <p>
                  When the creators of IDOT were in high school, we didn’t have access to design courses or resources. After discovering, studying, and embracing design in college, we want to lower the barrier of entry into design by bringing comprehensive and empathetic design education to high schools in a student-driven, club-based format.
                </p>
                <p>
                  In short — we are making something we wish we'd had when we were high school students.
                </p>
                <p>
                  We strive to create the largest pre-collegiate network of student designers, providing a platform for design to become accessible to everyone. From engineers to journalists, design thinking enables people to solve real, human problems. IDOT hopes to empower the next generation with tools to bring any ideas to life.
                </p>
            </Col>

          </Row>
          
          <h1>Team</h1>
        </Grid>
      </div>
      <CTASection />
    </Layout>
  );
};

