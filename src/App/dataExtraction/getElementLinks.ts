type GetElementLinks = (selectors: string) => {
  link: string
  text: string
}[]

export const getElementLinks: GetElementLinks = (selectors) => {
  return Array.from(document.querySelectorAll(selectors))
    .filter((aElement: HTMLAnchorElement) => {
      return !/time_card|javascript:void\(0\);/.test(aElement.href)
    })
    .map((aElement: HTMLAnchorElement) => {
      return {
        link: aElement.href,
        text: aElement.textContent,
      }
    })
}
