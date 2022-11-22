//Axios Global:每次的请求的config属性中就会有这个token
axios.defaults.headers.common['X-Auth-token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

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
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 5,
    })
    .then((res) => {
      console.log('get', res)
    })
    .catch((err) => {
      console.log('err:', err) //5ms之后还没出结果就会得到message: 'timeout of 5ms exceeded
    })
}
//post data
function postData() {
  //   axios({
  //     method: 'post',
  //     url: 'https://jsonplaceholder.typicode.com/todos',
  //     data: {
  //       title: 'Ava Task',
  //       completed: false,
  //     },
  //     //     //传递参数,相当于url=https://jsonplaceholder.typicode.com/todos?_limit=5
  //   })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //写法2
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Ava Task',
      completed: false,
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
//put/patch request
function updateDataByPut() {
  console.log(
    '*******使用put，它会替换掉整个object,没有的属性也不会显示********',
  )
  axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      //url里面要把id写上
      title: 'Update Ava Task 1',
      completed: true,
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
function updateDataByPatch() {
  console.log('*******使用patch，它不会替换掉整个object********')
  axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
      //url里面要把id写上
      title: 'Update Ava Task 1',
      completed: true,
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
function removeData() {
  console.log('*******使用patch，它不会替换掉整个object********')
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Update Ava Task 1',
      completed: true,
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
//simultaneous request
function simGetData() {
  //写法2
  axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
    ])
    .then(
      axios.spread((todos, posts) => {
        console.log('🚀  todos, posts', todos, posts)
      }),
    )
    /*
      (res) => {
      console.log('使用all,会等到所有的promise都得到了之后才返回给你结果')
      console.log('res[0]', res[0])
      console.log('res[1]', res[1])
      }
    */
    ()
    .catch((err) => {
      console.log(err)
    })
}
//intercept the request&response
axios.interceptors.request.use(
  (config) => {
    console.log(config)
    console.log(`${config.method} request to ${config.url} at ${new Date()}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

//custom header
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'someToken',
    },
  }
  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New Ava Task',
        completed: false,
      },
      config,
    )
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

//Transform request and response
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'hello world',
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase()
      return data
    }),
  }
  axios(options).then((res) => console.log(res))
}
function errorHandle() {
  axios
    .get('https://jsonplaceholder.typicode.com/todo12313', {
      validateStatus: function (status) {
        return status < 500 //如果status>500或者=500，都会被reject。会进入then语句，但是不会进入catch error语句。也就是说：只要status是<500都不算错误，都不会被reject
      },
    })
    .then((res) => {
      console.log('res:', res)
    })
    .catch((err) => {
      if (err.request) {
        //status不是200就会进入这个判断条件
        console.log('🚀  err.request', err.request)
      }
      if (err.response) {
        //request 已经发送，但是没有返回response
        console.log('🚀  err.response', err.response)
        console.log('🚀  err.response', err.response.status)
        console.log('🚀  err.response', err.response.data)
        console.log('🚀  err.response', err.response.headers)
      }
    })
}
//Cancel Token
function cancelToken() {
  const source = axios.CancelToken.source() //axios.CancelToken,CancelToken cancel要大写！！
  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token,
    })
    .then((res) => {
      console.log(res)
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log('request cancel!!', thrown.message)
      }
    })
  if (true) {
    //判断条件
    source.cancel('request canceled----QwQ')
    console.log('直接就没有response回来了')
  }
}
//Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', //会出现在config的url里面
})
axiosInstance.get('/comments').then((res) => {
  console.log(`get('/comments')=`, res)
})
