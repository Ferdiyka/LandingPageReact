import { Carousel } from 'react-carousel-minimal';
import './style.css'
import './styleform.css'
import bg1 from '../image/icon-1.png';
import bg2 from '../image/icon-2.png';
import bg3 from '../image/icon-3.png';

function App() {
 const data = [
    {
      image: "https://i.ibb.co/vc2RTxy/bg.jpg",
      caption: "Welcome to our Landing Page"
    },
    {
      image: "https://i.ibb.co/VQ1yzXJ/about-bg.jpg",
      caption: "We are the BEST team for making Website"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  return (
    <div className="App2">
        <br></br>
      <div style={{ textAlign: "center"}}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="100%"
            height="650px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "650px",
              margin: "100px auto",
            }}
          />
        </div>
      </div>
      <div class="container2">

    <h1 class="heading">Our Services</h1>

    <div class="box-container2">

        <div class="box">
            <h3>HTML 5</h3>
            <img src={bg1} alt="bg" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <h3>CSS 3</h3>
            <img src={bg2} alt="bg" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <h3>JavaScript</h3>
            <img src={bg3} alt="bg" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
            <a href="#" class="btn">read more</a>
        </div>


    </div>
    <h1 class="heading2">Contact Us</h1>
</div>

<div class="form"><div class="wrapper">

        <form action="" method="post">
            <div class="form-group">
            <input 
                    type='text'
                    placeholder='Masukkan Nomor Telp'
                    required/>
                <label for="">Full Name</label>
            </div>
            <div class="form-group">
            <input 
                    type='text'
                    placeholder='Masukkan Nomor Telp'
                    required/>
                <label for="">Email Address</label>
            </div>
            <div class="form-group">
            <input 
                    type='text'
                    placeholder='Masukkan Nomor Telp'
                    required/>
                <label for="">Message</label>
                <textarea name="" id="" rows="5" placeholder="Type your message here..."></textarea>
            </div>

            <div class="form-group">
                <button type="submit" class="submit">Send Message</button>
            </div>
        </form>
    </div>

    <div class="footer">
    <div class="footer-content">
            <h3>Fernanda Andyka Putra</h3>
            <p>@ Copyright 2023</p>
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;
