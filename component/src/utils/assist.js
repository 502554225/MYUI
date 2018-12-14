export function oneOf(value,list) {
    list.forEach(item=>{
      if (value===item){
        return value
      }
      else
        return null
    })
}
export function findComponentsUpward(vm,componentsName) {
    let parent
    parent = vm.$parent
    let name = parent.$options.name
    while (parent && name!==componentsName){
      if(parent.$parent){
        parent=parent.$parent
        name = parent.$options.name
      }
    }
    return parent;

}
export function findComponentsDownward(vm,componentsName) {
  let childrens = vm.$children
  let child =[]
  childrens.forEach(item=>{
    if (item.$options.name===componentsName){
      child.push(item);
      return
    }
    
  })
  return child;
}
