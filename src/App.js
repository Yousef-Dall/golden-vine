// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Welcome from './components/welcome';
import About from './components/about/idex';
import "@fontsource/dancing-script";
import Card from './components/card';
// import Appp from './components/ele3/ele3';
import Title from './components/titles';
import Item from './components/item';
import Stripe from './components/stripe';
import Readmore from './components/read-more-button';
import Infocard from './components/infocard';
// import Star from './components/star';
import Reviewer from './components/reviewer';
import Blog from './components/blog';
import Footer from './components/footer';
import Sub from './components/subscribe';
import Copy from './components/copy';
function App() {
  return (
    <div className="App">
      <section id = "section-one">
      <div>
      <Menu />
      </div>
      <div>
      <Welcome />
      </div>
      </section>
      <section id='section-two'>
      <About sec = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque." link = "./imgs/Untitled.png" Children={<Title title = "About Us" para = "Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine" />} />

      
      <Title title = "Special" para = "What makes us special" />
      <div class = "cards">
      <Card clink = "./imgs/oran.png" ctitle="Fresh food" cdisc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>

      <Card clink = "./imgs/chef.png" ctitle="skilled Chef" cdisc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>

      <Card clink = "./imgs/resta.png" ctitle="Exotic dishes" cdisc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
      </div>

      <Title title = "Straight From Kitchen" para = "Our Menu" />
      
      <div class = "meni">
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>
      <Item imig="./imgs/one.png" iname="Lorem ipsum dolor sit amet" idisc ="Lorem ipsum dolor sit amet" iprice="Rs 222"/>

      </div>
      <div class = "stripes">
        <Stripe />
        <div class = "book">
        <Title class = "cen" title = "Come join us for a lunch this weekend and enjoy" para = "FLAT 10% OFF" />
        <Readmore rtext = "Book Table" />
        </div>
        <Stripe />
      </div>

      <About sec = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit." link = "./imgs/Rec.png" Children={ <Title title = "Cooking ingredients" para = "What goes in" />} />


      <div class = "infos">

      <Infocard iclink = "./imgs/dish 1.png" icnum = "250+" icdis = "Delicacy" />
      <Infocard iclink = "./imgs/chef (1) 1.png" icnum = "10+" icdis = "renowed chefs" />
      <Infocard iclink = "./imgs/team 1.png" icnum = "30+" icdis = "Members" />


      </div>

      <Title title = "Reviews" para = "words from our food lovers" />

      <Reviewer reviewerimg = "./imgs/Ellipse 1.png" reviewername = "Alex andrina" reviewtext = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>

      <Title title = "Blogs" para = "words from our food lovers" />

      <div class = "blogs">

      <Blog btitle ="Cooking Dining Experience" bdis ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin " bimg = "./imgs/hcmp33562_1459402 (1).png"/>
      <Blog btitle ="Cooking Dining Experience" bdis ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin " bimg = "./imgs/DirtCandy-0242 (1).png"/>
      <Blog btitle ="Cooking Dining Experience" bdis ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin " bimg = "./imgs/unsplash_ThLVnKdeH1k (1).png"/>

      </div>

      <Footer />

      <Sub />

      <Copy />




      </section>


    </div>
  );
}

export default App;
//