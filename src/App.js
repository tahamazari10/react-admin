import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin'
import { UserList, UserCreate } from './components/users';
import { PostList, PostCreate } from './components/posts';
import Dashboard from './components/dashboard';
import firebaseConfig from "./firebase";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

const options = {};
 
const authProvider = FirebaseAuthProvider(firebaseConfig, options);
const dataProvider = FirebaseDataProvider(firebaseConfig, options);

class App extends React.Component {
  render(){
    return(
      <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate} />
        <Resource name="users" list={UserList} edit={EditGuesser} create={UserCreate} />
      </Admin>
    )
  }
}

export default App;