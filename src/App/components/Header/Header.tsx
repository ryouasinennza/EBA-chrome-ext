import { VFC } from 'react'
import styled from 'styled-components'

type HeaderProps = {
  name: string
  belongs: string
  memberNo: string
  headerLinks: {
    link: string
    text: string
  }[]
  sidebarLinks: {
    link: string
    text: string
  }[]
}

export const Header: VFC<HeaderProps> = ({ name, belongs, memberNo, headerLinks, sidebarLinks }) => {
  return (
    <HeaderBox>
      <UserData>
        <div>名前:{name}</div>
        <div>チーム:{belongs}</div>
        <div>アカウントNo:{memberNo}</div>
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
  border-radius: 4px;
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
`

const UserData = styled('div')`
  padding-right: 24px;
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
