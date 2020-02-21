
import React from 'react';
import compareChanges from './util/compareChanges';

export default class PureDebug extends React.Component {



  __pureDebugRenderCount = 0

  shouldComponentUpdate(nextProps, nextState){
 
    const changes = compareChanges(this.props, nextProps, this.state, nextState);
    const className = this.constructor.name;
    if(changes.length) {
      console.log(`The component "${className}" times will render because :`);
      changes.forEach(change => {
        const icon = change.isSameValue ? "❌" : "✅";
        const info = change.isSameValue ? " without a real change, you should fix it" : ""
        console.log(`   ${icon} ${change.type} "${change.name}"${info}`);
      })
      console.log(`   Re-render count : ${this.__pureDebugRenderCount}`);
      console.log('')
    }

    if(changes.length > 0) {
      this.__pureDebugRenderCount++
      return true
    }
    return false
  }


  render() {
    return this.props.children || null;
  }



}