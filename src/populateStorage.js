export default function populateStorage(data) {
    localStorage.clear();
    data.forEach(element => {
        localStorage.setItem(element.name, JSON.stringify(element))
    }); 
}