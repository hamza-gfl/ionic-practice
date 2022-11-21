import './ExploreContainer.css';
import {
    InputChangeEventDetail,
    IonButton,
    IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
} from "@ionic/react";
import {useState} from "react";
import {calculatorOutline, refreshOutline} from "ionicons/icons"

interface ContainerProps {
  name: string;
}

const BmiCalculator: React.FC = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bodyMass, setBodyMass] = useState<number | null>(null);
    const calculateBMI = () =>
        setBodyMass(Number((Number(weight) / Number(height)).toFixed(2)))
    const updateHeight = (e: CustomEvent<InputChangeEventDetail>) => setHeight(e.detail.value ? e.detail.value : "" );
    const updateWeight= (e: CustomEvent<InputChangeEventDetail>) => setWeight(e.detail.value ? e.detail.value : "" );
    const resetForm = () => {
        setHeight("");
        setWeight("");
        setBodyMass(null);
    }

    return (
      <>
          <IonList>
              <IonItem>
                  <IonLabel position="floating">Enter Height</IonLabel>
                  <IonInput value={height} onIonChange={(e) => updateHeight(e)} placeholder="Enter height here"/>
              </IonItem>
              <IonItem>
                  <IonLabel position="floating"> Enter Weight</IonLabel>
                  <IonInput onIonChange={(e) => updateWeight(e)} value={weight} placeholder="Enter weight here"/>
              </IonItem>
          </IonList>
          <IonGrid>
              <IonRow className="ion-margin-top">
                  <IonCol className="ion-text-center">
                      <IonButton onClick={calculateBMI}>
                          <IonIcon slot="start" icon={calculatorOutline} />
                          Calculate
                      </IonButton>
                  </IonCol>
                  <IonCol className="ion-text-center ion-align-items-center">
                      <IonButton onClick={resetForm}>
                          <IonIcon slot="start" icon={refreshOutline} />
                          Reset
                      </IonButton>
                  </IonCol>
              </IonRow>
          </IonGrid>
          {bodyMass && <IonCard>
              <IonCardHeader>
                  <IonCardSubtitle>Body Mass: {bodyMass}  </IonCardSubtitle>
              </IonCardHeader>
          </IonCard>}
      </>
  );
};

export default BmiCalculator;
