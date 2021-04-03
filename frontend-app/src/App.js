import './App.css';
import { Col, Container, Row, Navbar, Card, Table, Carousel, CarouselItem } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="my-nav">
        <Navbar.Brand href="#home">
          Saad's Amazing Website!
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Carousel className="gallery">
          <CarouselItem>
            <img src="https://i.ebayimg.com/images/g/LZkAAOSw7eleI5xP/s-l400.jpg" alt="BLAHAJ" />
            <Carousel.Caption>
              <h3>BLAHAJ</h3>
              <p>This is a BLAHAJ.</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src="https://preview.redd.it/noaeglll67x51.jpg?auto=webp&s=b16be7f301f498c6512dfc57be62e3a55fc6efea" alt="BLAHAJ" />
            <Carousel.Caption>
              <h3>BLAHAJ</h3>
              <p>This is a BLAHAJ.</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src="https://i.pinimg.com/originals/34/1c/89/341c892ac8816a089bf9f251e2bfb4bd.jpg" alt="BLAHAJ" />
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