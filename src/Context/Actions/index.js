/**
 * 用法: 於App.js的Provider action 內 
 *  let someAction = (actions.someAction).bind(this)
 *  someActions();
 * 
 * (為避免找不到this，不可使用Arrow function)
 */

export default {
  setUser : function(value){ this.setState({user: value})}
}

