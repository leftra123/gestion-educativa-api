import axios from "axios";

const establecimientoApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/establecimiento",
});
export const getEstablecimiento = (id) => establecimientoApi.get(`/${id}/`);
export const deleteEstablecimiento = (id) =>
  establecimientoApi.delete(`/${id}/`);
//export const updateEstablecimiento = (id, establecimiento) => establecimientoApi.put(`/${id}/`, establecimiento);
export const updateEstablecimiento = (id, establecimiento) =>
  establecimientoApi.patch(`/${id}/`, establecimiento);
export const getAllEstablecimientos = () => establecimientoApi.get("/");
export const createEstablecimientos = (establecimiento) =>
  establecimientoApi.post("/", establecimiento);
