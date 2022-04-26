'use strict'

class User {
  constructor(username, password, email) {
    this.username = username
    this.password = password
    this.email = email
  }
  static intro() {
    console.log(
      'static的意思是你不需要(也不能)先实例化一个对象才能使用该方法。',
    )
  }
  sayName() {
    console.log('My Name is' + this.username)
  }
}
User.intro()
//User.sayName() 不会有效果
let ava = new User('ava', '123', '44@qq.com')
//ava.intro()
ava.sayName()
class Member extends User {
  constructor(username, password, email, memberPackage) {
    super(username, password, email)
    this.package = memberPackage
  }
  getPackage() {
    console.log(this.username + 'have' + this.package)
  }
}
let mike = new Member('mike', '123', '44@qq.com', 'standard')
mike.getPackage()
mike.sayName()
