import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'green'}}>{name} Left!</h1>
}

//by defining message here, it is passed automatically if we pass
//components as children. otherwise we would have had 
const RightHandComponent = ({ message }) => {
  return <p style={{backgroundColor: 'red'}}>{message} Right!</p>
}


function App() {
  return (
    <SplitScreen 
      //left={LeftHandComponent} 
      //right={RightHandComponent}
      leftWeight={1}// will make left 1/3 size of right
      rightWeight={3}
      >
        <LeftHandComponent name="Shaun"/>
        <RightHandComponent message="Hello"/>
      </SplitScreen>
  );
}

export default App;
