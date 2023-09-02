import {api} from "../service/api";

export const getPosts = async () => {
  const {data} = await api.get("/posts?select=*");
  if(data){
    return data;
  }
  return "testes";
};

//parei em 4:28 no video "como consumir a API"