import React, {PureComponent} from "react";
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelopeOpenText)

class Footer extends PureComponent {
  render(){
    return (
      <div className="text-center">
        <p>&copy; 2019, Translational Research Laboratory, Boston Children's Hospital.</p>
        <p>All rights reserved.</p>
        <p>Technical Support: Lingyu Zhou <a href="mailto:lingyu.zhou@cardio.chboston.org"><FontAwesomeIcon icon="envelope-open-text"/></a></p>
      </div>
    );
  }
}

export default Footer;
