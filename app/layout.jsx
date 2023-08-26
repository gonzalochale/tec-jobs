
import "../styles/globals.css";
import Nav from "../components/Nav"
import Provider from "../components/Provider";

export const metadata = {
  title: "TecJobs",
  description: "TecJobs es una herramienta de codigo libre que comparte ofertas de trabajo disponibles para estudiantes del TECNM Cancún",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;