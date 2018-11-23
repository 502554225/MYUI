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
    if (parent && name!==componentsName){
      parent=parent.$parent
      findComponentsUpward(parent,componentsName)
    }

  return parent;
}
export function findComponentsDownward(vm,componentsName) {
  let childrens = vm.$children
  let child =[]
  childrens.forEach(item=>{
    console.log('name',item.$options.name)
    if (item.$options.name===componentsName){
      child.push(item);
      return
    }
  })
  return child;
}
