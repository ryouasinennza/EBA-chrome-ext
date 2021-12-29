type GetUserData = () => {
  name: string
  belongs: string
  uniqueId: string
  memberNo: string
}

export const getUserData: GetUserData = () => {
  const info = document.querySelectorAll('.pull-left.info p')
  const uniqueIdInput: HTMLInputElement = document.querySelector('input[name="unique_id"]')
  const memberNoInput: HTMLInputElement = document.querySelector('input[name="member_no"]')
  return {
    name: info[0].textContent,
    belongs: info[1].textContent,
    uniqueId: uniqueIdInput?.value,
    memberNo: memberNoInput?.value,
  }
}
