import { VFC } from 'react'
import styled from 'styled-components'

export type HeaderProps = {
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

export const Header: VFC<HeaderProps> = ({ user, headerLinks, sidebarLinks }) => {
  return (
    <HeaderBox>
      <UserData>
        <div>名前:{user.name}</div>
        <div>チーム:{user.belongs}</div>
        <div>アカウントNo:{user.memberNo}</div>
      </UserData>
      <UlWrap>
        <News>
          {headerLinks.map(({ link, text }) => {
            return (
              <li>
                <NewsLink href={link}>{text}</NewsLink>
              </li>
            )
          })}
        </News>
      </UlWrap>
      <UlWrap>
        <News>
          {sidebarLinks.map(({ link, text }) => {
            return (
              <li>
                <NewsLink href={link}>{text}</NewsLink>
              </li>
            )
          })}
        </News>
      </UlWrap>
    </HeaderBox>
  )
}

const HeaderBox = styled('header')`
  background-color: ${({ theme }) => theme.primaryBGColor};
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 8px;
  margin: 8px;
`

const UserData = styled('div')`
  padding-right: 24px;
  color: ${({ theme }) => theme.textColor};
`

const UlWrap = styled('div')`
  height: 100px;
  max-height: 100px;
  overflow-x: auto;
  padding-right: 24px;
`
const News = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 12px 0 0;
  margin: 0;

  li {
    margin-bottom: 4px;
  }
`
const NewsLink = styled('a')`
  text-decoration: none;
`
