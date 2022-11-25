export default async function fetchTest() {
    return fetch('http://localhost:3000/api/test')
        .then(res => res.json())
        .then(res => res.body as string);
}