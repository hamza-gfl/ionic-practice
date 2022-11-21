import React from 'react'
import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";
interface iHeaderProps {
    name: string;
}

const Header: React.FC<iHeaderProps> = ({name}) => {
    return <IonHeader className="ion-padding-top">
        <IonToolbar>
            <IonTitle size="large"> {name} </IonTitle>
        </IonToolbar>
    </IonHeader>
}

export default Header;