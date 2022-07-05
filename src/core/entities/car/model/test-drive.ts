export interface ITestDriveRequest {
  car_id?: number;
  connection?: string;
  testDriveDate?: Date;
}

export type ICarSharingRequest = ITestDriveRequest;
