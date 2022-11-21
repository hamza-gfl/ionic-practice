import {IonContent, IonFooter, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';
import BmiCalculator from '../components/BmiCalculator';
import './Tab1.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
      <IonPage>
          <Header name="BMI Calculator"/>
          <IonContent>
              <BmiCalculator />
          </IonContent>
          <Footer/>
      </IonPage>
  );
};

export default Home;

