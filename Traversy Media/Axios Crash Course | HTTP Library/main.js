function getData() {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/todos?_limit=5',
  //     params: {
  //       _limit: 5,
  //         },
  //     //传递参数,相当于url=https://jsonplaceholder.typicode.com/todos?_limit=5
  //   })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  //写法2
  axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
