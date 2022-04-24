const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post 2', body: 'this is post 2' },
]
//定义这个方法
function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000) //延迟1000ms后执行这个方法
}
function createPost(post, callback) {
  //在push新数据完成之后，立刻调用callback
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}
/**
 * 调用这2个方法
 * getPosts()
 **createPost({ title: 'post 3', body: 'this is post 3' })
   当createPost的方法比getPosts花的时间久我们就看不到新的post了
 */

createPost({ title: 'post 3', body: 'this is post 3' }, getPosts) //处理异步
/*
当createPost的方法比getPosts花的时间久我们就看不到新的post了
*/
