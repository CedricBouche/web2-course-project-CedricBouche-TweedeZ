window.onload = () => {
    async function runTest(){
        const resp = await fetch('http://localhost:3000/api/notSeen');
        const data = await resp.json();
        console.log(data);
    }

    runTest();
}