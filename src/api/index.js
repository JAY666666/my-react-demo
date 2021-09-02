import $https from "../utils/request"
export function login(data) {
   return $https({
       url: '/login',
       method: "post",
       data
   })
}