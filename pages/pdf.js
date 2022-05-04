import React from 'react'
import { useRecoilState } from 'recoil'
import {ConvertToPdf} from '../components'
import { userStateValue } from '../Store/State'



const pdf = () => {
  const [userState, setUserState] = useRecoilState(userStateValue)
  console.log(userState)

  return (
    <div>
        <ConvertToPdf />
    </div>
  )
}

export default pdf