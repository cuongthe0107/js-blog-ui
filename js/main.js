import axiosClinet from "./api/axiosClient";

async function main() {
  const response = await axiosClinet.get('/posts')
  console.log(response)
}

main()