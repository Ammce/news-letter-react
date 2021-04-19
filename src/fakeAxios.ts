class Axios {
  get(url: string): Promise<any> {
    return new Promise((resolve) => {
      resolve([
        {
          id: '1',
          name: 'Amel',
          email: 'amcenp@gmail.com',
          recieveNewsLeters: true,
          showTargetedAds: true,
          visitStatistics: true,
        },
        {
          id: '2',
          name: 'Mark',
          email: 'mark@gmail.com',
          recieveNewsLeters: false,
          showTargetedAds: true,
          visitStatistics: false,
        },
      ]);
    });
  }
  post(url: string, data: any): Promise<any> {
    return new Promise((resolve) => {
      resolve(data);
    });
  }
}
const axios = new Axios();
export default axios;
