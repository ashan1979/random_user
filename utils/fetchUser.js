const URL = 'https://randomuser.me/api/';

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //destructure
    
}