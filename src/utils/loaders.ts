export type ProductLoaderType = {
  id: string
}

export async function productLoader({
  params
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}): Promise<ProductLoaderType> {
  return { id: params.id }
}
