import axios from "axios";

const api = axios.create({
  baseURL: "http://3.35.173.0:3000/api",
});

//방 목록 갖고오기
// api.get("room").then((res) => console.log(res));

// 방 등록하기방등록이 안되네 왜 안되지....
// const room = {
//   name: "디럭스룸22",
//   image: "https://sbti.kosmes.or.kr/images/content/img_SHSTI040M0_01_02.jpg",
//   price: 3000002220,
// };
// api.post("room", { ...room });

//방 하나만 갖고오기
// const roomId = "60e9448c4e03c013b8c05810";
// api.get(`room/${roomId}`).then((res) => console.log(res));

//방 타입 갖고오기 방 다 갖고오는 것과 똑같음
// api.get(`room/${roomId}`).then((res) => console.log(res));

// 예약하기
// const book = {
//   adult: 1,
//   kid: 1,
//   roomId: "60e9448c4e03c013b8c05810",
//   startDate: "Sat Jul 10 2021 09:32:11 GMT+0900 (Korean Standard Time)",
//   endDate: "Mon Jul 12 2021 09:32:11 GMT+0900 (Korean Standard Time)",
// };
// api.post("book", { ...book }).then((res) => console.log(res));

//예약확인하기
// const bookId = "60e9892a4e03c013b8c0583f";
// api.get(`book/${bookId}`).then((res) => console.log(res));

//예약 전체 확인하기
// api.get("book").then((res) => console.log(res));

//예약 수정하기
// const bookId = "60e9892a4e03c013b8c0583f";
// const editBook = {
//   adult: 1,
//   kid: 1,
//   startDate: "Sat Jul 10 2021 09:32:11 GMT+0900 (Korean Standard Time)",
//   endDate: "Mon Jul 12 2021 09:32:11 GMT+0900 (Korean Standard Time)",
// };
// api.put(`book/${bookId}`, { ...editBook }).then((res) => console.log(res));

//예약취소하기
// const bookId = "60e9892a4e03c013b8c0583f";
// api.delete(`book/${bookId}`).then((res) => console.log(res));

//리뷰 전부 갖고오기
// api.get("review").then((res) => console.log(res));

//리뷰 하나 갖고오기
// const revidwId = "60e9442a4e03c013b8c05806";
// api.get(`review/${revidwId}`).then((res) => console.log(res));

//리뷰 하나 삭제하기
// const revidwId = "60e9442a4e03c013b8c05806";
// api.delete(`review/${revidwId}`).then((res) => console.log(res));

//리뷰 하나 수정하기
// const reviewId = "60e9444f4e03c013b8c05809";
// const editReview = {
//   content: "정말 싫어111요!!!!!!",
//   date: "Sat Jul 10 2021 11:45:31 GMT+0000 (Coordinated Universal Time)",
//   title: "싫어요",
// };
// api.delete(`review/${reviewId}`).then((res) => console.log(res));

//리뷰 작성하기
// const newReview = {
//   content: "정말 싫어111요!!!!!!",
//   date: "Sat Jul 10 2021 11:45:31 GMT+0000 (Coordinated Universal Time)",
//   title: "싫어요",
// };
// api.post("review", { ...newReview }).then((res) => console.log(res));

//회원가입하기
// const newUser = {
//   nickname: "kbskbs",
//   email: "kbs@naver.com",
//   password: "abc1234",
//   confirmPassword: "abc1234",
// };
// api.post("user", { ...newUser }).then((res) => console.log(res));

//로그인하기
// const account = {
//   email: "kbs@naver.com",
//   password: "abc1234",
// };
// api.post("user/auth", { ...account }).then((res) => console.log(res));
