import postApi from "./api/postApi";
import studentsApi from "./api/studentsApi";

async function main() {
  const response = await studentsApi.getAll()
  console.log(response)
}

main()