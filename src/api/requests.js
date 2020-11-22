const baseUrl = 'https://openapps.herokuapp.com';

export const getAppsReq = async () => {
    let respData = [];
    await fetch(`${baseUrl}/apps/list`, {method: 'GET'})
        .then(resp => resp.json())
        .then(data => respData = data)
    return respData;
}