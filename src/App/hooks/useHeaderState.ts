import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getElementLinks, getUserData } from '../dataExtraction'

type HeaderState = {
  headerLinks: {
    text: string
    link: string
  }[]
  sidebarLinks: {
    text: string
    link: string
  }[]
  user: {
    name: string
    belongs: string
    uniqueId: string
    memberNo: string
  }
}

type UseHeaderState = () => [HeaderState, Dispatch<SetStateAction<HeaderState>>]

export const useHeaderState: UseHeaderState = () => {
  const [headerState, setHeaderState] = useState<HeaderState>({
    headerLinks: [],
    sidebarLinks: [],
    user: {
      name: '',
      belongs: '',
      uniqueId: '',
      memberNo: '',
    },
  })
  useEffect(() => {
    setHeaderState({
      headerLinks: getElementLinks('header a'),
      sidebarLinks: getElementLinks('.sidebar-menu a'),
      user: getUserData(),
    })
  }, [])

  return [headerState, setHeaderState]
}
