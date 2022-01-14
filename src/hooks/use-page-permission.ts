export const usePagePermission = (
  propName: string,
  way: string,
  perssions: string[]
) => {
  const newPerssion = `system:${propName}:${way}`
  return !!perssions.find((item) => item === newPerssion)
}
