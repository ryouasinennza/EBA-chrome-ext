import { VFC } from 'react'
import styled from 'styled-components'

export type HeaderProps = {
  headerLinks: {
    link: string
    text: string
  }[]
  sidebarLinks: {
    link: string
    text: string
  }[]
  user: {
    belongs: string
    memberNo: string
    name: string
    uniqueId: string
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
  display: flex;
  padding: 8px;
  margin: 8px;
  background-color: ${({ theme }) => theme.primaryBGColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`

const UserData = styled('div')`
  padding-right: 24px;
  color: ${({ theme }) => theme.textColor};
`

const UlWrap = styled('div')`
  height: 100px;
  max-height: 100px;
  padding-right: 24px;
  overflow-x: auto;
`
const News = styled('ul')`
  display: flex;
  flex-direction: column;
  padding: 0 12px 0 0;
  margin: 0;
  list-style: none;

  li {
    margin-bottom: 4px;
  }
`
const NewsLink = styled('a')`
  text-decoration: none;
`
