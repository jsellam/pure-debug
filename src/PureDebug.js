import React from 'React';
import compareChanges from './util/compareChanges';

export default class PureDebug extends React.Component {



  shouldComponentUpdate(nextProps, nextState){
    const changes = compareChanges(this.props, nextProps, this.state, nextState);
    const className = this.constructor.name;
    if(changes.length) {
      console.log(`The component ${className} will render because :`);
      changes.forEach(change => {
        const icon = change.isSameValue ? "❌" : "✅";
        const info = change.isSameValue ? " without a real change, you should fix it" : ""
        console.log(`   ${icon} ${change.type} ${change.name}${info}`);
      })
    }
    return changes.length > 0
  }



}