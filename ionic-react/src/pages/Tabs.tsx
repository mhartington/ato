import React from 'react';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { flash, apps, send } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Details from './Details';
export default function Tabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          exact={true}
          path="/tabs"
          render={() => <Redirect to="/tabs/tab1" />}
        />
        <Route path="/tabs/tab1" component={Tab1} exact={true} />
        <Route path="/tabs/tab2" component={Tab2} exact={true} />
        <Route path="/tabs/tab2/details" component={Details} />
        <Route path="/tabs/tab3" component={Tab3} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={flash} />
          <IonLabel>Tab One</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={apps} />
          <IonLabel>Tab Two</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={send} />
          <IonLabel>Tab Three</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
