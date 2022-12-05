export async function getData(callBack, url = '/api/users.json') {
  try {
    // let url = 'https://dummyjson.com/users/';
    // url = '/api/users.json';
    const resp = await fetch(url);
    const dataInJs = await resp.json();

    //
    // console.log('dataInJs ===', dataInJs.users);
    // set state
    // kai dataInJs === {users: Array(30), total: 100, skip: 0, limit: 30}
    if (dataInJs.users) callBack(dataInJs.users);
    // kai dataInJs === {id, firstName:, lastName: .....}
    if (dataInJs.firstName) callBack(dataInJs);

    // return dataInJs.users
  } catch (error) {
    console.warn('klaida getData', error);
  }
}
