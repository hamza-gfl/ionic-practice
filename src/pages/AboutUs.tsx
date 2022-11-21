import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonPage,
    IonText,

} from '@ionic/react';
import './Tab2.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <IonPage>
        <Header name="About us"/>
      <IonContent>
          <IonCard>
              <IonCardHeader>
                  <IonCardTitle>
                      We are a IT firm.
                  </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                  <IonText> We can help you develop Your Applications. </IonText>
              </IonCardContent>
          </IonCard>
      </IonContent>
        <Footer/>
    </IonPage>
  );
};

export default AboutUs;
