import React from 'react';
import { deleteTech } from '../../actions/techActions';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({tech,deleteTech}) => {
    const delTech = () =>{
        deleteTech(tech.id);
        M.toast({html:'Successfully deleted'});
    }
    return ( 
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondry-content"
                onClick={delTech}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
     );
}
 
export default connect(null, {deleteTech})(TechItem);