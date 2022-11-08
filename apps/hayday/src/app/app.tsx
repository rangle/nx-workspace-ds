// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Button } from 'libs/ui/src/index';

export function App() {
  return (
    <>
      <NxWelcome title="hayday" />
      <div />
      <Button id="test"/>
    </>
  );
}

export default App;
