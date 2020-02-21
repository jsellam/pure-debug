export default (thisProps, nextProps, thisState,nextState) => {
  const changes = [];

  if(thisProps !== nextProps) {
    for(let i in thisProps) {
      if(thisProps[i] !== nextProps[i]) {
        changes.push({
          type:'prop',
          currentValue: thisProps[i],
          nextValue:nextProps[i],
          name:i,
          isSameValue: JSON.stringify(thisProps[i]) === JSON.stringify(nextProps[i])
        })
      }
    }
  }
  if(thisState !== nextState) {
    for(let i in thisState) {
      if(thisState[i] !== nextState[i]){

        changes.push({
          type:'state',
          currentValue: thisState[i],
          nextValue:nextState[i],
          name:i,
          isSameValue: JSON.stringify(thisState[i]) === JSON.stringify(nextState[i])
        })
      } 
    }
  }

  return changes
}