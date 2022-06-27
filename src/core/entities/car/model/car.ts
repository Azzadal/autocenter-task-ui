export interface ICar {
  id: number;
  mark_id: number;
  model_id: number;
  color: string;
}

interface ICarInfo {
  mark: Mark;
  model: Model;
  color: string;
}

type Model = { name: string };
type Mark = { name: string };

type ICarMutate = ICarInfo;
export type ICarResponse = ICarMutate & { id: number };
export type ICarRequest = ICarMutate;
