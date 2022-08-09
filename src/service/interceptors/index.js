import axios from "axios";
import Cookies from "js-cookie";
import router from "../../router/index";



// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const readToken =  Cookies.get('session')
    const token = readToken;
    if (token) {
      // eslint-disable-next-line no-param-reassign
      // let cobatoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTUyY2U5MTYyY2RiODEzZmUxOWM0MzIiLCJqdGkiOiIwMzE0OTdhOWUwMWYwZGY0NjVjZWI4Y2Y2YjJiMDI2ZDNjZTg3MjRjYmE4Y2QwNDk0NTVlMmFjN2ZiNjE2YTUxMzdiNTc2OTE5ODU3MWU3ZCIsImlhdCI6MTYzMjg0Mzk5OSwibmJmIjoxNjMyODQzOTk5LCJleHAiOjE2NjQzNzk5OTksInN1YiI6IjYxNDQwNTM5NDYwOTJhM2JiNzBjYzRlNSIsInNjb3BlcyI6W119.XQhx2o6nmGd20597ky4G_DK6Yiiwbf6goLOWJnOiV5-yi18ChB5ziN2YnUiGZ1qAkp-tL7c2MBhN87nxcereMug8J6dzFXdpbMCGAY8hv5bnvlhYShi5rpmjF_enD9CZizTGLBEhTNyMZ0ihcaNPopyZgBdzH29DIxDt6CegOOkXDLXmPO4Qd36eR8TiE-YPgAQsv0gyfIwfKMYZOb8wW6nP5QMW26NXQRYwYVz8bSQM_dC1Et3fj6_QP2IGdFS6d1IeMbtbteaHAHS1XQdwjokVVS7WIQuERFjhmDMDDYNaIQGP44zSBwtMmL8Z68-hJfg7sj58R73__4w8hUoL-cyezANsoWEWoRHqritr4WfmWrU5daXPMcp0TyvL3aGpBkoTRubO9oOJl9SfkxvmxWwOGe7FsPEBZN_7c4iIy8dVr0Qad9pOUGDM1aCLI4l-PkRPfR7UYjnh56Dv0m1EulRkxRdi_LH_UhizjcZga8hZIF0_FW-0deUS8coX8Uqic6C90JqVvXAmAWVE_TVg7k6arx_IKYQr3dl3JbVgq8Dnc66SakoaPWFuqp1l9yiNJl4QoSBYq8uhrrqac3K2oURL03xvWOjr9uMzXeR6zhxlHhi4z3Q8zoP_Edn2cul9Hw3Uuld03oiQQtK4hMXJV3mroqR3VLC0HHpwgVZ9Zcg"
      config.headers['Authorization'] = readToken;
    }
    if (!config.headers['Content-Type'] || config.headers['Content-Type'] === '') {
      config.headers['Content-Type'] = 'application/json';
    //   config.headers['Accept'] = '*/*';
    //   config.headers['Connection'] = 'keep-alive';


    }
    // config.headers['Content-Type'] = config.headers['Content-Type']
    // config.headers['Access-Control-Allow-Origin'] = "*"


    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    if(error.response.status === 401){
        Cookies.remove('session')
        router.push("/login")
       
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });