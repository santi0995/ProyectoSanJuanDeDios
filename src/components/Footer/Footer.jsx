import React from "react";
import './Footer.scss';

function MyAppFooter() {
    return (
      <footer>
          <div className="footer">
              <div className="footerData">
                  <img className="logo" src="LIMA_CLINICA_Mesa-de-trabajo-1.png" alt="" />
                  <ul className="footerDataUl">
                      <li><img className="none" src="none.png" alt="" /> +1 (829) xxx-000</li>
                      <li><img className="none" src="none.png" alt="" /> xxxxxx22323@correo.com</li>
                      <li><img className="none" src="none.png" alt="" /> Gral. Pedro Díaz 3366, B1686 Hurlingham,</li>
                      <li className="nodisplay"><img className="noneNoDisplay" src="none.png" alt="" /> Provincia de Buenos Aires, Argentina.</li>
                  </ul>
              </div>
              <div>
                  <ul className="footerNetworks">
                    <li><img className="none" src="none.png" alt="" /></li>
                    <li><img className="none" src="none.png" alt="" /></li>
                    <li><img className="none" src="none.png" alt="" /></li>
                    <li><img className="none" src="none.png" alt="" /></li>
                    <li><img className="none" src="none.png" alt="" /></li>
                  </ul>
              </div>
          </div>
          <div className="copyright">
            <hr/>
            <h6>Todos los derechos reservados | Copyright © 2023</h6>
          </div>
      </footer>
    )
  }

export default MyAppFooter;