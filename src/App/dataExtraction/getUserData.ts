type GetUserData = () => {
  belongs: string
  memberNo: string
  name: string
  uniqueId: string
}

export const getUserData: GetUserData = () => {
  const info = document.querySelectorAll('.pull-left.info p')
  const uniqueIdInput = document.querySelector<HTMLInputElement>('input[name="unique_id"]')
  const memberNoInput = document.querySelector<HTMLInputElement>('input[name="member_no"]')
  return {
    belongs: info[1]?.textContent || '',
    memberNo: memberNoInput?.value || '',
    name: info[0]?.textContent || '',
    uniqueId: uniqueIdInput?.value || '',
  }
}
