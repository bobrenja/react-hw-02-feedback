import Feedback from "./Feedback/Feedback";
import css from "./app.module.css"

export const App = () => {
  return (
    <div className={css.project}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >

      <Feedback/>
    </div>




  );
};
