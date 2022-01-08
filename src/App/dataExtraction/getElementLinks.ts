type GetElementLinks = (selectors: string) => {
  link: string
  text: string
}[]

export const getElementLinks: GetElementLinks = (selectors) => {
  return Array.from(document.querySelectorAll<HTMLAnchorElement>(selectors))
    .filter((aElement) => {
      return !/time_card|javascript:void\(0\);/.test(aElement.href)
    })
    .map((aElement) => {
      return {
        link: aElement?.href || '',
        text: aElement?.textContent || '',
      }
    })
}
