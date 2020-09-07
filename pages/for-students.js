import Link from 'next/link';
import Layout from './components/Layout';
import ColoredBox from './components/ColoredBox';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

export default function ForStudents() {
  return (
    <Layout>
      <div className='container'>
        <Grid fluid>

          <h1>For Students</h1>
          <h1>Start a Chapter at Your High School</h1>

          <p>
            Chapters make up the core of our organization; they are student-led, local organizations based within high schools that distribute our educational pillars to students. Chapters function like after-school clubs, and are intended to meet once a week (either in-person or virtually). 
          </p>

          <Row>
            <Col xs>
              <ColoredBox color='lightGold'>
                ✅ Chapter registration is <strong>open</strong>! We are currently accepting new chapters. 🎉
              </ColoredBox>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={4}>
              <h2>Interested? Here's how to get started.</h2>
            </Col>
            <Col sm={12} md={8}>
              <ColoredBox color='lightTeal'>
                <ol>
                  <li>
                    <strong>Join our Slack</strong> to stay updated and meet our board.
                    <p>
                      *This doesn't mean you <strong>must</strong> start a chapter, it's just for interest! To get the slack invite link, please <Link href="/about"><a>email one of the board members</a></Link>.
                    </p>
                  </li>
                  <li>
                    <strong>Read through our website</strong> and message us on Slack with any questions you have.
                  </li>
                  <li>
                    <strong>Find team members</strong> from your high school and introduce them to IDOT. <em>Invite them to the Slack as well!</em>
                  </li>
                  <li>
                    <strong>Have a call with the board</strong> to check-in with us once your team is in progress.
                  </li>
                  <li>
                    If necessary, identify an advisor and submit internal paperwork at your school.
                  </li>
                  <li>
                    <strong>Submit IDOT's chapter form</strong> and you're all set!
                  </li>
                </ol>
              </ColoredBox>
            </Col>
          </Row>

          <h1>FAQ</h1>
          <Row>
            <Col sm={12} md={4}>
              <h2>Have a question that’s not covered here? Reach out to us at ask@idot-club.org.</h2>
            </Col>
            <Col sm={12} md={8}>

            </Col>
          </Row>

          <h1>For Members</h1>
          <ColoredBox color="lightGold">
            <p className="largeText">
              Quick access links:
              <Link href="#"><a className="button">Curriculum Portal</a></Link>
              <Link href="#"><a className="button">Slack</a></Link>
            </p>
          </ColoredBox>

        </Grid>
      </div>
    </Layout>
  );
};
