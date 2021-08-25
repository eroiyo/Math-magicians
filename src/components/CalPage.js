import './Css/CalPage.css'
import Calculator from './Calculator/Calculator';

const CalPage = () => {
  return (
    <div id="CalPage">
      <div class="first"><h1>Lets do some Math!</h1></div>
      <div class="second"><Calculator /></div>
    </div>
  );
};
export default CalPage;