import './App.css';
import { Col, Container, Row, Navbar, Card, Table, Carousel, CarouselItem } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="my-nav">
        <Navbar.Brand href="#home">
          Jack's Amazing Website!
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Carousel className="gallery">
          <CarouselItem>
            <img src="https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/11008/yiQqi7lwQFvkPlSad8S4XQAMUr1CXUK2yRJzGe7h.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aDGV1LWNlbnRyYWwtMSJGMEQCIFv3K4kfwR6dC8Tooct9eu8V%2BbYXxAW23%2BXGo%2BPFaqIxAiBBtKcwz%2BlDnajF1G5p1Jz4FtM%2BgRMOQgkszYuv%2BbMYjCriAQjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxOTUxNDQ5MTY3NCIM7a9G5EK2OiPAzFmiKrYBhAjFZr4wg9Y9N2ZThBMHxbZAECdUMMW2l%2Fn0hocnOdmWLYolZhcMbDoKLw88eyQr1y1Zt%2FkHLV7tA73stV7fxYJdWaJXrQxPcP1UDXCf3aHzjlP2lTGdhxnw5l7fqJqybT6n%2FPVWCQC8ffs7P2zdJMKHn1gKx9Jym9JBNVFOdkEv8sAzvzCWEPMU4ql%2BA%2F%2FjpB1iZTUj3ZDUk46Y96XX4ZbEvRlgVSGT5l02O9Hfjfvz0qRRf7swpqGegwY64QHWNHAIH0fWh8dih70Qv6HmQj7DNTsY7bmm43R9MjbY2HebbtemUNSfmHfhvuxKQ21wVsmvmYM7TOlk%2FRgLVEgfnYnuTraRhJzvt1wfguJjXYRcmGio45eCLZPICZ7%2Fn54ZuHMz4ij%2FtMoAxVaH9DjaiaT4SYpFslGVwN0bSHHpbs2p7uHEwWb0j567Tsbk4H63hG0gQn6treml1DuYROymwemS8kIuZBILL5EQQ2n%2FIwJJgam793iVec0ntkNxrkYsyTwuwF%2FfpUEeKvHpn9msQxt6pC0F0OUS%2Bo2l4iVO7A4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNIHZF55XX%2F20210402%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20210402T231459Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=562a722791e954a4c1a19cc6c6f598df2b97a32d9cbf917c0238b808b32a09b9" alt="BLAHAJ" />
            <Carousel.Caption>
              <h3>BLAHAJ</h3>
              <p>This is a BLAHAJ.</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src="https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/11008/viAftokHyfbw2f0Uugi1B0nWKugpulK5LQPTeS8n.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aDGV1LWNlbnRyYWwtMSJGMEQCIFv3K4kfwR6dC8Tooct9eu8V%2BbYXxAW23%2BXGo%2BPFaqIxAiBBtKcwz%2BlDnajF1G5p1Jz4FtM%2BgRMOQgkszYuv%2BbMYjCriAQjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxOTUxNDQ5MTY3NCIM7a9G5EK2OiPAzFmiKrYBhAjFZr4wg9Y9N2ZThBMHxbZAECdUMMW2l%2Fn0hocnOdmWLYolZhcMbDoKLw88eyQr1y1Zt%2FkHLV7tA73stV7fxYJdWaJXrQxPcP1UDXCf3aHzjlP2lTGdhxnw5l7fqJqybT6n%2FPVWCQC8ffs7P2zdJMKHn1gKx9Jym9JBNVFOdkEv8sAzvzCWEPMU4ql%2BA%2F%2FjpB1iZTUj3ZDUk46Y96XX4ZbEvRlgVSGT5l02O9Hfjfvz0qRRf7swpqGegwY64QHWNHAIH0fWh8dih70Qv6HmQj7DNTsY7bmm43R9MjbY2HebbtemUNSfmHfhvuxKQ21wVsmvmYM7TOlk%2FRgLVEgfnYnuTraRhJzvt1wfguJjXYRcmGio45eCLZPICZ7%2Fn54ZuHMz4ij%2FtMoAxVaH9DjaiaT4SYpFslGVwN0bSHHpbs2p7uHEwWb0j567Tsbk4H63hG0gQn6treml1DuYROymwemS8kIuZBILL5EQQ2n%2FIwJJgam793iVec0ntkNxrkYsyTwuwF%2FfpUEeKvHpn9msQxt6pC0F0OUS%2Bo2l4iVO7A4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNIHZF55XX%2F20210402%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20210402T231708Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=a7dce77c13d9d73b7e732b2899703cdd92a1217f11ad277c451bf026edbfe243" alt="BLAHAJ" />
            <Carousel.Caption>
              <h3>BLAHAJ</h3>
              <p>This is a BLAHAJ.</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src="https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/11008/cpmdHa4iGtRDgjJ3klrLK2lnT2SqfSP07ec5R6dS.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aDGV1LWNlbnRyYWwtMSJGMEQCIFv3K4kfwR6dC8Tooct9eu8V%2BbYXxAW23%2BXGo%2BPFaqIxAiBBtKcwz%2BlDnajF1G5p1Jz4FtM%2BgRMOQgkszYuv%2BbMYjCriAQjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxOTUxNDQ5MTY3NCIM7a9G5EK2OiPAzFmiKrYBhAjFZr4wg9Y9N2ZThBMHxbZAECdUMMW2l%2Fn0hocnOdmWLYolZhcMbDoKLw88eyQr1y1Zt%2FkHLV7tA73stV7fxYJdWaJXrQxPcP1UDXCf3aHzjlP2lTGdhxnw5l7fqJqybT6n%2FPVWCQC8ffs7P2zdJMKHn1gKx9Jym9JBNVFOdkEv8sAzvzCWEPMU4ql%2BA%2F%2FjpB1iZTUj3ZDUk46Y96XX4ZbEvRlgVSGT5l02O9Hfjfvz0qRRf7swpqGegwY64QHWNHAIH0fWh8dih70Qv6HmQj7DNTsY7bmm43R9MjbY2HebbtemUNSfmHfhvuxKQ21wVsmvmYM7TOlk%2FRgLVEgfnYnuTraRhJzvt1wfguJjXYRcmGio45eCLZPICZ7%2Fn54ZuHMz4ij%2FtMoAxVaH9DjaiaT4SYpFslGVwN0bSHHpbs2p7uHEwWb0j567Tsbk4H63hG0gQn6treml1DuYROymwemS8kIuZBILL5EQQ2n%2FIwJJgam793iVec0ntkNxrkYsyTwuwF%2FfpUEeKvHpn9msQxt6pC0F0OUS%2Bo2l4iVO7A4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNIHZF55XX%2F20210402%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20210402T231726Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=1b310a98d4f0502e3def5e557d42dc82cf112cb2434aa9d532d739acbefddd04" alt="BLAHAJ" />
            <Carousel.Caption>
              <h3>BLAHAJ</h3>
              <p>This is a BLAHAJ.</p>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        <Row>
          <Col xs={12} md={8}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus turpis, facilisis vitae dui convallis, hendrerit pretium magna. Pellentesque a ullamcorper lacus. Aliquam molestie eros purus, id hendrerit diam laoreet id. Integer ex leo, accumsan in neque vitae, varius tempor sem. Mauris nec imperdiet mi, id semper eros. Mauris finibus, urna id efficitur hendrerit, ligula nibh consectetur turpis, a lacinia neque odio vel orci. Nunc quis tellus tellus. Proin a elit quis diam hendrerit pretium. Morbi luctus finibus mauris vitae faucibus. In vitae nulla sagittis, tempus ante aliquam, eleifend felis. Etiam lobortis dolor vel velit fermentum tempus. Donec justo neque, luctus eu orci tempor, consectetur tincidunt sapien. Nunc maximus auctor venenatis. Proin aliquam erat quis pharetra dignissim. Aliquam semper magna a diam luctus, vel rutrum erat condimentum. Aenean cursus vel orci in euismod.</p>
            <p>Quisque nulla nibh, iaculis sit amet magna et, sagittis efficitur neque. Ut sed sem augue. Suspendisse malesuada odio nec ex lacinia gravida. Aliquam venenatis, dui quis porttitor tristique, diam lorem molestie risus, imperdiet fermentum eros leo vel sem. Praesent quam sem, commodo non congue non, condimentum sed elit. Curabitur ut urna lobortis, rhoncus erat nec, viverra erat. Nunc eget nulla vel dui ornare maximus. In facilisis tortor at turpis lacinia facilisis.</p>
            <p>Donec dignissim elit quis eros convallis, a elementum nunc fringilla. Nulla facilisi. Aenean eu feugiat neque. Nullam interdum sem eu diam ullamcorper vehicula. Integer varius, purus sed malesuada lobortis, nibh enim convallis nisi, non vestibulum lacus nibh sed velit. Cras maximus arcu sed metus fringilla volutpat. Vestibulum nec dolor et nunc vehicula rhoncus. Curabitur varius massa vel nunc porta blandit. Maecenas sollicitudin facilisis magna, nec efficitur odio dapibus at. Integer varius euismod erat, ut luctus lorem mollis a. Nulla facilisis tortor nec venenatis tincidunt. Phasellus mattis ultricies sapien, in eleifend velit aliquet a. Sed posuere egestas lacus et tincidunt. Mauris aliquet eros tristique metus semper, ut aliquet nisl posuere. Nam semper justo non nulla congue, vel faucibus nulla accumsan. Curabitur sem ex, tincidunt in ex in, sollicitudin fringilla odio.</p>
            <h1>LHD: Share's Top 3 Guilds!</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Guild Name</th>
                  <th>Points</th>
                  <th>Member</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>🦈 BLAHAJGang 🦈</td>
                  <td>10,841</td>
                  <td>381</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>EddieHub</td>
                  <td>6,212</td>
                  <td>278</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Developer Student Community	</td>
                  <td>4,948</td>
                  <td>248</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={4}>
            <Card className="ikea-ad">
              <Card.Body>
                <Card.Title>Buy a BLAHAJ</Card.Title>
                <Card.Subtitle className="mb-2">They are the best</Card.Subtitle>
                <img alt="blahaj" src="https://blahajgang.lol/assets/just-blahaj.png" />
                <Card.Text>
                  Ryan Swift is a huge fan of BLAHAJ and he really wants you to buy. If you don't he'll be sad. Also, 45k checkins pls.  
                </Card.Text>
                <Card.Link href="https://hackp.ac/blahaj">Buy from IKEA</Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Attend Local Hack Day</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Earn points pls</Card.Subtitle>
                <Card.Link href="https://lhd.mlh.io">Register</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;