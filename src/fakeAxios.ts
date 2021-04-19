class Axios {
  get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          name: 'Amel',
          email: 'amcenp@gmail.com',
          recieveNewsLeters: 'Yes',
          showTargetedAds: 'Yes',
          visitStatistics: 'Yes',
        },
        {
          id: '2',
          name: 'Mark',
          email: 'mark@gmail.com',
          recieveNewsLeters: 'No',
          showTargetedAds: 'Yes',
          visitStatistics: 'No',
        },
      ]);
    });
  }
  post(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
const axios = new Axios();
export default axios;
