import clientAPI from "../CommonAPI/clientAPI";

export async function uploadReact(input: any) {
    return clientAPI.post("/api/react/upload", input, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
        .catch(e => console.log(e));
}