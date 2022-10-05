export default async (...args) => {
  const res = await fetch(...args)
  console.log(res)
  return res.json()
}