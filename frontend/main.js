window.addEventListener('DOMContentLoaded', event => {
    getVisitCount();
})

const functionApiURL = 'https://getresumecountfun.azurewebsites.net/api/GetResumeCounter?code=1jcGXbEN22LyD-xzmBohX_fy6fG2kKcpYsbQVHfwhMNZAzFuFfFdCA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count =30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}