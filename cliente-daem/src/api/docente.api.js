import axios from "axios";

const docenteApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/docente/",
});
export const getDocente = (id) => docenteApi.get(`/${id}/`);
export const getAllDocentes = () => docenteApi.get("/");
export const createDocentes = (docente) =>
  docenteApi.post("/", docente);

export const deleteDocente = (id) => docenteApi.delete(`/${id}`);
export const updateDocente = (id, docente) => docenteApi.put(`/${id}/`, docente);