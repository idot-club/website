import Layout from './components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

export default function Programs() {
  return (
    <Layout>
      <div className="container">
        <Grid fluid>
          <h1>Our community is composed of student-led high school chapters that learn design through four pillars: <strong>Curriculum</strong>, <strong>Industry Exposure</strong>, <strong>Project Mentorship</strong>, and <strong>Competition</strong>.</h1>

          <Row>
            <Col xs={12} md={4}>
              <img src="/img/curriculum-icon.png" />
              <h2>Curriculum</h2>
              <p className="largeText">
                Chapter members follow 11 weeks of activity-based lessons about design skills and tools.
              </p>
            </Col>
            <Col xs={12} md={8}>
              <p>
                Our curriculum is made up of 12 modules, sorted into two sections: <strong>Methodology</strong> and <strong>Technology</strong>. Each module takes roughly 1.5 hours to complete, and consists of detailed notes, a slidedeck, interactive activities, and other assorted components for students to learn from. Chapter leads are able to direct club meetings be reading from the provided notes — they cover everything needed to 'teach' each module, no prior knowledge necessary. 
              </p>
              <Row>
                <Col xs={12} md={6}>
                  <p>
                    The <strong>Methodology</strong> section covers the <strong>soft skills</strong> of the design process. These topics include identifying problems, how to create inclusive design, conducting user research, and more. They are the most <strong>versatile</strong> part of the curriculum, and can be applied to almost every discipline, career, or project, not just design! 
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <p>
                    The <strong>Technology</strong> section teaches more <strong>hard skills</strong> related to design. Specifically, this Fall's curriculum teaches <a href="https://www.figma.com/" target="_blank">Figma</a> — a free-to-use collaborative design software. Though it's often used for product design, it can be used for tons of different applications, from whiteboarding to illustration to publication design. This section is very <strong>activity-based</strong>, and gives students a change to see Methodology in action! 
                  </p>
                </Col>
              </Row>
              <p>
                For questions regarding curriculum or requests for module samples, please contact:
                <ul>
                  <li>Phi (Director of Education, Visual Design) at **phi@idot-club.org**</li>
                  <li>Katrina (Directors of Education, Human-Centered Design) at **katrina@idot-club.org</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </Layout>
  );
};
