import {IonCard, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText} from '@ionic/react';
import './Tab3.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
      <>
          <IonPage>
              <Header name="Contact Us"/>
              <IonContent>
                  <IonCard>
                      <IonGrid>
                          <IonRow>
                              <IonCol><IonText> Phone No. </IonText></IonCol>
                              <IonCol><IonText> 03xxxxxxxxx </IonText></IonCol>
                          </IonRow>
                          <IonRow>
                              <IonCol><IonText>  Email </IonText></IonCol>
                              <IonCol><IonText> Support@xxx.com </IonText></IonCol>
                          </IonRow>
                          <IonRow>
                              <IonCol><IonText>  Address </IonText></IonCol>
                              <IonCol><IonText> xxxxxxxxxxxxxxxxxxxxxx </IonText></IonCol>
                          </IonRow>
                      </IonGrid>
                  </IonCard>
              </IonContent>
              <Footer/>
          </IonPage>
      </>
  );
};

export default ContactUs;