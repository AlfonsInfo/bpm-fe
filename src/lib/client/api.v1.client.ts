// deprecated code
// import axios, { AxiosRequestConfig } from 'axios'
// // import Cookies from 'js-cookie'
// // import { ACCESS_TOKEN_KEY } from 'src/constants/constant'

// type requestType =
//   | 'get'
//   | 'post'
//   | 'delete'
//   | 'postFormData'
//   | 'postWithoutToken'
//   | 'postFormDataWithoutToken';

// export const backendBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// export const api = async (
//   endpoint: string,
//   data: any = {},
//   type: requestType,
//   configs?: AxiosRequestConfig
// ) => {
// //   const token = "Cookies.get(ACCESS_TOKEN_KEY)";

//   const headers: Record<string, string> = {}

// //   if (!type.includes('WithoutToken') && token) {
// //     headers['Authorization'] = `Bearer ${token}`
// //   }

//   headers['Content-Type'] = type.includes('FormData') ? 'multipart/form-data' : 'application/json'

//   try {
//     let res

//     const url = endpoint

//     switch (type) {
//       case 'get':
//         res = await axios.get(url, {
//           headers,
//           params: data,
//           ...configs,
//         })
//         break
//       case 'post':
//       case 'postWithoutToken':
//       case 'postFormData':
//       case 'postFormDataWithoutToken':
//         res = await axios({
//           method: 'post',
//           url,
//           data,
//           headers,
//           ...configs,
//         })
//         break
//       case 'delete':
//         res = await axios.delete(url, {
//           headers,
//           data,
//           ...configs,
//         })
//         break
//       default:
//         throw new Error('Unsupported request type')
//     }

//     return res.data
//   } catch (error) {
//     console.log(error)
//     // Bisa custom error handler atau rethrow
//     throw error
//   }
// }
