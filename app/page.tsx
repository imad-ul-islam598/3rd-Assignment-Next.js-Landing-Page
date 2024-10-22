import Header from './Components/Header';
import HomeSection from './Components/Home';
import AboutSection from './Components/About';
import CoursesSection from './Components/Courses';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
