// 이 API 파일을 통해서 Ajax, Axios 와 같은 백엔드 API 통신을 가능하게함 
// Axios : JSON 과 같은 파일을 바꿔주는? Library 임 
// Ajax : 통신 기법으로 새로고침 하지 않고 백엔드 API 접근 
import axios from "axios"

// 기존 API HOST 임 
export const API_SERVER_HOST = 'http://localhost:8080'

// 접두사를 써서 api/todo 직접적으로 쓸 수 있도록 prefix 사용 
const prefix = `${API_SERVER_HOST}/api/todo` 

// export로 axios 설정
export const getOne = async (tno) => { // 비동기 통신 TNO 값 전달 받으면 그에 맞게 동작 처리

  const res = await axios.get(`${prefix}/${tno}` ) // Async 쌍 await 걸고 호출 해야 되는 기능 -> 호출 

  return res.data

}

// 객체로 리스트 받아온다고 함. (페이지, 사이즈)
export const getList = async ( pageParam ) => { // pageParamas 파라미터 여러개 받을떄 객체로 받는게 편함.

  const {page,size} = pageParam // 들어온 값 저장. 

  const res = await axios.get(`${prefix}/list`, {params: {page:page,size:size }}) // 여기서 params Key가 이해가 잘 안감. ㅜㅜ 
  
  return res.data

}

// 글을 추가하는 그런 api 연결 이라 생각한다. 근데 다 받아들이는 속성은 어디에 구체적으로 명시되어 있나?
export const postAdd = async (todoObj) => {

  const res = await axios.post(`${prefix}/` , todoObj)

  return res.data
}

// 글을 삭제하는 api를 받아오는데 tno 즉 해당 번호를 삭제하는 그런 데이터를 받아온다.
export const deleteOne = async (tno) => {

  const res = await axios.delete(`${prefix}/${tno}` )

  return res.data

}

// getOne / getList / putOne 흠.. 무슨 api와 관련있는지 더 살펴봐야 알 듯 하다.
export const putOne = async (todo) => {

  const res = await axios.put(`${prefix}/${todo.tno}`, todo)

  return res.data
}
